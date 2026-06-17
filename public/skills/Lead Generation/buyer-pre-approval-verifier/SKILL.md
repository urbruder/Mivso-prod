---
name: buyer-pre-approval-verifier
description: "Use this skill whenever an agent needs to verify a buyer's pre-approval readiness before investing showing time or writing offers. Triggers include buyer pre-approval verifier, check pre-approval letter, showing readiness, lender questions, or qualify buyer before tours. Produces an Excel workbook with a verification checklist, risk flags, lender questions, and next-action plan."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a buyer readiness workbook that helps the agent confirm whether a buyer is prepared for showings and offers. The output organizes pre-approval details, missing items, risk flags, lender questions, and next steps.

## How to Run This Skill
1. Tell Claude: "Verify this buyer pre-approval"
2. Provide:
- Buyer name or buyer segment
- Pre-approval letter details the buyer is comfortable sharing
- Loan type, approval amount, lender name, expiration date, and known conditions
- Buyer timeline, target price range, and showing or offer goal
3. Claude will ask up to 5 clarifying questions about permission to use financial details, lender status, loan conditions, expiration, and showing urgency before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer details | Buyer name, target area, and transaction goal | Jordan buying a condo under $525,000 |
| Pre-approval details | Loan amount, loan type, date, lender, and expiration if known | Conventional pre-approval to $525,000, expires August 1 |
| Conditions | Any visible conditions or missing items | Needs updated pay stubs and property taxes estimate |
| Timeline | When the buyer wants to tour or offer | Wants to tour this weekend |
| Agent concern | What the agent wants to verify | Whether buyer can compete on a $515,000 listing |

## Output Format
An Excel workbook named Buyer_Pre_Approval_Verifier_<buyer name>_<date>.xlsx with five sheets: Pre-Approval Checklist, Risk Flags, Next Actions, Lender Questions, and Showing Readiness. Include columns for item, status, evidence, risk level, owner, due date, and notes. Add a summary box showing Ready, Needs Clarification, or Not Ready.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before reviewing and use the readiness checklist to avoid acting as a lender.
2. Extract visible pre-approval details: lender, date, expiration, amount, loan type, property type limits, down payment if provided, and conditions.
3. Create a checklist of verified, missing, and unclear items.
4. Flag risks such as expired letter, soft prequalification only, missing lender contact, property-type mismatch, unclear down payment, offer amount above approval, or major conditions.
5. Create lender questions the agent can ask with buyer permission.
6. Create next actions for buyer, agent, and lender before showings or offer writing.
7. Create a Showing Readiness summary that classifies the buyer as Ready, Needs Clarification, or Not Ready based on provided information.
8. Format the workbook so sensitive details are organized and easy to review privately.

## Fair Housing & Compliance Notes
Do not provide lending advice, credit advice, or approval decisions. Encourage the buyer to speak with a qualified lender. Treat financial information as confidential. Do not evaluate buyers based on protected-class traits. Follow fair lending and privacy expectations and obtain permission before contacting a lender.

## Sample Trigger Phrases
- Check this buyer pre-approval letter
- Verify if this buyer is ready to tour
- Create a pre-approval checklist
- What questions should I ask the lender?
- Qualify this buyer before I spend showing time
