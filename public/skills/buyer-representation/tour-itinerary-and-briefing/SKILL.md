---
name: tour-itinerary-and-briefing
description: "Use this skill whenever an agent says 'Build a tour itinerary and briefing', 'Create a tour itinerary and briefing for this client', 'Help me prepare a tour itinerary and briefing', or needs support for this job: Efficient tour route plus a what-to-notice brief for each home. Produces a client-ready Word document named Tour_Itinerary_Briefing.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Efficient tour route plus a what-to-notice brief for each home. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a tour itinerary and briefing"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Properties | Homes to tour with address, listing facts, showing times, and access notes | 123 Oak at 10 AM, 456 Pine at 11:15 AM |
| Buyer priorities | Must-haves and deal-breakers from the buyer intake | Needs main-floor bedroom and fenced yard |
| Travel constraints | Start point, end point, time windows, parking, and accessibility needs | Start at office, finish by 1 PM |
| Market context | Offer deadlines, competing offers, days on market, or inspection concerns | Offer deadline Monday 5 PM |

## Output Format
A Word document named `Tour_Itinerary_Briefing.docx` with the following structure:

- Tour Schedule section with route order, appointment time, address, parking note, access note, and estimated drive time
- Property Brief Cards with price, beds, baths, size, HOA, taxes, known tradeoffs, questions to ask, and what to notice
- Decision Notes section with buyer scorecard and next-step recommendation after the tour

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Order the tour logically by geography and appointment constraints.
4. Create one concise brief card per property so the buyer knows what to look for, not just where to go.
5. Use the buyer priorities to call out specific tradeoffs and questions.
6. Add a simple scoring area the buyer can complete immediately after each showing.
7. End with a post-tour decision checklist: revisit, ask questions, watch, offer, or pass.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not include Fair-Housing-risk comments about who lives nearby or whether an area is appropriate for a type of person or family.

## Sample Trigger Phrases
- "Build a tour itinerary and briefing"
- "Create a tour itinerary and briefing for this client"
- "Help me prepare a tour itinerary and briefing"
- "Turn these notes into a tour itinerary and briefing"
- "I need a client-ready tour itinerary and briefing"
