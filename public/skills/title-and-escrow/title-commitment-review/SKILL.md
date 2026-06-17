---
name: title-commitment-review
description: "Use this skill whenever an agent needs a title commitment review, asks to build a title commitment review, or needs help with this catalog job: Exception library, curative checklist, and a summary template. Produces an Excel workbook for Title Commitment Review."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for Title Commitment Review. It helps the agent handle this catalog job: Exception library, curative checklist, and a summary template. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a title commitment review"
2. Provide the following practical inputs:
- File and property context: Escrow number, property, buyer, seller, closing date, and current issue
- Source documents: Title commitment, escrow instructions, exception list, payoff, lien, judgment, or curative notes
- Party responsibilities: Who needs to act and what documents or signatures may be needed
- Desired output: Summary, curative checklist, escrow instructions, or party request templates
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| File and property context | Escrow number, property, buyer, seller, closing date, and current issue | File 24-118, closing July 15, unreleased deed of trust exception |
| Source documents | Title commitment, escrow instructions, exception list, payoff, lien, judgment, or curative notes | Preliminary title report and seller payoff statement |
| Party responsibilities | Who needs to act and what documents or signatures may be needed | Seller to request release from prior lender |
| Desired output | Summary, curative checklist, escrow instructions, or party request templates | Create exception summary and curative task tracker |

## Output Format
An Excel workbook named Title_Commitment_Review_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for Title Commitment Review; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Separate title or escrow facts from curative recommendations, and flag all legal or underwriter decisions for the appropriate professional.
7. Convert the source material into a polished Excel workbook that directly supports this job: Exception library, curative checklist, and a summary template.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Follow state title, escrow, privacy, payoff, wire-fraud, disbursement, and recording rules. Do not issue legal opinions or guarantee insurability. Flag title defects, escrow instruction conflicts, and payoff questions for title counsel, escrow officer, or underwriter review.

## Sample Trigger Phrases
- "Build a title commitment review"
- "Create a client-ready title commitment review"
- "Turn these notes into a title commitment review"
- "Help me prepare a title commitment review for my next real estate conversation"
- "I need a polished title commitment review deliverable"
