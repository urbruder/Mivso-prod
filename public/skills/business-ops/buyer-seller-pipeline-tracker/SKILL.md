---
name: buyer-seller-pipeline-tracker
description: "Use this skill whenever an agent says 'Build a buyer/seller pipeline tracker', 'Create a buyer/seller pipeline tracker for this client', 'Help me prepare a buyer/seller pipeline tracker', or needs support for this job: A structured pipeline view across both buyer and seller deals. Produces a client-ready Excel workbook named Buyer_Seller_Pipeline_Tracker.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: A structured pipeline view across both buyer and seller deals. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a buyer/seller pipeline tracker"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer opportunities | Active and warm buyer relationships | 8 buyers from online leads, referrals, and open houses |
| Seller opportunities | Active and warm listing opportunities | 4 listing appointments and 6 future sellers |
| Stage rules | Pipeline stages the agent uses or wants to use | New, Qualified, Appointment, Active, Offer, Under Contract, Closed |
| Forecast assumptions | Price, probability, commission, and likely close timing | $700,000, 30 percent, Q4 |

## Output Format
An Excel workbook named `Buyer_Seller_Pipeline_Tracker.xlsx` with the following structure:

- Buyer Pipeline sheet with buyer name, budget, financing status, search area, urgency, stage, next step, and probability
- Seller Pipeline sheet with seller name, address or area, likely price, motivation, timeline, stage, next step, and probability
- Dashboard sheet with total pipeline, hot opportunities, overdue follow-ups, projected volume, and conversion gaps

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Keep buyer and seller pipelines separate enough to manage but summarized together on one dashboard.
4. Normalize inconsistent stage names into the agreed stage rules.
5. Add next actions to every row. If a row has no next action, mark it as incomplete.
6. Create overdue follow-up alerts and expected value by side.
7. Summarize what the agent should do this week to move the highest-value opportunities forward.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not include protected-class details or steering language in buyer search notes or seller motivation notes.

## Sample Trigger Phrases
- "Build a buyer/seller pipeline tracker"
- "Create a buyer/seller pipeline tracker for this client"
- "Help me prepare a buyer/seller pipeline tracker"
- "Turn these notes into a buyer/seller pipeline tracker"
- "I need a client-ready buyer/seller pipeline tracker"
