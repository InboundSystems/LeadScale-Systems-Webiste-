# Archived: The Booking Line

Archived 2026-11-02 as part of the November 2026 flagship rework
(`docs/WEBSITE-REWORK-2026-11.md`, section 7). The Booking Line was never
validated or built, and must not be described on the site.

**Not reachable, not routed, not built, not indexed.** This directory sits
outside `app/`, and `archive` is excluded in `tsconfig.json`.

## What's here

- `systems-entry.ts` — the full `content/systems.ts` entry (copy, FAQ, the
  204/58 salon research block) as it stood on commit `d8ca6c3`, plus the two
  stray Booking Line sentences removed from `content/audience.ts` and
  `content/privacy.ts` in the same pass.

The rendering for `research` was removed from `components/systems/SystemPage.tsx`
in the same rework; `git show d8ca6c3:components/systems/SystemPage.tsx` has it.

## Restoring

Not intended. If a booking system is ever validated, write it fresh against
the facts at that time rather than restoring this copy.
