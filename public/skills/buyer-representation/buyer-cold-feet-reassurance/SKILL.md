---
name: buyer-cold-feet-reassurance
description: "Use this skill whenever an agent says 'Build a buyer cold-feet reassurance', 'Create a buyer cold-feet reassurance for this client', 'Help me prepare a buyer cold-feet reassurance', or needs support for this job: Logic-driven messages that calm post-offer overpaying anxiety. Produces a client-ready Word document named Buyer_Cold_Feet_Reassurance.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Logic-driven messages that calm post-offer overpaying anxiety. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a buyer cold-feet reassurance"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer concern | What the buyer is worried about after offer, inspection, appraisal, or acceptance | Afraid they overpaid after getting under contract |
| Deal facts | Price, comps, payment, contingencies, deadline, and current stage | $675,000 accepted offer, inspection tomorrow |
| Buyer personality | Data-driven, anxious, decisive, first-time, family-influenced, or investor | First-time and anxious |
| Agent recommendation | Whether to continue, pause, renegotiate, gather info, or walk away if allowed | Review comps and inspection before deciding |

## Output Format
A Word document named `Buyer_Cold_Feet_Reassurance.docx` with the following structure:

- Client Message section with a calm text or email the agent can send
- Decision Framework section separating facts, fears, unknowns, and next action
- Risk Check section covering payment comfort, inspection concerns, appraisal risk, resale concern, and backup options

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Validate the emotion first, then move the buyer from panic to a structured decision.
4. Use facts already known and clearly label unknowns that need inspection, lender, attorney, or broker input.
5. Do not pressure the buyer to continue. Present choices and consequences calmly.
6. Create a message the agent can send and a separate internal talking-points section.
7. End with a concrete next step and deadline.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not tell the buyer to ignore contract deadlines, waive rights casually, or rely on unverified legal or financial conclusions.

## Sample Trigger Phrases
- "Build a buyer cold-feet reassurance"
- "Create a buyer cold-feet reassurance for this client"
- "Help me prepare a buyer cold-feet reassurance"
- "Turn these notes into a buyer cold-feet reassurance"
- "I need a client-ready buyer cold-feet reassurance"
