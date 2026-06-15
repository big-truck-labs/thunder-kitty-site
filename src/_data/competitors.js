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
      {
        feature: "Real-time intelligence, on-device",
        tk: "✓ (Labs)",
        them: "✗",
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
        id: "live-intelligence",
        heading: "Live meeting intelligence — and where it runs",
        body: [
          `Granola has a mid-meeting AI chat — hit Cmd+J and ask questions about the conversation so far. "What did I miss?" "What were the action items?" It's useful, and it works during the meeting, not just after.`,
          `The AI behind it runs in the cloud. Your transcript goes to Granola's providers, the model processes it, and the answer comes back. For most questions that's fine.`,
          `Thunder Kitty 1.9.0 ships two experimental features in Settings → Labs. Live Agenda Tracking lets you set agenda items before a meeting and watches them shift from pending to in-progress to covered as the conversation happens — tracking a plan you set beforehand, not answering questions about what was said. Live Topic Timeline segments the meeting into topics as you record, showing the shape of the discussion as it builds.`,
          `Both run <a href="/learn/three-models-zero-api-calls/">three models on your Mac's Neural Engine and GPU</a> — no API calls, no network, no data leaving the device. They work in airplane mode, like everything else in Thunder Kitty.`,
          `These are Labs features — experimental, opt-in, and still rough in places. We shipped them because the underlying architecture works. We put them in Labs because the experience isn't finished.`,
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
      {
        feature: "Real-time intelligence, on-device",
        tk: "✓ (Labs)",
        them: "✗",
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
          `Thunder Kitty does voice enrollment for the user — you can enroll your own voice so Thunder Kitty always knows when it's you speaking. We actually built cross-participant voice fingerprinting too, tested it, and then removed it. The reason: identifying other people's voices across meetings would mean collecting biometric data about people who never consented to it, even locally on your Mac. We decided that wasn't a line we were willing to cross. So Thunder Kitty knows your voice. Other speakers are labeled Speaker 1, Speaker 2, and so on — you can rename them in a transcript, but we don't fingerprint anyone who didn't ask us to.`,
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
        id: "live-intelligence",
        heading: "Live meeting intelligence — and where it runs",
        body: [
          `Otter already does real-time intelligence during meetings. Automated Live Summary updates in the Outline panel as the conversation moves. Otter AI Chat lets you ask questions mid-call. Action items and key takeaways surface automatically. These are mature, well-built features.`,
          `They run in Otter's cloud. Your audio goes to Otter's servers, the models process it there, and the results come back. For most meetings that's fine.`,
          `Thunder Kitty 1.9.0 ships two experimental features in Settings → Labs. Live Agenda Tracking lets you set agenda items before a meeting and watches them shift from pending to in-progress to covered as the conversation happens — not a post-meeting summary of what was discussed, but a live tracker of the plan you walked in with. Live Topic Timeline segments the meeting into topics as you record, showing the structure of the discussion as it unfolds. The topic timeline overlaps with what Otter's Outline already does; the agenda tracker does something different.`,
          `The difference that matters to some people: Thunder Kitty's features run <a href="/learn/three-models-zero-api-calls/">three models on your Mac's Neural Engine and GPU</a> — no API calls, no network, no data leaving the device. They work in airplane mode. Otter's require Otter's infrastructure.`,
          `These are Labs features — experimental, opt-in, and still rough in places. We shipped them because the underlying architecture works. We put them in Labs because the experience isn't finished.`,
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

  {
    slug: "fireflies",
    name: "Fireflies",
    tagline: "The feature we built and removed",
    intro: [
      `Fireflies is an enterprise meeting intelligence platform used by sales teams, recruiters, and operations leads who need their meeting notes wired into their CRM by end of day. It has a visible bot, cloud transcription, 69+ languages, and a marketplace of integrations. It does a lot.`,
      `Thunder Kitty is a personal notepad that transcribes on your Mac. No bot. No cloud. No integrations. It does less, and for most of Fireflies' users, that's not the right tradeoff.`,
      `But there's one thing worth understanding before you decide.`,
    ],

    comparison_table: [
      {
        feature: "Transcription",
        tk: "Apple SpeechAnalyzer — on your Mac",
        them: "Cloud (Fireflies' servers)",
      },
      {
        feature: "Bot joins your call",
        tk: "No",
        them: "Yes — visible to all participants",
      },
      { feature: "Works in airplane mode", tk: "✓", them: "✗" },
      { feature: "Mobile app", tk: "✗", them: "✓ iOS + Android" },
      { feature: "Languages", tk: "English", them: "69+" },
      {
        feature: "Speaker diarization",
        tk: "Named, with voice enrollment",
        them: "✓ via Speaker Recognition",
      },
      {
        feature: "Voiceprints stored",
        tk: "User only, locally",
        them: "All participants, on Fireflies' servers",
      },
      {
        feature: "Monthly recording limit",
        tk: "None",
        them: "800 min (free) / unlimited (Pro)",
      },
      {
        feature: "AI summary credits",
        tk: "Unlimited",
        them: "20/month (Pro) — same as free",
      },
      {
        feature: "CRM integrations",
        tk: "✗",
        them: "Salesforce, HubSpot, Zapier, Slack",
      },
      {
        feature: "Your files",
        tk: "Plain .md in ~/Documents",
        them: "In Fireflies' database",
      },
      {
        feature: "Model training",
        tk: "N/A — nothing sent",
        them: "Opt-out in settings",
      },
      {
        feature: "Active litigation",
        tk: "None",
        them: "Federal BIPA class action (2025)",
      },
      {
        feature: "Real-time intelligence, on-device",
        tk: "✓ (Labs)",
        them: "✗",
      },
      { feature: "Price", tk: "$10/month", them: "$18/month (Pro, monthly)" },
    ],

    sections: [
      {
        id: "what-fireflies-does",
        heading: "What Fireflies does that Thunder Kitty doesn't",
        body: [
          `Fireflies is built for teams that run a lot of meetings and need the output wired into their workflow automatically. It handles 69 languages. It has mobile apps. It syncs to Salesforce and HubSpot. It has a real-time Perplexity integration that lets you fact-check claims during a meeting without leaving the call.`,
          `If you need meeting notes to land in your CRM without any manual steps, Fireflies is probably worth evaluating. Thunder Kitty doesn't do any of that and isn't trying to.`,
          `One thing to know about Fireflies pricing before you sign up: the AI credits system. Pro plan users get 20 AI credits per month — the same as the free plan. AI summaries, the AskFred assistant, and Smart Highlights all draw from this pool. Heavy users burn through it quickly and need to purchase add-on credits separately.`,
        ],
      },
      {
        id: "lawsuit",
        heading: "The feature at the center of the lawsuit",
        body: [
          `In December 2025, an Illinois resident named Katelin Cruz filed a federal class action against Fireflies — Cruz v. Fireflies.AI Corp. She hadn't signed up for Fireflies. She hadn't agreed to its terms of service. She joined a routine meeting at a nonprofit, and Fireflies' bot was already there, enabled by someone else.`,
          `The specific feature at issue is Fireflies' "Speaker Recognition" — a capability that identifies different speakers in meetings and audio files by generating voiceprints, which are biometric identifiers under Illinois law.`,
          `The lawsuit alleges three BIPA violations: Fireflies never told participants their voiceprints were being collected, never obtained written consent, and never published a policy for how long it retains biometric data before destroying it. The plaintiff represents a potential class of anyone whose voiceprint was collected by Fireflies without consent — including people who had never heard of the product.`,
          `These are allegations, not findings. Fireflies denies wrongdoing and the case is pending.`,
        ],
      },
      {
        id: "our-decision",
        heading: "The decision we made",
        body: [
          `Thunder Kitty built the same feature. Speaker Recognition, voice fingerprinting across meetings, automatic identification of everyone on a call. We tested it, it worked, and then we removed it.`,
          `The reason: building voiceprints of people in your meetings — even locally, even on your own Mac — means making a decision about other people's biometric data without their knowledge. The person who downloaded Thunder Kitty consented to it. The person on the other end of their call didn't.`,
          `So Thunder Kitty does voice enrollment for the user only. You can enroll your own voice and Thunder Kitty will always know when it's you speaking, across every meeting you record. Other speakers are identified as Speaker 1, Speaker 2, and so on. You can rename them in a transcript and it cascades through that session — but we don't fingerprint anyone who didn't ask us to.`,
          `It's a smaller feature. We think it's the right call.`,
        ],
      },
      {
        id: "live-intelligence",
        heading: "Live meeting intelligence — and where it runs",
        body: [
          `Fireflies has a capable set of live features. The Live Assist panel shows auto-structured notes and real-time transcription during the call. AskFred lets you ask questions mid-meeting, search the web, and pull context from previous meetings. Dynamic Topic Suggestions surface themes as the conversation moves. It's a lot of real-time intelligence.`,
          `All of it runs through Fireflies' bot and cloud infrastructure. The bot joins the call, the audio goes to Fireflies' servers, and the models run there.`,
          `Thunder Kitty 1.9.0 ships two experimental features in Settings → Labs. Live Agenda Tracking lets you set agenda items before a meeting and watches them shift from pending to in-progress to covered as the conversation happens — tracking a plan you walked in with, not just describing what was said. Live Topic Timeline segments the meeting into topics as you record, showing the structure of the discussion as it unfolds.`,
          `Both run <a href="/learn/three-models-zero-api-calls/">three models on your Mac's Neural Engine and GPU</a> — no API calls, no network, no data leaving the device. They work in airplane mode. Fireflies' live features require Fireflies' servers and a bot in the room.`,
          `These are Labs features — experimental, opt-in, and still rough in places. Fireflies' Live Assist is more comprehensive. Thunder Kitty's runs on your Mac and stays there.`,
        ],
      },
    ],

    them_wins: [
      "Your team runs high volumes of sales, recruiting, or ops meetings and needs CRM sync",
      "You need 69+ languages for international teams",
      "You want a searchable meeting archive with workflow integrations",
      "The bot is visible in your meetings and your team has consented to that",
    ],

    tk_wins: [
      "Your meetings involve people who haven't consented to a bot collecting their voiceprints",
      "You want your transcripts as plain files, not locked in a database",
      "You want a simple tool for personal or professional use without an enterprise footprint",
      "You're in a field — therapy, journalism, law, research — where data minimization matters",
    ],

    closing: [
      `Fireflies is a capable enterprise tool with a cloud pipeline, a visible bot, and a feature set built for teams.`,
      `Thunder Kitty is a personal tool that made a deliberate decision about whose biometric data it's willing to collect. That decision costs some features. We think the tradeoff is right.`,
    ],

    cta_concession: `If you try it and Fireflies is the better fit for your team, use Fireflies. We'd genuinely rather you use the right tool.`,
  },

  {
    slug: "fathom",
    name: "Fathom",
    tagline:
      "Fathom records your Zoom calls. Thunder Kitty records everything.",
    intro: [
      `Fathom is the most generous free meeting tool on the market. Unlimited recordings, unlimited transcription, fast AI summaries, video replay, and a free plan that actually works — no minute caps, no trial expiration. It's genuinely excellent at what it does.`,
      `What it does is record your scheduled online meetings. Zoom, Google Meet, Microsoft Teams. That's the scope.`,
      `Thunder Kitty records anything that makes sound on your Mac.`,
    ],

    comparison_table: [
      {
        feature: "Transcription",
        tk: "Apple SpeechAnalyzer — on your Mac",
        them: "Cloud (Fathom's servers)",
      },
      {
        feature: "Bot joins your call",
        tk: "No",
        them: "Optional — bot-free mode in beta",
      },
      { feature: "Works in airplane mode", tk: "✓", them: "✗" },
      { feature: "Video recording", tk: "✗", them: "✓" },
      {
        feature: "Audio sources",
        tk: "Any system audio",
        them: "Zoom, Meet, Teams only",
      },
      { feature: "Phone calls + FaceTime", tk: "✓", them: "✗" },
      { feature: "In-person conversations", tk: "✓", them: "✗" },
      { feature: "Languages", tk: "English", them: "28" },
      {
        feature: "Speaker diarization",
        tk: "Named, with voice enrollment",
        them: "✓",
      },
      {
        feature: "Your files",
        tk: "Plain .md in ~/Documents",
        them: "In Fathom's database",
      },
      { feature: "AI training on your data", tk: "No", them: "No" },
      {
        feature: "AI summary limit",
        tk: "Unlimited",
        them: "5/month (free) / unlimited (Premium)",
      },
      {
        feature: "Real-time intelligence, on-device",
        tk: "✓ (Labs)",
        them: "✗",
      },
      { feature: "Price", tk: "$10/month", them: "$20/month (Premium)" },
    ],

    sections: [
      {
        id: "what-fathom-does",
        heading: "What Fathom does that Thunder Kitty doesn't",
        body: [
          `Video recording. When a meeting ends in Fathom, you have the full recording alongside the transcript — and every line of the transcript is linked to its timestamp. Click any sentence and jump directly to that moment in the video. For sales calls, client reviews, or any meeting you might need to replay, that's genuinely useful.`,
          `Fathom also has a free plan that isn't a trick. Unlimited recording and transcription, forever. The only meaningful limit is AI summaries — capped at five per month on the free tier. If you attend more than five meetings a month that need summaries, Premium is $20/month.`,
          `28 languages. Mobile apps. Team collaboration features. A searchable library across your entire meeting history.`,
          `And one more thing worth saying plainly: Fathom doesn't use your data to train their AI models. No opt-out required. For a cloud-based tool, that's a meaningful commitment.`,
        ],
      },
      {
        id: "what-tk-records",
        heading: "What Thunder Kitty records that Fathom can't",
        body: [
          `Fathom connects to your calendar and joins your scheduled Zoom, Meet, or Teams calls. That's the workflow it's built for.`,
          `Thunder Kitty captures any audio playing through your Mac. A Zoom call, yes — but also a FaceTime conversation. A phone call on your Mac. A recorded interview you're playing back. An in-person meeting where your Mac is sitting on the table. A voice memo you want transcribed. Anything.`,
          `There's no calendar required. No integration to set up. No meeting platform to be compatible with. If it makes sound on your Mac, Thunder Kitty can transcribe it.`,
        ],
      },
      {
        id: "different-ideas",
        heading: "Two different ideas about what a meeting tool should be",
        body: [
          `Fathom is built around the scheduled online meeting as the primary unit of work. It joins, it records, it summarizes, it stores. The workflow is: calendar event → Fathom joins → summary in your inbox.`,
          `Thunder Kitty is built around the notepad as the primary unit of work. You open it when you need it, write what you want to write, and the transcript is there alongside your notes when the conversation is over. The workflow is: you're having a conversation → you open Thunder Kitty → you have a record.`,
          `Fathom is better if your most important conversations happen in scheduled video calls and you want them captured automatically. Thunder Kitty is better if your most important conversations happen everywhere — and you want a private, permanent record that lives on your Mac.`,
        ],
      },
      {
        id: "files",
        heading: "On files",
        body: [
          `When a meeting ends in Thunder Kitty, your notes and transcript sit in ~/Documents/Thunder Kitty Notes/ as a plain markdown file. Open it in any app. Point Claude at the whole folder and ask questions across every conversation you've ever recorded.`,
          `Fathom's recordings and transcripts live in Fathom's database. The product is excellent, but the archive is theirs.`,
        ],
      },
      {
        id: "live-intelligence",
        heading: "During the meeting, not after it — and on your Mac",
        body: [
          `Fathom's core strength has been post-meeting intelligence: fast, accurate summaries and action items that land within seconds of the call ending. With Fathom 3.0 in April 2026, a live summary was added to the new desktop experience — a useful step toward during-the-meeting intelligence. Both run through Fathom's cloud.`,
          `Thunder Kitty 1.9.0 ships two experimental features in Settings → Labs. Live Agenda Tracking lets you set agenda items before a meeting and watches them shift from pending to in-progress to covered as the conversation happens. It doesn't describe what was said after the fact — it tracks whether the conversation followed the plan you walked in with. Live Topic Timeline segments the meeting into topics as you record.`,
          `Both run <a href="/learn/three-models-zero-api-calls/">three models on your Mac's Neural Engine and GPU</a> — no API calls, no network, no data leaving the device. They work in airplane mode, like everything else in Thunder Kitty.`,
          `These are Labs features — experimental, opt-in, and still rough in places. We shipped them because the underlying architecture works. We put them in Labs because the experience isn't finished.`,
        ],
      },
    ],

    them_wins: [
      "Your important conversations happen only in Zoom, Meet, or Teams",
      "You want video replay with transcript-linked timestamps",
      "You want a free plan with unlimited recording before committing to a paid tool",
      "You need 28 languages or team collaboration features",
    ],

    tk_wins: [
      "Your important conversations happen everywhere — phone calls, FaceTime, in-person, any platform",
      "You want your transcripts as plain files, owned outright, readable anywhere",
      "Your meetings involve information that shouldn't leave your Mac",
      "You prefer a notepad that transcribes over a recorder that takes notes",
    ],

    closing: [
      `Fathom is the best free tool for recording scheduled online meetings. If that's your use case, it's hard to beat.`,
      `Thunder Kitty is for everything else — and for people who want the record to live on their Mac, not someone else's server.`,
    ],

    cta_concession: `If you try it and Fathom is the better fit, use Fathom. We'd genuinely rather you use the right tool.`,
  },
];
