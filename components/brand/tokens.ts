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
// Flagship accent: deep teal, the colour on every Vicaria document. Contrast
// on the #F8FAF9 ground: accent 5.63, accent-deep 7.59. accent-light is 2.71
// and is for rules and decoration only, never text or focus rings.
export const ACCENTS: Record<Brand, CSSProperties> = {
  systems: {
    '--accent': '#2E6E6B',
    '--accent-deep': '#245956',
    '--accent-light': '#77A19F',
    '--accent-rgb': '46 110 107',
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
