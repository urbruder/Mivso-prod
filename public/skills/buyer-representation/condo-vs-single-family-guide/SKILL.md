---
name: condo-vs-single-family-guide
description: "Use this skill whenever an agent says 'Build a condo vs. single-family guide', 'Create a condo vs. single-family guide for this client', 'Help me prepare a condo vs. single-family guide', or needs support for this job: Lays out the tradeoffs (fees, control, appreciation) for a buyer's goals. Produces a client-ready Word document named Condo_vs_Single_Family_Guide.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Lays out the tradeoffs (fees, control, appreciation) for a buyer's goals. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a condo vs. single-family guide"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer priorities | Budget, maintenance tolerance, privacy, amenities, control, commute, pets, rental plans, and renovation plans | Wants low maintenance and may rent later |
| Target options | Specific condo and single-family examples or general price ranges | $450,000 condo vs $575,000 single-family |
| HOA details | Fees, rules, reserves, assessments, rental restrictions, and master insurance if supplied | $420 monthly HOA, rental cap |
| Financing and insurance notes | Loan type, condo approval concerns, insurance quote, or lender notes | FHA buyer considering condo |

## Output Format
A Word document named `Condo_vs_Single_Family_Guide.docx` with the following structure:

- Side-by-Side Comparison table covering price, HOA, maintenance, insurance, control, rules, amenities, appreciation considerations, and lifestyle tradeoffs
- Buyer Fit section connecting tradeoffs to the buyer priorities
- Questions to Ask section for HOA, lender, insurer, inspector, and agent

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Compare the property types through the buyer-supplied priorities, not generic stereotypes.
4. Explain HOA fees and rules as tradeoffs: less direct maintenance can mean less control and extra due diligence.
5. Flag documents the buyer should review before choosing a condo.
6. Create a decision summary that helps the buyer choose what to tour next.
7. Do not make unsupported appreciation or lifestyle claims.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not use protected-class or demographic assumptions about who belongs in condos or single-family homes. Recommend review of HOA documents, lender rules, and insurance needs.

## Sample Trigger Phrases
- "Build a condo vs. single-family guide"
- "Create a condo vs. single-family guide for this client"
- "Help me prepare a condo vs. single-family guide"
- "Turn these notes into a condo vs. single-family guide"
- "I need a client-ready condo vs. single-family guide"
