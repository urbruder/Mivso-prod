---
name: objection-handling-scripts
description: "Use this skill whenever an agent needs an objection-handling scripts, asks to build an objection-handling scripts, or needs help with this catalog job: Empathetic, persuasive responses to the objections you hear most. Produces a Word document for Objection-Handling Scripts."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Objection-Handling Scripts. It helps the agent handle this catalog job: Empathetic, persuasive responses to the objections you hear most. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build an objection-handling scripts"
2. Provide the following practical inputs:
- Client side and goal: Whether the agent represents buyer, seller, landlord, tenant, or both-side strategy support
- Current terms: Offer, counter, repair request, concession, deadline, contingencies, and communication history
- Client limits: Walkaway point, risk tolerance, timing needs, and preferred tone
- Market leverage: Competition, days on market, comps, inventory, showing activity, and agent intel
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Client side and goal | Whether the agent represents buyer, seller, landlord, tenant, or both-side strategy support | Seller wants to counter without losing a strong buyer |
| Current terms | Offer, counter, repair request, concession, deadline, contingencies, and communication history | $695,000 offer, 30-day close, inspection contingency, buyer asks for credits |
| Client limits | Walkaway point, risk tolerance, timing needs, and preferred tone | Seller needs a two-week rent-back and wants firm but respectful language |
| Market leverage | Competition, days on market, comps, inventory, showing activity, and agent intel | Two backup showings and low inventory under $750,000 |

## Output Format
A Word document named Objection_Handling_Scripts_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Objection-Handling Scripts deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Show at least two paths when useful: a firm option and a collaborative option, each tied to the client limits supplied by the agent.
6. Convert the source material into a polished Word document that directly supports this job: Empathetic, persuasive responses to the objections you hear most.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Do not practice law, draft binding contract clauses, or tell the client to ignore state forms, broker instructions, lender rules, or attorney advice. Keep negotiation language honest, professional, documented, and consistent with the client limits supplied by the agent.

## Sample Trigger Phrases
- "Build an objection-handling scripts"
- "Create a client-ready objection-handling scripts"
- "Turn these notes into an objection-handling scripts"
- "Help me prepare an objection-handling scripts for my next real estate conversation"
- "I need a polished objection-handling scripts deliverable"
