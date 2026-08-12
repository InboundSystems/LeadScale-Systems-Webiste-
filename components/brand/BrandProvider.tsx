import type { CSSProperties, ReactNode } from 'react'

export type Brand = 'media' | 'systems'

// Colour values are unmigrated pending the brand token pass (see docs/brand/) —
// "systems" still carries the old AI-era amber accent. Do not touch these values here.
const THEMES: Record<Brand, CSSProperties> = {
  media: {
    '--accent-1': '#2563EB',
    '--accent-1-hover': '#1D4ED8',
    '--accent-1-rgb': '37 99 235',
    '--accent-2': '#06B6D4',
    '--accent-2-hover': '#0891B2',
    '--accent-2-rgb': '6 182 212',
  } as CSSProperties,
  systems: {
    '--accent-1': '#F59E0B',
    '--accent-1-hover': '#D97706',
    '--accent-1-rgb': '245 158 11',
    '--accent-2': '#FB923C',
    '--accent-2-hover': '#EA580C',
    '--accent-2-rgb': '251 146 60',
  } as CSSProperties,
}

export default function BrandProvider({
  brand,
  children,
}: {
  brand: Brand
  children: ReactNode
}) {
  return (
    <div data-brand={brand} style={THEMES[brand]}>
      {children}
    </div>
  )
}
