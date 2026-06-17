---
name: cam-reconciliation-review
description: "Use this skill whenever an agent needs a cam reconciliation review, asks to build a cam reconciliation review, or needs help with this catalog job: Catches overcharges with CAM clause logic and dispute templates. Produces an Excel workbook for CAM Reconciliation Review."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for CAM Reconciliation Review. It helps the agent handle this catalog job: Catches overcharges with CAM clause logic and dispute templates. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a cam reconciliation review"
2. Provide the following practical inputs:
- Asset or deal context: Property type, market, deal stage, tenant profile, lease status, or investment objective
- Source materials: Lease, rent roll, offering memorandum, financials, comps, diligence list, or investor notes
- Assumptions and constraints: Return hurdle, hold period, debt assumptions, lease terms, risk tolerance, and deal-breakers
- Audience: Broker, principal, investor, lender, asset manager, or internal committee
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Asset or deal context | Property type, market, deal stage, tenant profile, lease status, or investment objective | Retail strip center acquisition screening in Phoenix |
| Source materials | Lease, rent roll, offering memorandum, financials, comps, diligence list, or investor notes | Rent roll, T12, draft LOI, and three rent comps |
| Assumptions and constraints | Return hurdle, hold period, debt assumptions, lease terms, risk tolerance, and deal-breakers | 7 percent cap target, no major deferred maintenance |
| Audience | Broker, principal, investor, lender, asset manager, or internal committee | Internal investment committee review |

## Output Format
An Excel workbook named CAM_Reconciliation_Review_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for CAM Reconciliation Review; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. State assumptions clearly and flag any missing lease, rent roll, financial, title, environmental, or market data that could change the conclusion.
7. Convert the source material into a polished Excel workbook that directly supports this job: Catches overcharges with CAM clause logic and dispute templates.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
This is business analysis and document organization support, not legal, tax, appraisal, securities, or investment advice. Verify all lease language, financial assumptions, market data, title matters, environmental matters, and investor communications with the appropriate professional before relying on the output.

## Sample Trigger Phrases
- "Build a cam reconciliation review"
- "Create a client-ready cam reconciliation review"
- "Turn these notes into a cam reconciliation review"
- "Help me prepare a cam reconciliation review for my next real estate conversation"
- "I need a polished cam reconciliation review deliverable"
