---
name: lead-source-roi-tracker
description: "Use this skill whenever an agent says 'Build a lead-source roi tracker', 'Create a lead-source roi tracker for this client', 'Help me prepare a lead-source roi tracker', or needs support for this job: Shows which channels actually produce closed deals. Produces a client-ready Excel workbook named Lead_Source_ROI_Tracker.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Shows which channels actually produce closed deals. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a lead-source roi tracker"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Lead sources | Every channel the agent pays for or works consistently | Zillow, open houses, referrals, postcards, Google ads |
| Spend | Monthly or campaign cost for each source | $1,500 portal spend, $420 postcards |
| Results | Leads, appointments, clients, closings, volume, and GCI | 38 leads, 6 appointments, 1 closing, $11,200 GCI |
| Time period | Month, quarter, or year being measured | Q2 2026 |

## Output Format
An Excel workbook named `Lead_Source_ROI_Tracker.xlsx` with the following structure:

- Lead Source Log with source, spend, lead count, appointment count, signed clients, closings, GCI, referral value, and notes
- ROI Dashboard with cost per lead, cost per appointment, cost per closing, conversion rates, net GCI, and source ranking
- Decision Plan with keep, test, cut, and improve recommendations for each source

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Separate paid cost from time-heavy but low-cash-cost channels so the agent sees both financial and effort return.
4. Calculate conversion rates from lead to appointment, appointment to client, and client to closing.
5. Rank sources by net GCI, cost per closing, and strategic value. Do not over-credit a source when attribution is uncertain.
6. Add a recommendation for each source: keep, improve, test smaller, pause, or cut.
7. Create a dashboard that makes budget reallocation easy to explain.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
For ad-channel decisions, do not recommend targeting or excluding people using protected-class traits or housing-restricted categories.

## Sample Trigger Phrases
- "Build a lead-source roi tracker"
- "Create a lead-source roi tracker for this client"
- "Help me prepare a lead-source roi tracker"
- "Turn these notes into a lead-source roi tracker"
- "I need a client-ready lead-source roi tracker"
