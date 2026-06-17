---
name: commission-split-calculator
description: "Use this skill whenever a broker, admin, team lead, or transaction coordinator needs to calculate real estate commission splits, caps, referral fees, transaction fees, team deductions, bonuses, or a ready disbursement-authorisation summary. Produces an Excel commission calculator and DA-style worksheet."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a clean commission workbook that turns sale price, commission rate, split rules, cap status, referrals, and fees into a clear payout summary for the broker, agent, and admin team.

## How to Run This Skill
1. Tell Claude: "Build a commission split calculator"
2. Provide:
- Sale price, side, commission percentage or flat commission amount
- Agent split, cap status, remaining cap, team split, and brokerage fees
- Referral fee percentage or amount, if any
- Transaction fee, admin fee, mentor fee, bonus, or deductions
- Preferred payout summary format or DA fields
3. Claude will ask up to 7 clarifying questions about commission basis, split model, cap handling, referral order, deductions, team rules, and whether the output is for estimate or final review before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Transaction economics | Sale price, side, gross commission rate or amount | Sale price $650,000, listing side, 2.5 percent gross commission |
| Agent split rules | Split percentage, cap, remaining cap, or tiered split | 80/20 split, $16,000 cap, $4,500 cap remaining |
| Referral rules | Referral percentage or amount and who pays it | 25 percent referral paid off gross commission |
| Fees and deductions | Admin, TC, E&O, mentor, team, or bonus items | $495 admin fee, $250 E&O, $500 TC fee |
| DA preferences | Fields or format used by brokerage accounting | Show gross, referral, company dollar, agent net, and notes |

## Output Format
An Excel workbook named Commission_Split_Calculator_<agent>_<date>.xlsx. Sheets: Inputs, Split Calculator, Cap Tracker, DA Summary, Scenario Comparison, Notes. Inputs includes clearly labeled editable fields. Split Calculator shows gross commission, referral deduction, adjusted gross commission, company dollar, cap application, agent gross, fees, deductions, agent net, and brokerage net. DA Summary is a print-ready one-page payout sheet. Scenario Comparison compares at least three split or fee scenarios when enough data is available.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the workbook and use its commission-order checklist to avoid double-counting.
2. Create the Excel workbook with editable input cells clearly separated from calculated output cells.
3. Use workbook formulas for gross commission, referral deduction, adjusted gross commission, company dollar, cap applied, agent net, and brokerage net.
4. Ask the user to confirm the order of operations when referral fees, caps, team splits, and admin fees interact.
5. Create a Cap Tracker sheet that shows beginning cap remaining, company dollar applied to cap, cap reached status, and ending cap remaining.
6. Create a DA Summary sheet that is simple enough for accounting review and includes assumptions and required approvals.
7. Create Scenario Comparison only after the base case is clear; compare current split, capped split, and alternate split or fee scenario.
8. Flag any input that appears inconsistent, such as total payout exceeding gross commission or cap applied twice.

## Fair Housing & Compliance Notes
This is a math and admin worksheet, not payroll, tax, employment, or legal advice. Final compensation must follow the written independent-contractor agreement, brokerage policy, referral agreement, state law, and accounting approval. Do not create payout instructions that conflict with signed agreements.

## Sample Trigger Phrases
- Calculate this commission split
- Build a DA sheet for this closing
- Figure out agent net after cap and referral
- Compare split scenarios
- Create a commission payout worksheet
