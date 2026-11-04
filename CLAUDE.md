# leadscale-website

Next.js 14 / Vercel. Two brands in one codebase.

- **Vicaria Media** — live marketing agency site (SEO, paid traffic, social for tradespeople and local service businesses). Stable. Not under active development.
- **Vicaria** — the flagship. Not launched, still `noindex`. **This is the active work.**

**`docs/WHAT-WE-DO-2026-11.md` (Sam's rundown, from our real configuration) is the first source of
truth for every claim; where it differs from anything else, it wins.** Then
`docs/WEBSITE-REWORK-2026-11.md`: section 3 for company
positioning (superseded by the clinics positioning below), section 4 for every claim about The Front Office, section 5 for data handling,
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

**Clinics positioning (10 November 2026; supersedes "service businesses" and
docs/REPLY-2026-11-03-company-first.md where they disagree).** Vicaria builds and runs systems
that take the administrative work off **specialist medical practices'** front desk, inside the
**Microsoft 365** they already use. Vicaria stays the subject and the brand. **The Front Office**
is named as **our first system** ("our first system"), so a second can be added later without
rewriting the company. Never describe or name a second system before it exists.

Vicaria Systems (ABN 67 221 728 299, Brisbane). Each system is one product, configured per
practice from a written settings record agreed at onboarding; later changes are approved by
email. Nothing is a custom build. The practice receives completed work and administers nothing.
Founders Sam Hindmarsh and Blake Russell are named on About only.

- **Company level** (home, About, How it works, the systems index, site title, meta, Open Graph):
  specialist medical practices (specialists, and allied health), their front desk, their shared
  inbox. Inbox and email wording is allowed at company level now; the retired rule ("service
  businesses", "no email or inbox wording") must not come back.
- **System level** (`/systems/front-office`, `/it-providers` "For IT providers: The Front Office",
  the labelled Front Office subsection of `/data-handling`): the full detail. The homepage
  summarises; the system page explains, without repeating the homepage word for word.
- **The homepage hero shows the practice inbox** (a fictional specialist practice at "Monday,
  7:55 am": overnight and weekend mail already marked, 00 Unclear at the top, one "For Dr Smith"
  label; Before / After on click only). Homepage order: hero; One inbox, everything in it; What
  we do (the seven things, each with a small static lit-screen detail); What it never does;
  How a practice starts; How it's judged; Not for every practice; email enquiry.
- **Illustrations** use a fictional specialist practice: no specialty named, fictional doctors
  and senders, no diagnoses or clinical detail in any subject line.
- "There when you aren't." is the theme line, true because mail is marked as it arrives,
  overnight and at weekends, and the summary is ready at 7:00 am before reception opens. Don't
  stretch it to anything else.

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
- **Ending an engagement — use only this wording** (services agreement clauses 4.1 and 4.2; rewritten in the you/we voice 6 November 2026, same facts): "There's no minimum term. Either of us can end it at any time, in writing. Your own IT administrator can withdraw our access at any time, without asking us, and it takes effect immediately. Your data is returned or deleted, whichever you choose, within 30 days of asking." There is no fixed term. The twelve-month figure in the agreement is a fee hold (a price lock), not a term: never mention it, or any price.
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

Flagship only; Media keeps its dark look and shared components (`components/Navbar`, `Footer`, `components/ui`, `components/home`). The flagship uses its own components in `components/systems/` (server components; framer-motion only in the hover tilt, `Tilt.tsx`).

**Less animation (clinics, 10 November 2026): nothing moves on its own.** Allowed: the once-only fade-in on scroll (`ScrollReveal`), the hover tilt on lit screens, and the inbox Before / After toggle, which shows After by default and changes only on click (FLIP on click; no autoplay, no Replay in the hero). Removed, do not bring back: the scroll stories (One night, Every system runs the same way, A night at the practice), pinned stages, big clocks, beat annotations, scroll-linked transforms, star parallax, the looping inbox preview, the eye that opens, the navbar owl blink, the marker underline drawing in. Static stars in the hero and footer only. Tokens: accent in `components/brand/tokens.ts`, everything else scoped to `[data-brand='systems']` in `app/globals.css`, category chips in `components/brand/categories.ts`. See `docs/brand/leadscale-systems.md`.

**Night (8 November 2026): the flagship is dark throughout, in one font.**
- **Dark throughout**, on the brand guide's dark recipe (`docs/brand/shared-system.md`): page ink #05050F, alternate sections on surface #0B0B18, the How it runs band in the deep night blue #0A1630, the old "warm" slot navy #0F1729. Cards: fill rgba(255,255,255,0.024), hairline rgba(255,255,255,0.10), 12px radius; buttons 8px. Headings near-white (#F1F5F9), body #CBD5E1, secondary slate #94A3B8; links, eyebrows and focus rings light blue #60A5FA; light blue #93C5FD (`--note`; #1D4ED8 inside lit screens) for annotations, ticks, strikes, the eye motif and the underline under "the admin". Primary buttons: the guide's blue gradient (#2563EB → #1D4ED8) with its soft glow; outline buttons a white hairline. The navbar is ink (translucent with a blur once scrolled) with a white logo. **Indigo (#4F46E5) is reserved for Vicaria Media: never use it on the flagship.**
- **Palette (night story, 9 November 2026): black, white, dark blue and light blue. Nothing else.** Black: ink #05050F, surface #0B0B18. Dark blue: navy #0F1729, night blue #0A1630. Blue #2563EB → #1D4ED8 for buttons and primary accents. Light blue #60A5FA / #93C5FD for links, eyebrows, annotations, ticks, strikes, the eye motif and focus rings. White and slate (#CBD5E1, #94A3B8) for text. **No violet, purple, fuchsia, indigo or cyan anywhere on the flagship** (not in chips, glows, tints or the footer squares).
- **The night-to-morning fade ("first light") is retired.** Static stars in the hero and footer only; the owl watermarks in the hero and footer only (the agreed exception to the logo contrast rule). No moon, cartoon owl or shooting stars.
- **Lit screens**: the practice inbox (hero and Try it yourself), the What we do details, the inbox illustration, the morning summary email, the /enquire compose window and the undeliverable notice stay LIGHT (white / cool grey), with a soft cool glow, as the brightest things on the page. They carry `.lit lit-screen`; `.lit` re-declares the light tokens inside them. Never turn them dark.
- **One font**: Plus Jakarta Sans everywhere on the flagship: headings, body, category and section chips, From / To headers, the counts line, the folder rail, every label, the windows. Monospace (Source Code Pro, `.v-mono`) has exactly two exceptions: the plain-text morning summary on /systems/front-office (it mirrors the real email's fixed columns) and the Microsoft Graph permission names on /it-providers. Weights per the guide: H1 800 with tight tracking (-0.04em), H2 700, H3 600, body 400, eyebrows 12px / 600 / uppercase / 3px. Headings, buttons and nav stay sentence case (the copy rule), not the guide's Title Case / ALL CAPS.
- Category chips, shades of the blue family plus a white outline and slate, told apart by their numbers (The Front Office's typical set, `content/systems.ts`): 00 Unclear outline, 01 Appointments blue, 02 Patient Enquiries light blue, 03 Results & Clinical Correspondence dark blue, 04 Scripts blue, 05 Pharmacy & Suppliers light blue, 06 Accounts & Billing, 07 Faxes & Scans, 09 Business Admin and 10 Marketing & Promotions slate, 08 Referrals dark blue; person labels neutral. Each tone has a dark set (on the page) and a light set (inside lit screens); `CategoryChip` carries both and CSS picks. All AA (6.16+ light, 11.9+ dark).
- **Logo:** `public/brand/vicaria-owl.svg` and `vicaria-wordmark.svg` (currentColor), used through the generated `components/brand/VicariaOwl.tsx` / `VicariaWordmark.tsx` (never redraw or alter; regenerate from the SVGs). Clear space: the owl's eye-circle height (about 37% of the owl's height) on all sides. Minimum sizes: owl 16px tall, lockup 140px wide. Never a gradient, outline or glow on the mark, never on a busy background or below 4.5:1 (the 4% hero and footer watermarks are decorative texture, the agreed exception). Navbar: owl 32px + wordmark, white; footer and OG image: owl, thin rule, wordmark; favicon and apple icon: white owl on ink (in `app/(systems)/`, so /media is untouched); 404: owl above the message. /media keeps its own wordmark.
- **The owl's eye motif:** a small static ring-and-pupil eye (`components/systems/EyeDot.tsx`, not the logo), for the folder rail's current item, the section chips and the "What it never does" bullets only.
- **Lit screens sit straight at rest and tilt on hover** (night story): with a fine pointer over a lit screen (the inboxes, the What we do details, the summary, the compose window) it leans towards the pointer, at most 6 degrees in perspective, with a soft sheen that follows, and springs back on leave (`components/systems/Tilt.tsx`, framer-motion springs, transform and opacity only). Never on touch, never under reduced motion. No resting tilt.
- **Type scale, six text sizes plus the heading classes:** 0.75rem (window metadata, chip text), 0.8125rem (window rows, rail, annotations), 0.875rem (small text, nav, buttons, captions), 1rem, 1.125rem (h3), 1.5rem (card titles, statements, page-end lines); then .v-lead, .v-h2, .v-h1, .v-display, .v-pull. Do not add in-between sizes.
- **Scroll reveal** (`components/systems/ScrollReveal.tsx`): `[data-reveal]` fades and rises 18px into place once, 600ms ease-out; `[data-reveal-stagger]` reveals its children 70ms apart. Hidden only under html.js, with a 2.5s failsafe; nothing moves under reduced motion. Section, PageHeader and PageEnd reveal via `Container reveal`; the hero does not. Anchor links scroll smoothly (not under reduced motion).
- **Retired, do not bring back:** Fraunces, Instrument Sans, Caveat (and any handwriting), saffron, amber, cream / warm grounds, teal, green / sage, plum, rose, violet, purple, fuchsia, cyan, indigo on the flagship, the light page, the "first light" fade, the static hero illustration, the step-through "A working day" timeline, the scroll stories and the Monday to-do list. No cartoon owls, moons or emoji.
