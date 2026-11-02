import type { SystemContent } from '@/content/types'
import { TextLink } from './ui'

// One system, as a card on / and /systems: "<name>: <cardFor>", one line on
// what it does, and a link to its page. The only place a system appears on a
// company-level page.
export default function SystemCard({
  system,
  linkLabel,
  headingLevel = 'h3',
}: {
  system: SystemContent
  linkLabel: string
  headingLevel?: 'h2' | 'h3'
}) {
  const Heading = headingLevel
  return (
    <article className="max-w-[48rem] rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)] p-6 sm:p-9">
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
