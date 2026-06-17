---
name: drip-campaign-personalizer
description: "Use this skill whenever an agent wants to personalize drip campaigns by lead source, stage, persona, timeline, property need, or behavior without sounding automated. Triggers include personalize my drip, segment email campaign, buyer seller drip, nurture automation copy, or message map. Produces an Excel workbook with segment profiles, drip map, message library, QA checklist, and metrics tracker."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Transforms generic drip ideas into a segmented campaign that feels personal. The agent receives an Excel workbook with audience segments, timing, message copy, personalization cues, quality checks, and performance tracking.

## How to Run This Skill
1. Tell Claude: "Personalize my drip campaign"
2. Provide:
- The audience segments or lead list
- Lead source, stage, timeline, and persona details
- The campaign goal and offer
- Preferred channels, send frequency, and tone
3. Claude will ask up to 5 clarifying questions about segments, campaign goal, cadence, personalization fields, and success metrics before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Audience segments | Lead groups to personalize | Portal buyers, open house visitors, future sellers, past clients |
| Campaign goal | What the drip should accomplish | Book consultations with warm buyer leads |
| Cadence | How often messages should go out | Weekly for 6 weeks |
| Personalization cues | Details available for tailoring | Property viewed, neighborhood, timeline, price range |
| Channels | Email, text, direct message, call, postcard, or mixed | Email plus text after high-intent actions |

## Output Format
An Excel workbook named Drip_Campaign_Personalizer_<campaign>_<date>.xlsx with five sheets: Segment Profiles, Drip Map, Message Library, QA Checklist, and Metrics Tracker. Drip Map columns: Segment, Stage, Trigger, Day, Channel, Message Goal, Personalization Field, Subject or Opener, CTA, Follow-Up Rule. Metrics Tracker columns: Sent, Opens, Replies, Appointments, Opt-Outs, Notes.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the campaign and use the segmentation matrix to prevent generic copy.
2. Define each segment by persona, source, stage, timeline, intent, and likely concern.
3. Create a drip map with triggers, send days, channels, message goals, personalization fields, and CTAs.
4. Write message copy for each segment and stage using the available personalization cues.
5. Create a QA Checklist that catches robotic phrasing, missing context, too many CTAs, unsupported claims, and compliance issues.
6. Create a Metrics Tracker for replies, appointments, opt-outs, and notes so the agent can improve the campaign.
7. Keep each message short enough to be skimmed and specific enough to feel one-to-one.
8. Format the workbook with filters, frozen headers, and clean sections for campaign handoff.

## Fair Housing & Compliance Notes
Include opt-out language where required. Do not make claims about protected-class demographics, neighborhood desirability, school quality, guaranteed outcomes, or fixed commissions. Use only data the agent provides or clearly marks for completion before sending. Respect consent and privacy for uploaded lead lists.

## Sample Trigger Phrases
- Personalize my buyer drip campaign
- Segment this nurture sequence
- Create message maps for open house leads
- Make my CRM emails sound less robotic
- Build a drip campaign tracker
