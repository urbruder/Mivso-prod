---
name: property-tax-estimate-and-appeal-guide
description: "Use this skill whenever an agent says 'Build a property tax estimate and appeal guide', 'Create a property tax estimate and appeal guide for this client', 'Help me prepare a property tax estimate and appeal guide', or needs support for this job: Estimates taxes and explains how and when to appeal an assessment. Produces a client-ready Excel workbook named Property_Tax_Estimate_Appeal_Guide.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Estimates taxes and explains how and when to appeal an assessment. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a property tax estimate and appeal guide"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property and location | Address, county, purchase price, current assessed value, and tax bill if available | 123 Oak, Travis County, $625,000 purchase |
| Tax data | Tax rate, exemptions, special assessments, and reassessment rules supplied by client or official source | Homestead exemption, current tax bill |
| Buyer facts | Occupancy, exemption eligibility hints, and timing | Primary residence after closing |
| Appeal concern | Over-assessment, recent reassessment, new construction, or comparable sales issue | Assessment jumped after sale |

## Output Format
An Excel workbook named `Property_Tax_Estimate_Appeal_Guide.xlsx` with the following structure:

- Tax Estimate sheet with purchase price, assessed value, local rate, exemptions, special assessments, estimated annual tax, and monthly escrow impact
- Appeal Checklist sheet with deadlines, evidence, comparable sales, assessment notices, forms, and owner tasks
- Client Brief sheet explaining likely tax shock, appeal timing, and questions for county assessor or tax professional

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Estimate taxes only from supplied or current official tax inputs. If information is missing, create a needed-data list.
4. Separate current owner tax bill from likely buyer tax after reassessment when applicable.
5. Create a clear appeal guide with evidence types, deadlines, and questions to ask the assessor or tax professional.
6. Do not promise savings or appeal success.
7. Add a client-friendly explanation of monthly payment impact.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
This is tax education and planning support, not tax or legal advice. Tell the buyer to verify with the county assessor, lender, and tax professional.

## Sample Trigger Phrases
- "Build a property tax estimate and appeal guide"
- "Create a property tax estimate and appeal guide for this client"
- "Help me prepare a property tax estimate and appeal guide"
- "Turn these notes into a property tax estimate and appeal guide"
- "I need a client-ready property tax estimate and appeal guide"
