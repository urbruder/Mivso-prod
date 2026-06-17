---
name: lead-qualification-scorer
description: "Use this skill whenever an agent needs to rank buyer or seller leads by readiness, motivation, financing, timeline, engagement, or next action. Triggers include qualify my leads, score this lead list, hot warm cold ranking, lead triage, or prioritize follow-up. Produces an Excel workbook with a scoring model, lead pipeline, and recommended next actions."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a practical lead-scoring workbook that helps an agent decide who needs immediate action, who needs nurture, and who is not ready yet. The workbook includes scoring columns, formulas, next-action recommendations, and a follow-up tracker.

## How to Run This Skill
1. Tell Claude: "Score and qualify my leads"
2. Provide:
- A list of buyer or seller leads
- Known timeline, motivation, financing or equity status, source, engagement, and notes
- The agent’s preferred lead stages and follow-up style
- Any minimum qualification rules the brokerage or team uses
3. Claude will ask up to 5 clarifying questions about lead type, scoring weights, required fields, urgency rules, and next-action preferences before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Lead list | Names or rows of leads with any known details | Maria Lopez, seller, wants value estimate, 3–6 month timeline |
| Timeline | When the lead may act | Now, 30 days, 3–6 months, 12 months |
| Motivation | Reason for buying, selling, investing, or asking | Job transfer, growing household, downsizing, investment |
| Financial readiness | Pre-approval, cash, equity, lender status, budget, or unknown | Pre-approved to $650,000 |
| Engagement | Responsiveness and behavior signals | Replied twice, viewed three homes, requested showing |

## Output Format
An Excel workbook named Lead_Qualification_Scorecard_<date>.xlsx with four sheets: Scorecard, Lead Pipeline, Follow-Up Actions, and Script Bank. Scorecard columns: Lead Name, Lead Type, Source, Timeline Score, Motivation Score, Financial Readiness Score, Engagement Score, Fit Score, Total Score, Stage, Risk Flag, Recommended Next Action, Follow-Up Date. Include clear score definitions and a visual summary of Hot, Warm, Nurture, and Low-Fit leads.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before creating the scoring model and use the scoring rubric unless the agent provides a team-specific rubric.
2. Normalize the lead list into buyer, seller, investor, referral, or unknown lead types.
3. Create a 1–5 scoring scale for timeline, motivation, financial readiness, engagement, and fit.
4. Use workbook formulas to total each lead’s score and classify the stage as Hot, Warm, Nurture, Watch, or Low Fit.
5. Add a Risk Flag column for missing financing, unclear motivation, no contact permission, unrealistic expectations, or duplicate lead.
6. Create the Follow-Up Actions sheet with recommended action, channel, timing, and message angle for each stage.
7. Create a Script Bank sheet with short scripts for hot lead, warm lead, nurture lead, missing info, and low-response situations.
8. Format the workbook with filters, frozen headers, readable widths, and summary counts by stage.

## Fair Housing & Compliance Notes
Do not score or prioritize people based on protected-class characteristics or assumptions about protected traits. Use only readiness, property needs, transaction timeline, communication behavior, and agent-provided business facts. Treat financial details as confidential and avoid giving lending, legal, or tax advice.

## Sample Trigger Phrases
- Score my buyer and seller leads
- Prioritize this lead list
- Create a hot warm cold lead tracker
- Qualify these portal leads
- Tell me who to follow up with first
