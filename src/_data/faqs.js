// _data/faqs.js
// Thunder Kitty — FAQ content for all programmatic SEO pages
//
// Structure:
//   forPages.shared       → appears on every /for/ page (5 questions)
//   forPages.byAudience   → page-specific questions keyed by slug (4–5 each)
//   comparePages.shared   → appears on every /compare/ page (4 questions)
//   comparePages.bySlug   → page-specific questions keyed by competitor slug (5 each)
//   templatePages.shared  → appears on every /meeting-templates/ page (4 questions)
//   templatePages.bySlug  → page-specific questions keyed by template slug (4 each)
//   localFirst            → standalone FAQ for /local-first/ (6 questions)
//
// Answers may contain inline HTML (rendered with | safe in Eleventy templates).
// Flag: any competitor pricing should be verified before publishing.

module.exports = {
  // ─────────────────────────────────────────────
  // /for/ PAGES
  // ─────────────────────────────────────────────

  forPages: {
    shared: [
      {
        q: "Does Thunder Kitty require a bot to join my calls?",
        a: "No. Thunder Kitty captures audio directly from your Mac — your microphone and system audio — the same way QuickTime would. Nothing joins the meeting. The person on the other end gets no notification, no \u201cThunder Kitty has joined\u201d prompt, nothing.",
      },
      {
        q: "Does it work with Zoom, Teams, FaceTime, Meet, and other platforms?",
        a: "Yes. Thunder Kitty isn\u2019t platform-specific — it captures whatever audio is playing on your Mac, regardless of the app. Zoom, Google Meet, Microsoft Teams, Discord, FaceTime, phone calls via your iPhone\u2019s Handoff, or no video app at all. If audio is happening on your Mac, Thunder Kitty can record it.",
      },
      {
        q: "How accurate is the transcription?",
        a: "Very. Thunder Kitty uses Apple\u2019s SpeechAnalyzer — the same on-device engine powering Apple Intelligence — which delivers professional-grade accuracy for English, running entirely on your Mac. It handles natural speech, crosstalk, and varying audio quality well. Non-English language support depends on what Apple\u2019s engine supports on your system.",
      },
      {
        q: "What happens to my notes if I cancel my subscription?",
        a: "Nothing changes. Your notes and transcripts are plain Markdown files sitting in a folder on your Mac. They were yours before you subscribed and they\u2019re yours after you cancel. There\u2019s nothing to export because there\u2019s nothing locked in. You lose the recording and transcription functionality. You keep everything you\u2019ve written and recorded.",
      },
      {
        q: "Can I search across my entire meeting history?",
        a: "Yes — in a few different ways. Your notes are plain Markdown files, so macOS Spotlight searches across all of them. You can also open the folder in Obsidian, iA Writer, or any notes app. For more powerful querying, Thunder Kitty runs as a local MCP server for Claude Desktop: ask questions across months of transcripts directly from Claude\u2019s interface, with no data leaving your Mac.",
      },
    ],

    byAudience: {
      therapists: [
        {
          q: "Do I need a Business Associate Agreement (BAA) to use Thunder Kitty?",
          a: "No — and the reason is the point. BAAs exist to govern how vendors handle your clients\u2019 protected health information on their servers. Thunder Kitty has no servers. Audio is processed on your Mac and never transmitted anywhere. If we never receive your clients\u2019 data, there\u2019s nothing for a BAA to govern.",
        },
        {
          q: "Is Thunder Kitty HIPAA compliant?",
          a: "We don\u2019t make HIPAA claims, because HIPAA compliance covers your entire workflow — client consent, documentation practices, access controls — not any single application. What we can say clearly, and what you can verify: no audio, transcript, or metadata ever reaches a server. Turn on Airplane Mode and the app still works. That\u2019s the part that matters for data handling, and it\u2019s testable before your first real session.",
        },
        {
          q: "Will my client know they\u2019re being recorded?",
          a: "Thunder Kitty doesn\u2019t join meetings as a bot and sends no notification to other participants. Whether and how to disclose recording to clients is a professional and ethical question governed by your licensing board and state law — not something Thunder Kitty decides for you. Many therapists obtain blanket recording consent in their intake paperwork. What Thunder Kitty changes is the data-handling question, not the consent question.",
        },
        {
          q: "Can Thunder Kitty handle couples therapy or group sessions with multiple speakers?",
          a: "Yes. Thunder Kitty does real speaker diarization — each voice in the session is separated and labeled individually in the transcript (Speaker 1, Speaker 2, Speaker 3, and so on). You can also enroll your own voice once so it\u2019s always labeled correctly as you. The transcript reflects who said what, regardless of how many participants are in the session.",
        },
        {
          q: "Can I use Thunder Kitty for telehealth sessions on Zoom or other platforms?",
          a: "Yes. Thunder Kitty captures system audio from your Mac, so it works with any telehealth platform — Zoom, Doxy.me, SimplePractice\u2019s telehealth feature, FaceTime, or anything else. The client\u2019s end is unchanged. Your Mac captures both sides of the call locally.",
        },
      ],

      lawyers: [
        {
          q: "Does sending audio to a cloud transcription service risk waiving attorney-client privilege?",
          a: "This is a legitimate concern worth thinking through carefully. The third-party doctrine holds that voluntary disclosure to a third party can waive privilege. Cloud transcription services are third parties: when you send a client conversation to an external API for processing, you\u2019re creating a record of that communication on infrastructure you don\u2019t control. Whether any particular disclosure would constitute a waiver is a factual and jurisdictional question — but Thunder Kitty eliminates the question entirely. Audio is processed on your Mac. No third party ever receives it.",
        },
        {
          q: "Can opposing counsel subpoena my transcripts from Thunder Kitty?",
          a: "There\u2019s nothing at Thunder Kitty to subpoena. We don\u2019t store your audio, transcripts, or notes on our servers — ever. Your transcripts are plain files on your Mac, governed by the same legal rules as any document under your control. A subpoena served on us would return nothing, because we have nothing.",
        },
        {
          q: "Does Thunder Kitty work for in-person client meetings, not just phone and video calls?",
          a: "Yes. Thunder Kitty captures your Mac\u2019s microphone, so it works for any meeting where your Mac is in the room — client offices, conference rooms, your desk. Audio quality depends on microphone placement and ambient noise, but the transcription engine handles real-world conditions well.",
        },
        {
          q: "How do I preserve a Thunder Kitty transcript under a litigation hold?",
          a: "Your notes and transcripts are plain Markdown files in your Documents folder. Preserving them means the same thing it does for any document: copy to a litigation hold folder, back up to external storage, or hand to your IT team. No vendor cooperation required, no export tool, no calling a support line. They\u2019re files.",
        },
        {
          q: "Is Thunder Kitty appropriate for depositions or formal legal proceedings?",
          a: "Thunder Kitty produces an accurate, speaker-attributed transcript suitable for preparation, review, and note-taking. It\u2019s not a certified court reporter or an official legal transcript service — the transcript is a working document for your use, not a formal record for submission. For your own preparation, witness review, and case development, it\u2019s excellent.",
        },
      ],

      consultants: [
        {
          q: "If two of my clients are competitors, could their information cross-contaminate in Thunder Kitty?",
          a: "No. Your notes and transcripts are plain files on your Mac — not a shared database, not a model trained on your conversations, not anything processed through shared infrastructure. Each file is exactly what was said in that meeting, stored locally, with no connection to any other client\u2019s data. There\u2019s no mechanism for cross-contamination because there\u2019s no shared system.",
        },
        {
          q: "My client\u2019s NDA prohibits sharing their information with third parties. Does using Thunder Kitty violate that?",
          a: "Because Thunder Kitty processes everything on your Mac and nothing is transmitted to our servers, we\u2019re not handling your client\u2019s data — at all. Whether that satisfies a specific NDA clause is a question your counsel should answer, but the data-handling model is designed for exactly this concern: no third party ever receives the audio or transcript.",
        },
        {
          q: "Can I organize notes by client or engagement?",
          a: "Yes. Thunder Kitty\u2019s notes are files in a folder you control. Create subfolders however you work — by client name, engagement type, date, or anything else. Thunder Kitty can be pointed at any folder on your Mac, and your file structure is yours to design.",
        },
        {
          q: "Does Thunder Kitty integrate with my CRM or project management tools?",
          a: "Not directly. Your notes are plain Markdown files — copy and paste into Salesforce, Notion, Asana, or whatever your stack is, or use an AI tool to extract structured information from the transcript. There\u2019s no native CRM connector or Zapier hook. Thunder Kitty is a personal notes tool, not a workflow automation platform.",
        },
        {
          q: "Can I use Thunder Kitty across multiple client Macs, or just my own?",
          a: "Your subscription covers your personal devices — as many Macs as you personally use. Point Thunder Kitty at a shared folder (Dropbox, iCloud Drive, Google Drive) and your notes stay in sync across every Mac you sign into. Voice enrollments and AI model downloads are device-specific. Everything else syncs automatically via files.",
        },
      ],

      "sales-reps": [
        {
          q: "Will my prospect know Thunder Kitty is recording the call?",
          a: "No bot joins the meeting. No notification goes to the other side. Thunder Kitty captures audio directly from your Mac — the same way any system audio recorder would. Whether to disclose recording is your judgment call and may depend on your jurisdiction and company policy. What Thunder Kitty changes is the visibility question: there\u2019s nothing for the prospect to see.",
        },
        {
          q: "What sales frameworks does Thunder Kitty support out of the box?",
          a: "MEDDPICC, BANT, SPIN, and Challenger are built in as agenda templates. Load one before your call, check items off as the conversation covers them, and get a per-item AI summary when it\u2019s done — what you asked, what they said, what you learned. You can also customize any template or build your own from scratch.",
        },
        {
          q: "Can my sales manager or company listen to my Thunder Kitty recordings?",
          a: "Only if they have physical or remote access to your Mac. Everything is stored locally — there\u2019s no team dashboard, no admin console, no call review platform. Thunder Kitty is a personal notes tool. It\u2019s not a sales coaching or call intelligence platform, and it has no concept of organizational access.",
        },
        {
          q: "Can I connect Thunder Kitty to my CRM?",
          a: "Not directly. Your post-call summaries are Markdown files. Copy the relevant sections into Salesforce or HubSpot, or use an AI to extract structured data from the transcript. There\u2019s no native CRM integration. If automatic CRM logging is a requirement, a tool like Gong or Chorus is built for that; Thunder Kitty is not.",
        },
        {
          q: "What\u2019s the difference between Thunder Kitty and a dedicated call intelligence tool like Gong or Chorus?",
          a: "Gong and Chorus are team products built for call review, coaching dashboards, and revenue analytics — they upload every call to the cloud for analysis by managers and the platform\u2019s AI. Thunder Kitty is a personal notes tool where transcription is one feature. Different tools for different problems. If your organization requires call review by management, you likely need both or just the team tool.",
        },
      ],

      executives: [
        {
          q: "If I use Thunder Kitty for a board meeting, can other board members or my IT team access the transcripts?",
          a: "No. Everything stays on your Mac. There\u2019s no shared dashboard, no automatic distribution, no admin access for IT. If you want to share a transcript, you share the file — exactly as you would any document. Your IT team can\u2019t pull recordings from Thunder Kitty\u2019s infrastructure because there is no Thunder Kitty infrastructure.",
        },
        {
          q: "Could a data breach at Thunder Kitty expose my board discussions or executive conversations?",
          a: "No. We don\u2019t store your audio, transcripts, or notes on our servers. A breach of our infrastructure would expose nothing about your meetings — because we have nothing. Your exposure is architectural zero: the data never left your Mac.",
        },
        {
          q: "Does Thunder Kitty work in environments without reliable internet — conference rooms with restricted wifi, or on a plane?",
          a: "Yes. Transcription runs on your Mac using Apple\u2019s SpeechAnalyzer. On-device AI summaries run on local models. The core app works entirely offline. If you\u2019ve connected an external AI API key for more powerful summaries, those calls require internet — but everything else, including transcription, works on Airplane Mode.",
        },
        {
          q: "Are my Thunder Kitty transcripts subject to SEC record-keeping requirements or litigation holds?",
          a: "We can\u2019t give legal advice, but: your transcripts are plain files on your Mac, governed by the same rules as any document you control. They\u2019re straightforward to preserve under a litigation hold — copy the files, back them up, hand them to counsel or IT — without calling a vendor or waiting on an export tool. For public company obligations, the file-based architecture makes compliance more tractable, not less.",
        },
        {
          q: "I work across multiple offices and travel frequently. Does Thunder Kitty handle that?",
          a: "Yes. Your notes are files in a folder you choose. Point that folder at Dropbox, iCloud Drive, or Google Drive and every Mac you use stays in sync automatically — no Thunder Kitty account, no login, no extra cost. Voice enrollments and AI model downloads are device-specific; everything else follows the files.",
        },
      ],

      founders: [
        {
          q: "Can investors tell that Thunder Kitty is recording the call?",
          a: "No. There\u2019s no bot joining the meeting, no notification sent to the other side, nothing visible in the call UI. Thunder Kitty captures your Mac\u2019s audio the same way any system audio recorder would. The call proceeds normally.",
        },
        {
          q: "Is it legal to record investor calls without telling the investor?",
          a: "This depends on your jurisdiction and theirs. Single-party consent states (most of the US) allow one party to record without the other\u2019s knowledge. Two-party or all-party consent states — California, Florida, and others — require all parties to consent. Thunder Kitty doesn\u2019t advise on recording law. The question is the same regardless of what tool you use — it\u2019s about jurisdiction, not the app.",
        },
        {
          q: "Can I use Thunder Kitty for customer discovery interviews and user research?",
          a: "Yes — and it\u2019s a natural fit. Load a user research template, record the interview on your Mac, and get a per-item summary of what you heard across each question. Your notes save as searchable Markdown files. You can run every interview through the same template and then query across all of them: what did users say about pricing, what kept coming up in the pain points section. Your research compounds.",
        },
        {
          q: "Can I search across multiple investor calls to find patterns — objections that keep coming up, questions I\u2019m not answering well?",
          a: "Yes. Your notes are plain Markdown files — searchable across all of them in Spotlight, or queryable in any notes app that reads Markdown. For more structured querying, Thunder Kitty runs as a local MCP server for Claude Desktop: ask questions across your entire investor conversation archive directly from Claude, with everything staying on your Mac.",
        },
        {
          q: "Does Thunder Kitty work for co-founder discussions and board calls, not just investor meetings?",
          a: "Yes. Thunder Kitty works for any meeting where you want a private, accurate record. Co-founder check-ins, board calls, hiring conversations, strategic offsites, partnership negotiations — if it\u2019s happening on your Mac, Thunder Kitty captures it. The on-device architecture matters for any conversation where you\u2019d rather not have the content on someone else\u2019s server.",
        },
      ],
    }, // end byAudience
  }, // end forPages

  // ─────────────────────────────────────────────
  // /compare/ PAGES
  // ─────────────────────────────────────────────

  comparePages: {
    shared: [
      {
        q: "Why is Thunder Kitty less expensive than most cloud transcription tools?",
        a: "Because there\u2019s no cloud infrastructure to run. Cloud transcription tools pay per audio minute for Deepgram, AssemblyAI, or Whisper API calls — that cost gets passed through your subscription. Thunder Kitty uses Apple\u2019s on-device SpeechAnalyzer, which runs on your Mac. Our marginal cost per recording is zero, so yours can be too.",
      },
      {
        q: "Is Thunder Kitty a good fit for teams?",
        a: "Probably not, if you need team features. Thunder Kitty is a personal tool — there\u2019s no shared dashboard, no team account, no automatic summary distribution to Slack or Notion. For an individual who wants a private record of their own meetings, it\u2019s the right tool. For a team that wants shared meeting notes and integrations, tools like Granola, Fathom, or Fireflies are better suited.",
      },
      {
        q: "Can I switch from a cloud tool to Thunder Kitty without losing my existing notes?",
        a: "Your existing notes stay wherever they are — in Granola\u2019s database, Otter\u2019s system, wherever. Thunder Kitty starts fresh with local files. Download it, run a practice recording in Airplane Mode, and if it does what you need, start using it going forward. The transition is low-risk: you\u2019re not migrating anything, just starting a parallel local archive.",
      },
      {
        q: "Does Thunder Kitty have a free plan?",
        a: "No — just a 7-day free trial. No credit card required, no account, just a download. If it works for you after a week of real use, subscribe. If it doesn\u2019t, there\u2019s nothing to cancel.",
      },
    ],

    bySlug: {
      granola: [
        {
          q: "Granola says it\u2019s \u2018bot-free.\u2019 How is that different from Thunder Kitty?",
          a: "Both tools record without a bot joining the meeting — no notification to other participants, no changed call dynamic. The difference is what happens to your audio next. Granola sends it to Deepgram and AssemblyAI for transcription, then to OpenAI or Anthropic for summaries. Thunder Kitty processes everything on your Mac. Bot-free and cloud-free are meaningfully different claims.",
        },
        {
          q: "Does Granola keep my meeting history forever?",
          a: "Granola\u2019s free plan limits meeting history to 30 days. Unlimited history requires the paid Business plan. Thunder Kitty stores everything on your Mac — as long as you have disk space, nothing expires.",
        },
        {
          q: "Is Granola\u2019s speaker labeling the same as Thunder Kitty\u2019s speaker diarization?",
          a: "No. Granola shows a visual left/right split — your messages versus the other person\u2019s. On calls with three or more participants, everyone except you is collapsed into one undifferentiated stream. Thunder Kitty does actual speaker diarization: each participant gets their own label (Speaker 1, Speaker 2, Speaker 3), regardless of how many people are on the call. You know who said what.",
        },
        {
          q: "Can Thunder Kitty replace Granola if I need to share meeting notes with my team?",
          a: "Probably not. Granola is built for team use — summaries pushed to Slack, Notion, and HubSpot, shared meeting history across an organization. Thunder Kitty is a personal tool with no team features. If your workflow depends on distributed meeting notes, Granola is the better fit.",
        },
        {
          q: "Granola uses GPT-4 for summaries. How does Thunder Kitty\u2019s AI compare?",
          a: "Granola\u2019s cloud models are powerful — we won\u2019t pretend otherwise. Thunder Kitty ships with the best available on-device models, updated regularly. For structured use cases like per-agenda-item summaries, on-device quality is strong and improving fast. If you want more powerful inference, you can connect your own Claude, OpenAI, or Gemini API key — you pay the provider directly, under your own terms.",
        },
      ],

      otter: [
        {
          q: "Does Otter send a bot to join my meetings?",
          a: "Otter\u2019s AI assistant can join meetings as a bot — visible to other participants as a named attendee. Thunder Kitty captures audio directly from your Mac with no bot and no notification to anyone on the call. The call proceeds as if Thunder Kitty isn\u2019t there.",
        },
        {
          q: "How is Thunder Kitty\u2019s privacy different from Otter\u2019s?",
          a: "Otter transcribes your audio on its cloud servers and stores your recordings in Otter\u2019s database. Thunder Kitty processes everything on your Mac and stores nothing on any server. The audio never transmits. Turn on Airplane Mode — Thunder Kitty still works. That\u2019s the simplest way to see the difference.",
        },
        {
          q: "Does Otter have a free plan? Does Thunder Kitty?",
          a: "Otter has a free tier with monthly transcription minute limits. Thunder Kitty doesn\u2019t have a free plan — just a 7-day trial, no credit card required. After that, it\u2019s $10/month with no recording caps.",
        },
        {
          q: "Can Otter transcribe meetings offline?",
          a: "No. Otter requires an internet connection for transcription — it\u2019s a cloud-based service. Thunder Kitty works entirely offline. Airplane Mode, restricted wifi, conference rooms with poor connectivity — transcription runs on your Mac regardless.",
        },
        {
          q: "What happens to my Otter recordings if I cancel?",
          a: "Your recordings stay in Otter\u2019s system subject to their data retention policy. With Thunder Kitty, there\u2019s nothing in anyone else\u2019s system to begin with. Your notes are files on your Mac — cancel your subscription and they\u2019re still exactly where they were.",
        },
      ],

      fireflies: [
        {
          q: "Does Fireflies join my calls as a bot?",
          a: "Yes. Fireflies\u2019 AI notetaker joins as a participant — visible to everyone in the meeting. Thunder Kitty captures audio directly from your Mac. Nothing joins the call, nothing is visible to other participants.",
        },
        {
          q: "Fireflies\u2019 Pro plan is $19/month. Thunder Kitty is $10. What\u2019s the difference?",
          a: "Almost double the price, and your audio goes to Fireflies\u2019 cloud servers. Thunder Kitty processes everything on your Mac — no server, no third-party access, no per-minute cost passed through to you. Beyond architecture: Fireflies is a team tool with CRM integrations and collaborative features; Thunder Kitty is a personal notes tool with no team features. Different products for different use cases.",
        },
        {
          q: "Can Fireflies record meetings outside of Zoom, Teams, or Meet?",
          a: "Fireflies is designed around joining scheduled meetings via bot — it works best with calendar-connected video calls. Thunder Kitty captures any audio on your Mac: video calls, phone calls, in-person meetings with your Mac in the room, or just talking through a problem out loud. No meeting platform required.",
        },
        {
          q: "I need CRM integration. Is Thunder Kitty the right choice?",
          a: "Probably not for that specifically. Fireflies has native integrations with Salesforce, HubSpot, and other CRMs. Thunder Kitty\u2019s notes are plain Markdown files — you copy relevant information into your CRM manually or with an AI tool. If automatic CRM logging is a core workflow requirement, Fireflies is built for it; Thunder Kitty isn\u2019t.",
        },
        {
          q: "Can Fireflies transcribe meetings offline?",
          a: "No. Like all cloud transcription tools, Fireflies requires an active internet connection. Thunder Kitty works fully offline — all transcription runs on your Mac.",
        },
      ],

      fathom: [
        {
          q: "Fathom has a generous free plan. Why would I pay for Thunder Kitty?",
          a: "Fathom\u2019s free tier is genuinely good for video call summaries — it\u2019s hard to argue with free. The core difference: Fathom processes your audio and generates summaries on its cloud servers. Thunder Kitty does both entirely on your Mac. If your meetings are routine work calls and cloud processing is fine, Fathom\u2019s free tier is compelling. If the content of your meetings is sensitive enough that you\u2019d rather it not exist on someone else\u2019s server, Thunder Kitty is the right choice.",
        },
        {
          q: "Does Fathom send audio to the cloud?",
          a: "Yes. Fathom transcribes and summarizes on its servers. Thunder Kitty processes everything on your Mac — audio is never transmitted.",
        },
        {
          q: "Is Fathom good for sensitive meetings — therapy, legal, board-level?",
          a: "Fathom is excellent for sales calls, customer meetings, and team standups where cloud processing is acceptable. For meetings where data sovereignty is a hard requirement — therapy sessions, attorney-client conversations, executive discussions, investor calls — Thunder Kitty\u2019s on-device architecture is the appropriate choice. Fathom wasn\u2019t built for those use cases.",
        },
        {
          q: "Does Fathom work outside of Zoom?",
          a: "Fathom started as a Zoom-native tool and has expanded to other platforms, but it\u2019s designed around integrating with video conferencing apps. Thunder Kitty captures any audio on your Mac regardless of application — including in-person meetings, phone calls, and anything else.",
        },
        {
          q: "Can I switch from Fathom to Thunder Kitty?",
          a: "Yes. Your Fathom history stays in Fathom\u2019s system. Thunder Kitty starts fresh with local files. Download it, try it on a real meeting with Airplane Mode on, and if it works for you, start using it going forward. Nothing to migrate, nothing to cancel urgently.",
        },
      ],
    }, // end bySlug
  }, // end comparePages

  // ─────────────────────────────────────────────
  // /meeting-templates/ PAGES
  // ─────────────────────────────────────────────

  templatePages: {
    shared: [
      {
        q: "Can I customize these templates in Thunder Kitty?",
        a: "Yes. Every template is a starting point, not a locked format. Add agenda items, remove ones that don\u2019t fit, reorder them, rename them. The agenda is yours.",
      },
      {
        q: "Can I create my own meeting templates from scratch?",
        a: "Yes. Open a new note and write whatever agenda structure works for your meeting type. Save it as a template and reuse it. You\u2019re not limited to the built-in frameworks.",
      },
      {
        q: "Does the AI summary follow the template structure?",
        a: "Yes — that\u2019s the point. After the meeting, Thunder Kitty generates a summary for each agenda item individually: what was discussed, what was decided, what\u2019s still open. You get a structured record of the meeting, not a single paragraph summary of the whole thing.",
      },
      {
        q: "Do templates require internet to load or use?",
        a: "No. Templates are built into the app. Loading a template, tracking agenda items during a call, and generating the post-meeting summary all happen locally on your Mac.",
      },
    ],

    bySlug: {
      sales: [
        {
          q: "Which framework should I use — MEDDPICC, BANT, SPIN, or Challenger?",
          a: "MEDDPICC for enterprise deals with complex buying committees and long sales cycles — it maps everyone who touches the decision. BANT for faster mid-market qualification where you need to establish fit quickly. SPIN for consultative discovery where surfacing pain and urgency through questions is the goal. Challenger when you lead with an industry insight or reframe that shapes how the prospect thinks before you present a solution. Most reps find one framework that fits their motion and stick with it.",
        },
        {
          q: "Can I use different frameworks for different calls — MEDDPICC for enterprise, BANT for SMB?",
          a: "Yes. Templates load per meeting. Choose the framework that fits the deal before each call. Nothing is locked to an account or deal type.",
        },
        {
          q: "Does Thunder Kitty track which framework items I covered during the call?",
          a: "Yes. The real-time agenda panel shows which items have been discussed as the call progresses. If you\u2019re ten minutes from the end and haven\u2019t touched Paper Process, you\u2019ll see it before the call ends — not in the post-call regret.",
        },
        {
          q: "Can I share my call summary with my manager or sync it to Salesforce?",
          a: "Your post-call summary is a Markdown file. Copy the text into Salesforce, paste it to Slack, email it to your manager — it\u2019s a file, so it goes wherever you send it. There\u2019s no automatic CRM sync. For automatic CRM logging, you\u2019d want a dedicated call intelligence tool.",
        },
      ],

      "one-on-one": [
        {
          q: "What\u2019s covered in the 1:1 template?",
          a: "The default template covers: recent wins and progress, current blockers or challenges, priorities for the coming period, career development or longer-arc topics, and open feedback in both directions. It\u2019s designed as a starting point — most managers adapt it to the specific relationship.",
        },
        {
          q: "Can I use this for skip-levels or cross-functional 1:1s, not just direct-report meetings?",
          a: "Yes. The agenda is customizable — adjust the items to match what the conversation is actually about. Skip-levels, peer 1:1s, advisory relationships — the template structure works for any recurring one-on-one.",
        },
        {
          q: "Should I share the Thunder Kitty 1:1 notes with my direct report?",
          a: "That\u2019s your call. Your notes are files on your Mac — share them however you\u2019d share any document, or keep them as your own record. There\u2019s no automatic sharing, no notification to the other person, nothing built into the app that decides for you.",
        },
        {
          q: "Does Thunder Kitty capture follow-up actions from 1:1s?",
          a: "The per-item summary captures what was discussed for each agenda topic, including action items mentioned in context. Thunder Kitty doesn\u2019t push tasks to a project management tool — you take the summary and decide what to do with it.",
        },
      ],

      standup: [
        {
          q: "What\u2019s in the standup template?",
          a: "The default structure covers: what was completed yesterday, what\u2019s planned for today, and any blockers or dependencies. There\u2019s also a parking lot section for items that come up but aren\u2019t the main thread — useful for not derailing the standup with tangents.",
        },
        {
          q: "Can Thunder Kitty handle async standups?",
          a: "No. Thunder Kitty records live, synchronous meetings. For async standups — where people record or write updates separately — you\u2019d need a different tool. Thunder Kitty is built for conversations, not asynchronous workflows.",
        },
        {
          q: "Is the standup template useful even if I\u2019m the only one on my team using Thunder Kitty?",
          a: "Yes. You have an accurate record of what your team discussed, searchable across every standup you\u2019ve attended. Nothing on your teammates\u2019 end changes — they don\u2019t need to use Thunder Kitty or even know you\u2019re using it.",
        },
        {
          q: "What if someone misses the standup? Can I share the transcript?",
          a: "Yes. Your transcript is a plain Markdown file. Share it to Slack, email it, paste it into Notion — however your team handles async communication. No export step, no dashboard. It\u2019s already a file.",
        },
      ],

      "project-kickoff": [
        {
          q: "What\u2019s covered in the project kickoff template?",
          a: "The default template includes: project goals and success metrics, stakeholder roles and responsibilities, scope definition and explicit out-of-scope items, key milestones and timeline, decisions that need to be made in this meeting, and an open questions log to track what\u2019s unresolved coming out of the kickoff.",
        },
        {
          q: "Can I use this template for client kickoffs, not just internal ones?",
          a: "Yes. The agenda structure works for both. Add or remove items based on what the relationship and project need — external clients often warrant more time on scope and success metrics; internal kickoffs might go deeper on roles and process.",
        },
        {
          q: "Does Thunder Kitty capture action items from the kickoff automatically?",
          a: "The per-item summary will capture what was discussed for each agenda topic, including any action items that came up in context. There\u2019s no automatic task extraction to a project management tool — you take the summary and decide what gets logged where.",
        },
        {
          q: "Can I share the kickoff notes with the full project team?",
          a: "Yes. Your notes are a Markdown file. Share it over email, Slack, Notion, Confluence — wherever your team works. Copy the text, attach the file, or paste the content directly. There\u2019s no built-in team distribution.",
        },
      ],

      "user-research": [
        {
          q: "What\u2019s in the user research template?",
          a: "The default structure covers: participant context and background, the specific problem or job-to-be-done being explored, current solutions and workarounds the participant uses, pain points and friction, and moments of delight or things working well. It\u2019s designed for synthesis across multiple interviews — the same agenda across every session makes pattern-finding much easier.",
        },
        {
          q: "Can I search across multiple user research sessions to find patterns?",
          a: "Yes. Your notes are Markdown files — open all of them in Obsidian or a similar app for cross-session synthesis, or connect Claude Desktop to your notes folder and ask questions across every interview you\u2019ve done. Thunder Kitty runs as a local MCP server, so you can query your entire research archive from Claude\u2019s interface without copy-pasting.",
        },
        {
          q: "Does Thunder Kitty work for moderated usability tests, not just interviews?",
          a: "Yes. As long as the session is happening on your Mac — screen share via Zoom, FaceTime, or any other platform — Thunder Kitty can capture it. Works for think-aloud protocols, card sorting sessions, moderated walkthroughs, and any other format where conversation is part of the research.",
        },
        {
          q: "Does recording user research sessions require participant consent?",
          a: "Yes, typically. Requirements vary by jurisdiction, organization, and whether your research falls under an IRB protocol. Thunder Kitty doesn\u2019t join as a bot or send any notification — disclosure is your responsibility, as it would be with any recording method. Many researchers include recording consent in their screener or intro script.",
        },
      ],
    }, // end bySlug
  }, // end templatePages

  // ─────────────────────────────────────────────
  // /local-first/ PAGE (standalone)
  // ─────────────────────────────────────────────

  localFirst: [
    {
      q: "What\u2019s the difference between \u2018local-first\u2019 and \u2018end-to-end encrypted\u2019?",
      a: "End-to-end encryption means data is encrypted before it leaves your device and decrypted at its destination — but it still travels to someone else\u2019s servers. The data exists on external infrastructure, encrypted. Local-first means the data never leaves your device at all. Not encrypted-then-transmitted. Not stored somewhere encrypted. Just: never sent. The distinction matters when the question is whether any third party ever has access to your conversations — even theoretically, even encrypted.",
    },
    {
      q: "How is \u2018local-first\u2019 different from \u2018privacy-first\u2019 as a marketing claim?",
      a: "Privacy-first describes a policy — a company\u2019s stated intentions about how they\u2019ll handle your data. Local-first describes an architecture — your data physically cannot reach a third party because it\u2019s processed on your device. One is a promise that depends on a company keeping it. The other is a technical constraint that doesn\u2019t require trust.",
    },
    {
      q: "Can I actually verify that nothing leaves my Mac?",
      a: "Yes — in several ways. Turn on Airplane Mode and record a meeting: transcription still works. Open Activity Monitor \u2192 Network tab while recording: you\u2019ll see no Thunder Kitty network activity. Block Thunder Kitty in your Mac\u2019s firewall: it still works. Your notes are plain Markdown files in your Documents folder: open them in any text editor. The claims are testable. We\u2019d rather you test them than take our word for it.",
    },
    {
      q: "If Thunder Kitty goes away as a company, what happens to my data?",
      a: "Nothing changes. Your notes and transcripts are plain Markdown files on your Mac. You lose the recording and transcription functionality. You don\u2019t lose your data — it was never ours. Open your notes in Obsidian, iA Writer, VS Code, or any text editor. They\u2019re files, and files outlast any app.",
    },
    {
      q: "Does local-first mean Thunder Kitty can never add team features?",
      a: "Not necessarily. Local-first describes where data lives, not what features are possible. Team features built on shared local files — a shared Dropbox or iCloud Drive folder full of Markdown files, visible to everyone on the team — are entirely compatible with local-first principles. Team features that require routing audio or transcripts through a cloud service are not. The constraint is architectural, not a product philosophy against collaboration.",
    },
    {
      q: "Is there a quality trade-off for going local-first?",
      a: "There was, and it\u2019s narrowing fast. Apple\u2019s SpeechAnalyzer on macOS 26 is genuinely excellent for transcription — fast, accurate, and it runs on-device with zero latency. For AI summaries, on-device models are strong for structured use cases like per-agenda-item summaries, and improving with every new model release. If you want more powerful inference, Thunder Kitty lets you connect your own Claude, OpenAI, or Gemini API key — your data goes to your account under your terms. The local-first architecture doesn\u2019t force a quality ceiling. It forces a choice about what trade-offs you\u2019re making consciously.",
    },
  ],
};
