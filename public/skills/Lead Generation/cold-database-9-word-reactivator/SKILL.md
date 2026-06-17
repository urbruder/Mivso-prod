---
name: cold-database-9-word-reactivator
description: "Use this skill whenever an agent wants short low-pressure 9-word style messages for dormant leads, old prospects, or cold database segments. Triggers include 9-word text, cold database reactivation, dormant leads, revive old leads, or low-pressure text campaign. Produces an Excel workbook with segments, message variants, send plan, and response tracker."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a low-pressure reactivation campaign built around short curiosity-based messages. The agent receives an Excel workbook with database segments, tailored 9-word-style message options, send timing, and response handling.

## How to Run This Skill
1. Tell Claude: "Create a 9-word cold database reactivation campaign"
2. Provide:
- Contact segments or a database export
- Lead type, such as buyer, seller, investor, renter, past client, or unknown
- Last contact date or source if known
- The agent’s desired outcome and preferred follow-up channel
3. Claude will ask up to 4 clarifying questions about segments, contact permission, desired outcome, and response routing before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Database segment | The lead group being reactivated | Old buyer leads from 2023 |
| Lead context | What the agent knows about the lead source or need | Asked about condos downtown |
| Last contact | When the agent last communicated | No contact in 14 months |
| Goal | The next step the agent wants | Learn if they are still thinking about buying |
| Channel | Text, email, voicemail, or mixed | Text first |

## Output Format
An Excel workbook named Cold_Database_9_Word_Reactivator_<date>.xlsx with four sheets: Contact Segments, 9-Word Message Bank, Send Plan, and Response Tracker. Contact Segments columns: Segment, Lead Type, Last Contact, Message Angle, Permission Note. Message Bank columns: Segment, Text Version, Purpose, Follow-Up If Positive, Follow-Up If Negative. Response Tracker columns: Name, Message Sent, Reply Category, Next Step, Follow-Up Date, Status.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the 9-word principles to keep messages short and human.
2. Group leads by last known intent and relationship warmth instead of sending one generic message to everyone.
3. Write at least five short message variants for each major segment. Keep each message as close to nine words as practical without sounding unnatural.
4. Create response categories: still interested, not now, already moved, working with someone, wrong number, no response, and do not contact.
5. Write next-step replies for each response category.
6. Create a send plan that staggers messages by segment and includes a follow-up window.
7. Add a Response Tracker with status options and follow-up dates.
8. Format the workbook so the message bank is easy to filter and copy.

## Fair Housing & Compliance Notes
Respect consent, do-not-contact requests, unsubscribe rules, and local text/email regulations. Do not send misleading one-to-one messages if the campaign is automated or mass-sent. Avoid protected-class references, pressure tactics, and claims that create false urgency.

## Sample Trigger Phrases
- Write 9-word texts for cold buyer leads
- Reactivate my cold database
- Create a low-pressure text campaign for dormant sellers
- Revive old leads with short messages
- Build a response tracker for 9-word texts
