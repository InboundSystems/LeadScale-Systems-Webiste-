import type { CSSProperties } from 'react'
import type { CategoryDef } from '@/content/types'
import { CATEGORY_TONES } from '@/components/brand/categories'
import EyeDot from './EyeDot'

// An Outlook-style category tag: the category's colour as a square swatch
// (or the owl's eye, for section chips) and its numbered name, in Plus
// Jakarta Sans like every other label. The label carries the meaning, so
// colour is never the only signal.
//
// Night: the chip carries both its dark and its light colour set as CSS
// variables; app/globals.css ("Chips") shows the dark set on the page and
// the light set inside a lit screen (.lit), so the same chip is AA in both.
export default function CategoryChip({
  category,
  size = 'sm',
  eye = false,
  className = '',
  onHover,
}: {
  category: CategoryDef
  size?: 'sm' | 'md'
  /** Kept for the API; on the dark page every chip already reads as inverse. */
  inverse?: boolean
  /** The owl's eye in place of the square (section chips). */
  eye?: boolean
  className?: string
  /** Called with the label on pointer enter, and null on leave. */
  onHover?: (label: string | null) => void
}) {
  const tone = CATEGORY_TONES[category.tone]
  const sizing =
    size === 'md' ? 'gap-2 px-2 py-[5px] text-[0.8125rem]' : 'gap-1.5 px-1.5 py-[3px] text-[0.75rem]'
  const vars = {
    '--chip-bg': tone.dark.tint,
    '--chip-fg': tone.dark.text,
    '--chip-bd': tone.dark.border,
    '--chip-sw': tone.dark.swatch,
    '--chip-bg-l': tone.tint,
    '--chip-fg-l': tone.text,
    '--chip-bd-l': tone.border,
    '--chip-sw-l': tone.swatch,
  } as CSSProperties
  return (
    <span
      className={`chip inline-flex max-w-full items-center whitespace-nowrap rounded-[4px] border font-medium leading-none tracking-[0.01em] transition-colors duration-300 ease-out ${sizing} ${className}`}
      style={vars}
      onMouseEnter={onHover ? () => onHover(category.label) : undefined}
      onMouseLeave={onHover ? () => onHover(null) : undefined}
    >
      {eye ? (
        <EyeDot colour="var(--chip-swc)" size={11} />
      ) : (
        <span aria-hidden="true" className="chip-sw h-2.5 w-2.5 shrink-0 rounded-[2px]" />
      )}
      {category.label}
    </span>
  )
}

/** Person labels are Outlook categories too, set as a neutral chip. */
export const personLabelTone = 'neutral' as const
