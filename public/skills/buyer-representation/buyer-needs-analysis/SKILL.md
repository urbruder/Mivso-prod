---
name: buyer-needs-analysis
description: "Use this skill whenever an agent says 'Build a buyer needs analysis', 'Create a buyer needs analysis for this client', 'Help me prepare a buyer needs analysis', or needs support for this job: Structured intake surfacing true must-haves, budget reality, and timeline. Produces a client-ready Word document named Buyer_Needs_Analysis.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Structured intake surfacing true must-haves, budget reality, and timeline. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a buyer needs analysis"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer conversation notes | Raw intake notes or answers from the buyer | Wants 3 bedrooms, works remote, needs yard, flexible on commute |
| Budget and financing | Price range, loan type, cash available, and pre-approval status | $650,000 max, FHA, pre-approved |
| Timeline | When the buyer wants or needs to move | Lease ends August 31 |
| Search constraints | Areas, property types, commute, accessibility, pets, renovation tolerance, and showing availability | Townhomes okay, no major renovation, evenings only |

## Output Format
A Word document named `Buyer_Needs_Analysis.docx` with the following structure:

- Buyer Profile section summarizing motivation, timeline, financing, decision makers, and deal-breakers
- Must-Have vs Nice-to-Have table with priority, reason, flexibility, and search impact
- Search Strategy section with recommended price band, property types, tour cadence, and next questions

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Separate real must-haves from preferences by asking what happens if each item is missing.
4. Create a clear buyer profile the agent can use before setting up searches or tours.
5. Translate fuzzy requests into objective property criteria such as price, size, commute time, HOA range, property condition, and layout needs.
6. Add a search strategy that narrows the market without steering the buyer toward or away from protected-class areas.
7. End with five next questions that would improve the search.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Use objective property, budget, commute, and lifestyle logistics. Do not recommend or rank areas by school quality, demographics, religion, family status, national origin, or other protected-class proxies.

## Sample Trigger Phrases
- "Build a buyer needs analysis"
- "Create a buyer needs analysis for this client"
- "Help me prepare a buyer needs analysis"
- "Turn these notes into a buyer needs analysis"
- "I need a client-ready buyer needs analysis"
