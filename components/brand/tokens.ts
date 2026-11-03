import type { CSSProperties } from 'react'

// Plain data, no 'use client' — BrandProvider.tsx (a client component) and
// the server-only icon/opengraph-image routes both need these values, and a
// server route can't dot into a value imported from a client module. This
// file is the single source both sides read from.

export type Brand = 'media' | 'systems'

// Accent overrides per brand. Media's base tokens (ink, surface, slate, card-
// fill, hairline, radii — see docs/brand/shared-system.md) live in
// app/globals.css :root. The flagship replaces that dark base with its own
// light neutrals, scoped to [data-brand='systems'] in app/globals.css — see
// docs/brand/leadscale-systems.md.
//
// Flagship accent (7 November 2026): the original site's blue. Links,
// buttons and focus rings. On white: accent 5.17, accent-deep 6.70. On the
// light cool grey ground (#F6F7FB) accent is 4.83. accent-light (#60A5FA) is
// the focus ring and link colour on dark grounds (7.63 on the hero ink).
// Retired: the deep teal (#2E6E6B) of November 2026.
export const ACCENTS: Record<Brand, CSSProperties> = {
  systems: {
    '--accent': '#2563EB',
    '--accent-deep': '#1D4ED8',
    '--accent-light': '#60A5FA',
    '--accent-rgb': '37 99 235',
  } as CSSProperties,
  media: {
    '--accent': '#4F46E5',
    '--accent-deep': '#4338CA',
    '--accent-light': '#818CF8',
    '--accent-rgb': '79 70 229',
  } as CSSProperties,
}

// Wordmark config per brand — see docs/brand/*.md "Wordmark" sections.
// suffix is the accent-coloured second word. Optional: the flagship brand is
// just "Vicaria" (the company itself, no second word); the media arm keeps
// its own suffix ("MEDIA") to read as "Vicaria Media".
export const WORDMARKS: Record<Brand, { prefix: string; suffix?: string; minWidth: number }> = {
  systems: { prefix: 'Vicaria', minWidth: 140 },
  media: { prefix: 'Vicaria', suffix: 'MEDIA', minWidth: 190 },
}
