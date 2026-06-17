---
name: email-campaign-sequencer
description: "Use this skill whenever an agent needs an email campaign sequence, asks to build an email campaign sequence, or needs help with this catalog job: Segmented email sequences with brand-consistent voice. Produces an Excel workbook for Email Campaign Sequencer."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for Email Campaign Sequencer. It helps the agent handle this catalog job: Segmented email sequences with brand-consistent voice. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build an email campaign sequence"
2. Provide the following practical inputs:
- Marketing goal: The campaign, asset, platform, audience, and desired action
- Brand voice: How the agent or team should sound
- Source facts: Listing details, market stats, story points, testimonials, offer, or service details
- Distribution plan: Where the content will be used and any size, format, or timing limits
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Marketing goal | The campaign, asset, platform, audience, and desired action | Drive valuation appointments from homeowners in the north farm area |
| Brand voice | How the agent or team should sound | Confident, local, helpful, never hypey |
| Source facts | Listing details, market stats, story points, testimonials, offer, or service details | Just sold at 104 percent of list after 6 days |
| Distribution plan | Where the content will be used and any size, format, or timing limits | Instagram Reel, email, postcard, and website landing page |

## Output Format
An Excel workbook named Email_Campaign_Sequencer_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for Email Campaign Sequencer; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Include channel-specific copy or layout guidance when the agent names the channel, and keep every call to action clear and compliant.
7. Convert the source material into a polished Excel workbook that directly supports this job: Segmented email sequences with brand-consistent voice.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Keep all marketing Fair-Housing-safe and truthful. Do not use protected-class targeting, steering language, unsupported performance claims, copyrighted images, fake testimonials, or platform-restricted housing ad targeting. Include required brokerage, license, MLS, and advertising disclaimers when the agent supplies them.

## Sample Trigger Phrases
- "Build an email campaign sequence"
- "Create a client-ready email campaign sequence"
- "Turn these notes into an email campaign sequence"
- "Help me prepare an email campaign sequence for my next real estate conversation"
- "I need a polished email campaign sequence deliverable"
