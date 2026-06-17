---
name: listing-renewal-re-list-pitch
description: "Extended skill for situations where an agent needs to renew, relaunch, or win back a listing the agent originally took after it expired, was withdrawn, or failed to sell. Triggers include relist pitch, listing renewal, win back my seller, relaunch my old listing, or expired listing I had. Produces a PowerPoint deck with a seller-facing relaunch diagnosis, renewed strategy, and meeting close."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a seller-facing relist pitch deck for an agent who needs to regain confidence after their own listing did not sell. The output is a polished PowerPoint presentation with a respectful diagnosis, revised plan, timeline, and clear next steps.

## How to Run This Skill
1. Tell Claude: "Build a listing renewal and re-list pitch"
2. Provide:
- The property address and prior listing performance
- Original list price, price changes, days on market, marketing activity, showing feedback, and offer history
- What the agent would change in pricing, prep, access, marketing, or communication
- Seller concerns and desired renewal terms
3. Claude will ask up to 5 clarifying questions about what happened, what will change, seller concerns, updated pricing position, and relaunch timeline before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property details | Address, prior listing period, and property facts | 19 Garden Place, listed March to May |
| Performance facts | Days on market, showings, feedback, offers, reductions, and marketing activity | 64 days, 14 showings, no offers, one price reduction |
| Seller concern | What the seller may be worried about now | Seller feels the launch lost momentum |
| Relaunch changes | What the agent will do differently | New photos, revised price band, broker open, weekly reporting |
| Desired close | The renewal decision the deck should support | Renew for 45 days with new launch plan |

## Output Format
A PowerPoint deck named Listing_Renewal_ReList_Pitch_<property street>_<date>.pptx with 9 slides: Title, Where We Started, What the Market Told Us, What Limited Momentum, The Relaunch Strategy, Pricing and Positioning, 14-Day Relaunch Calendar, Seller Options, and Recommended Next Step. Include speaker notes with plain-English talk track for each slide.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the deck and use the relaunch storyline to keep the tone accountable and forward-looking.
2. Create a seller-facing diagnosis that acknowledges what happened without blame or defensiveness.
3. Build a 9-slide PowerPoint deck using the slide titles listed in the Output Format.
4. On the diagnosis slides, separate facts from interpretation. Use tables or short bullets rather than long paragraphs.
5. On the strategy slides, show exactly what will change in price positioning, listing presentation, access, media, marketing, communication, and first-week urgency.
6. Create a 14-day relaunch calendar with day, action, purpose, and seller expectation.
7. Include two or three seller options, then clearly recommend one path with a respectful rationale.
8. Add speaker notes for each slide so the agent can present the deck confidently.

## Fair Housing & Compliance Notes
Do not guarantee a sale, a price, or market response. Do not shift blame to the seller, buyers, another brokerage, or protected-class factors. Do not state commissions are fixed or standard. Keep claims tied to provided facts and clearly separate recommendations from guarantees.

## Sample Trigger Phrases
- Build a relist pitch for my expired listing
- Help me renew this listing with the seller
- Create a deck to win back my own seller
- Relaunch my old listing with a better plan
- Make a listing renewal presentation
