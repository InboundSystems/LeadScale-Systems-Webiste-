# Indexing checklist — flagship (`/`)

The flagship LeadScale Systems site (`/`, `/enquire`) is deployed and structurally
ready, but deliberately kept out of search until the vertical locks. This is enforced
in three places — all three must change together, or the site ends up partially
indexed with broken assumptions baked into redirects/sitemap.

When the business is ready to launch `/` for real:

1. **Remove the noindex.** Delete `robots: { index: false, follow: false }` from
   `app/(systems)/layout.tsx`. This currently applies to both `/` and `/enquire`
   (page-level metadata inherits it since neither page sets its own `robots` field).
2. **Update `app/robots.ts`.** Change the `disallow: '/'` rule — either drop it or
   scope it down, so `/` stops being blocked. Keep `/media` explicitly allowed either
   way.
3. **Update `app/sitemap.ts`.** It currently only enumerates `/media/*` routes. Add
   `''` (root) and `/enquire` (or whatever the flagship's final route surface is) once
   they're meant to be crawled.
4. **Reconsider the redirects in `next.config.js`.** `/book`, `/media/book`, and
   `/media/enquire` currently all resolve to `/media` — that assumes `/media` is the
   primary indexed surface. Once `/` is the primary surface, revisit whether those
   still make sense, and whether `/ai` → `/` is still the right mapping.
5. **Re-check copy, canonical tags, and OG metadata on `/` and `/enquire` for a live
   context** — they were written assuming pre-launch, and should get one more pass
   once real (non-placeholder) business content is locked in. See
   `docs/business-model.md` for the standing brief this is waiting on.
6. **Resubmit the sitemap in Google Search Console** after the above changes ship, so
   Google doesn't rely on cached crawl data from the noindex period.

Until all of the above happen, `/` and `/enquire` should stay noindexed even if other
parts of the site change — don't let a routine content edit accidentally drop the
`robots` field.
