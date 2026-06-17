---
name: foreclosure-reo-buyer-guide
description: "Use this skill whenever an agent says 'Build a foreclosure or reo buyer guide', 'Create a foreclosure or reo buyer guide for this client', 'Help me prepare a foreclosure or reo buyer guide', or needs support for this job: Explains the REO and auction process and its risks for buyers. Produces a client-ready Word document named Foreclosure_REO_Buyer_Guide.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Explains the REO and auction process and its risks for buyers. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a foreclosure or reo buyer guide"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property or sale type | REO, foreclosure auction, short sale, sheriff sale, trustee sale, or bank-owned listing | Bank-owned home listed as-is |
| Buyer situation | Financing, cash, renovation tolerance, timeline, and risk tolerance | Conventional buyer with limited repair budget |
| Known terms | Deposit, inspection access, financing limits, title notes, occupancy, and contract terms | No seller repairs, 5-day inspection |
| Local context | State process or attorney involvement if known | Attorney review required |

## Output Format
A Word document named `Foreclosure_REO_Buyer_Guide.docx` with the following structure:

- Process Overview section explaining REO, auction, short sale, trustee sale, redemption, and as-is concepts when relevant
- Risk Checklist section covering title, occupancy, condition, financing, inspection, timelines, deposits, and competition
- Buyer Decision Guide with questions for agent, lender, attorney, title, and inspector

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Explain the process and risks in plain language without encouraging the buyer to skip due diligence.
4. Separate REO, auction, and short-sale risks because they are not the same.
5. Create a checklist the buyer can use before spending money on inspections or deposits.
6. Flag title, occupancy, redemption, financing, and condition questions for the correct professional.
7. Write a balanced decision guide with proceed, investigate, or pass signals.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide legal advice on foreclosure rights, redemption, title, eviction, or auction terms. Recommend local attorney, title, lender, and broker review.

## Sample Trigger Phrases
- "Build a foreclosure or reo buyer guide"
- "Create a foreclosure or reo buyer guide for this client"
- "Help me prepare a foreclosure or reo buyer guide"
- "Turn these notes into a foreclosure or reo buyer guide"
- "I need a client-ready foreclosure or reo buyer guide"
