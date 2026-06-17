---
name: cre-lease-negotiation-skill
description: "Use this skill whenever an agent needs a cre lease negotiation, asks to build a cre lease negotiation, or needs help with this catalog job: LOI/lease negotiation checklist, clause library, and concession framework. Produces a Word document for CRE Lease Negotiation Skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for CRE Lease Negotiation Skill. It helps the agent handle this catalog job: LOI/lease negotiation checklist, clause library, and concession framework. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a cre lease negotiation"
2. Provide the following practical inputs:
- Asset or deal context: Property type, market, deal stage, tenant profile, lease status, or investment objective
- Source materials: Lease, rent roll, offering memorandum, financials, comps, diligence list, or investor notes
- Assumptions and constraints: Return hurdle, hold period, debt assumptions, lease terms, risk tolerance, and deal-breakers
- Audience: Broker, principal, investor, lender, asset manager, or internal committee
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Asset or deal context | Property type, market, deal stage, tenant profile, lease status, or investment objective | Retail strip center acquisition screening in Phoenix |
| Source materials | Lease, rent roll, offering memorandum, financials, comps, diligence list, or investor notes | Rent roll, T12, draft LOI, and three rent comps |
| Assumptions and constraints | Return hurdle, hold period, debt assumptions, lease terms, risk tolerance, and deal-breakers | 7 percent cap target, no major deferred maintenance |
| Audience | Broker, principal, investor, lender, asset manager, or internal committee | Internal investment committee review |

## Output Format
A Word document named CRE_Lease_Negotiation_Skill_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main CRE Lease Negotiation Skill deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. State assumptions clearly and flag any missing lease, rent roll, financial, title, environmental, or market data that could change the conclusion.
6. Convert the source material into a polished Word document that directly supports this job: LOI/lease negotiation checklist, clause library, and concession framework.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
This is business analysis and document organization support, not legal, tax, appraisal, securities, or investment advice. Verify all lease language, financial assumptions, market data, title matters, environmental matters, and investor communications with the appropriate professional before relying on the output.

## Sample Trigger Phrases
- "Build a cre lease negotiation"
- "Create a client-ready cre lease negotiation"
- "Turn these notes into a cre lease negotiation"
- "Help me prepare a cre lease negotiation for my next real estate conversation"
- "I need a polished cre lease negotiation deliverable"
