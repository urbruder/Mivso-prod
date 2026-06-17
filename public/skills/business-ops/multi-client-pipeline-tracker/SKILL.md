---
name: multi-client-pipeline-tracker
description: "Use this skill whenever an agent says 'Build a multi-client pipeline tracker', 'Create a multi-client pipeline tracker for this client', 'Help me prepare a multi-client pipeline tracker', or needs support for this job: Keeps context straight across 10–30 active relationships and stages. Produces a client-ready Excel workbook named Multi_Client_Pipeline_Tracker.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Keeps context straight across 10–30 active relationships and stages. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a multi-client pipeline tracker"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Client list | Names or initials of active and warm buyer, seller, and referral relationships | Maya seller lead, Roberts buyers, Chen referral |
| Current stage | Where each relationship stands right now | Pre-listing, touring, offer, under contract, post-close |
| Money and timing | Estimated deal value, probability, and expected month | $650,000 buyer, 40 percent probability, August |
| Last touch and next step | Most recent contact and what should happen next | Texted Friday; send homes under $700K Monday |

## Output Format
An Excel workbook named `Multi_Client_Pipeline_Tracker.xlsx` with the following structure:

- Pipeline sheet with one row per relationship and columns for client, side, stage, motivation, next action, due date, value, probability, risk, and owner
- Dashboard sheet with active clients by stage, urgent follow-ups, expected GCI, and stalled-client warnings
- Follow-Up Queue sheet sorted by next due date with message angle and communication channel

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Normalize messy relationship notes into one clean pipeline table. Keep one row per active opportunity.
4. Assign each client a stage and a next action. If the next action is vague, rewrite it as an observable task.
5. Flag stalled relationships when the last contact is older than the stage warrants.
6. Calculate expected pipeline value by multiplying estimated commission by probability. Keep the math in the workbook, not in prose.
7. Create a dashboard that lets the agent answer: who needs attention today, where revenue is concentrated, and what is at risk.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not include protected-class information, family status, religion, national origin, disability, or demographic assumptions in the client profile or sorting logic.

## Sample Trigger Phrases
- "Build a multi-client pipeline tracker"
- "Create a multi-client pipeline tracker for this client"
- "Help me prepare a multi-client pipeline tracker"
- "Turn these notes into a multi-client pipeline tracker"
- "I need a client-ready multi-client pipeline tracker"
