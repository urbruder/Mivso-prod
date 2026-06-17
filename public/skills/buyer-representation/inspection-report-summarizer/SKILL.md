---
name: inspection-report-summarizer
description: "Use this skill whenever an agent says 'Build an inspection report summarizer', 'Create an inspection report summarizer for this client', 'Help me prepare an inspection report summarizer', or needs support for this job: Tiers a 40-page report into critical/moderate/cosmetic plus a repair strategy. Produces a client-ready Word document named Inspection_Report_Summary.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Tiers a 40-page report into critical/moderate/cosmetic plus a repair strategy. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an inspection report summarizer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Inspection report | The full report, excerpts, photos, or inspection notes | PDF report or pasted summary from inspector |
| Property and contract context | Address, contract price, inspection deadline, repair terms, and buyer tolerance | Inspection deadline Friday, buyer wants safety issues addressed |
| Known priorities | Items the buyer is most worried about | Roof age, moisture, electrical panel |
| Market leverage | Seller market, buyer market, multiple offers, or backup status | Seller had multiple offers |

## Output Format
A Word document named `Inspection_Report_Summary.docx` with the following structure:

- Executive Summary with the overall condition narrative and top 5 concerns
- Issue Tiers table grouped into Critical, Major, Moderate, Minor, Maintenance, and Monitor categories
- Repair Strategy section with ask options, contractor quote needs, questions for inspector, and client talking points

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Summarize the report into client-friendly issue tiers without exaggerating or minimizing inspector findings.
4. Separate safety, structural, moisture, electrical, plumbing, HVAC, roof, pest, and cosmetic items.
5. Do not call something repaired, safe, or code-compliant unless the report says so.
6. Create a repair strategy with options: ask seller to repair, request credit, request further evaluation, monitor, or accept as maintenance.
7. Add questions the agent should ask the inspector or a licensed contractor before negotiating.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide engineering, legal, or contractor advice. Use the inspector report as the source and recommend licensed specialists for uncertain or serious issues.

## Sample Trigger Phrases
- "Build an inspection report summarizer"
- "Create an inspection report summarizer for this client"
- "Help me prepare an inspection report summarizer"
- "Turn these notes into an inspection report summarizer"
- "I need a client-ready inspection report summarizer"
