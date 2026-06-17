---
name: financing-plain-english-explainer
description: "Use this skill whenever an agent says 'Build a financing plain-english explainer', 'Create a financing plain-english explainer for this client', 'Help me prepare a financing plain-english explainer', or needs support for this job: Education-only explainers for loan types, points, PMI, and buydowns. Produces a client-ready Word document named Financing_Plain_English_Explainer.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Education-only explainers for loan types, points, PMI, and buydowns. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a financing plain-english explainer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Loan topic | The financing issue the buyer needs explained | FHA vs conventional, points, PMI, 2-1 buydown |
| Buyer scenario | Price range, down payment, loan type, rate quote, and concerns | $575,000 purchase, 5 percent down, worried about PMI |
| Lender details | Any quote, worksheet, or explanation from the lender | Loan estimate summary or lender email |
| Buyer knowledge level | First-time, repeat, investor, or highly experienced | First-time buyer |

## Output Format
A Word document named `Financing_Plain_English_Explainer.docx` with the following structure:

- Plain-English Guide section explaining loan type, down payment, PMI, points, buydowns, cash to close, and monthly payment drivers
- Buyer Scenario section showing how the terms apply to the buyer situation
- Questions for Lender section with the exact questions the buyer should ask before deciding

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Explain only the financing concepts requested, in plain language a buyer can understand.
4. Use the buyer scenario to make the explanation concrete without pretending to be the lender.
5. Create a question list for the lender that covers payment, cash to close, risk, lock period, fees, and what could change.
6. Flag terms that may vary by lender, loan program, credit, property type, and underwriting.
7. Keep the tone educational and calm.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
This is education, not mortgage advice. Do not quote rates or eligibility unless supplied by the lender, and tell the buyer to confirm terms with a licensed loan professional.

## Sample Trigger Phrases
- "Build a financing plain-english explainer"
- "Create a financing plain-english explainer for this client"
- "Help me prepare a financing plain-english explainer"
- "Turn these notes into a financing plain-english explainer"
- "I need a client-ready financing plain-english explainer"
