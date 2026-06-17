---
name: military-va-relocation-kit
description: "Use this skill whenever an agent says 'Build a military or va relocation kit', 'Create a military or va relocation kit for this client', 'Help me prepare a military or va relocation kit', or needs support for this job: VA-loan and PCS-timeline guidance for military relocations. Produces a client-ready Word document named Military_VA_Relocation_Kit.docx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: VA-loan and PCS-timeline guidance for military relocations. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a military or va relocation kit"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Relocation context | PCS, separation, retirement, or VA buyer timeline | PCS orders expected in July, report date October 1 |
| Buyer profile | VA eligibility status if known, budget, loan pre-approval, household needs, and timing | VA pre-approved up to $600,000 |
| Location details | Current location, destination area, commute targets, and showing availability | Moving from Norfolk to San Antonio |
| Constraints | House-hunting leave, remote tours, temporary housing, school-year timing, pets, or accessibility needs if client supplies them | Only one week in town for tours |

## Output Format
A Word document named `Military_VA_Relocation_Kit.docx` with the following structure:

- PCS Timeline section with pre-orders, orders received, house-hunting trip, offer, inspection, lender milestones, closing, and move logistics
- VA Loan Brief section explaining VA eligibility questions, appraisal, funding fee, seller concessions, occupancy, and closing timeline
- Relocation Checklist section with documents, base or commute considerations, temporary housing, and family logistics chosen by the client

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Build a relocation kit that respects military timing pressure without making assumptions about service branch, family status, or preferences.
4. Explain VA loan process in plain language and flag lender-specific questions.
5. Create a timeline from report date backward when the client supplies the date.
6. Include remote-tour, inspection, appraisal, closing, and move-logistics tasks.
7. Keep area guidance objective and based on buyer-supplied commute, budget, property, and logistical criteria.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide VA eligibility determinations or legal advice. Avoid steering and protected-class assumptions. Confirm VA loan terms with the lender and relocation rules with the appropriate military office.

## Sample Trigger Phrases
- "Build a military or va relocation kit"
- "Create a military or va relocation kit for this client"
- "Help me prepare a military or va relocation kit"
- "Turn these notes into a military or va relocation kit"
- "I need a client-ready military or va relocation kit"
