import type { CategoryTone } from '@/content/types'
import CategoryChip from './CategoryChip'

// A section eyebrow set as a category chip. Where a page has a real sequence
// of sections (the homepage) it is numbered in page order, "01 The work",
// the way a practice numbers its categories, one colour per section. A page
// with a single chip leaves the number off: "About". The label comes from
// content; the number and colour are layout.
export default function SectionChip({
  n,
  label,
  tone,
  inverse = false,
  className = '',
}: {
  /** Position in the page's sequence; omit on single-chip pages. */
  n?: number
  label: string
  tone: CategoryTone
  inverse?: boolean
  className?: string
}) {
  return (
    <p className={`mb-5 ${className}`}>
      <CategoryChip
        category={{ label: n === undefined ? label : `${String(n).padStart(2, '0')} ${label}`, tone }}
        size="md"
        inverse={inverse}
        eye
      />
    </p>
  )
}
