---
name: hard-conversation-scripts
description: "Use this skill whenever an agent needs a hard-conversation scripts, asks to build a hard-conversation scripts, or needs help with this catalog job: Deliver hard news while keeping the relationship and the deal intact. Produces a Word document for Hard-Conversation Scripts."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Hard-Conversation Scripts. It helps the agent handle this catalog job: Deliver hard news while keeping the relationship and the deal intact. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a hard-conversation scripts"
2. Provide the following practical inputs:
- Client relationship: Past client, active client, referral partner, sphere contact, or unhappy client context
- Reason for touchpoint: Anniversary, equity update, conflict, relocation, post-close issue, milestone, or nurture event
- Known facts: Personalization details the client has permission to use
- Tone and next step: Desired voice, call to action, and communication channel
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Client relationship | Past client, active client, referral partner, sphere contact, or unhappy client context | Past buyer who closed two years ago and referred a coworker |
| Reason for touchpoint | Anniversary, equity update, conflict, relocation, post-close issue, milestone, or nurture event | Home purchase anniversary and possible move-up conversation |
| Known facts | Personalization details the client has permission to use | Bought a townhome in 2024 and asked about renovations last year |
| Tone and next step | Desired voice, call to action, and communication channel | Warm text plus email, invite to annual check-in |

## Output Format
A Word document named Hard_Conversation_Scripts_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Hard-Conversation Scripts deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Convert the source material into a polished Word document that directly supports this job: Deliver hard news while keeping the relationship and the deal intact.
6. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
7. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
8. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
9. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
10. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Use only personalization the agent has permission to use. Do not reference protected-class details, private family information, medical facts, or financial assumptions. Respect unsubscribe, do-not-contact, privacy, and brokerage communication policies.

## Sample Trigger Phrases
- "Build a hard-conversation scripts"
- "Create a client-ready hard-conversation scripts"
- "Turn these notes into a hard-conversation scripts"
- "Help me prepare a hard-conversation scripts for my next real estate conversation"
- "I need a polished hard-conversation scripts deliverable"
