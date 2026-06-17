---
name: weekly-business-planner
description: "Use this skill whenever an agent says 'Build a weekly business planner', 'Create a weekly business planner for this client', 'Help me prepare a weekly business planner', or needs support for this job: Turns goals and pipeline into a focused weekly priority plan and time-block. Produces a client-ready Excel workbook named Weekly_Business_Planner.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Turns goals and pipeline into a focused weekly priority plan and time-block. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a weekly business planner"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Weekly goal | Production or activity target for the week | $18,000 GCI goal or 6 listing appointments |
| Current pipeline | Active buyers, sellers, listings, pendings, and hot leads | 3 listings, 4 active buyers, 2 pendings, 9 warm leads |
| Fixed commitments | Known meetings, showings, closings, family time, and office duties | Tuesday 10 AM team meeting; Friday 2 PM inspection |
| Stuck items | Anything that keeps slipping or feels unclear | Follow up with seller lead from last open house |

## Output Format
An Excel workbook named `Weekly_Business_Planner.xlsx` with the following structure:

- Dashboard sheet with weekly GCI goal, active pipeline, appointment targets, and priority scorecards
- Time Blocks sheet with a five-day schedule split into lead generation, client service, negotiation, admin, learning, and follow-up blocks
- Action Plan sheet with columns for task, owner, due date, client or deal, business lever, priority, status, and next step

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Group all incoming work into revenue growth, risk prevention, client experience, and admin cleanup.
4. Prioritize revenue-producing and deadline-sensitive items first. Give every top task a concrete next action and due date.
5. Create the Dashboard first so the agent can see the weekly focus in one view, then create the time-blocked schedule and action list.
6. Use simple labels: Do Today, Schedule, Delegate, Waiting, and Drop. Do not bury priorities in long paragraphs.
7. Add a short weekly script the agent can read aloud on Monday morning: what matters most, what must not slip, and what can wait.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Standard professionalism applies. Do not recommend skipping legal, contract, license, or client-response obligations to make room for prospecting.

## Sample Trigger Phrases
- "Build a weekly business planner"
- "Create a weekly business planner for this client"
- "Help me prepare a weekly business planner"
- "Turn these notes into a weekly business planner"
- "I need a client-ready weekly business planner"
