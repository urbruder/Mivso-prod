---
name: portal-lead-speed-reply
description: "Use this skill whenever an agent receives a Zillow, Realtor.com, Homes.com, brokerage website, IDX, or other portal lead and needs a fast tailored first response. Triggers include portal lead reply, Zillow lead text, speed to lead, new internet lead, or write the first response. Produces a Word document with SMS, email, call opener, and 24-hour follow-up plan."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a fast response kit for a new portal or website lead so the agent can reply with relevance in minutes. The output is a Word document with first-touch messages, call scripts, and a short follow-up plan based on the lead’s inquiry.

## How to Run This Skill
1. Tell Claude: "Write a portal lead speed reply"
2. Provide:
- The lead’s inquiry text or portal note
- Property address or listing link details if available
- Lead name, contact method, source, and time received
- Agent’s goal, such as showing, buyer consult, lender intro, or property info
3. Claude will ask up to 3 clarifying questions about the lead source, property context, and desired next step before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Lead inquiry | The message, question, saved search action, or request from the portal | Is 44 Pine still available? |
| Property context | Address, price, status, or listing detail the lead asked about | 44 Pine Lane, listed at $575,000 |
| Lead source | Where the lead came from | Zillow, brokerage website, IDX form |
| Contact channel | How the agent can reply | Text and email |
| Desired next step | The action the reply should request | Book a showing today or confirm buyer criteria |

## Output Format
A Word document named Portal_Lead_Speed_Reply_<lead name or property>_<date>.docx. Structure: lead snapshot, 60-second SMS reply, email reply, call opener, voicemail, qualification questions, 24-hour follow-up sequence, and response-handling branches. Approximate length: 3–5 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and choose the correct reply pattern for the lead’s intent.
2. Summarize the lead’s request in one line and identify the most likely intent: showing, availability, price, financing, property details, neighborhood, or casual browsing.
3. Write a concise first text that answers the visible question, asks one qualifying question, and offers a clear next step.
4. Write a matching email that is slightly more complete but still short and action-oriented.
5. Write a call opener and voicemail that reference the property or question without sounding scripted.
6. Create a 24-hour follow-up plan with immediate reply, 15-minute call attempt, 2-hour value follow-up, same-day check-in, and next-day close-the-loop note.
7. Add response branches for interested now, already has an agent, just browsing, needs financing, wants another property, and no response.
8. Format the Word document so the agent can copy each message quickly.

## Fair Housing & Compliance Notes
Do not imply exclusive access to a property unless true. Do not promise availability, price, seller terms, or financing outcomes unless verified. Avoid steering language about neighborhoods or schools. Respect consent and include opt-out language if required by the communication method and local rules.

## Sample Trigger Phrases
- Write a reply to this Zillow lead
- Create a speed-to-lead text
- I got a portal lead asking about a property
- Write the first response to this internet lead
- Make a 24-hour follow-up plan for this buyer inquiry
