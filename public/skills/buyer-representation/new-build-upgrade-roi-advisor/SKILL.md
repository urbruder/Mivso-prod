---
name: new-build-upgrade-roi-advisor
description: "Use this skill whenever an agent says 'Build a new-build upgrade roi advisor', 'Create a new-build upgrade roi advisor for this client', 'Help me prepare a new-build upgrade roi advisor', or needs support for this job: Ranks builder upgrades by resale ROI vs. cost. Produces a client-ready Excel workbook named New_Build_Upgrade_ROI_Advisor.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Ranks builder upgrades by resale ROI vs. cost. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a new-build upgrade roi advisor"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Upgrade list | Builder upgrade names, prices, and descriptions | Premium cabinets $8,500; covered patio $12,000 |
| Buyer goals | Resale, monthly payment, design preference, durability, rental potential, or accessibility | Wants resale-smart choices under $25,000 |
| Market context | Local buyer expectations, comp features, and builder incentives if known | Most comps have quartz counters |
| Financing impact | Whether upgrades are financed, paid cash, or included through incentive | Financed into purchase price |

## Output Format
An Excel workbook named `New_Build_Upgrade_ROI_Advisor.xlsx` with the following structure:

- Upgrade Options sheet with builder cost, buyer value, resale value estimate, financing impact, lifestyle score, and priority
- ROI Dashboard ranking upgrades as Must Do, Worth Considering, Lifestyle Only, Skip, and Ask Builder to Include
- Negotiation Notes sheet with builder questions, incentive options, and inspection or warranty follow-ups

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Rank upgrades by resale relevance, buyer enjoyment, cost, financing impact, and whether the item is easy to add later.
4. Do not claim a precise resale return unless supported by supplied data. Use high, medium, and low confidence labels.
5. Separate structural or hard-to-add-later upgrades from cosmetic choices.
6. Create a buyer-friendly recommendation under the budget supplied.
7. Add builder questions about warranty, substitutions, timelines, and incentives.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee ROI or future value. Label resale impact as an estimate and recommend confirming construction, warranty, and financing details with builder and lender.

## Sample Trigger Phrases
- "Build a new-build upgrade roi advisor"
- "Create a new-build upgrade roi advisor for this client"
- "Help me prepare a new-build upgrade roi advisor"
- "Turn these notes into a new-build upgrade roi advisor"
- "I need a client-ready new-build upgrade roi advisor"
