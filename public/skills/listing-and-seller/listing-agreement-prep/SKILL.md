---
name: listing-agreement-prep
description: "Use this skill whenever an agent needs a listing agreement prep, asks to build a listing agreement prep, or needs help with this catalog job: State-correct listing paperwork with required disclosures and commission terms. Produces a Word document for Listing Agreement Prep."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Listing Agreement Prep. It helps the agent handle this catalog job: State-correct listing paperwork with required disclosures and commission terms. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a listing agreement prep"
2. Provide the following practical inputs:
- Property or listing context: Address, property type, price point, condition, listing status, and seller goal
- Market or comp facts: Comparable sales, showing feedback, pricing history, buyer objections, or local trend notes
- Seller situation: Timeline, motivation, sensitivities, decision makers, and preferred communication style
- Agent position: Recommended strategy, proof points, constraints, and desired next step
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property or listing context | Address, property type, price point, condition, listing status, and seller goal | 123 Oak Street, $725,000 target, vacant, seller wants a clean launch |
| Market or comp facts | Comparable sales, showing feedback, pricing history, buyer objections, or local trend notes | Three nearby sales and two weeks of showing feedback |
| Seller situation | Timeline, motivation, sensitivities, decision makers, and preferred communication style | Relocating in August, analytical seller, wants data |
| Agent position | Recommended strategy, proof points, constraints, and desired next step | Recommend one price adjustment plus staging refresh before relaunch |

## Output Format
A Word document named Listing_Agreement_Prep_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Listing Agreement Prep deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. For seller-facing material, frame recommendations around property condition, price, timing, presentation, access, and objective buyer feedback.
6. Convert the source material into a polished Word document that directly supports this job: State-correct listing paperwork with required disclosures and commission terms.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Do not reference protected-class traits, school quality, neighborhood demographics, religion, national origin, disability, familial status, or steering language. Use property facts, seller-provided information, objective market data, MLS-compliant language, and broker-approved forms. Do not guarantee price, timing, sale, tax outcome, or legal result.

## Sample Trigger Phrases
- "Build a listing agreement prep"
- "Create a client-ready listing agreement prep"
- "Turn these notes into a listing agreement prep"
- "Help me prepare a listing agreement prep for my next real estate conversation"
- "I need a polished listing agreement prep deliverable"
