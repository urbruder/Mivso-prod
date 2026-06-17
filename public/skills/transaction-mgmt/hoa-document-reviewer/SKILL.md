---
name: hoa-document-reviewer
description: "Use this skill whenever an agent needs a hoa document review, asks to build a hoa document review, or needs help with this catalog job: Flags red flags in HOA bylaws, budgets, and special-assessment history. Produces an Excel workbook for HOA Document Reviewer. This is an extended catalog skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for HOA Document Reviewer. It helps the agent handle this catalog job: Flags red flags in HOA bylaws, budgets, and special-assessment history. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a hoa document review"
2. Provide the following practical inputs:
- Transaction snapshot: Address, side, contract date, closing date, stage, and key parties
- Documents or milestones: Contract terms, disclosures, addenda, deadlines, vendors, and missing items
- Client concerns: Questions, confusion, delays, risks, or communication gaps
- Brokerage process: Preferred checklist, update rhythm, file naming, or escalation rules
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Transaction snapshot | Address, side, contract date, closing date, stage, and key parties | Buyer side, under contract June 10, closing July 12 |
| Documents or milestones | Contract terms, disclosures, addenda, deadlines, vendors, and missing items | Inspection by June 18, loan commitment July 1, HOA docs pending |
| Client concerns | Questions, confusion, delays, risks, or communication gaps | Buyer is nervous about closing costs and repair timing |
| Brokerage process | Preferred checklist, update rhythm, file naming, or escalation rules | Weekly client update every Friday and broker review on contingency removals |

## Output Format
An Excel workbook named HOA_Document_Reviewer_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for HOA Document Reviewer; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Put deadline-sensitive items and client-confusing items near the top so the agent can prevent surprises.
7. Convert the source material into a polished Excel workbook that directly supports this job: Flags red flags in HOA bylaws, budgets, and special-assessment history.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Treat the output as transaction organization support, not legal advice. Verify dates against the signed contract and local forms. Protect client confidentiality, wire instructions, identity documents, and financial data. Escalate legal, title, financing, or disclosure questions to the broker, attorney, lender, escrow, or title professional.

## Sample Trigger Phrases
- "Build a hoa document review"
- "Create a client-ready hoa document review"
- "Turn these notes into a hoa document review"
- "Help me prepare a hoa document review for my next real estate conversation"
- "I need a polished hoa document review deliverable"
