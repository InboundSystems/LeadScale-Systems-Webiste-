import type { CategoryTone } from '@/content/types'
import CategoryChip from './CategoryChip'

// A section eyebrow set as a category chip, numbered in page order:
// "01 The work". The number is the section's place on its page, the way a
// practice numbers its categories. Each section on a page takes a different
// colour. The label comes from content; the number and colour are layout.
export default function SectionChip({
  n,
  label,
  tone,
  inverse = false,
  className = '',
}: {
  n: number
  label: string
  tone: CategoryTone
  inverse?: boolean
  className?: string
}) {
  return (
    <p className={`mb-5 ${className}`}>
      <CategoryChip category={{ label: `${String(n).padStart(2, '0')} ${label}`, tone }} size="md" inverse={inverse} />
    </p>
  )
}
