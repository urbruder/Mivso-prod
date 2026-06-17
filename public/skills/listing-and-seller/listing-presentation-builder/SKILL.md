---
name: listing-presentation-builder
description: "Use this skill whenever an agent needs a listing presentation, asks to build a listing presentation, or needs help with this catalog job: A customized listing-pitch deck and talking points built to win the appointment. Produces a PowerPoint deck for Listing Presentation Builder."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished PowerPoint deck for Listing Presentation Builder. It helps the agent handle this catalog job: A customized listing-pitch deck and talking points built to win the appointment. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a listing presentation"
2. Provide the following practical inputs:
- Property or listing context: Address, property type, price point, condition, listing status, and seller goal
- Market or comp facts: Comparable sales, showing feedback, pricing history, buyer objections, or local trend notes
- Seller situation: Timeline, motivation, sensitivities, decision makers, and preferred communication style
- Agent position: Recommended strategy, proof points, constraints, and desired next step
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the PowerPoint deck and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property or listing context | Address, property type, price point, condition, listing status, and seller goal | 123 Oak Street, $725,000 target, vacant, seller wants a clean launch |
| Market or comp facts | Comparable sales, showing feedback, pricing history, buyer objections, or local trend notes | Three nearby sales and two weeks of showing feedback |
| Seller situation | Timeline, motivation, sensitivities, decision makers, and preferred communication style | Relocating in August, analytical seller, wants data |
| Agent position | Recommended strategy, proof points, constraints, and desired next step | Recommend one price adjustment plus staging refresh before relaunch |

## Output Format
A PowerPoint deck named Listing_Presentation_Builder_with_date.pptx with 8-12 client-ready slides: Title, Situation Snapshot, Goal, Key Facts, Strategy, Proof or Examples, Recommended Plan, Scripts or Talking Points, Risk and Compliance Notes, and Next Steps. Use short slide copy, strong section headers, visual tables where useful, and speaker notes so the agent can present it without rewriting.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Keep each slide focused on one idea. Put detailed talk tracks in speaker notes rather than crowding the slide.
4. Use before-after, option comparison, timeline, or decision-summary slides when they make the recommendation easier to present.
5. For seller-facing material, frame recommendations around property condition, price, timing, presentation, access, and objective buyer feedback.
6. Convert the source material into a polished PowerPoint deck that directly supports this job: A customized listing-pitch deck and talking points built to win the appointment.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Do not reference protected-class traits, school quality, neighborhood demographics, religion, national origin, disability, familial status, or steering language. Use property facts, seller-provided information, objective market data, MLS-compliant language, and broker-approved forms. Do not guarantee price, timing, sale, tax outcome, or legal result.

## Sample Trigger Phrases
- "Build a listing presentation"
- "Create a client-ready listing presentation"
- "Turn these notes into a listing presentation"
- "Help me prepare a listing presentation for my next real estate conversation"
- "I need a polished listing presentation deliverable"
