---
name: first-time-buyer-program-explainer
description: "Use this skill whenever an agent says 'Build a first-time buyer program explainer', 'Create a first-time buyer program explainer for this client', 'Help me prepare a first-time buyer program explainer', or needs support for this job: Walks first-timers through FHA, VA, USDA, and state first-buyer programs. Produces a client-ready Word document named First_Time_Buyer_Program_Explainer.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Walks first-timers through FHA, VA, USDA, and state first-buyer programs. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a first-time buyer program explainer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer profile | First-time status, location, price range, occupancy, down payment, and general credit comfort if supplied | First-time buyer, $425,000 target, 3 percent down |
| Loan or program options | Programs the lender, state agency, or client wants explained | FHA, VA, USDA, state HFA |
| Main concern | Cash to close, monthly payment, credit, rural eligibility, condo approval, or speed | Not enough cash for down payment |
| Source details | Any lender worksheet or official program page supplied by client | Lender comparison email |

## Output Format
A Word document named `First_Time_Buyer_Program_Explainer.docx` with the following structure:

- Program Overview section explaining FHA, VA, USDA, conventional first-time buyer options, and state or local programs when supplied
- Buyer Fit Table with program, who it may fit, common benefits, common tradeoffs, and questions for lender
- Next-Step Checklist with documents, pre-approval tasks, education classes, and lender questions

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Explain program types at a high level and make clear that lenders decide eligibility.
4. Create a fit table that helps the buyer ask better lender questions.
5. Use plain language and avoid jargon without defining it.
6. Flag tradeoffs such as mortgage insurance, property eligibility, funding limits, education classes, and seller perceptions.
7. End with a checklist the buyer can take to a lender.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
This is education, not lending advice. Do not state that a buyer qualifies unless a lender or official program source says so.

## Sample Trigger Phrases
- "Build a first-time buyer program explainer"
- "Create a first-time buyer program explainer for this client"
- "Help me prepare a first-time buyer program explainer"
- "Turn these notes into a first-time buyer program explainer"
- "I need a client-ready first-time buyer program explainer"
