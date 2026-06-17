---
name: insurance-and-flood-risk-briefer
description: "Use this skill whenever an agent says 'Build an insurance and flood-risk briefer', 'Create an insurance and flood-risk briefer for this client', 'Help me prepare an insurance and flood-risk briefer', or needs support for this job: Explains hazard, flood, and wind insurance needs for a target property. Produces a client-ready Word document named Insurance_Flood_Risk_Briefer.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Explains hazard, flood, and wind insurance needs for a target property. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an insurance and flood-risk briefer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property details | Address, property type, age, roof, systems, flood zone if known, and special local risks | Coastal condo, built 1985, flood zone AE |
| Insurance notes | Quote, lender requirement, seller disclosure, HOA master policy, or prior claim information | Quote came back high due to roof age |
| Buyer concern | Affordability, insurability, flood requirement, deductibles, or coverage gaps | Worried flood insurance will make payment too high |
| Deadline | Inspection, financing, insurance, or due-diligence deadline | Insurance contingency ends Friday |

## Output Format
A Word document named `Insurance_Flood_Risk_Briefer.docx` with the following structure:

- Risk Overview section covering hazard, flood, wind, fire, earthquake, condo master policy, or other relevant insurance issues
- Buyer Questions table for insurance agent, lender, HOA, seller, and inspector
- Next-Step Checklist with quotes to obtain, documents to review, and deadlines before contingency removal

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Create a plain-English briefer that tells the buyer what to verify before moving forward.
4. Do not state a property is safe, insurable, or not in a flood zone unless verified by supplied sources.
5. List lender, insurer, HOA, and inspector questions separately.
6. Highlight deadline-sensitive items and documents the buyer should request immediately.
7. Keep the tone factual and calm.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide insurance, engineering, flood, or legal advice. Tell the buyer to confirm coverage, exclusions, premiums, deductibles, and flood requirements with licensed professionals and official maps.

## Sample Trigger Phrases
- "Build an insurance and flood-risk briefer"
- "Create an insurance and flood-risk briefer for this client"
- "Help me prepare an insurance and flood-risk briefer"
- "Turn these notes into an insurance and flood-risk briefer"
- "I need a client-ready insurance and flood-risk briefer"
