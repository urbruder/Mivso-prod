---
name: client-event-roi-debrief
description: "Use this skill whenever an agent says 'Build a client event roi debrief', 'Create a client event roi debrief for this client', 'Help me prepare a client event roi debrief', or needs support for this job: Tracks attendees, cost-per-head, and referrals from appreciation events. Produces a client-ready Excel workbook named Client_Event_ROI_Debrief.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Tracks attendees, cost-per-head, and referrals from appreciation events. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a client event roi debrief"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Event details | Type, date, location, goal, and target audience | Spring pie giveaway for past clients |
| Attendance list | Who attended and any notes from the event | 42 attendees, 8 past clients brought guests |
| Costs | Venue, food, gifts, ads, staff, postage, and supplies | $1,850 total spend |
| Outcomes | Referrals, appointments, reviews, introductions, or social engagement | 3 seller referrals, 6 review promises |

## Output Format
An Excel workbook named `Client_Event_ROI_Debrief.xlsx` with the following structure:

- Event Snapshot sheet with event goal, budget, actual spend, attendance, attendee type, and headline result
- Attendee Follow-Up sheet with attendee, relationship, conversation notes, referral signals, next action, due date, and owner
- ROI Dashboard with cost per attendee, referrals generated, opportunities created, projected GCI, and next-event recommendations

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Turn event notes into a measurable follow-up plan and ROI view.
4. Distinguish immediate wins from long-term relationship value. Do not overstate ROI from weak signals.
5. Create a follow-up queue within 48 hours, 7 days, and 30 days after the event.
6. Calculate cost per attendee and projected opportunity value using clearly labeled assumptions.
7. End with three recommendations for the next event: keep, improve, and stop doing.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Respect consent and privacy when using attendee data. Do not market to people who opted out, and avoid protected-class targeting language.

## Sample Trigger Phrases
- "Build a client event roi debrief"
- "Create a client event roi debrief for this client"
- "Help me prepare a client event roi debrief"
- "Turn these notes into a client event roi debrief"
- "I need a client-ready client event roi debrief"
