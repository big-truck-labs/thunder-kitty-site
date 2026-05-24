module.exports = [
  {
    slug: "sales",
    name: "Sales Call Templates",
    headline: "Sales call templates built for the way deals actually work",
    subheadline:
      "MEDDPICC, BANT, SPIN, and Challenger — load any framework before your next call, check items off as you go, and get a per-item summary when it's done.",
    intro:
      "The best sales calls aren't improvised. They follow a framework — a sequence of questions designed to surface the right information at the right time, in the right order. The difference between a discovery call that moves a deal forward and one that produces a vague 'let me think about it' is usually whether you understood the buying process, identified the real pain, and mapped the decision-making structure before you started talking about your product. Thunder Kitty ships with four of the most proven sales frameworks built in.",
    the_problem: {
      heading: "What you miss when you're taking notes instead of listening",
      body: "The moment you look down to write something, you miss something else — the hesitation before the budget answer, the unsolicited mention of a competitor, the thing the economic buyer said that your champion didn't follow up on. Most reps compensate by taking lighter notes and reconstructing post-call from memory. The details that matter most fade fastest. A structured framework loaded before the call means you're not writing the questions — you're tracking whether you've covered them. Thunder Kitty does the tracking. You do the listening.",
    },
    workflow: {
      heading: "What a discovery call looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the call",
          body: "Load a framework — MEDDPICC for enterprise, BANT for mid-market qualification, SPIN for discovery, Challenger for insight-led selling. Your agenda items are ready. You walk in knowing exactly what you need to cover and in what order.",
        },
        {
          label: "During the call",
          body: "Hit record. Thunder Kitty transcribes in real time on your Mac with no bot and no internet required. The agenda panel tracks which framework items have been covered. If you're ten minutes from the end and haven't touched Paper Process or Champion, you'll see it — while you can still get there.",
        },
        {
          label: "After the call",
          body: "Each framework item gets its own AI summary — what you asked, what they said, what you learned on that dimension — generated entirely on your Mac. Your call notes save as a plain Markdown file. Searchable across your entire pipeline. Pattern-match objections. Review what the economic buyer actually said three calls ago. Build institutional knowledge that compounds over time.",
        },
      ],
    },
    real_time: {
      heading: "Real-time framework tracking, on your Mac",
      body: "Thunder Kitty tracks your sales framework in real time as the call progresses. Every item you load — Metrics, Economic Buyer, Decision Criteria, Champion — is tracked live. You can see at a glance which dimensions you've covered and which you haven't, without breaking eye contact or losing the thread of the conversation. When the call ends, each item gets its own AI summary generated entirely on your Mac. No cloud inference, no data leaving your device. Your prospect's words — pricing discussions, competitive intelligence, budget signals — stay between you and them.",
    },
    show_items: true,
    templates: [
      {
        name: "MEDDPICC",
        description:
          "The enterprise sales qualification framework. Maps the full buying committee — economic buyer, champion, decision process, paper process — so nothing surprises you at the finish line.",
        items: [
          {
            name: "Metrics",
            questions: [
              "What specific results are you hoping to achieve with this investment?",
              "How are those results measured today?",
            ],
          },
          {
            name: "Economic Buyer",
            questions: [
              "Who ultimately signs off on this kind of purchase?",
              "Have you worked with them on similar initiatives before?",
            ],
          },
          {
            name: "Decision Criteria",
            questions: [
              "What factors will you use to compare solutions?",
              "Which features or outcomes matter most to your team?",
            ],
          },
          {
            name: "Decision Process",
            questions: [
              "What steps need to happen internally to get approval?",
              "Who else needs to be involved in that process?",
            ],
          },
          {
            name: "Paper Process",
            questions: [
              "What does your legal or procurement process typically look like?",
              "How long does it usually take to finalize contracts?",
            ],
          },
          {
            name: "Identify Pain",
            questions: [
              "What are the biggest challenges you're trying to solve?",
              "How are those challenges impacting your business today?",
            ],
          },
          {
            name: "Champion",
            questions: [
              "Who on your team is driving this initiative forward?",
              "How do they see this solving the problem?",
            ],
          },
          {
            name: "Competition",
            questions: [
              "What other solutions are you considering?",
              "What do you like or dislike about them so far?",
            ],
          },
        ],
      },
      {
        name: "BANT",
        description:
          "Budget, Authority, Need, Timeline. The classic qualification framework for mid-market deals where speed and clarity matter more than committee mapping.",
        items: [
          {
            name: "Budget",
            questions: [
              "What budget has been allocated to solve this problem?",
              "Who controls that budget, and has it been approved?",
            ],
          },
          {
            name: "Authority",
            questions: [
              "Who is responsible for making the final decision?",
              "Who else is involved in evaluating solutions?",
            ],
          },
          {
            name: "Need",
            questions: [
              "What's the specific problem or challenge you're looking to solve?",
              "How critical is it to solve this now?",
            ],
          },
          {
            name: "Timeline",
            questions: [
              "What's your ideal timeline for implementing a solution?",
              "Are there any upcoming events or deadlines driving this?",
            ],
          },
        ],
      },
      {
        name: "SPIN",
        description:
          "Situation, Problem, Implication, Need-Payoff. A discovery framework built around questions that surface pain and build urgency without pitching.",
        items: [
          {
            name: "Situation",
            questions: [
              "Tell me about your current process or system.",
              "What tools or methods are you using today?",
            ],
          },
          {
            name: "Problem",
            questions: [
              "What challenges or inefficiencies are you facing?",
              "How is that impacting your results or team performance?",
            ],
          },
          {
            name: "Implication",
            questions: [
              "What happens if this challenge isn't addressed?",
              "How does this affect other parts of your business?",
            ],
          },
          {
            name: "Need-Payoff",
            questions: [
              "If you could solve this challenge, what would that mean for your team or business?",
              "How would success look for you?",
            ],
          },
        ],
      },
      {
        name: "Challenger",
        description:
          "Teach, Tailor, Take Control. For reps who lead with insight — reframe the prospect's thinking before you ever present a solution.",
        items: [
          {
            name: "Teach",
            questions: [
              "Can I share what we've learned from working with companies like yours?",
              "Are you open to exploring a different approach that others in your industry have seen success with?",
            ],
          },
          {
            name: "Tailor",
            questions: [
              "Based on your business, here's where we see the biggest opportunity. Does that resonate with you?",
              "How does that align with your team's priorities or metrics?",
            ],
          },
          {
            name: "Take Control",
            questions: [
              "What might prevent this from moving forward?",
              "Can we agree on the next step today if this feels like a fit?",
            ],
          },
        ],
      },
    ],
    cta_note:
      "Load a template before your next discovery call. Check items off as you go. Walk away with a structured record of the conversation.",
  },

  {
    slug: "one-on-one",
    name: "1:1 Meeting Template",
    headline: "1:1 meetings that actually develop people",
    subheadline:
      "A structured agenda for weekly check-ins — wins, priorities, challenges, feedback, growth. Never run out of things to say, never forget what you decided.",
    intro:
      "Most 1:1s are status updates dressed up as something more. The manager asks what's going on, the direct report runs through their task list, and both leave feeling like they covered the bases without covering anything that actually matters. The problem isn't the people — it's the absence of structure. A consistent agenda creates space for the conversations that don't happen otherwise: real feedback, genuine development, the things someone has been meaning to raise for three weeks.",
    the_problem: {
      heading: "Why most 1:1s stay shallow",
      body: "Without a fixed structure, 1:1s default to whatever is most urgent or most comfortable. Wins don't get acknowledged. Growth conversations get deferred indefinitely. Feedback flows in one direction, if at all. The manager leaves thinking everything is fine. The direct report leaves with the same unresolved concern they had last week. A consistent agenda doesn't make 1:1s rigid — it makes them honest. The same seven questions every week means nothing falls through, patterns emerge over time, and both people walk in knowing what the meeting is actually for.",
    },
    workflow: {
      heading: "What a 1:1 looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the meeting",
          body: "Load the 1:1 template from Thunder Kitty's built-in library. Seven agenda items are ready: wins, priorities, progress, challenges, feedback in both directions, growth, and next steps. Add anything specific to this week. You walk in prepared.",
        },
        {
          label: "During the meeting",
          body: "Hit record. Thunder Kitty transcribes in real time on your Mac with no bot and no upload. The agenda panel stays visible — you can see which items you've covered and which you haven't without breaking the conversation. Real-time tracking means you always know if you're running short on time before feedback and growth get cut.",
        },
        {
          label: "After the meeting",
          body: "Each agenda item gets its own AI summary generated on your Mac — what came up under challenges, what was decided on next steps, what your direct report said they want to develop. Notes save as plain Markdown files. Search across every 1:1 in Spotlight. The pattern of what keeps coming up becomes visible over time.",
        },
      ],
    },
    real_time: {
      heading: "The agenda item you always skip",
      body: "In most 1:1s, growth and development is the last item on the agenda and the first one to get cut when time runs short. Thunder Kitty tracks your agenda in real time as the meeting progresses. If you're fifteen minutes in and haven't touched feedback or growth, you'll see it — while there's still time to get there. Post-meeting, each item gets its own AI summary on your Mac. Over time, you have a searchable record of every commitment, every development goal, every piece of feedback exchanged in every 1:1 you've ever run.",
    },
    show_items: false,
    templates: [
      {
        name: "1:1 Meeting",
        description:
          "Wins, priorities, progress against goals, challenges, feedback in both directions, growth and development, and next steps with clear owners.",
        items: [
          { name: "Wins", questions: ["What went well since our last 1:1?"] },
          {
            name: "Priorities",
            questions: ["What are your top 2–3 focus areas this week?"],
          },
          {
            name: "Progress",
            questions: ["How are we tracking against OKRs or personal goals?"],
          },
          { name: "Challenges", questions: ["What's blocking progress?"] },
          {
            name: "Feedback",
            questions: [
              "What feedback do you have for me?",
              "What feedback would you like from me?",
            ],
          },
          {
            name: "Growth & Development",
            questions: [
              "What skills or experiences do you want to build next?",
            ],
          },
          {
            name: "Next Steps",
            questions: ["What did we decide, who owns it, and by when?"],
          },
        ],
      },
    ],
    cta_note:
      "Try it for one 1:1 this week. Same structure every time means patterns emerge — what your direct report keeps raising, what keeps getting skipped.",
  },

  {
    slug: "standup",
    name: "Daily Standup Template",
    headline: "Standups that take five minutes and actually help",
    subheadline:
      "A structured daily standup template — what you shipped, what's next, what's blocked. Built into Thunder Kitty's agenda panel.",
    intro:
      "A daily standup is supposed to take ten minutes. When it takes thirty, something has gone wrong — usually because there's no structure enforcing the format, and problem-solving starts happening in a meeting designed for status. The standup isn't where you fix the blocker. It's where you surface it so the right people know it exists. A tight template keeps it honest.",
    the_problem: {
      heading: "Why standups drift",
      body: "Without a consistent agenda, standups drift toward whoever talks most and away from whoever needs help most. Blockers don't surface because there's no explicit prompt to surface them. Team dependencies get missed because no one asked. The meeting ends and two people on the call still don't know that their work is about to collide. A structured template — asked the same way, in the same order, every day — creates a reliable surface for the information the team actually needs to function.",
    },
    workflow: {
      heading: "What a standup looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the standup",
          body: "Load the standup template. Five items: what you completed since last time, what you're working on today, blockers, team dependencies, upcoming deadlines. The agenda is ready. Everyone knows what's coming.",
        },
        {
          label: "During the standup",
          body: "Hit record. Thunder Kitty transcribes in real time on your Mac. The agenda panel tracks which items have been covered. If blockers haven't come up and you're two minutes from the end, you'll see it. The meeting stays on track because the structure is visible.",
        },
        {
          label: "After the standup",
          body: "Each agenda item gets its own AI summary on your Mac. Over time you have a searchable record of every blocker raised, every dependency flagged, every deadline mentioned across every standup. Pattern-match what keeps surfacing. See which team members consistently flag dependencies that aren't getting resolved.",
        },
      ],
    },
    real_time: {
      heading: "A running record of every blocker your team has ever raised",
      body: "Most standups produce no artifact. The blocker gets mentioned, someone nods, and by the next day everyone has forgotten whether it was resolved or just dropped. Thunder Kitty's per-item summaries mean every standup produces a structured record: what each person completed, what they're working on, what's in their way. Searchable across your entire standup history. The blocker that keeps coming up week after week becomes visible in a way it never was when standup notes lived in someone's memory.",
    },
    show_items: false,
    templates: [
      {
        name: "Daily Standup",
        description:
          "Since last standup, today's focus, blockers, team dependencies, and upcoming deadlines.",
        items: [
          { name: "Since Last Standup", questions: ["What did you complete?"] },
          { name: "Today", questions: ["What will you work on today?"] },
          { name: "Blockers", questions: ["Anything in your way?"] },
          {
            name: "Team Needs",
            questions: ["Any dependencies or cross-team help needed?"],
          },
          {
            name: "Upcoming Deadlines",
            questions: ["Any near-term milestones or risks to flag?"],
          },
        ],
      },
    ],
    cta_note:
      "Load the standup template before your next sync. Check off items as they're covered. Done in five minutes.",
  },

  {
    slug: "project-kickoff",
    name: "Project Kickoff Template",
    headline: "Start every project with the same conversation",
    subheadline:
      "Objectives, scope, roles, timeline, risks, communication plan. The six things every project team needs to align on before work begins.",
    intro:
      "Most project failures aren't technical failures. They're alignment failures — someone had a different understanding of scope, or didn't know who owned a decision, or assumed a timeline that was never actually agreed to. A structured kickoff meeting is the one opportunity to surface those gaps before they become problems. The same agenda every time means nothing falls through the first conversation — which is the one that sets the trajectory for everything that follows.",
    the_problem: {
      heading: "What gets skipped when kickoffs don't have structure",
      body: "In an unstructured kickoff, the conversation gravitates toward what's exciting — the objectives, the deliverables, the vision. What gets skipped is everything harder to discuss: who's actually accountable when something goes wrong, what's explicitly out of scope, what the risks are and how you'll handle them, how decisions will get made. Six weeks into the project, those gaps surface as conflict. The kickoff is the cheapest moment to resolve them. Thunder Kitty's project kickoff template structures the conversation so nothing important gets skipped in the enthusiasm of a project's first meeting.",
    },
    workflow: {
      heading: "What a project kickoff looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the meeting",
          body: "Load the project kickoff template. Seven items: objectives and success criteria, scope and deliverables, roles and responsibilities, timeline, risks and assumptions, communication plan, and next steps with owners. Add anything project-specific. The agenda is ready before the first person joins.",
        },
        {
          label: "During the meeting",
          body: "Hit record. Thunder Kitty transcribes in real time on your Mac. The agenda panel tracks which items have been covered. Real-time tracking means you'll know if you're twenty minutes in and haven't touched risks and assumptions — while there's still time to get there before the meeting ends.",
        },
        {
          label: "After the meeting",
          body: "Each agenda item gets its own AI summary generated on your Mac — what was decided on scope, who owns what, what risks were identified, what the communication cadence will be. Share the summary with stakeholders who weren't in the room. The kickoff record is a plain Markdown file you own and can reference for the life of the project.",
        },
      ],
    },
    real_time: {
      heading: "The section that always gets cut",
      body: "Risks and assumptions is the agenda item that most kickoffs never reach. The conversation runs long on objectives and scope, time runs out, and everyone leaves having skipped the most important discussion. Thunder Kitty tracks your kickoff agenda in real time. If you're running short and risks haven't been covered, you'll see it while you can still adjust. Post-meeting, each section gets its own AI summary — so the decisions made in the kickoff are captured in structured, searchable form from day one of the project.",
    },
    show_items: false,
    templates: [
      {
        name: "Project Kickoff",
        description:
          "Objectives and success criteria, scope and deliverables, roles and responsibilities, timeline and milestones, risks and assumptions, communication plan, and next steps with owners and dates.",
        items: [
          {
            name: "Objectives & Success Criteria",
            questions: [
              "What problem are we solving?",
              "How will we measure success?",
            ],
          },
          {
            name: "Scope & Deliverables",
            questions: [
              "What's in scope vs. out of scope?",
              "What are the key milestones and deliverables?",
            ],
          },
          {
            name: "Roles & Responsibilities",
            questions: [
              "Who is Responsible, Accountable, Consulted, and Informed?",
            ],
          },
          {
            name: "Timeline & Plan",
            questions: ["What are the phases and deadlines?"],
          },
          {
            name: "Risks & Assumptions",
            questions: [
              "What could derail us, and how will we mitigate it?",
              "What assumptions are we making?",
            ],
          },
          {
            name: "Communication Plan",
            questions: [
              "What cadence, channels, and decision process will we use?",
            ],
          },
          {
            name: "Next Steps",
            questions: ["Immediate actions, owners, and dates."],
          },
        ],
      },
    ],
    cta_note:
      "Use the same kickoff template for every project. Consistent structure means consistent alignment — and a searchable record of what every team agreed to.",
  },

  {
    slug: "user-research",
    name: "User Research Interview Template",
    headline: "Research interviews that surface what people actually do",
    subheadline:
      "A structured interview guide for discovery calls — context, goals, workflows, pain points, workarounds, decision process, and standout quotes.",
    intro:
      "Good user research isn't about asking people what they want. It's about understanding what they actually do, where it breaks down, and how they cope. The difference between a research session that changes your product direction and one that confirms your existing assumptions is usually the quality of the questions — and whether you had the structure to get past surface answers to the workarounds and hacks that reveal what's really happening.",
    the_problem: {
      heading: "Why research sessions produce less than they should",
      body: "Most research sessions go well on the first few questions — context, role, current tools — and run out of time before reaching the questions that matter most: decision criteria, workarounds, what would actually trigger a behavior change. Without a consistent structure, you also can't compare across sessions. If you asked about pain points differently in session three than session seven, you can't pattern-match the responses. A consistent interview template means every session covers the same ground, in the same order, so synthesis across ten participants is comparing structured notes rather than reconstructing from memory.",
    },
    workflow: {
      heading: "What a research session looks like with Thunder Kitty",
      steps: [
        {
          label: "Before the session",
          body: "Load the user research template. Eight items: participant context, goals and motivations, current workflows, pain points and constraints, workarounds and hacks, decision process, standout quotes, and next steps. Add hypotheses specific to this participant. Your guide is ready.",
        },
        {
          label: "During the session",
          body: "Hit record. Thunder Kitty transcribes in real time on your Mac. The agenda panel tracks which areas you've covered — so you can see at a glance what's still ahead without losing eye contact with your participant. No frantic note-taking. No missed transitions. You stay present in the conversation.",
        },
        {
          label: "After the session",
          body: "Each interview section gets its own AI summary generated on your Mac. Synthesizing across ten sessions means comparing structured notes — pain points from session one alongside pain points from session ten — rather than rewatching recordings or reconstructing from scattered notes. The standout quotes section preserves the participant's exact language, which is usually the most valuable thing a research session produces.",
        },
      ],
    },
    real_time: {
      heading: "The workarounds section is where the product insight lives",
      body: "In most research sessions, workarounds and hacks is the question that produces the most valuable answer — and the one most likely to get cut when time runs short. Thunder Kitty tracks your interview guide in real time. If you're running long and haven't reached decision criteria or workarounds, you'll see it while you can still redirect. Post-session, each section gets its own AI summary on your Mac. Your research archive is a collection of structured, searchable notes — not a folder of recordings you'll never have time to rewatch.",
    },
    show_items: false,
    templates: [
      {
        name: "User Research Interview",
        description:
          "Participant context, goals and motivations, current workflows and tools, pain points and constraints, workarounds and hacks, decision process and criteria, standout quotes and observations, and next steps.",
        items: [
          {
            name: "Participant & Context",
            questions: ["Role, company, and relevant background."],
          },
          {
            name: "Goals & Motivations",
            questions: ["What outcomes are you aiming for?"],
          },
          {
            name: "Workflows & Tools",
            questions: ["How do you do this today?"],
          },
          {
            name: "Pain Points & Constraints",
            questions: [
              "Where does it break down?",
              "Any time, cost, policy, or compliance constraints?",
            ],
          },
          {
            name: "Workarounds & Hacks",
            questions: ["How do you cope today?"],
          },
          {
            name: "Decision Process & Criteria",
            questions: [
              "Who decides and how?",
              "What would trigger adoption of a new solution?",
            ],
          },
          {
            name: "Quotes & Observations",
            questions: [
              "Capture standout phrases or behaviors in the participant's own words.",
            ],
          },
          {
            name: "Next Steps",
            questions: ["Follow-ups, artifacts, or handoffs."],
          },
        ],
      },
    ],
    cta_note:
      "Load the interview template before your next research session. Same structure every time means patterns emerge across participants.",
  },
];
