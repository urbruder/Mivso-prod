---
name: neighborhood-comparison-report
description: "Use this skill whenever an agent says 'Build a neighborhood comparison report', 'Create a neighborhood comparison report for this client', 'Help me prepare a neighborhood comparison report', or needs support for this job: Side-by-side area profiles on objective, Fair-Housing-safe criteria. Produces a client-ready Excel workbook named Neighborhood_Comparison_Report.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Side-by-side area profiles on objective, Fair-Housing-safe criteria. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a neighborhood comparison report"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Candidate areas | Neighborhoods, cities, ZIPs, or search zones the buyer is considering | Downtown, West Park, North Ridge |
| Buyer priorities | Objective criteria the buyer cares about | Under 35-minute commute, townhome, under $700K, low HOA |
| Market facts | Prices, inventory, commute times, property types, taxes, fees, or other objective data | Median price, active count, average HOA |
| Deal-breakers | Hard constraints that should affect recommendations | No more than $450 monthly HOA |

## Output Format
An Excel workbook named `Neighborhood_Comparison_Report.xlsx` with the following structure:

- Comparison Matrix sheet with areas, commute, price range, property type availability, HOA norms, transit access, inventory, days on market, and buyer fit notes
- Buyer Priorities sheet weighting the criteria the buyer supplied
- Summary sheet with an objective comparison narrative and recommended next tour areas

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Compare only objective, buyer-supplied criteria and property facts.
4. Use a weighted matrix when the buyer provides priorities. If no weights are given, use equal weights and state that assumption.
5. Write a summary that helps the buyer choose where to tour next without telling them where they should live.
6. Avoid subjective area labels such as good, bad, safe, family-friendly, up-and-coming, or exclusive.
7. Include a data-source note for any facts the buyer supplied or asked Claude to use.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Fair Housing is central. Do not compare neighborhoods by demographics, school quality, crime stereotypes, religion, familial status, national origin, or other protected-class proxies.

## Sample Trigger Phrases
- "Build a neighborhood comparison report"
- "Create a neighborhood comparison report for this client"
- "Help me prepare a neighborhood comparison report"
- "Turn these notes into a neighborhood comparison report"
- "I need a client-ready neighborhood comparison report"
