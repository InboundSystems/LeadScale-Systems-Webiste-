# leadscale-website

Next.js 14 / Vercel. Two brands in one codebase.

- **Vicaria Media** — live marketing agency site (SEO, paid traffic, social for tradespeople and local service businesses). Stable. Not under active development.
- **Vicaria Systems** — the flagship. Not launched, still `noindex`. **This is the active work.**

See `docs/POSITIONING.md` for the current flagship positioning (product, audience,
problem statement, wedge, differentiator, and the hard copy rules) — read it before
touching flagship copy.

## Working rules

- All flagship work happens on `brand-split-media-ai`. `main` is production.
- **Never push, deploy, or merge without explicit sign-off.** Local commits only.
- Don't touch the Media brand unless something is genuinely shared or coupled (e.g. the BrandProvider design system).
- Run typecheck and build before considering a change done. Flagship routes must return 200 and still emit `noindex`.

## What the flagship is

Two people (Blake and Sam, Brisbane) who take recurring back-office jobs off small, owner-run businesses and deliver them as **completed work** — not software.

Positioning is deliberately split into two levels. Keep them distinct:

- **Parent level** — what the business is generally: "we build and run back-office systems for small, appointment-based businesses." This is what the homepage sells.
- **System level** — what is actually running today: exactly **one** system, Client Reconnection (finding clients who've stopped booking and getting them rebooked), for the Australian beauty/grooming vertical (hair, beauty, massage, nails, lash/brow, tanning, barbershops, dog grooming).

The single system is framed as "the first of these," never as the whole business, so a second can be added later without restructuring.

## Copy — hard constraints

These are absolute. Violations have already required correction rounds.

- **Banned words:** "AI", "automation" / "automated", "tool", "platform", "dashboard", "app". Describe delivered work, not software.
- **No invented social proof.** No testimonials, client names, logos, stats, case studies, or years-in-business claims. Their absence is deliberate — never offer to add them, even as placeholders.
- **No pricing** published anywhere.
- **No blog or resources section.**
- **Voice:** confident and systems-flavoured, matching Media's copy. Not personal, not humble, not founder-legitimacy-driven. Founders are named on About but are never used as the trust argument. A draft leaning on "two real people, not a call centre" was already rejected — don't go back there.

## Deliberate states — do not "fix" these

Each of these looks like an oversight and isn't:

- **`noindex` on every flagship route** is policy until an explicit launch decision. Never remove it as cleanup.
- **Empty optional slots** (`howItWorks`, `whoThisIsntFor`, `faq`) in `content/systems.ts` stay empty until a system is validated. They are not TODOs.
- **`archive/trades-back-office/`** — an earlier electricians/plumbers positioning that was abandoned in favour of the beauty vertical. Excluded from the TS build, unrouted, preserved on purpose because HVAC / pest control / auto servicing are on a future roadmap. Do not delete, route, or resurrect it.

## Content architecture

Copy lives in data files, not in components. Components read from these — never hardcode copy into a component.

- `content/audience.ts` — parent-level copy: who we are, who we serve, how a system works in general, who it's not for, data-handling principles, About, contact.
- `content/systems.ts` — array of systems, one entry today, with optional slots that stay empty until validated.
- `content/types.ts` — types both, so a wrong-shaped edit fails at build.

Flagship pages: Home, What We Offer (parent statement + the one system, kept brief), How It Works (general 3–4 step process + data handling), About (short, professional), Enquire (form + email, no phone).
