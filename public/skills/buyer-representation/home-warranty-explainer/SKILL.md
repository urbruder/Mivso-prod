---
name: home-warranty-explainer
description: "Use this skill whenever an agent says 'Build a home warranty explainer', 'Create a home warranty explainer for this client', 'Help me prepare a home warranty explainer', or needs support for this job: Compares coverage and explains what a home warranty does and doesn't cover. Produces a client-ready Word document named Home_Warranty_Explainer.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Compares coverage and explains what a home warranty does and doesn't cover. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a home warranty explainer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Warranty plan details | Plan brochure, coverage list, price, service fee, exclusions, and caps | $650 plan, $85 service fee, HVAC cap listed |
| Property condition | Age of systems, inspection concerns, appliance age, and seller-provided warranty terms | 12-year HVAC, older dishwasher |
| Buyer concern | What the buyer expects the warranty to protect them from | Worried about HVAC failure after closing |
| Competing options | Any plan alternatives or seller credit options | Seller offers warranty or $600 credit |

## Output Format
A Word document named `Home_Warranty_Explainer.docx` with the following structure:

- Plain-English Explainer section covering what a home warranty is and is not
- Coverage Comparison table with systems, appliances, exclusions, service fee, waiting period, caps, and claim process
- Buyer Decision Guide with when it may help, when it may disappoint, and questions to ask before buying

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Explain the warranty in practical terms and highlight exclusions, caps, and claim process.
4. Do not treat a warranty as a substitute for inspection, maintenance, or insurance.
5. Create a comparison table if multiple plans or credit alternatives are supplied.
6. Write a balanced recommendation based on the buyer concern and property condition.
7. Add questions the buyer should ask the warranty provider before relying on coverage.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee claim approval or coverage. Tell the buyer to read the contract and confirm exclusions, caps, and waiting periods with the provider.

## Sample Trigger Phrases
- "Build a home warranty explainer"
- "Create a home warranty explainer for this client"
- "Help me prepare a home warranty explainer"
- "Turn these notes into a home warranty explainer"
- "I need a client-ready home warranty explainer"
