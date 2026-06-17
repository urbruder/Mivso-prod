---
name: price-improvement-announcement
description: "Use this skill whenever an agent needs a price-improvement announcement, asks to build a price-improvement announcement, or needs help with this catalog job: Reframes a price cut as fresh momentum to buyers and agents. Produces a Word document for Price-Improvement Announcement. This is an extended catalog skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Price-Improvement Announcement. It helps the agent handle this catalog job: Reframes a price cut as fresh momentum to buyers and agents. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a price-improvement announcement"
2. Provide the following practical inputs:
- Marketing goal: The campaign, asset, platform, audience, and desired action
- Brand voice: How the agent or team should sound
- Source facts: Listing details, market stats, story points, testimonials, offer, or service details
- Distribution plan: Where the content will be used and any size, format, or timing limits
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Marketing goal | The campaign, asset, platform, audience, and desired action | Drive valuation appointments from homeowners in the north farm area |
| Brand voice | How the agent or team should sound | Confident, local, helpful, never hypey |
| Source facts | Listing details, market stats, story points, testimonials, offer, or service details | Just sold at 104 percent of list after 6 days |
| Distribution plan | Where the content will be used and any size, format, or timing limits | Instagram Reel, email, postcard, and website landing page |

## Output Format
A Word document named Price_Improvement_Announcement_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Price-Improvement Announcement deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Include channel-specific copy or layout guidance when the agent names the channel, and keep every call to action clear and compliant.
6. Convert the source material into a polished Word document that directly supports this job: Reframes a price cut as fresh momentum to buyers and agents.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Keep all marketing Fair-Housing-safe and truthful. Do not use protected-class targeting, steering language, unsupported performance claims, copyrighted images, fake testimonials, or platform-restricted housing ad targeting. Include required brokerage, license, MLS, and advertising disclaimers when the agent supplies them.

## Sample Trigger Phrases
- "Build a price-improvement announcement"
- "Create a client-ready price-improvement announcement"
- "Turn these notes into a price-improvement announcement"
- "Help me prepare a price-improvement announcement for my next real estate conversation"
- "I need a polished price-improvement announcement deliverable"
