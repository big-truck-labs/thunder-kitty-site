---
title: "Three Models, Zero API Calls: Real-Time Meeting Intelligence on Apple Silicon"
date: 2026-06-14
description: "Thunder Kitty's Labs features run topic segmentation and agenda tracking live, entirely on-device — and getting a sentence-embedding model onto the Neural Engine took seven attempts and a fight with a silent CoreML bug."
---

Thunder Kitty 1.9.0 adds a Labs section in Settings with two experimental features: a **Live Topic Timeline** that segments a meeting into topics as you record, and **Live Agenda Tracking** that marks agenda items as they get covered. Both run in real time, entirely on your Mac.

Running them means running three models at once. The interesting part wasn't the idea — it was getting one of those models, a sentence-embedding model, onto the Neural Engine. That took seven attempts and a fight with a silent CoreML bug that produces plausible-looking garbage and no error.

This is how the features work and what broke along the way.

---

## Where this came from

Two ideas converged.

An early user wanted a live jargon buster — not a search box (he could already ask Google or Claude), but something that would notice when a term was probably unfamiliar to him and surface the definition on its own, in real time. Separately, we'd wanted a live meeting timeline for a while: a vertical view that grows as the meeting goes, showing topic flow and recurring themes as they happen.

The common thread is timing. The meeting is happening now, so the intelligence has to happen now — not as a batch job after everyone hangs up.

The timeline and agenda tracking shipped in 1.9.0; the jargon buster is still ahead of us. All of it runs on-device, with no network and no per-call cost — [the same promise as the rest of the app](/local-first/). Turn on airplane mode and it still works.

---

## The architecture: three models

Different tasks need different models. Here's what runs during and after a meeting:

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>What it does</th>
      <th>Latency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>all-mpnet-base-v2 via CoreML</td>
      <td>Topic segmentation (which sentences belong together)</td>
      <td>5–20ms</td>
    </tr>
    <tr>
      <td>Apple Foundation Models</td>
      <td>Topic labeling, utterance classification</td>
      <td>200ms–2s</td>
    </tr>
    <tr>
      <td>Qwen 3.5 4B / 9B via MLX (downloaded once)</td>
      <td>Post-meeting summaries</td>
      <td>25–35 tok/s</td>
    </tr>
  </tbody>
</table>

Models 1–2 run live during the meeting; model 3 runs after. The Neural Engine handles the embedding and labeling work, the GPU handles the summary model, and they don't fight each other for resources.

The hard part was model 1: getting the mpnet embedding model running on the Neural Engine via CoreML. What should have been routine turned into seven attempts.

---

## Topic segmentation: why DeepTiling

Before the CoreML story, here's what the embedding model is actually doing.

Topic segmentation — deciding where one topic ends and the next begins — is an old problem. TextTiling solved a version of it in 1997 by computing word overlap between sliding windows and marking the valleys as boundaries. DeepTiling is the same algorithm with neural embeddings in place of word overlap. Swap the similarity function; keep everything else.

For each transcript line we compute a 768-dimensional embedding. For line `i`, we take the centroid of the preceding 8 lines and compare similarity. High similarity means we're still on topic; a valley (a local minimum below a 0.12 threshold) means the topic shifted. It's simple, parallelizable, and converts cleanly to a streaming version — which is what makes the live timeline possible.

We tested five embedding approaches: all-mpnet-base-v2, all-MiniLM-L6-v2, nomic-embed-text-v1.5, Apple's NLEmbedding, and Apple's NLContextualEmbedding. The algorithm was identical across all five; only the embeddings changed. mpnet won clearly — sharper valleys, better separation between on-topic and off-topic similarity, more reliable boundaries.

Which is why getting mpnet onto CoreML properly was non-negotiable.

---

## The CoreML conversion: seven attempts

This is the part worth reading closely if you convert transformers to CoreML, because the failure is silent and the warning is misleading.

### The goal

Convert `sentence-transformers/all-mpnet-base-v2` to a CoreML `.mlpackage`. Take `input_ids` and `attention_mask`, output `token_embeddings`, then mean-pool and L2-normalize in Swift. Target: Neural Engine, under 20ms per sentence.

### Attempt 1: the obvious approach

```python
traced = torch.jit.trace(wrapper, (input_ids, attention_mask))
mlmodel = ct.convert(traced, ...)
```

Conversion succeeded. Cosine similarity between the CoreML output and sentence-transformers: **0.17**. Essentially random.

coremltools had emitted two warnings during conversion:

```
Core ML embedding (gather) layer does not support any inputs besides
the weights and indices. Those given will be ignored.
```

Translation: coremltools silently drops the `position_ids` from the MPNet embedding layer. With no position information, the transformer produces meaningless output. It's a [known bug](https://github.com/apple/coremltools/issues/1428) with no upstream fix as of coremltools 9.0, and the warning fires whether or not it actually affected your model — so you can't tell from the warning alone. The only way to know is to compare against a reference.

### Attempts 2–6: the graveyard

- **Mean pooling inside the model** — coremltools crashes on dynamic integer ops in the pooling code.
- **ONNX as an intermediate** — coremltools 8+ dropped ONNX support; `onnx-coreml` turned out to be a separate, long-deprecated package.
- **coremltools 7.x with ONNX** — same problem, plus a Python 3.11 / numpy <2.0 pinning mess.
- **torch.export (ExportedProgram)** — version-format incompatibility between torch 2.7 and coremltools 8.3; 9.0 accepts it but still produces garbage.
- **Pre-computing position embeddings as constants** — kills one of the two gather warnings; cosine similarity still 0.17.

By attempt 6 every obvious culprit was gone and the output was still garbage.

### Attempt 7: the breakthrough

The realization: MPNet doesn't only use position embeddings in the embedding layer. It also uses **relative position bias** in every attention layer — another embedding lookup, computed differently from standard BERT. The whole position-handling chain was broken, not just the embedding layer.

The fix: pre-compute everything that touches position information and bypass the model's own wiring.

```python
class MPNetCoreMLWrapper(nn.Module):
    def __init__(self, model, seq_length):
        super().__init__()
        self.encoder = model.encoder
        self.word_embeddings = model.embeddings.word_embeddings
        self.layer_norm = model.embeddings.LayerNorm

        # Pre-compute position embeddings as a constant buffer
        pos_ids = torch.arange(padding_idx + 1, padding_idx + 1 + seq_length)
        self.register_buffer("position_embeddings",
            model.embeddings.position_embeddings.weight[pos_ids].unsqueeze(0))

        # Pre-compute relative position bias as a constant buffer
        dummy = torch.zeros(1, seq_length, hidden_size)
        self.register_buffer("relative_position_bias",
            model.encoder.compute_position_bias(dummy))

    def forward(self, input_ids, attention_mask):
        word_emb = self.word_embeddings(input_ids)      # This gather works
        embeddings = word_emb + self.position_embeddings # Constant add
        embeddings = self.layer_norm(embeddings)
        # ... run encoder with pre-computed position bias
```

Result:

```
CoreML vs sentence-transformers: avg=0.999985, min=0.999974
PASS — CoreML embeddings match sentence-transformers
```

Every segmentation boundary now matched the Python baseline exactly.

### What to take from this

If you're converting a transformer to CoreML and getting low cosine similarity, the `gather` layer is probably dropping position information. The fix is architecture-specific: you have to understand how your model encodes position before you can pre-compute it. MPNet needed two gather ops handled (position embeddings plus relative attention bias). BERT would differ. DeBERTa (another transformer variant with its own position encoding scheme) is its own special hell.

And validate against a known-good reference before trusting anything. The conversion warnings aren't reliable signal.

---

## Real-time agenda tracking

With segmentation working, the second feature matches live transcript content to your pre-meeting agenda as the conversation moves, so items shift from pending to in-progress to discussed in real time.

The naive version fails immediately: when someone reads the agenda aloud at the top of the meeting, every item gets "mentioned" and a naive tracker marks them all discussed before any real discussion happens.

So the tracker uses five gates, applied in order, to avoid false positives:

1. **Similarity threshold** — the line must score ≥ 0.25 against the agenda item's embedding.
2. **Distinctiveness** — the best match must beat the second-best by 0.05; generic lines that match everything match nothing.
3. **Minimum matches** — two distinctive matches before an item goes `inProgress`.
4. **Temporal spread** — first and last matching lines must be ≥ 60 seconds apart before `discussed`; reading the agenda takes ~30 seconds, real discussion spans minutes.
5. **Speaker diversity** — two distinct speakers required; agenda reading is one voice, discussion is back-and-forth.

On a 51-minute, 721-line test transcript with six agenda items: 6/6 marked discussed, no simultaneous multi-item triggers, each item firing independently with its own relevant evidence.

The live tracker is the fast, approximate pass — visual feedback while you record. The authoritative version, with full context and LLM reasoning, comes from the post-meeting pass. Keeping the live half lightweight is deliberate: the [MeetMap research](https://dl.acm.org/doi/10.1145/3711030) (ACM CSCW 2025) found that real-time meeting AI works best when it lowers in-the-moment cognitive load and leaves the user in control, rather than demanding attention mid-conversation.

---

## Why these are in Labs

Both features shipped in 1.9.0, and both are in Labs for a reason. They work, but they're not finished.

The timeline's data layer is solid and the segmentation is accurate. The UI is still rough, and topic labels are only as good as the on-device labeling model on a given day. Agenda tracking clears the five gates well on clean transcripts, but messy audio, heavy cross-talk, or an agenda full of near-identical items will still trip it. They're opt-in because we'd rather you turn them on knowing that than have them surprise you with a sub-par experience.

---

## The short version

Three models on Apple Silicon — an mpnet embedder on the Neural Engine, Apple Foundation Models for live labeling, and a Qwen model on the GPU for post-meeting summaries — with nothing leaving the Mac and no per-call cost. The embedder fought us for seven attempts. The rest was getting the timing right.

It's in Labs because it's early. But it runs, it's local, and it works in airplane mode like everything else.
