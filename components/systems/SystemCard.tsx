import type { SystemContent } from '@/content/types'
import CategoryChip from './CategoryChip'
import { TextLink } from './ui'

// One system, as a card on / and /systems: "<name>: <cardFor>", one line on
// what it does, and a link to its page. On the homepage it also carries a
// thin row of its category chips along the top, in the hero's colour language.
export default function SystemCard({
  system,
  linkLabel,
  headingLevel = 'h3',
  showChips = false,
}: {
  system: SystemContent
  linkLabel: string
  headingLevel?: 'h2' | 'h3'
  showChips?: boolean
}) {
  const Heading = headingLevel
  return (
    <article className="max-w-[48rem] rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)] p-6 sm:p-9">
      {showChips && system.cardChips && (
        <ul aria-hidden="true" className="-mt-1 mb-5 flex flex-wrap gap-1.5 border-b border-[var(--hairline)] pb-4">
          {system.cardChips.map((category) => (
            <li key={category.label}>
              <CategoryChip category={category} />
            </li>
          ))}
        </ul>
      )}
      <p className="v-eyebrow mb-3">{system.sector}</p>
      <Heading className="v-serif text-[1.5rem] leading-snug text-[var(--ink)] sm:text-[1.75rem]">
        <span className="font-semibold">{system.name}</span>: {system.cardFor}
      </Heading>
      <p className="mt-3 text-[var(--ink)]">{system.shortDescription}</p>
      {system.slug && (
        <p className="mt-6">
          <TextLink link={{ label: linkLabel, href: `/systems/${system.slug}` }} />
        </p>
      )}
    </article>
  )
}
