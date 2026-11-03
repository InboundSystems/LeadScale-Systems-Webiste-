import type { CategoryDef } from '@/content/types'
import { CATEGORY_TONES } from '@/components/brand/categories'

// An Outlook-style category tag: the category's colour as a square swatch,
// its numbered name in monospace, set in the tone's own AA text colour. The
// label carries the meaning, so colour is never the only signal.
export default function CategoryChip({
  category,
  className = '',
  onHover,
}: {
  category: CategoryDef
  className?: string
  /** Called with the label on pointer enter, and null on leave. */
  onHover?: (label: string | null) => void
}) {
  const tone = CATEGORY_TONES[category.tone]
  return (
    <span
      className={`v-mono inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-[3px] border px-1.5 py-[3px] text-[0.75rem] leading-none ${className}`}
      style={{ backgroundColor: tone.tint, borderColor: tone.border, color: tone.text }}
      onMouseEnter={onHover ? () => onHover(category.label) : undefined}
      onMouseLeave={onHover ? () => onHover(null) : undefined}
    >
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-[1px]" style={{ backgroundColor: tone.swatch }} />
      {category.label}
    </span>
  )
}

/** Person labels are Outlook categories too, set in a neutral slate. */
export const personLabelTone = 'slate' as const
