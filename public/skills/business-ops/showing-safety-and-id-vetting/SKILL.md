---
name: showing-safety-and-id-vetting
description: "Use this skill whenever an agent says 'Build a showing safety and id vetting', 'Create a showing safety and id vetting for this client', 'Help me prepare a showing safety and id vetting', or needs support for this job: ID-verification workflow for unknown showing prospects. Produces a client-ready Excel workbook named Showing_Safety_ID_Vetting.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: ID-verification workflow for unknown showing prospects. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a showing safety and id vetting"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Prospect details | Name, contact details, lead source, and requested property | Alex from Zillow asking to see 123 Oak today |
| Verification evidence | ID check, lender letter, proof of funds, referral source, or brokerage-approved substitute | Driver license checked at office; pre-approval pending |
| Showing context | Vacant or occupied, remote location, time of day, and whether anyone is joining | Vacant property at 6 PM; first meeting |
| Brokerage safety policy | Any required office, ID, or buddy-system rules | First meetings at office unless verified referral |

## Output Format
An Excel workbook named `Showing_Safety_ID_Vetting.xlsx` with the following structure:

- Prospect Vetting sheet with prospect name, source, ID status, lender or proof-of-funds status, meeting location, safety score, and next step
- Showing Safety Checklist with pre-showing, during-showing, and post-showing safety steps
- Scripts sheet with polite ID request, lender verification request, reschedule message, and broker escalation note

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Turn the prospect information into a simple go, pause, or broker-review recommendation.
4. Do not create discriminatory screening criteria. Base risk only on identity verification, source reliability, appointment conditions, and brokerage safety policy.
5. Write scripts that are firm, polite, and normal: the goal is safety and professionalism, not accusation.
6. Create a checklist that the agent can use before every unknown showing.
7. Highlight missing verification items and give the safest next step.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Use objective safety and identity-verification steps only. Do not evaluate prospects based on protected class, accent, family status, neighborhood, appearance, or assumptions.

## Sample Trigger Phrases
- "Build a showing safety and id vetting"
- "Create a showing safety and id vetting for this client"
- "Help me prepare a showing safety and id vetting"
- "Turn these notes into a showing safety and id vetting"
- "I need a client-ready showing safety and id vetting"
