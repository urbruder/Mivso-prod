---
name: sphere-reactivation-writer
description: "Use this skill whenever an agent wants to re-engage past clients, old leads, friends, vendors, or sphere contacts without sounding salesy. Triggers include sphere reactivation, cold database check-in, past client message, non-salesy follow-up, or wake up my database. Produces an Excel workbook with segmented messages and a 30-day follow-up tracker."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Turns a cold or neglected sphere into a warm, organized outreach campaign. The agent receives an Excel workbook with contact segments, natural message drafts, follow-up timing, and a tracker for responses and referrals.

## How to Run This Skill
1. Tell Claude: "Write a sphere reactivation campaign"
2. Provide:
- A list of contact names or contact segments
- Relationship context such as past client, friend, vendor, old buyer lead, or neighbor
- Last known interaction or life event if available
- The desired ask, such as reconnect, referral, review, home value check, or meeting
3. Claude will ask up to 4 clarifying questions about relationship segments, tone, recent context, and the desired next step before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Contact segments | Groups or names the agent wants to contact | Past clients from 2021, old buyer leads, local vendors |
| Relationship context | How the agent knows each group or person | Closed buyer client, former open-house visitor, neighbor |
| Recent context | Life event, market moment, anniversary, or reason for reaching out | Three-year home anniversary |
| Desired action | The next step the message should invite | Reply with an update, book equity review, send a referral |
| Voice | How personal or businesslike the message should feel | Friendly and conversational |

## Output Format
An Excel workbook named Sphere_Reactivation_<date>.xlsx with three sheets: Segment Map, Message Drafts, and 30-Day Follow-Up Tracker. Segment Map columns: Segment, Relationship Context, Message Angle, CTA, Follow-Up Timing. Message Drafts columns: Segment, Channel, Message Version, Personalization Note, Follow-Up Line. Tracker columns: Name, Segment, Last Contact, Message Sent, Response, Next Step, Follow-Up Date, Status.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the segment-to-message map to avoid generic outreach.
2. Group contacts by relationship and warmth: past client, active sphere, old lead, vendor, neighbor, referral partner, or unknown context.
3. Write at least three message variations per major segment: soft check-in, value-based note, and direct-but-warm ask.
4. Create channel-specific versions for text, email, and direct message when the user provides those channels.
5. Build a 30-day follow-up plan that includes first touch, reply handling, second touch, close-the-loop note, and referral ask timing.
6. Create a tracker with status options such as Not Sent, Sent, Replied, Nurture, Referral Opportunity, Appointment, and Do Not Contact.
7. Keep messages short, specific, and human. Remove any line that sounds automated or mass-produced.
8. Format the workbook so each sheet can be filtered and printed.

## Fair Housing & Compliance Notes
Respect privacy and consent. Include opt-out language when the outreach is a campaign rather than a one-to-one personal message. Do not imply urgency, equity, or market facts that are not supported by the agent’s data. Do not use protected-class references or make assumptions about family status, age, finances, or life circumstances.

## Sample Trigger Phrases
- Wake up my cold sphere
- Write non-salesy texts to past clients
- Create a reactivation campaign for old leads
- Help me reconnect with my database
- Build a 30-day sphere follow-up tracker
