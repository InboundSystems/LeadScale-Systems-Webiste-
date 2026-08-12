'use client'

import { createContext, useContext } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export type Brand = 'media' | 'systems'

// Accent-only overrides. Shared base tokens (ink, surface, slate, green, amber,
// card-fill, hairline, radii — see docs/brand/shared-system.md) live once in
// app/globals.css :root and never vary by brand. Adding a third sibling brand
// means adding one entry here — nothing else in the token system changes.
const ACCENTS: Record<Brand, CSSProperties> = {
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
export const WORDMARKS: Record<Brand, { prefix: string; minWidth: number }> = {
  systems: { prefix: 'LeadScale', minWidth: 140 },
  media: { prefix: 'LeadScale Media', minWidth: 190 },
}

const BrandContext = createContext<Brand>('systems')

export function useBrand() {
  return useContext(BrandContext)
}

export default function BrandProvider({
  brand,
  children,
}: {
  brand: Brand
  children: ReactNode
}) {
  return (
    <BrandContext.Provider value={brand}>
      <div data-brand={brand} style={ACCENTS[brand]}>
        {children}
      </div>
    </BrandContext.Provider>
  )
}
