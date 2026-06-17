---
name: vacation-second-home-advisor
description: "Use this skill whenever an agent says 'Build a vacation or second-home advisor', 'Create a vacation or second-home advisor for this client', 'Help me prepare a vacation or second-home advisor', or needs support for this job: Covers financing, rental rules, and tax basics for second homes. Produces a client-ready Word document named Vacation_Second_Home_Advisor.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Covers financing, rental rules, and tax basics for second homes. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a vacation or second-home advisor"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property or market | Target second-home area, property type, price, HOA, and rental potential if relevant | Beach condo at $520,000 with $650 HOA |
| Use plan | Personal use, seasonal use, family use, rental use, or mixed use | Use 6 weeks per year and rent part-time |
| Financing and budget | Loan type, down payment, carrying cost comfort, and cash reserves | 20 percent down, max $4,000 monthly all-in |
| Rules and risks | HOA rental rules, local short-term rental rules, insurance, flood, wind, tax, and maintenance notes | HOA allows 30-day minimum rentals |

## Output Format
A Word document named `Vacation_Second_Home_Advisor.docx` with the following structure:

- Second-Home Fit Brief covering financing, usage plan, distance, carrying costs, rental intent, HOA rules, insurance, and maintenance
- Cost and Risk Checklist with taxes, insurance, utilities, management, vacancy, repairs, furnishings, travel, and local rules
- Decision Summary with recommended next diligence questions and red flags

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Build a practical second-home guide that focuses on ownership reality, not vacation excitement.
4. Separate personal-use value from rental-income assumptions.
5. Flag insurance, flood, wind, HOA, rental rules, taxes, maintenance, and property-management issues.
6. Create a go-forward diligence checklist before the buyer makes an offer.
7. Write a summary of whether the property appears to fit the buyer plan based on supplied facts.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide tax, insurance, lending, or legal advice. Rental income, HOA rules, insurance, and taxes must be verified with qualified professionals and official documents.

## Sample Trigger Phrases
- "Build a vacation or second-home advisor"
- "Create a vacation or second-home advisor for this client"
- "Help me prepare a vacation or second-home advisor"
- "Turn these notes into a vacation or second-home advisor"
- "I need a client-ready vacation or second-home advisor"
