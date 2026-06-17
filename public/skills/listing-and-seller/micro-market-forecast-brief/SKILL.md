---
name: micro-market-forecast-brief
description: "Use this skill whenever an agent needs a micro-market forecast brief, asks to build a micro-market forecast brief, or needs help with this catalog job: A 60–90-day read on whether a ZIP's prices will hold, rise, or fall. Produces a Formatted HTML visual for Micro-Market Forecast Brief."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Formatted HTML visual for Micro-Market Forecast Brief. It helps the agent handle this catalog job: A 60–90-day read on whether a ZIP's prices will hold, rise, or fall. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a micro-market forecast brief"
2. Provide the following practical inputs:
- Property or listing context: Address, property type, price point, condition, listing status, and seller goal
- Market or comp facts: Comparable sales, showing feedback, pricing history, buyer objections, or local trend notes
- Seller situation: Timeline, motivation, sensitivities, decision makers, and preferred communication style
- Agent position: Recommended strategy, proof points, constraints, and desired next step
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Formatted HTML visual and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property or listing context | Address, property type, price point, condition, listing status, and seller goal | 123 Oak Street, $725,000 target, vacant, seller wants a clean launch |
| Market or comp facts | Comparable sales, showing feedback, pricing history, buyer objections, or local trend notes | Three nearby sales and two weeks of showing feedback |
| Seller situation | Timeline, motivation, sensitivities, decision makers, and preferred communication style | Relocating in August, analytical seller, wants data |
| Agent position | Recommended strategy, proof points, constraints, and desired next step | Recommend one price adjustment plus staging refresh before relaunch |

## Output Format
A formatted HTML visual named Micro_Market_Forecast_Brief_with_date.html. The layout must include a branded header, executive summary cards, a clean comparison or recommendation table, a main narrative section, callout boxes for risks and opportunities, and a final next-step checklist. The visual must be readable as a one-page digital brief or printable PDF-style page.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use a clean visual hierarchy with cards, sections, tables, and callouts. Make the page easy to scan on screen and print.
4. Include a clear primary recommendation and a short supporting rationale near the top of the page.
5. For seller-facing material, frame recommendations around property condition, price, timing, presentation, access, and objective buyer feedback.
6. Convert the source material into a polished Formatted HTML visual that directly supports this job: A 60–90-day read on whether a ZIP's prices will hold, rise, or fall.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Do not reference protected-class traits, school quality, neighborhood demographics, religion, national origin, disability, familial status, or steering language. Use property facts, seller-provided information, objective market data, MLS-compliant language, and broker-approved forms. Do not guarantee price, timing, sale, tax outcome, or legal result.

## Sample Trigger Phrases
- "Build a micro-market forecast brief"
- "Create a client-ready micro-market forecast brief"
- "Turn these notes into a micro-market forecast brief"
- "Help me prepare a micro-market forecast brief for my next real estate conversation"
- "I need a polished micro-market forecast brief deliverable"
