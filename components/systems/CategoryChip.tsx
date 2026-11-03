import type { CategoryDef } from '@/content/types'
import { CATEGORY_TONES } from '@/components/brand/categories'
import EyeDot from './EyeDot'

// An Outlook-style category tag: the category's colour as a square swatch,
// its numbered name in monospace, set in the tone's own AA text colour. The
// label carries the meaning, so colour is never the only signal.
//
// The same chip labels sections ("01 The work"), in size md. On the dark
// band it is inverse: a white chip, violet text (8.98 on white).
export default function CategoryChip({
  category,
  size = 'sm',
  inverse = false,
  eye = false,
  className = '',
  onHover,
}: {
  category: CategoryDef
  size?: 'sm' | 'md'
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
  const colours = inverse
    ? { backgroundColor: '#fff', borderColor: '#fff', color: CATEGORY_TONES.violet.text }
    : { backgroundColor: tone.tint, borderColor: tone.border, color: tone.text }
  return (
    <span
      className={`v-mono inline-flex max-w-full items-center whitespace-nowrap rounded-[3px] border leading-none transition-colors duration-300 ease-out ${sizing} ${className}`}
      style={colours}
      onMouseEnter={onHover ? () => onHover(category.label) : undefined}
      onMouseLeave={onHover ? () => onHover(null) : undefined}
    >
      {eye ? (
        <EyeDot colour={tone.swatch} size={11} />
      ) : (
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-[1px]" style={{ backgroundColor: tone.swatch }} />
      )}
      {category.label}
    </span>
  )
}

/** Person labels are Outlook categories too, set as a neutral white chip. */
export const personLabelTone = 'neutral' as const
