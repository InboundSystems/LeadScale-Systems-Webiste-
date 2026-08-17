# Archived — trade/contracting flagship content

Archived 2026-08-17, before the pivot to the Australian beauty/grooming
vertical. This is the "back-office diagnostic" positioning for trade and
contracting businesses (electricians, plumbers, HVAC, etc.) that lived at `/`
and `/enquire` before the rewrite.

**Not reachable, not routed, not built, not indexed.** This directory sits
outside `app/`, so Next.js never sees it as a route, and it's excluded from
`tsconfig.json` so it's not part of the TypeScript build either.

HVAC, pest control, and auto servicing are still on the expansion roadmap —
this is kept for that, not as dead weight.

## What's here

Exact copies of the live files as they stood immediately before the pivot:

- `app/layout.tsx` — was `app/(systems)/layout.tsx` (nav, footer, metadata, noindex)
- `app/page.tsx` — was `app/(systems)/page.tsx` (home page composition + FAQ)
- `app/enquire-page.tsx` — was `app/(systems)/enquire/page.tsx` (trade-specific
  qualifying fields: trade type, team size, job-management software)
- `components/*.tsx` — was `components/systems/*.tsx` (Hero, Problem, Ladder,
  Diagnostic, Accountability, WhoWeAre)

The shared design system these depended on (`components/ui/Button`,
`components/ui/Card`, `components/ui/NumberedStep`, `components/brand/*`) was
**not** archived — it's shared infrastructure that stays live for the beauty
vertical too, so the current versions of those files are what this content
would need if restored.

## How to restore

1. Copy `archive/trades-back-office/components/*.tsx` back into
   `components/systems/`.
2. Copy `archive/trades-back-office/app/layout.tsx` and
   `archive/trades-back-office/app/page.tsx` back into `app/(systems)/`.
3. Copy `archive/trades-back-office/app/enquire-page.tsx` back into
   `app/(systems)/enquire/page.tsx`.
4. Remove `archive` from `tsconfig.json`'s `exclude` array if this directory
   is being retired rather than reused for the next archive pass.
5. Whatever occupies `app/(systems)/*` and `components/systems/*` at
   restoration time (i.e. the beauty-vertical content) will need to move
   somewhere else first — this restores the trade content to those exact
   paths, it doesn't merge with what's there.

The original commit history for these files is also intact on this branch
(`brand-split-media-ai`) prior to the archive commit, if `git show`/`git log`
on the original paths is easier than copying from here.
