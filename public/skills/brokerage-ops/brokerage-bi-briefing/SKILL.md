---
name: brokerage-bi-briefing
description: "Use this skill whenever a broker, team lead, or operations manager needs a weekly executive briefing from brokerage pipeline, closings, company dollar, agent activity, recruiting, and compliance data. Produces an Excel executive dashboard with KPIs, charts, risks, and recommended actions."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a broker-friendly weekly dashboard that shows what is happening in the business, where revenue is coming from, which risks need attention, and what actions should happen next.

## How to Run This Skill
1. Tell Claude: "Build a brokerage BI briefing"
2. Provide:
- Reporting period and brokerage or team name
- Pipeline, pending, closed, recruiting, agent activity, or compliance data exports
- Company dollar, GCI, sides, volume, lead sources, and agent roster if available
- Goals or targets for the period
- Any leadership questions the briefing must answer
3. Claude will ask up to 7 clarifying questions about reporting period, available data, KPI definitions, targets, agent grouping, missing data, and leadership priorities before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Reporting period | Week, month, quarter, or custom period | Week ending June 17, 2026 |
| Pipeline data | Active, pending, closed, fallen-through, and forecast data | Pending list with close date, agent, price, side, commission |
| Agent roster | Agents and team roles for scorecards | 22 active agents, 3 new recruits, 2 mentors |
| Financial data | GCI, company dollar, split, cap, and forecast fields | $186,000 projected GCI this month |
| Leadership focus | Questions or risks the broker wants highlighted | Which closings are at risk and which agents need coaching? |

## Output Format
An Excel workbook named Brokerage_BI_Briefing_<brokerage>_<date>.xlsx. Sheets: Executive Dashboard, Pipeline Detail, Agent Scorecard, Company Dollar Forecast, Compliance & Risk, Recruiting Snapshot, Action Plan, Data Notes. Executive Dashboard includes KPI tiles, trend charts, pipeline by stage, forecasted company dollar, at-risk closings, top movers, and 5-10 recommended leadership actions.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the dashboard and use its KPI definitions unless the user provides brokerage-specific definitions.
2. Create the workbook with Executive Dashboard as the first sheet and raw-detail sheets behind it.
3. Normalize uploaded data into consistent columns for agent, stage, side, price, expected close date, GCI, company dollar, risk, and next action.
4. Build KPI tiles for pending volume, pending sides, projected GCI, projected company dollar, closings this period, fall-through risk, recruiting pipeline, and compliance issues.
5. Create charts for pipeline by stage, company dollar forecast, agent activity, and at-risk transactions.
6. Create an Agent Scorecard with production, pending, closings, activity, compliance open items, and coaching notes.
7. Create an Action Plan sheet that converts the dashboard into broker actions with owner, due date, priority, and expected impact.
8. Create a Data Notes sheet that lists missing fields, assumptions, and data quality warnings.

## Fair Housing & Compliance Notes
Treat agent production, compensation, client pipeline, recruiting, and compliance information as confidential. Do not shame agents, infer protected traits, or create employment decisions from incomplete data. Mark numbers as estimates when the source data is incomplete.

## Sample Trigger Phrases
- Create a weekly brokerage dashboard
- Build a BI briefing for my team meeting
- Summarize company dollar and pipeline
- Show me at-risk closings and agent scorecards
- Make an executive brokerage report
