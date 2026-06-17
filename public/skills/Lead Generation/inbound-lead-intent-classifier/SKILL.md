---
name: inbound-lead-intent-classifier
description: "Use this skill whenever an agent receives inbound leads from portals, IDX, ads, landing pages, open houses, or website forms and needs to classify intent quickly. Triggers include classify inbound leads, tag hot buyers, portal payload, lead intent, or routing rules. Produces an Excel workbook with intent scores, tags, routing actions, and reply templates."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Converts messy inbound lead details into a clean triage workbook. The agent receives intent tags, urgency scores, risk flags, recommended routing, and tailored first replies.

## How to Run This Skill
1. Tell Claude: "Classify these inbound leads by intent"
2. Provide:
- Lead records or pasted inquiry details
- Source, message, property viewed, behavior, budget, timeline, and contact method if available
- The team’s routing stages or default follow-up expectations
- Any required lead ownership or handoff rules
3. Claude will ask up to 5 clarifying questions about lead sources, scoring stages, routing rules, missing data, and follow-up responsibilities before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Lead details | Names, inquiry text, source, property, and notes | Ava asked to tour 17 Birch this weekend |
| Behavior signal | Property views, saved search, inquiry type, call request, or form field | Requested showing and asked about offer deadline |
| Timeline signal | When the lead may act | Wants to see homes this week |
| Financial signal | Pre-approval, budget, cash, equity, lender status, or unknown | Budget $700,000, lender unknown |
| Routing preference | How the agent or team wants leads assigned | Hot leads call now, warm leads text same day |

## Output Format
An Excel workbook named Inbound_Lead_Intent_Classifier_<date>.xlsx with four sheets: Intake Parsing, Intent Scorecard, Routing Actions, and Reply Templates. Intent Scorecard columns: Lead Name, Source, Lead Type, Intent Signal, Timeline Signal, Financial Signal, Engagement Signal, Intent Score, Intent Tag, Risk Flag, Owner, Next Action, Due Time. Include a summary count by Intent Tag.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before classifying and use the intent tag definitions unless the agent supplies team-specific tags.
2. Normalize lead records into a consistent table with source, message, lead type, property or area, and known signals.
3. Assign intent tags such as Tour-Now Buyer, Financing-Needed Buyer, Listing-Value Seller, Casual Browser, Neighbor Seller Signal, Investor, Agent/Vendor, or Unknown.
4. Score urgency using timeline, behavior, specificity, financial readiness, and response path.
5. Add risk flags for missing contact permission, duplicate record, represented party, unclear financing, or sensitive information.
6. Create routing actions with owner, channel, due time, first message angle, and backup action if no response.
7. Create reply templates matched to each intent tag.
8. Format the workbook with filters, summary counts, clear status labels, and a printable routing view.

## Fair Housing & Compliance Notes
Do not classify or route leads based on protected-class characteristics or inferred personal traits. Use only transaction intent, property interest, timeline, and communication behavior. Treat financial and contact details as confidential. Respect represented-party rules, consent, and opt-out requests.

## Sample Trigger Phrases
- Classify these inbound leads
- Tag my portal leads by intent
- Build a routing sheet for website leads
- Which of these leads are hot?
- Create reply templates for each inbound lead type
