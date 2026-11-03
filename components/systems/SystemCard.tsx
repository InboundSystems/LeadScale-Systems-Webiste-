import type { SystemContent } from '@/content/types'
import InboxIllustration from './InboxIllustration'
import { TextLink } from './ui'

// One system, as a card on / and /systems: "<name>: <cardFor>", one line on
// what it does, and a link to its page. The only place a system appears on a
// company-level page. On the homepage the card can carry a compact version of
// the system's own illustration, inside the card so it reads as this system's,
// never the company's.
export default function SystemCard({
  system,
  linkLabel,
  headingLevel = 'h3',
  showIllustration = false,
}: {
  system: SystemContent
  linkLabel: string
  headingLevel?: 'h2' | 'h3'
  showIllustration?: boolean
}) {
  const Heading = headingLevel
  const illustration =
    showIllustration && system.cardIllustration && system.illustrations ? system.cardIllustration : undefined
  return (
    <article className="max-w-[48rem] rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)] p-6 sm:p-9">
      <p className="v-eyebrow mb-3">{system.sector}</p>
      <Heading className="v-serif text-[1.5rem] leading-snug text-[var(--ink)] sm:text-[1.75rem]">
        <span className="font-semibold">{system.name}</span>: {system.cardFor}
      </Heading>
      <p className="mt-3 text-[var(--ink)]">{system.shortDescription}</p>
      {illustration && system.illustrations && (
        <InboxIllustration
          inbox={system.illustrations.inbox}
          compact
          maxGroups={illustration.maxGroups}
          caption={illustration.caption}
          className="mt-7"
        />
      )}
      {system.slug && (
        <p className="mt-6">
          <TextLink link={{ label: linkLabel, href: `/systems/${system.slug}` }} />
        </p>
      )}
    </article>
  )
}
