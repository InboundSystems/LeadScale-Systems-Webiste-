# leadscale-website

Next.js 14 / Vercel. Two brands in one codebase.

- **Vicaria Media** — live marketing agency site (SEO, paid traffic, social for tradespeople and local service businesses). Stable. Not under active development.
- **Vicaria** — the flagship. Not launched, still `noindex`. **This is the active work.**

`docs/WEBSITE-REWORK-2026-11.md` is the source of truth for the flagship: section 3 for company
positioning, section 4 for every claim about The Front Office, section 5 for data handling,
section 6 for the IT providers page, section 7 for the page table, section 8 for design.
`docs/REPLY-2026-11-03-company-first.md` re-centred sections 3 and 7 on the company.
`docs/POSITIONING.md` summarises the positioning. Read them before touching flagship copy.

## Copy standard

All client-facing copy on this site must comply with `docs/VOICE.md`. The standard
takes precedence over any copy currently in the repo — existing strings are not
grandfathered in just because they predate it. Note `/docs` is gitignored, so
`VOICE.md` won't show up in `git status` or diffs; read it directly.

## Working rules

- All flagship work happens on `brand-split-media-ai`. `main` is production.
- **Never push, deploy, or merge without explicit sign-off.** Local commits only.
- Don't touch the Media brand unless something is genuinely shared or coupled (e.g. the BrandProvider design system).
- Run typecheck and build before considering a change done. Flagship routes must return 200 and still emit `noindex`.

## What the flagship is

**Vicaria's brand is taking recurring administrative work off service businesses.** The Front
Office is one system Vicaria operates, never the brand. The site must still make sense with five
systems in different sectors.

Vicaria Systems (ABN 67 221 728 299, Brisbane) builds and operates systems that take recurring
administrative work off service businesses, inside the software they already use. Each system is
one product, configured per business from a written settings record agreed at onboarding; later
changes are approved by email. Nothing is a custom build. The client receives completed work and
administers nothing. Founders Sam Hindmarsh and Blake Russell are named on About only.

Positioning is split into two levels. Keep them distinct:

- **Company level** — what Vicaria is: taking recurring administrative work off service
  businesses. Home, About, How it works, the systems index, site title, meta and Open Graph. Say
  "service businesses"; medical and allied health practices may be named only as where the first
  system is built for. No email or inbox wording. Do not invent or name future sectors or systems.
- **System level** — what exists today: exactly **one** system, **The Front Office**, for
  specialist medical and allied health practices on Microsoft 365. It marks every email in a
  shared mailbox with the practice's own numbered Outlook categories where it sits, sends one
  morning summary on open days, lists known senders in Junk, prepares approved replies for a named
  sender into Drafts, and never overrides reception's corrections.

The homepage hero shows The Front Office as a worked example, under the company-level H1. The H1
and subhead stay company-level. Elsewhere on the homepage it appears as a card in the systems
section and as the morning summary that follows it, both labelled as The Front Office. Its details (installation steps, measure, permissions, what it stores) live
on system-level pages: `/systems/front-office`, `/it-providers` ("For IT providers: The Front
Office"), and the labelled Front Office subsection of `/data-handling`.

## Copy — hard constraints

These are absolute. Violations have already required correction rounds.

- **Banned words in marketing copy:** "AI", "automation" / "automated", "tool", "platform", "dashboard", "app". Describe delivered work, not software. "AI model" is permitted in factual data-handling and IT-provider copy where precision requires it; "automated decision-making" is permitted as the legal term.
- **No invented social proof.** No testimonials, client names, logos, ratings, counts of clients, case studies, or years-in-business claims. Never name a client. Their absence is deliberate — never offer to add them, even as placeholders.
- **Never state or imply a system is live in a client business.** Describe how it works, never what it is doing for someone today. Illustrations use a fictional practice and say so.
- **No statistics** except facts about how the system works ("two permissions", "one mailbox"). The old 204/58 salon research is retired; never cite it.
- **No clinical claims.** The system makes no clinical judgement, assigns no priority, decides nothing about urgency. Not even as a benefit.
- **No unbuilt features.** Later stages and add-ons that do not exist are not described at all.
- **No promise to reduce staff.** Hours given back and order restored, not headcount.
- **No pricing** published anywhere. `pricingStatement` in `content/pricing.ts` is the only pricing line.
- **Ending an engagement — use only this wording** (services agreement clauses 4.1 and 4.2): "An engagement has no minimum term. Either party can end it at any time by written notice. The client's own administrator can withdraw access immediately, without going through Vicaria, and data is returned or deleted at the client's election, within 30 days of a request." There is no fixed term. The twelve-month figure in the agreement is a fee hold (a price lock), not a term: never mention it, or any price.
- **No blog or resources section. No phone number.**
- **Voice:** plain-spoken and direct, like two capable people explaining their work (docs/VOICE.md, rewritten 5 November 2026). "We", "you" and contractions are allowed; short sentences and concrete examples (sorting the inbox, keeping track of who's still waiting for a reply) beat abstract nouns. Vicaria no longer has to be the grammatical subject. Founders are still never the trust argument, and are named on About only. A draft leaning on "two real people, not a call centre" was already rejected — don't go back there.
- **Sentence case** for every flagship heading, button and nav label.

## Deliberate states — do not "fix" these

Each of these looks like an oversight and isn't:

- **`noindex` on every flagship route** is policy until an explicit launch decision. Never remove it as cleanup.
- **The intended purpose statement** (`content/intended-purpose.ts`) is verbatim and must match the signed assessment, including "categories or folders" and its straight apostrophes. Never edit it.
- **`archive/booking-line/`** — The Booking Line, never validated or built. Removed from the site in November 2026; `/systems/booking-line` is a 404. Do not route, restore or mention it.
- **`archive/trades-back-office/`** — an earlier electricians/plumbers positioning. Excluded from the TS build, unrouted, preserved on purpose. Do not delete, route, or resurrect it.
- **Optional slots in `content/systems.ts`** render nothing when unset. The Front Office's slots, including `faq`, are filled from section 4 of the rework brief; a future system's slots stay empty until it is validated. They are not TODOs.

## Content architecture

Copy lives in data files, not in components. Components read from these — never hardcode copy into a component.

- `content/audience.ts` — company level: business details, nav/footer, home, /systems, /how-it-works, /about, page metadata. Its `audience` export exists only for Media's shared Footer and CTA.
- `content/systems.ts` — array of systems, one entry today, including the fictional illustration data.
- `content/it-providers.ts`, `content/data-handling.ts`, `content/privacy.ts`, `content/contact.ts`, `content/pricing.ts`, `content/intended-purpose.ts`.
- `content/types.ts` — types every content file, so a wrong-shaped edit fails at build.

Flagship pages: Home, Systems, The Front Office (`/systems/front-office`), How it works, For IT providers, Data handling, Privacy, About, Enquire (email only).

## Design

Flagship only; Media keeps its dark look and shared components (`components/Navbar`, `Footer`, `components/ui`, `components/home`). The flagship uses its own components in `components/systems/` (server components, no framer-motion). Tokens: accent in `components/brand/tokens.ts`, neutrals scoped to `[data-brand='systems']` in `app/globals.css`. Fonts (Source Serif 4, Source Sans 3, Source Code Pro) load in `app/(systems)/layout.tsx`. See `docs/brand/leadscale-systems.md`.
