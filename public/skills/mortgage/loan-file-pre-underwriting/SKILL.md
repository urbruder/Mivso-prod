---
name: loan-file-pre-underwriting
description: "Use this skill whenever an agent needs a loan file pre-underwriting, asks to build a loan file pre-underwriting, or needs help with this catalog job: Doc checklist, condition library, and RESPA/TILA disclosure rules. Produces an Excel workbook for Loan File Pre-Underwriting."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for Loan File Pre-Underwriting. It helps the agent handle this catalog job: Doc checklist, condition library, and RESPA/TILA disclosure rules. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a loan file pre-underwriting"
2. Provide the following practical inputs:
- Borrower or loan file context: Loan type, borrower stage, property, timeline, and condition status
- Document facts: Income, assets, credit, disclosures, conditions, or missing documents supplied by the client
- Communication need: Milestone update, condition request, explanation, or pre-underwriting review
- Compliance boundary: Lender policy, disclosure language, or items that must be verified by licensed staff
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Borrower or loan file context | Loan type, borrower stage, property, timeline, and condition status | Conventional purchase, appraisal ordered, underwriting conditions due Friday |
| Document facts | Income, assets, credit, disclosures, conditions, or missing documents supplied by the client | Bank statements missing source explanation for deposit |
| Communication need | Milestone update, condition request, explanation, or pre-underwriting review | Explain the condition request without alarming the borrower |
| Compliance boundary | Lender policy, disclosure language, or items that must be verified by licensed staff | Loan officer must approve all rate and fee statements |

## Output Format
An Excel workbook named Loan_File_Pre_Underwriting_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for Loan File Pre-Underwriting; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Keep borrower communications clear and non-alarming. Do not imply loan approval, rate lock, or underwriting decision unless the licensed loan professional supplied it.
7. Convert the source material into a polished Excel workbook that directly supports this job: Doc checklist, condition library, and RESPA/TILA disclosure rules.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Follow RESPA, TILA, ECOA, fair lending, privacy, and lender policy. Do not quote rates, fees, approvals, or underwriting decisions unless supplied by the licensed mortgage professional. Treat the output as communication and file organization support.

## Sample Trigger Phrases
- "Build a loan file pre-underwriting"
- "Create a client-ready loan file pre-underwriting"
- "Turn these notes into a loan file pre-underwriting"
- "Help me prepare a loan file pre-underwriting for my next real estate conversation"
- "I need a polished loan file pre-underwriting deliverable"
