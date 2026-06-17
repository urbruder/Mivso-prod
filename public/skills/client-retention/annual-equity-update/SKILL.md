---
name: annual-equity-update
description: "Use this skill whenever an agent needs an annual equity update, asks to build an annual equity update, or needs help with this catalog job: A friendly yearly equity update that surfaces hidden seller intent. Produces an Excel workbook for Annual Equity Update."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for Annual Equity Update. It helps the agent handle this catalog job: A friendly yearly equity update that surfaces hidden seller intent. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build an annual equity update"
2. Provide the following practical inputs:
- Client relationship: Past client, active client, referral partner, sphere contact, or unhappy client context
- Reason for touchpoint: Anniversary, equity update, conflict, relocation, post-close issue, milestone, or nurture event
- Known facts: Personalization details the client has permission to use
- Tone and next step: Desired voice, call to action, and communication channel
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Client relationship | Past client, active client, referral partner, sphere contact, or unhappy client context | Past buyer who closed two years ago and referred a coworker |
| Reason for touchpoint | Anniversary, equity update, conflict, relocation, post-close issue, milestone, or nurture event | Home purchase anniversary and possible move-up conversation |
| Known facts | Personalization details the client has permission to use | Bought a townhome in 2024 and asked about renovations last year |
| Tone and next step | Desired voice, call to action, and communication channel | Warm text plus email, invite to annual check-in |

## Output Format
An Excel workbook named Annual_Equity_Update_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for Annual Equity Update; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Convert the source material into a polished Excel workbook that directly supports this job: A friendly yearly equity update that surfaces hidden seller intent.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Use only personalization the agent has permission to use. Do not reference protected-class details, private family information, medical facts, or financial assumptions. Respect unsubscribe, do-not-contact, privacy, and brokerage communication policies.

## Sample Trigger Phrases
- "Build an annual equity update"
- "Create a client-ready annual equity update"
- "Turn these notes into an annual equity update"
- "Help me prepare an annual equity update for my next real estate conversation"
- "I need a polished annual equity update deliverable"
