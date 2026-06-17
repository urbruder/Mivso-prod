---
name: offer-deadline-bidding-strategy
description: "Use this skill whenever an agent needs an offer deadline and bidding strategy, asks to build an offer deadline and bidding strategy, or needs help with this catalog job: Plans an offer-deadline strategy to drive competitive bids. Produces an Excel workbook for Offer Deadline / Bidding Strategy. This is an extended catalog skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for Offer Deadline / Bidding Strategy. It helps the agent handle this catalog job: Plans an offer-deadline strategy to drive competitive bids. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build an offer deadline and bidding strategy"
2. Provide the following practical inputs:
- Client side and goal: Whether the agent represents buyer, seller, landlord, tenant, or both-side strategy support
- Current terms: Offer, counter, repair request, concession, deadline, contingencies, and communication history
- Client limits: Walkaway point, risk tolerance, timing needs, and preferred tone
- Market leverage: Competition, days on market, comps, inventory, showing activity, and agent intel
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Client side and goal | Whether the agent represents buyer, seller, landlord, tenant, or both-side strategy support | Seller wants to counter without losing a strong buyer |
| Current terms | Offer, counter, repair request, concession, deadline, contingencies, and communication history | $695,000 offer, 30-day close, inspection contingency, buyer asks for credits |
| Client limits | Walkaway point, risk tolerance, timing needs, and preferred tone | Seller needs a two-week rent-back and wants firm but respectful language |
| Market leverage | Competition, days on market, comps, inventory, showing activity, and agent intel | Two backup showings and low inventory under $750,000 |

## Output Format
An Excel workbook named Offer_Deadline_Bidding_Strategy_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for Offer Deadline / Bidding Strategy; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Show at least two paths when useful: a firm option and a collaborative option, each tied to the client limits supplied by the agent.
7. Convert the source material into a polished Excel workbook that directly supports this job: Plans an offer-deadline strategy to drive competitive bids.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Do not practice law, draft binding contract clauses, or tell the client to ignore state forms, broker instructions, lender rules, or attorney advice. Keep negotiation language honest, professional, documented, and consistent with the client limits supplied by the agent.

## Sample Trigger Phrases
- "Build an offer deadline and bidding strategy"
- "Create a client-ready offer deadline and bidding strategy"
- "Turn these notes into an offer deadline and bidding strategy"
- "Help me prepare an offer deadline and bidding strategy for my next real estate conversation"
- "I need a polished offer deadline and bidding strategy deliverable"
