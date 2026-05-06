module.exports = [
  {
    slug: "granola",
    name: "Granola",
    tagline: "Two different ideas about 'private'",
    intro: [
      `Granola is a genuinely impressive product. $192 million in funding, a $1.5 billion valuation, a beautiful interface, and a sprawling marketplace of AI-powered meeting templates. If you need team meeting notes flowing into your Slack by end of day, Granola is probably the right call.`,
      `Thunder Kitty is a different kind of product. Simpler. More personal. Built around one idea Granola can't offer: your audio never leaves your Mac.`,
    ],

    comparison_table: [
      {
        feature: "Transcription",
        tk: "Apple SpeechAnalyzer — on your Mac",
        them: "Deepgram + AssemblyAI (cloud)",
      },
      {
        feature: "AI summaries",
        tk: "On-device, or your own API key",
        them: "OpenAI + Anthropic (cloud)",
      },
      { feature: "Works in airplane mode", tk: "✓", them: "✗" },
      { feature: "Bot joins your call", tk: "No", them: "No" },
      {
        feature: "Speaker diarization",
        tk: "Named, with voice enrollment",
        them: "Visual only — all others merged",
      },
      {
        feature: "Your files",
        tk: "Plain .md in ~/Documents",
        them: "In Granola's database",
      },
      {
        feature: "Meeting history",
        tk: "Unlimited, forever",
        them: "30 days on free plan",
      },
      {
        feature: "Recording caps",
        tk: "None, ever",
        them: "Limited on free plan",
      },
      { feature: "Team sharing", tk: "✗", them: "✓" },
      { feature: "Calendar required", tk: "No", them: "Yes" },
      {
        feature: "Model training",
        tk: "N/A — nothing sent",
        them: "Opt-out in settings",
      },
      { feature: "Price", tk: "$10/month", them: "$14/month (Business)" },
    ],

    sections: [
      {
        id: "bot-free",
        heading: "What 'bot-free' actually means",
        body: [
          `Granola's headline claim is "bot-free AI meeting notes." That's accurate — no bot joins your call. The person on the other end doesn't see a notification. That's a meaningful distinction from tools like Otter or Fireflies.`,
          `But bot-free doesn't mean local. When you record a meeting with Granola, your audio goes to Deepgram and AssemblyAI for transcription, then to OpenAI or Anthropic for summaries. Four companies' infrastructure, four terms of service, before you read a word of your notes.`,
          `This isn't a scandal — it's just what the product does. Most Granola users are recording team standups and sales calls. The cloud pipeline is fine for that.`,
          `But for some meetings, it isn't. A therapy session. A source interview. A coaching conversation. An executive discussion you'd rather not have sitting in someone else's database. Granola wasn't designed for those cases. Thunder Kitty was.`,
          `Turn on Airplane mode. Record a meeting. Read the transcript. The app works. That's not marketing — it's a test you can run before you buy anything.`,
        ],
      },
      {
        id: "diarization",
        heading: "Who said what",
        body: [
          `Granola captures system audio as a single channel. On a two-person call, you get a visual left/right split — your bubbles and theirs, unnamed. On a call with three or more people, everyone else gets collapsed into one undifferentiated stream. Granola can't tell them apart because it isn't trying to — it's one audio channel, not separate speakers.`,
          `Thunder Kitty does actual speaker diarization. You enroll your own voice once and Thunder Kitty always knows when it's you, labeled correctly in every transcript. Everyone else is separated out — Speaker 1, Speaker 2, Speaker 3 — regardless of how many people are on the call. You can rename them within a transcript ("Speaker 1 → Mike") and that label cascades through that meeting's record.`,
          `Thunder Kitty doesn't fingerprint other people's voices across meetings. That would mean collecting biometric data about people who haven't consented to it — and that's not a line we're willing to cross. A small tradeoff for a principle we think matters.`,
          `Either way: when you open a Thunder Kitty transcript from a four-person call, you know who said what. In Granola, three of those four voices are one blob.`,
        ],
      },
      {
        id: "files",
        heading: "Your transcripts are files you already own",
        body: [
          `When a meeting ends in Thunder Kitty, your notes and transcript sit in ~/Documents/Thunder Kitty Notes/ as a plain markdown file. Your handwritten notes and the full timestamped, speaker-attributed transcript, in a format any app can open.`,
          `Point Claude at the whole folder and ask questions across every meeting you've ever recorded — no copy-paste, no export, no dashboard. Your meeting archive becomes something you can actually query, in the tools you already use.`,
          `Granola's notes live in Granola's database. The company recently changed how it stores data internally — a move that temporarily broke users' AI agent workflows. Their architecture is evolving. Thunder Kitty's architecture is: a folder of text files. There's nothing to break.`,
        ],
      },
      {
        id: "recording",
        heading: "On-device transcription that doesn't charge by the minute",
        body: [
          `Thunder Kitty transcribes using Apple's SpeechAnalyzer — the same on-device engine powering Apple Intelligence, running entirely on your Mac. No cloud billing. No per-minute meter.`,
          `Record for 6 hours. Record 12 meetings in a day. Record yourself thinking through a problem out loud. No cap, no warnings, because the cost to us is zero.`,
          `Granola's free plan limits meeting history to 30 days. Unlimited history — and access to better AI models — requires the $14/month Business plan.`,
        ],
      },
      {
        id: "ai-quality",
        heading: "On AI quality — being honest",
        body: [
          `Granola uses GPT-4 and advanced thinking models for summaries. These are genuinely powerful and we won't pretend otherwise.`,
          `Thunder Kitty ships with the best available on-device models, updated as new releases come out. On-device models are improving fast — for structured use cases like meeting summaries, the gap with cloud models narrows every few months. If you want even stronger summaries, plug in your own Claude, OpenAI, or Gemini API key. You pay the provider directly for exactly what you use, with your own key, under your own terms.`,
          `For transcription: Apple's SpeechAnalyzer on macOS 26 is excellent. Fast, accurate, and it never sends a byte of audio anywhere.`,
        ],
      },
    ],

    them_wins: [
      "You're recording team meetings and want summaries pushed to Slack, Notion, or HubSpot",
      "You want AI templates for structured meeting formats — sales calls, 1:1s, standups",
      "You need integrations with your CRM, ticketing system, or project management tools",
      "You want the deepest possible AI feature set and the cloud pipeline is fine for your use case",
    ],

    tk_wins: [
      "Your meetings involve information that shouldn't leave your device",
      "You need to know who said what — real speaker labels, not a visual hint",
      "You want your transcripts as plain files, readable in any app, queryable with any AI",
      "You want unlimited recording history without tiers, caps, or expiring archives",
      "You prefer software that does a few things well over software that does everything",
    ],

    closing: [
      `Granola is a well-funded team product built for collaboration, with a cloud pipeline underneath its "bot-free" positioning. It's excellent at what it does.`,
      `Thunder Kitty is simpler, personal, and built around one guarantee: nothing leaves your Mac.`,
      `For most meetings, either works. For some meetings, only one of these is an option.`,
    ],

    cta_concession: `If you try it and Granola is the better fit, use Granola. We'd genuinely rather you use the right tool.`,
  },

  {
    slug: "otter",
    name: "Otter",
    tagline: "A different kind of tool, honestly compared",
    intro: [
      `Otter is one of the most feature-complete meeting tools on the market. Twenty million users. Mobile apps for iOS and Android. Salesforce, HubSpot, and Zapier integrations. A visible AI bot that can join three concurrent meetings simultaneously — attending calls on your behalf, even when you're not there.`,
      `Thunder Kitty does less. Deliberately. Here's the honest comparison.`,
    ],

    comparison_table: [
      {
        feature: "Transcription",
        tk: "Apple SpeechAnalyzer — on your Mac",
        them: "Cloud (Otter's own servers)",
      },
      {
        feature: "Bot joins your call",
        tk: "No",
        them: "Yes — visible to all participants",
      },
      { feature: "Works in airplane mode", tk: "✓", them: "✗" },
      { feature: "Mobile app", tk: "✗", them: "✓ iOS + Android" },
      {
        feature: "Speaker diarization",
        tk: "Named, with voice enrollment",
        them: "✓",
      },
      {
        feature: "Monthly recording limit",
        tk: "None, ever",
        them: "300 min (free) / 1,200 min (Pro)",
      },
      {
        feature: "Per-meeting limit",
        tk: "None",
        them: "90 min (Pro) / 4 hrs (Business)",
      },
      {
        feature: "CRM integrations",
        tk: "✗",
        them: "Salesforce, HubSpot, Zapier",
      },
      { feature: "Languages", tk: "English", them: "English, French, Spanish" },
      {
        feature: "Your files",
        tk: "Plain .md in ~/Documents",
        them: "In Otter's database",
      },
      {
        feature: "Model training",
        tk: "N/A — nothing sent",
        them: "Opt-out in settings",
      },
      { feature: "Price", tk: "$10/month", them: "$16.99/month (Pro)" },
    ],

    sections: [
      {
        id: "what-otter-does",
        heading: "What Otter does that Thunder Kitty doesn't",
        body: [
          `Let's be direct about this. Otter is a much larger product than Thunder Kitty and probably always will be.`,
          `Mobile apps — record on your iPhone anywhere, away from your Mac. Audio playback — listen back to recordings with the transcript synchronized. CRM sync — notes land in Salesforce or HubSpot automatically after every call. Multi-language transcription. An MCP server for AI workflow integration. HIPAA compliance as an Enterprise add-on. Video replay for Zoom and Google Meet.`,
          `If your workflow depends on any of these, Otter may be the right call and we'd rather you know that upfront.`,
        ],
      },
      {
        id: "the-bot",
        heading: "The bot everyone can see",
        body: [
          `Otter is, at its core, a bot service. "Otter.ai" joins your meeting as a named, visible participant. Your clients see it. Your sources see it. Your patients see it. The meeting changes before it starts.`,
          `For many use cases that's fine — a sales call where everyone expects notes, a team standup where the transcript gets shared anyway. The visibility is just part of the workflow.`,
          `One Business plan feature worth knowing about: Otter can join three concurrent meetings simultaneously — attending calls on your behalf that you're not present at. For some teams that's a productivity feature. For the people on the other end of those calls, it raises a different question.`,
          `Thunder Kitty doesn't join anything. It runs on your Mac, records what you're present for, and stops when you stop it.`,
        ],
      },
      {
        id: "lawsuit",
        heading: "Two things the Otter lawsuit is actually about",
        body: [
          `Otter is named in a consolidated federal class action — In re Otter.AI Privacy Litigation — with a motion-to-dismiss hearing scheduled for May 20, 2026. These are allegations, not findings. Otter denies wrongdoing. But the two legal theories are worth understanding clearly.`,
          `The recording claim (ECPA/wiretapping): When Otter joins a meeting, Otter the company receives your audio on their servers in real-time. The lawsuit argues that makes Otter a third-party interceptor — a separate entity processing communications it wasn't a party to. This is legally distinct from a user running recording software on their own device. When you use Thunder Kitty, you're recording your own meeting on your own Mac. No company receives anything. The legal posture is the same as pressing record on your phone.`,
          `The biometric claim (BIPA): Otter's speaker identification feature generates voiceprints — biometric identifiers — from everyone who speaks in a recorded meeting. That includes people who never created an Otter account, never agreed to anything, and had no idea Otter was present. The lawsuit argues this violates Illinois's biometric privacy law, which requires written consent before collecting voiceprints.`,
          `Thunder Kitty does voice enrollment for the user — you can enroll your own voice so TK always knows when it's you speaking. We actually built cross-participant voice fingerprinting too, tested it, and then removed it. The reason: identifying other people's voices across meetings would mean collecting biometric data about people who never consented to it, even locally on your Mac. We decided that wasn't a line we were willing to cross. So TK knows your voice. Other speakers are labeled Speaker 1, Speaker 2, and so on — you can rename them in a transcript, but we don't fingerprint anyone who didn't ask us to.`,
        ],
      },
      {
        id: "minute-caps",
        heading: "Minute caps and hard stops",
        body: [
          `Otter's Pro plan costs $16.99/month and includes 1,200 minutes — reduced from 6,000 minutes without a price reduction. When you hit that limit, the service stops entirely. No overages, no rollover, no grace period.`,
          `Thunder Kitty is $10/month with no recording limits of any kind. Record for six hours. Record twelve meetings in a day. The cost to us when you record more is zero, because nothing touches a server.`,
        ],
      },
      {
        id: "hipaa",
        heading: "On HIPAA",
        body: [
          `Otter offers HIPAA compliance, but only on its Enterprise tier — custom pricing, annual contracts, typically five figures. For individual therapists, counselors, or healthcare practitioners, it's effectively out of reach.`,
          `Thunder Kitty takes a different position: we don't make HIPAA claims because HIPAA compliance is about your entire workflow, not any single app. What we do say is simpler and more verifiable — nothing leaves your Mac. No audio, no transcript, no metadata reaches any server anywhere. That's the data-handling model these use cases actually require, and you can confirm it yourself by turning on Airplane mode.`,
        ],
      },
    ],

    them_wins: [
      "You need to record on mobile, away from your Mac",
      "You want notes synced to your CRM automatically after every call",
      "Your team needs shared transcripts, admin controls, and workflow integrations",
      "The bot is visible in your meetings and that's fine for your use case",
    ],

    tk_wins: [
      "Your meetings can't have a visible third party present — or any third party, visible or not",
      "You want your transcripts as plain files you own outright, readable anywhere",
      "You want unlimited recording without watching a minute counter",
      "You prefer a tool that does a few things extremely well and nothing else",
    ],

    closing: [
      `Otter is a productivity platform built for teams that want maximum automation. It has the features, the integrations, and the scale to match.`,
      `Thunder Kitty is a personal tool built around one guarantee: nothing leaves your Mac. Fewer features, different tradeoffs, and for certain conversations — the only real option.`,
    ],

    cta_concession: `If you try it and Otter is the better fit, use Otter. We'd genuinely rather you use the right tool.`,
  },
];
