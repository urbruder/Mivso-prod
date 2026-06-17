---
name: practice-roleplay-scenario-builder
description: "Use this skill whenever an agent says 'Build a practice roleplay scenario builder', 'Create a practice roleplay scenario builder for this client', 'Help me prepare a practice roleplay scenario builder', or needs support for this job: Detailed client profiles with hidden objections to rehearse against. Produces a client-ready Word document named Practice_Roleplay_Scenarios.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Detailed client profiles with hidden objections to rehearse against. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a practice roleplay scenario builder"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Practice topic | The conversation or skill the agent wants to rehearse | Seller pricing objection or buyer agency agreement |
| Difficulty level | Beginner, intermediate, advanced, or pressure-test | Advanced |
| Market context | Relevant price point, competition, rates, inventory, or client pressure | Low inventory and buyers worried about rates |
| Agent goal | What the agent wants the roleplay to accomplish | Get the client to agree to realistic pricing |

## Output Format
A Word document named `Practice_Roleplay_Scenarios.docx` with the following structure:

- Scenario Cards section with 5 to 10 client profiles, situation, hidden concern, emotional state, and success objective
- Objection Bank section with likely pushbacks and coaching notes
- Scorecard section with listening, clarity, empathy, compliance, next-step control, and close quality criteria

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Create realistic roleplay scenarios that feel like real client conversations, not generic sales drills.
4. Give each client a hidden motivation and emotional trigger so the agent must listen rather than recite a script.
5. Include a coaching scorecard and debrief prompts after each scenario.
6. Include one easy, one medium, and one difficult version when the agent requests a practice ladder.
7. Keep scenarios compliant and avoid stereotypes about protected classes or neighborhoods.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not build scenarios around protected-class traits. Use property, timing, price, financing, risk tolerance, and communication style instead.

## Sample Trigger Phrases
- "Build a practice roleplay scenario builder"
- "Create a practice roleplay scenario builder for this client"
- "Help me prepare a practice roleplay scenario builder"
- "Turn these notes into a practice roleplay scenario builder"
- "I need a client-ready practice roleplay scenario builder"
