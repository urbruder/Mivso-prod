---
name: micro-copy-postcard
description: "Use this skill whenever an agent needs a micro-copy postcard, asks to build a micro-copy postcard, or needs help with this catalog job: Punchy, single-CTA direct-mail postcard copy that drives action. Produces a PowerPoint deck for Micro-Copy Postcard."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished PowerPoint deck for Micro-Copy Postcard. It helps the agent handle this catalog job: Punchy, single-CTA direct-mail postcard copy that drives action. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a micro-copy postcard"
2. Provide the following practical inputs:
- Marketing goal: The campaign, asset, platform, audience, and desired action
- Brand voice: How the agent or team should sound
- Source facts: Listing details, market stats, story points, testimonials, offer, or service details
- Distribution plan: Where the content will be used and any size, format, or timing limits
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the PowerPoint deck and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Marketing goal | The campaign, asset, platform, audience, and desired action | Drive valuation appointments from homeowners in the north farm area |
| Brand voice | How the agent or team should sound | Confident, local, helpful, never hypey |
| Source facts | Listing details, market stats, story points, testimonials, offer, or service details | Just sold at 104 percent of list after 6 days |
| Distribution plan | Where the content will be used and any size, format, or timing limits | Instagram Reel, email, postcard, and website landing page |

## Output Format
A PowerPoint deck named Micro_Copy_Postcard_with_date.pptx with 8-12 client-ready slides: Title, Situation Snapshot, Goal, Key Facts, Strategy, Proof or Examples, Recommended Plan, Scripts or Talking Points, Risk and Compliance Notes, and Next Steps. Use short slide copy, strong section headers, visual tables where useful, and speaker notes so the agent can present it without rewriting.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Keep each slide focused on one idea. Put detailed talk tracks in speaker notes rather than crowding the slide.
4. Use before-after, option comparison, timeline, or decision-summary slides when they make the recommendation easier to present.
5. Include channel-specific copy or layout guidance when the agent names the channel, and keep every call to action clear and compliant.
6. Convert the source material into a polished PowerPoint deck that directly supports this job: Punchy, single-CTA direct-mail postcard copy that drives action.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Keep all marketing Fair-Housing-safe and truthful. Do not use protected-class targeting, steering language, unsupported performance claims, copyrighted images, fake testimonials, or platform-restricted housing ad targeting. Include required brokerage, license, MLS, and advertising disclaimers when the agent supplies them.

## Sample Trigger Phrases
- "Build a micro-copy postcard"
- "Create a client-ready micro-copy postcard"
- "Turn these notes into a micro-copy postcard"
- "Help me prepare a micro-copy postcard for my next real estate conversation"
- "I need a polished micro-copy postcard deliverable"
