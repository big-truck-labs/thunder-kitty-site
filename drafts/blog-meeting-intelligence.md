---
status: draft
target: /learn/meeting-intelligence/
length: ~2000 words
notes: |
  Audience: technical developers, indie Mac devs, HN, people building on-device ML.
  Not for publication yet.
---

# Four Models, Zero API Calls: Building Real-Time Meeting Intelligence on Apple Silicon

In the cloud, running four AI models on every sentence of a meeting would cost dollars per meeting and add hundreds of milliseconds of latency per inference. On Apple Silicon, it's free after the app ships.

That sentence is the whole thesis. Everything else is how we got there — and what it took to convert a 109-million-parameter sentence transformer to CoreML without getting garbage embeddings.

---

## What We Were Trying to Build

Two signals converged.

An early Thunder Kitty user named Darren described a workflow where he'd jump into chat mid-meeting and type "what is a cron job" — he wanted a live jargon buster that surfaces definitions of unfamiliar terms as they come up. Separately, we'd had a long-standing vision for a live meeting timeline: a vertical visualization that grows as the meeting progresses, showing topic flow, key moments, and recurring themes in real time.

The common thread: the meeting is happening _now_, and the intelligence needs to happen _now too_ — not as a post-meeting batch job.

Cloud inference makes this expensive. Processing every sentence as it arrives, maintaining running state, running multiple models simultaneously — that's dollars per meeting in API calls. On Apple Silicon, it's zero. The Neural Engine and GPU are dedicated hardware. They don't compete with each other. You can run an embedding model on the Neural Engine, Apple Foundation Models on the Neural Engine (time-shared), and a large language model on the GPU simultaneously, for free, after the initial model load.

This is the real story of Apple Silicon for AI applications. Not that on-device models are almost as good as cloud models. It's that the economic model is completely different — and that changes what you can build.

---

## The Architecture: Four Layers

Different tasks need different models. Here's what runs during and after a meeting:

| Layer                            | What it does                                         | Latency     | Cost |
| -------------------------------- | ---------------------------------------------------- | ----------- | ---- |
| Apple Natural Language framework | Tokenization, named entity recognition, sentiment    | <1ms        | 0    |
| all-mpnet-base-v2 via CoreML     | Topic segmentation (which sentences belong together) | 5–20ms      | 0    |
| Apple Foundation Models          | Topic labeling, utterance classification             | 200ms–2s    | 0    |
| Qwen 3.5 9B via MLX              | Post-meeting summaries                               | 25–35 tok/s | 0    |

Layers 0–2 run during the meeting. Layer 3 runs after. The Neural Engine handles layers 1 and 2; the GPU handles layer 3. No resource contention.

The hard part was layer 1 — getting an mpnet embedding model running on the Neural Engine via CoreML. What should have been straightforward turned into eight attempts and a deep dive into a longstanding coremltools bug.

---

## Topic Segmentation: Why DeepTiling

Before the CoreML war story, it's worth explaining what the embedding model is actually doing.

Topic segmentation — deciding where in a transcript one topic ends and another begins — is a solved problem from 1997. TextTiling computed word overlap between sliding windows and marked valleys as boundaries. DeepTiling is the same algorithm with neural embeddings instead of word overlap. Swap the similarity function; keep everything else.

For each transcript line, compute a 768-dimensional embedding vector. For each line `i`, compute the centroid of the preceding 8 lines and compare similarity. High similarity means the conversation is still on-topic. A valley (local minimum below threshold 0.12) means a topic shift.

Simple. Parallelizable. Trivially convertible to a streaming algorithm — which matters for real-time use.

We tested five embedding approaches: all-mpnet-base-v2, all-MiniLM-L6-v2, nomic-embed-text-v1.5, Apple's NLEmbedding, and Apple's NLContextualEmbedding. mpnet won decisively — sharper valleys, better separation between within-topic and cross-topic similarity, more reliable boundary detection. The algorithm was the same across all five. The embedding quality drove the quality gap.

Which is why getting mpnet running on CoreML properly was non-negotiable.

---

## The CoreML Conversion: Eight Attempts

This is the part other developers will want to read carefully, because the bug is silent and the error message is misleading.

### The goal

Convert `sentence-transformers/all-mpnet-base-v2` to a CoreML `.mlpackage`. Accept `input_ids` and `attention_mask`. Output `token_embeddings`. Mean pool and L2 normalize in Swift. Run on the Neural Engine at <20ms per sentence.

### Attempt 1: The obvious approach

```python
traced = torch.jit.trace(wrapper, (input_ids, attention_mask))
mlmodel = ct.convert(traced, ...)
```

Conversion succeeded. Cosine similarity between CoreML output and sentence-transformers: **0.17**. Essentially random.

coremltools had emitted two warnings during conversion:

```
Core ML embedding (gather) layer does not support any inputs besides
the weights and indices. Those given will be ignored.
```

What this means: coremltools silently drops the `position_ids` from BERT/MPNet embedding layers. Without position information, the transformer produces meaningless output. This is a [known bug](https://github.com/apple/coremltools/issues/1428) with no upstream fix as of version 9.0. The warning appears whether or not it matters — you can't tell from the warning alone whether your model is affected. The only way to know is to compare output against a reference.

### Attempts 2–6: The graveyard

- **Include mean pooling in the model** — coremltools crashes on dynamic integer operations in the pooling code
- **ONNX as intermediate format** — coremltools 8+ dropped ONNX support entirely; discovered that `onnx-coreml` was always a separate deprecated package
- **coremltools 7.x with ONNX** — same problem, plus Python 3.11 and numpy < 2.0 version pinning required
- **torch.export (ExportedProgram)** — incompatible format versions between torch 2.7 and coremltools 8.3; coremltools 9.0 compatible but still produces garbage embeddings
- **Pre-compute position embeddings as constants** — eliminates one of the two gather warnings, cosine similarity still 0.17

By attempt 6 we'd eliminated every obvious culprit and the output was still garbage.

### Attempt 7: The breakthrough

The key realization: MPNet doesn't just use position embeddings in the embedding layer. It also uses **relative position bias** in every attention layer — another embedding lookup that computes differently from standard BERT. The entire computation chain involving position information was broken, not just the embedding layer.

The solution: **pre-compute everything that touches position information** and bypass the model's own wiring entirely.

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

Every boundary in the segmentation output matched the Python baseline exactly.

### What to take from this

If you're converting a transformer model to CoreML and getting low cosine similarity: the `gather` layer is silently dropping position information. The fix is model-specific — you need to understand your architecture's position encoding before you can pre-compute it correctly. For MPNet, there were two gather ops to fix (position embeddings + relative attention bias). BERT would need different treatment. DeBERTa is its own special hell.

Validate against a known-good reference before trusting anything. The conversion warnings are not reliable signal.

---

## Real-Time Agenda Tracking

With segmentation working, the next problem was matching live transcript content to pre-meeting agenda items as the meeting progresses. This is what gives the "Agenda" feature its live status updates — items moving from pending to in-progress to discussed in real time.

The naive approach fails immediately: when a user reads through the agenda at the start of the meeting, every item gets mentioned and a naive tracker marks them all discussed. Real discussion hasn't happened yet.

The live tracker uses five gates to prevent false positives, applied in order:

1. **Similarity threshold** — the line must score ≥ 0.25 against the agenda item's embedding
2. **Distinctiveness** — the best-matching item must score 0.05 higher than the second-best; generic lines that match everything match nothing
3. **Minimum matches** — two distinctive matches required before `inProgress`
4. **Temporal spread** — first and last matching sentences must be ≥ 60 seconds apart to confirm `discussed`; agenda reading takes ~30 seconds, real discussion spans minutes
5. **Speaker diversity** — two distinct speakers required; agenda reading is one voice, discussion is back-and-forth

On a 51-minute, 721-line test transcript with six agenda items: 6/6 discussed, no simultaneous multi-item triggers, each item firing independently with distinct relevant evidence.

The live tracker provides visual feedback during the meeting. The authoritative determination — with full context, LLM reasoning — comes from the post-meeting pass. The two-phase design matches a finding from the MeetMap research (ACM CSCW 2025): staged output is preferred. Real-time feedback needs a buffer zone. Available, not intrusive.

---

## What's Next

The prototype validates the core technical approach. Four models running simultaneously on Apple Silicon, zero API calls, zero per-meeting cost. The segmenter and agenda tracker are both `Sendable` state machines designed to drop into a real-time pipeline.

What's left:

- **Latency benchmarking across chips** — M1 through M4, validating the <20ms target across the install base
- **Integration with the live transcription pipeline** — connecting to Thunder Kitty's audio processing thread
- **Timeline UI** — the data layer is ready; now it's a UI/UX problem
- **Jargon detection** — the ParseJargon research showed personalized jargon support significantly improves comprehension, but non-personalized support actually decreases engagement by overwhelming users with definitions they don't need. This needs a user knowledge model first.

The deeper point: this is only possible because Apple Silicon made the economics work. Four models running concurrently, no network, no per-call cost, no data leaving the device. In the cloud this would be a feature you'd think twice about shipping. On-device, it's just a feature.

---

_Thunder Kitty is a local-first meeting notepad for macOS. Nothing leaves your Mac._
_[thunderkitty.app](https://thunderkitty.app)_
