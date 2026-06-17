---
name: escrow-instructions-skill
description: "Use this skill whenever an agent needs an escrow instructions, asks to build an escrow instructions, or needs help with this catalog job: Instruction templates, state rules, and a disbursement checklist. Produces a Word document for Escrow Instructions Skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Escrow Instructions Skill. It helps the agent handle this catalog job: Instruction templates, state rules, and a disbursement checklist. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build an escrow instructions"
2. Provide the following practical inputs:
- File and property context: Escrow number, property, buyer, seller, closing date, and current issue
- Source documents: Title commitment, escrow instructions, exception list, payoff, lien, judgment, or curative notes
- Party responsibilities: Who needs to act and what documents or signatures may be needed
- Desired output: Summary, curative checklist, escrow instructions, or party request templates
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| File and property context | Escrow number, property, buyer, seller, closing date, and current issue | File 24-118, closing July 15, unreleased deed of trust exception |
| Source documents | Title commitment, escrow instructions, exception list, payoff, lien, judgment, or curative notes | Preliminary title report and seller payoff statement |
| Party responsibilities | Who needs to act and what documents or signatures may be needed | Seller to request release from prior lender |
| Desired output | Summary, curative checklist, escrow instructions, or party request templates | Create exception summary and curative task tracker |

## Output Format
A Word document named Escrow_Instructions_Skill_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Escrow Instructions Skill deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Separate title or escrow facts from curative recommendations, and flag all legal or underwriter decisions for the appropriate professional.
6. Convert the source material into a polished Word document that directly supports this job: Instruction templates, state rules, and a disbursement checklist.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Follow state title, escrow, privacy, payoff, wire-fraud, disbursement, and recording rules. Do not issue legal opinions or guarantee insurability. Flag title defects, escrow instruction conflicts, and payoff questions for title counsel, escrow officer, or underwriter review.

## Sample Trigger Phrases
- "Build an escrow instructions"
- "Create a client-ready escrow instructions"
- "Turn these notes into an escrow instructions"
- "Help me prepare an escrow instructions for my next real estate conversation"
- "I need a polished escrow instructions deliverable"
