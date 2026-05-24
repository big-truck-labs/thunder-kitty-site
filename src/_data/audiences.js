module.exports = [
  {
    slug: "therapists",
    name: "Therapists",
    headline: "Session notes without the privacy tradeoff",
    subheadline:
      "Thunder Kitty transcribes therapy sessions entirely on your Mac — no audio ever leaves the room.",
    intro:
      "Clinical documentation is one of the most demanding parts of private practice. You need accurate notes to support treatment planning, track progress, and meet professional standards — but taking notes during a session pulls you out of the room. Most therapists write up after the fact, reconstructing conversations from memory while the details fade. The tools that promise to fix this send your clients' audio to cloud servers for processing. Thunder Kitty doesn't. Everything — transcription, AI summaries, your notes — happens on your Mac. Nothing leaves.",
    the_problem: {
      heading: "The documentation problem most therapists know",
      body: "Writing during sessions breaks rapport. Post-session notes are time-consuming and increasingly inaccurate the longer you wait. Cloud transcription tools solve the first problem but create a new one: your clients' most private disclosures — trauma histories, relationship details, mental health diagnoses — are routed through Deepgram, AssemblyAI, or OpenAI's infrastructure. Tools like Granola require a Business Associate Agreement precisely because they're handling your clients' data on external servers. Thunder Kitty doesn't require a BAA because it never receives your data. Audio is processed on your Mac using Apple's on-device speech engine. The transcript never leaves.",
    },
    workflow: {
      heading: "What a session looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the session",
          body: "Open Thunder Kitty and start a new note linked to the appointment. Add a quick agenda — intake questions, topics to revisit, goals for the session. The notepad is ready when you are.",
        },
        {
          label: "During the session",
          body: "Hit record. Transcription starts immediately using Apple's SpeechAnalyzer — the same engine behind Apple Intelligence, running entirely on-device. You stay present with your client. Thunder Kitty captures everything with accurate speaker separation, so you know who said what.",
        },
        {
          label: "After the session",
          body: "Thunder Kitty generates an AI summary of the session — key themes, clinical observations, anything worth flagging — using a local model on your Mac. Your notes and transcript save as a plain Markdown file in your Documents folder. Searchable, portable, owned entirely by you. No cloud dashboard. No vendor lock-in.",
        },
      ],
    },
    differentiators_heading: "Why therapists choose Thunder Kitty",
    differentiators: [
      {
        heading: "No BAA required — because we never receive your data",
        body: "Business Associate Agreements exist to govern how vendors handle your clients' PHI on their servers. Thunder Kitty has no servers. Audio is processed on your Mac and never transmitted. There's nothing for a BAA to cover.",
      },
      {
        heading: "Real speaker separation, not a visual trick",
        body: "Thunder Kitty does actual speaker diarization. Enroll your own voice once and it's always correctly labeled. Other participants are separated and labeled individually — Speaker 1, Speaker 2 — regardless of how many people are in the session. In Granola, everyone other than you is one undifferentiated stream.",
      },
      {
        heading: "Your notes are files you already own",
        body: "Transcripts and session notes save as plain Markdown files in your Documents folder. Open them in any app, search across every session in Spotlight, point an AI at the whole folder and ask questions across your entire caseload. If you stop using Thunder Kitty, your notes don't disappear into a vendor's database.",
      },
      {
        heading: "Verify it yourself",
        body: "Turn on Airplane Mode. Record a session. Read the transcript. The app works. That's not a privacy policy — it's a test you can run before your first real session.",
      },
      {
        heading: "Real-time session awareness, entirely on your device",
        body: "Thunder Kitty tracks your session agenda in real time as the conversation progresses. If you set out to cover specific topics — risk assessment, homework review, treatment goals — you can see at a glance what's been discussed and what hasn't, without interrupting the session. Post-session, each agenda item gets its own AI summary generated entirely on your Mac. No cloud inference. No data leaving the room.",
      },
    ],
    use_cases: [
      "Transcribing individual therapy sessions for clinical notes",
      "Capturing couples or group sessions with accurate speaker labels",
      "Recording telehealth appointments via Zoom, FaceTime, or any platform",
      "Documenting supervision sessions and peer consultations",
      "Searching across session history by topic, client concern, or clinical theme",
    ],
    compliance_angle:
      "Thunder Kitty doesn't make HIPAA claims — HIPAA compliance covers your entire workflow, not any single app. What we do say is simpler and more verifiable: no audio, transcript, or metadata ever reaches a server. No BAA is needed for data that never leaves your device. Turn on Airplane Mode and confirm it yourself.",
    cta_note:
      "Try it with a practice recording before your first real session. Airplane mode on. If it works, you'll know.",
  },

  {
    slug: "lawyers",
    name: "Lawyers",
    headline: "Privileged conversations stay on your device",
    subheadline:
      "Thunder Kitty gives attorneys a transcription tool that never risks waiving privilege.",
    intro:
      "Legal practice runs on conversations — client intakes, strategy sessions, witness prep, deal negotiations. Every one of those conversations needs to be captured accurately and kept confidential. The tools built to help with this send your audio to cloud servers for processing. That introduces a third party into communications that may be privileged. Thunder Kitty doesn't. Transcription runs on your Mac using Apple's on-device speech engine. Nothing leaves your device. The privilege analysis stays clean.",
    the_problem: {
      heading: "The third-party problem in cloud transcription",
      body: "Attorney-client privilege can be waived by voluntary disclosure to a third party. Cloud transcription services — even reputable ones — are third parties. When you send a client conversation through an external API for processing, you're creating a record of that communication on infrastructure you don't control, under terms of service your client never reviewed. For routine internal meetings this may be acceptable. For client strategy calls, witness prep sessions, M&A discussions, and sensitive negotiations, the question isn't whether the service is secure. It's whether the data left your control at all. With Thunder Kitty, it doesn't.",
    },
    workflow: {
      heading: "What a client call looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the call",
          body: "Open Thunder Kitty and start a note linked to the meeting. Add agenda items — topics to cover, questions to ask, issues to resolve. Your preparation is structured and ready before the call begins.",
        },
        {
          label: "During the call",
          body: "Hit record. Transcription starts immediately on your Mac using Apple's SpeechAnalyzer — accurate, real-time, entirely on-device. You stay focused on the conversation. Thunder Kitty captures who said what with speaker separation across all participants.",
        },
        {
          label: "After the call",
          body: "Each agenda item gets its own AI summary — what was discussed, what was decided, what's outstanding — generated on your Mac using a local model. Your notes and transcript save as plain Markdown files in your Documents folder. Searchable, portable, ready to produce if needed. No vendor cooperation required.",
        },
      ],
    },
    differentiators_heading: "Why attorneys use Thunder Kitty",
    differentiators: [
      {
        heading: "No third party ever touches the audio",
        body: "Cloud transcription tools process your audio on external infrastructure. Thunder Kitty processes audio on your Mac using Apple's built-in speech engine. Nothing is transmitted. No third party receives, stores, or processes the content of your client communications.",
      },
      {
        heading: "Real speaker separation across all participants",
        body: "Thunder Kitty does actual speaker diarization. Enroll your own voice once and it's always correctly labeled. Other participants are separated individually — Speaker 1, Speaker 2 — regardless of call size. You know who said what, which matters when the record matters.",
      },
      {
        heading: "Your files, your terms",
        body: "Transcripts and notes save as plain Markdown files in your Documents folder. No vendor database. No export workflow. No subscription required to access your own records. If you need to produce documents, they're already files you control — straightforward to preserve, search, and hand over on your terms.",
      },
      {
        heading: "Real-time agenda tracking, on-device",
        body: "Thunder Kitty tracks your meeting agenda in real time as the conversation progresses. See at a glance which topics have been covered and which haven't, without breaking focus. Post-meeting, each agenda item gets its own AI summary generated entirely on your Mac. No cloud inference. Nothing leaves.",
      },
      {
        heading: "Verify it yourself",
        body: "Turn on Airplane Mode. Record a call. Read the transcript. The app works. That's not a privacy policy — it's a test you can run before your first billable hour.",
      },
    ],
    use_cases: [
      "Transcribing client intake calls and strategy sessions",
      "Recording witness preparation and deposition review discussions",
      "Capturing partner meetings and case conferences",
      "Documenting M&A discussions and deal negotiations",
      "Searching across matter history by topic, issue, or client concern",
    ],
    compliance_angle:
      "Attorney-client privilege requires that communications remain confidential and not be voluntarily disclosed to third parties. Cloud-based transcription introduces a third party into that communication. Thunder Kitty's on-device architecture means no third party ever receives the audio — the privilege analysis stays clean.",
    cta_note:
      "Try it on a client call with Airplane Mode on. If the transcript is accurate and nothing left your Mac, you have your answer.",
  },

  {
    slug: "consultants",
    name: "Consultants",
    headline: "Client conversations that stay yours",
    subheadline:
      "Thunder Kitty lets consultants capture every meeting without exposing client data to third-party services.",
    intro:
      "Consultants handle sensitive client information across every engagement — strategic plans, financial data, organizational challenges, personnel decisions. Your engagement letters promise confidentiality. Most transcription tools route audio through cloud infrastructure, creating copies of client conversations on servers you don't control, under terms of service your clients never agreed to. Thunder Kitty runs entirely on your Mac. Record client calls, workshops, and strategy sessions knowing that nothing leaves your device — not to our servers, not to anyone's.",
    the_problem: {
      heading: "The confidentiality gap in cloud transcription",
      body: "When you send a client conversation to a cloud transcription service, you're creating a copy of that conversation on someone else's infrastructure. That copy exists outside your control, subject to that vendor's data retention policies, security practices, and legal obligations. For a consultant working across multiple clients — some of whom may be competitors — that's a meaningful exposure. A data breach at your transcription provider could surface confidential strategy discussions from multiple engagements simultaneously. Thunder Kitty eliminates that exposure entirely because the audio never leaves your Mac.",
    },
    workflow: {
      heading: "What a client engagement looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the meeting",
          body: "Create a note for the client and link it to the calendar event. Add agenda items — discovery questions, hypotheses to test, decisions to reach. Your preparation is structured and searchable across every engagement.",
        },
        {
          label: "During the meeting",
          body: "Hit record. Transcription runs immediately on your Mac — no internet required, no audio leaving the room. Speaker separation means you know who said what across every stakeholder in the call. You stay focused on the conversation.",
        },
        {
          label: "After the meeting",
          body: "Each agenda item gets its own AI summary generated on your Mac. Notes and transcript save as plain Markdown files in a folder you choose — organized per client, searchable across engagements, readable in any app. No platform login required to find what someone said six months ago.",
        },
      ],
    },
    differentiators_heading: "Why consultants use Thunder Kitty",
    differentiators: [
      {
        heading: "Nothing leaves your device",
        body: "Audio is processed on your Mac using Apple's on-device speech engine. No cloud upload, no external API, no third-party infrastructure. The confidentiality you promise clients is architectural, not just a policy.",
      },
      {
        heading: "Searchable across every engagement",
        body: "Your notes are plain Markdown files in a folder you choose. Search across every client conversation in Spotlight, point an AI at the whole folder, or open them in Obsidian, iA Writer, or any tool you already use. Your meeting archive is yours to query however you want.",
      },
      {
        heading: "No bot joining the call",
        body: "Thunder Kitty captures audio directly from your Mac — system audio and microphone — with no bot joining the meeting. Nothing for your client to notice, explain, or consent to on the fly.",
      },
      {
        heading: "Real-time agenda tracking",
        body: "Thunder Kitty tracks which agenda items have been covered as the conversation progresses. If you set out to cover six discovery areas and only touched four, you'll know before the call ends. Post-meeting, each item gets its own AI summary on your Mac.",
      },
      {
        heading: "Verify it yourself",
        body: "Turn on Airplane Mode before your next client call. Transcription still works. That's the simplest way to confirm the claim before you stake your client relationships on it.",
      },
    ],
    use_cases: [
      "Transcribing client discovery calls and stakeholder interviews",
      "Capturing workshop facilitation and strategy sessions",
      "Recording project check-ins across multiple concurrent engagements",
      "Searching across engagement history by topic, client, or decision",
      "Reviewing coaching sessions and advisory calls",
    ],
    compliance_angle: null,
    cta_note:
      "Try it on your next client call. Your notes, your files, your Mac — nothing else involved.",
  },

  {
    slug: "sales-reps",
    name: "Sales Reps",
    headline: "Every call captured, nothing sent to the cloud",
    subheadline:
      "Thunder Kitty gives sales reps accurate call transcripts and structured follow-through — with no bot joining the meeting.",
    intro:
      "Sales calls are where deals are made or lost. Every discovery call surfaces information you need to remember — budget signals, decision timelines, competitive considerations, things the prospect said that they didn't mean to say. Most reps either take fragmented notes while half-listening, or rely on cloud tools that send their prospect's audio to external servers for processing. Thunder Kitty captures everything on your Mac — no bot, no cloud upload, no meeting participants to explain away. You stay present. The transcript is there when you need it.",
    the_problem: {
      heading: "What you're missing when you're taking notes",
      body: "The moment you switch from listening to writing, you stop hearing. You catch the gist but miss the subtext — the hesitation before the budget answer, the unsolicited mention of a competitor, the thing the economic buyer said that your champion didn't follow up on. Post-call reconstruction from memory is worse. The details that matter most fade fastest. Cloud transcription tools solve this but introduce a visible bot into the meeting — which changes prospect behavior before you say a word — or route your prospect's audio through external servers without their knowledge. Thunder Kitty records directly from your Mac with no bot and no upload. Nothing leaves.",
    },
    workflow: {
      heading: "What a discovery call looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the call",
          body: "Load a sales framework template — MEDDPICC, BANT, SPIN, or Challenger — from Thunder Kitty's built-in library. Your agenda items are ready. You walk into the call knowing exactly what you need to cover.",
        },
        {
          label: "During the call",
          body: "Hit record. Thunder Kitty transcribes in real time on your Mac with no bot and no internet required. Real-time agenda tracking shows which items you've covered and which you haven't — so you can redirect the conversation before you run out of time, without breaking eye contact.",
        },
        {
          label: "After the call",
          body: "Each agenda item gets its own AI summary — what you asked, what they said, what you learned — generated entirely on your Mac. Your notes save as a plain Markdown file. Searchable across your entire pipeline. Ready to reference in your next call, your CRM update, or your deal review.",
        },
      ],
    },
    differentiators_heading: "Why sales reps use Thunder Kitty",
    differentiators: [
      {
        heading: "No bot. No awkward intro. No changed behavior.",
        body: "Thunder Kitty captures audio directly from your Mac — system audio and microphone — with nothing joining the meeting. Your prospect doesn't see a bot notification. The conversation starts the way you want it to start.",
      },
      {
        heading: "Built-in sales frameworks",
        body: "Thunder Kitty ships with MEDDPICC, BANT, SPIN, and Challenger as built-in agenda templates. Load one before your call, check items off as the conversation covers them, and walk away with a per-item summary of exactly what you learned on each dimension.",
      },
      {
        heading: "Real-time agenda tracking",
        body: "As the call progresses, Thunder Kitty shows which agenda items have been discussed and which haven't. If you're ten minutes from the end and haven't touched Paper Process, you'll know. No post-call regret about what you forgot to ask.",
      },
      {
        heading: "A searchable archive of every deal conversation",
        body: "Your call notes save as plain Markdown files — searchable across your entire pipeline in Spotlight, queryable with any AI, readable in any app. Pattern-match objections across prospects. Review what the economic buyer actually said three calls ago. Build institutional knowledge that doesn't live in a vendor's database.",
      },
      {
        heading: "Nothing leaves your Mac",
        body: "Audio is processed on your Mac using Apple's on-device speech engine. Your prospect's words — pricing discussions, competitive intelligence, budget signals — never touch an external server. Turn on Airplane Mode and confirm it yourself.",
      },
    ],
    use_cases: [
      "Transcribing discovery calls and demo presentations with no bot",
      "Loading MEDDPICC, BANT, SPIN, or Challenger before every call",
      "Tracking agenda coverage in real time during live calls",
      "Reviewing objection patterns and signals across a pipeline",
      "Capturing negotiation calls where pricing and terms are discussed",
    ],
    compliance_angle: null,
    cta_note:
      "Load a sales template before your next discovery call. No bot, no upload — just a clean transcript and per-item summary when you're done.",
  },

  {
    slug: "executives",
    name: "Executives",
    headline: "Board-level conversations that never leave your Mac",
    subheadline:
      "Thunder Kitty gives executives a private, permanent record of the meetings that matter most.",
    intro:
      "Executive conversations carry a different weight. Board discussions, M&A deliberations, compensation reviews, leadership assessments — these are the meetings where what was said, who said it, and exactly how it was framed can matter months or years later. You need an accurate record. You need it to be private. And you need it to be yours — not sitting in a transcription vendor's database under their retention policy and their security posture. Thunder Kitty keeps everything on your Mac. No cloud, no vendor, no exposure.",
    the_problem: {
      heading: "The risk most executives haven't thought through",
      body: "Cloud transcription services are convenient until they're not. A data breach at your transcription vendor could expose board discussions, deal terms, personnel decisions, and strategic plans — conversations you assumed were private because they happened in a small room. Even without a breach, your data exists in that vendor's infrastructure subject to their legal obligations, government requests, and acquisition history. Executives who use cloud tools for sensitive meetings are making a bet on that vendor's security posture, their legal team, and their future ownership. Thunder Kitty eliminates that bet entirely. Audio is processed on your Mac. Nothing leaves.",
    },
    workflow: {
      heading: "What a board meeting looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the meeting",
          body: "Create a note linked to the calendar event. Add agenda items — topics to cover, decisions to reach, issues that need resolution. Your prep is structured and ready. The agenda panel stays visible during the meeting so nothing gets skipped.",
        },
        {
          label: "During the meeting",
          body: "Hit record. Transcription runs on your Mac using Apple's SpeechAnalyzer — accurate, real-time, entirely on-device. Thunder Kitty tracks which agenda items have been covered as the conversation progresses. You stay focused on the room.",
        },
        {
          label: "After the meeting",
          body: "Each agenda item gets its own AI summary generated on your Mac. Notes and transcript save as plain Markdown files in your Documents folder — searchable, portable, and entirely under your control. No vendor cooperation required to find, produce, or preserve them.",
        },
      ],
    },
    differentiators_heading: "Why executives use Thunder Kitty",
    differentiators: [
      {
        heading: "Nothing reaches a vendor's infrastructure",
        body: "Audio is processed on your Mac using Apple's on-device speech engine. Board discussions, M&A conversations, compensation reviews — none of it touches an external server. Your exposure is zero because the data never leaves.",
      },
      {
        heading: "Plain files, no vendor lock-in",
        body: "Your transcripts and notes save as plain Markdown files in your Documents folder. Straightforward to preserve under a litigation hold, produce in discovery, or archive for your own records — without calling anyone or waiting on an export tool.",
      },
      {
        heading: "Real-time agenda tracking for high-stakes meetings",
        body: "Thunder Kitty tracks agenda coverage in real time as the meeting progresses. See at a glance what's been discussed and what hasn't. Post-meeting, each item gets its own AI summary on your Mac — so you have a structured record of every decision, not just a transcript.",
      },
      {
        heading: "No bot. No notification. No explanation required.",
        body: "Thunder Kitty captures audio directly from your Mac with nothing joining the meeting. Board members, investors, and counterparties don't see a bot. The meeting proceeds as it should.",
      },
      {
        heading: "Verify it yourself",
        body: "Turn on Airplane Mode. Record a meeting. Read the transcript. The app works. That's not a marketing claim — it's a test you can run before your next board call.",
      },
    ],
    use_cases: [
      "Transcribing board meetings and committee sessions",
      "Capturing M&A discussions, due diligence calls, and deal negotiations",
      "Recording executive team strategy sessions and offsites",
      "Documenting 1:1s with direct reports on sensitive personnel matters",
      "Preserving a searchable record of decisions across every significant meeting",
    ],
    compliance_angle:
      "For public companies, executive communications may be subject to SEC record-keeping requirements and litigation holds. Plain Markdown files stored locally are straightforward to preserve, search, and produce — no vendor cooperation or export workflow required.",
    cta_note:
      "Try it for one board call. Airplane Mode on. If the transcript is accurate and nothing left your Mac, you'll know whether it fits.",
  },

  {
    slug: "founders",
    name: "Founders",
    headline: "Fundraising conversations that stay off the cloud",
    subheadline:
      "Thunder Kitty gives founders a private record of the conversations that determine their company's future.",
    intro:
      "Fundraising is a game of information asymmetry. Investor calls surface your strategy, your numbers, your concerns, your competitive positioning — often before you have any relationship with the person on the other end. Customer discovery calls reveal your product thinking before you've validated it. Co-founder and board conversations involve decisions you're not ready to be public about. These aren't conversations you want processed through a cloud transcription service's infrastructure. Thunder Kitty keeps everything on your Mac. Record every conversation that matters, knowing nothing leaves your device.",
    the_problem: {
      heading: "What most founders get wrong about meeting tools",
      body: "A visible bot joining your investor call signals something before you say a word — that you're using a tool, that you're recording, that someone or something else is in the room. Sophisticated investors notice. Even bot-free cloud tools route your audio through external servers for processing — audio that may include your valuation expectations, your burn rate conversation, your concerns about a co-founder. That data exists on someone else's infrastructure under their retention policy. Thunder Kitty captures audio directly from your Mac with no bot and no upload. The conversation stays between you and the person you're talking to.",
    },
    workflow: {
      heading: "What an investor call looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the call",
          body: "Create a note linked to the calendar event. Add agenda items — the narrative you want to tell, the questions you expect, the signals you're trying to read. Your prep is structured. You walk in knowing what you're trying to learn.",
        },
        {
          label: "During the call",
          body: "Hit record. Transcription runs on your Mac — no bot, no upload, nothing for the investor to notice. Real-time agenda tracking shows which topics you've covered. You stay present and in the conversation.",
        },
        {
          label: "After the call",
          body: "Each agenda item gets its own AI summary on your Mac — what you said, what they said, what signals you picked up. Notes save as plain Markdown files. Searchable across every investor conversation. Build a map of who said what, what objections keep coming up, what questions you're not answering well.",
        },
      ],
    },
    differentiators_heading: "Why founders use Thunder Kitty",
    differentiators: [
      {
        heading: "No bot. Nothing to explain.",
        body: "Thunder Kitty captures audio directly from your Mac with nothing joining the meeting. No bot notification, no awkward disclosure, no changed dynamic. The call starts clean.",
      },
      {
        heading: "Nothing leaves your device",
        body: "Audio is processed on your Mac using Apple's on-device speech engine. Your fundraising conversations — valuation discussions, strategic concerns, competitive positioning — never touch an external server. Turn on Airplane Mode and confirm it yourself.",
      },
      {
        heading: "A searchable archive of every important conversation",
        body: "Your notes and transcripts save as plain Markdown files. Search across every investor call in Spotlight, query them with any AI, find the pattern in what questions keep coming up. Your learnings compound across every conversation instead of living in a vendor's database.",
      },
      {
        heading: "Real-time agenda tracking for high-stakes calls",
        body: "Thunder Kitty tracks which agenda items have been covered as the conversation progresses. If you planned to test a specific narrative and haven't gotten to it with five minutes left, you'll know. Post-call, each item gets its own AI summary on your Mac.",
      },
      {
        heading: "Works for every conversation that matters",
        body: "Customer discovery, co-founder discussions, board calls, hiring conversations, partnership negotiations — Thunder Kitty works for any meeting where you need an accurate record and the content is too sensitive for the cloud.",
      },
    ],
    use_cases: [
      "Transcribing investor calls, partner meetings, and term sheet discussions",
      "Capturing customer discovery calls and user interviews",
      "Recording co-founder and board discussions on sensitive strategic matters",
      "Reviewing pitch sessions and refining your narrative over time",
      "Building a searchable archive of every conversation that shaped the company",
    ],
    compliance_angle: null,
    cta_note:
      "Try it on your next investor call. No bot, no upload — just a clean transcript when you're done.",
  },
];
