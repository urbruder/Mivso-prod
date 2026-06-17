---
name: closing-cost-walkthrough
description: "Use this skill whenever an agent needs a closing cost walkthrough, asks to build a closing cost walkthrough, or needs help with this catalog job: Plain-English breakdown of buyer closing costs — no last-minute shocks. Produces a Word document for Closing Cost Walkthrough."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Closing Cost Walkthrough. It helps the agent handle this catalog job: Plain-English breakdown of buyer closing costs — no last-minute shocks. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a closing cost walkthrough"
2. Provide the following practical inputs:
- Transaction snapshot: Address, side, contract date, closing date, stage, and key parties
- Documents or milestones: Contract terms, disclosures, addenda, deadlines, vendors, and missing items
- Client concerns: Questions, confusion, delays, risks, or communication gaps
- Brokerage process: Preferred checklist, update rhythm, file naming, or escalation rules
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Transaction snapshot | Address, side, contract date, closing date, stage, and key parties | Buyer side, under contract June 10, closing July 12 |
| Documents or milestones | Contract terms, disclosures, addenda, deadlines, vendors, and missing items | Inspection by June 18, loan commitment July 1, HOA docs pending |
| Client concerns | Questions, confusion, delays, risks, or communication gaps | Buyer is nervous about closing costs and repair timing |
| Brokerage process | Preferred checklist, update rhythm, file naming, or escalation rules | Weekly client update every Friday and broker review on contingency removals |

## Output Format
A Word document named Closing_Cost_Walkthrough_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Closing Cost Walkthrough deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Put deadline-sensitive items and client-confusing items near the top so the agent can prevent surprises.
6. Convert the source material into a polished Word document that directly supports this job: Plain-English breakdown of buyer closing costs — no last-minute shocks.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Treat the output as transaction organization support, not legal advice. Verify dates against the signed contract and local forms. Protect client confidentiality, wire instructions, identity documents, and financial data. Escalate legal, title, financing, or disclosure questions to the broker, attorney, lender, escrow, or title professional.

## Sample Trigger Phrases
- "Build a closing cost walkthrough"
- "Create a client-ready closing cost walkthrough"
- "Turn these notes into a closing cost walkthrough"
- "Help me prepare a closing cost walkthrough for my next real estate conversation"
- "I need a polished closing cost walkthrough deliverable"
