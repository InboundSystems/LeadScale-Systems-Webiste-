import type { CategoryDef } from '@/content/types'

// An Outlook-style category tag: the category's colour as a swatch, its
// numbered name in monospace. The swatch is decoration; the label carries
// the meaning, so colour is never the only signal.
export default function CategoryChip({ category, className = '' }: { category: CategoryDef; className?: string }) {
  return (
    <span
      className={`v-mono inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-[3px] border px-1.5 py-[3px] text-[0.75rem] leading-none text-[var(--ink)] ${className}`}
      style={{ backgroundColor: `${category.colour}14`, borderColor: `${category.colour}55` }}
    >
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-[1px]" style={{ backgroundColor: category.colour }} />
      {category.label}
    </span>
  )
}

/** Person labels are Outlook categories too, set in a neutral slate. */
export const personLabelColour = '#5C6B71'
