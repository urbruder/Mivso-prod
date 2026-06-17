---
name: mortgage-borrower-comms
description: "Use this skill whenever an agent needs a mortgage borrower comms, asks to build a mortgage borrower comms, or needs help with this catalog job: Milestone templates, condition-request scripts, and timeline explainers. Produces a Word document for Mortgage Borrower Comms."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Mortgage Borrower Comms. It helps the agent handle this catalog job: Milestone templates, condition-request scripts, and timeline explainers. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a mortgage borrower comms"
2. Provide the following practical inputs:
- Borrower or loan file context: Loan type, borrower stage, property, timeline, and condition status
- Document facts: Income, assets, credit, disclosures, conditions, or missing documents supplied by the client
- Communication need: Milestone update, condition request, explanation, or pre-underwriting review
- Compliance boundary: Lender policy, disclosure language, or items that must be verified by licensed staff
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Borrower or loan file context | Loan type, borrower stage, property, timeline, and condition status | Conventional purchase, appraisal ordered, underwriting conditions due Friday |
| Document facts | Income, assets, credit, disclosures, conditions, or missing documents supplied by the client | Bank statements missing source explanation for deposit |
| Communication need | Milestone update, condition request, explanation, or pre-underwriting review | Explain the condition request without alarming the borrower |
| Compliance boundary | Lender policy, disclosure language, or items that must be verified by licensed staff | Loan officer must approve all rate and fee statements |

## Output Format
A Word document named Mortgage_Borrower_Comms_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Mortgage Borrower Comms deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Keep borrower communications clear and non-alarming. Do not imply loan approval, rate lock, or underwriting decision unless the licensed loan professional supplied it.
6. Convert the source material into a polished Word document that directly supports this job: Milestone templates, condition-request scripts, and timeline explainers.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Follow RESPA, TILA, ECOA, fair lending, privacy, and lender policy. Do not quote rates, fees, approvals, or underwriting decisions unless supplied by the licensed mortgage professional. Treat the output as communication and file organization support.

## Sample Trigger Phrases
- "Build a mortgage borrower comms"
- "Create a client-ready mortgage borrower comms"
- "Turn these notes into a mortgage borrower comms"
- "Help me prepare a mortgage borrower comms for my next real estate conversation"
- "I need a polished mortgage borrower comms deliverable"
