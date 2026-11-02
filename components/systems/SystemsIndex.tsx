import { systemsIndex } from '@/content/audience'
import { systems } from '@/content/systems'
import { Container, PageEnd, PageHeader, TextLink } from './ui'

// /systems. One card today; the index stays so a second system slots in by
// appending to content/systems.ts.
export default function SystemsIndex() {
  return (
    <>
      <PageHeader header={systemsIndex.header} />
      <section aria-label="Systems" className="pb-16 sm:pb-24">
        <Container>
          <ul className="flex flex-col gap-6">
            {systems.map((system) => (
              <li
                key={system.name}
                className="max-w-[48rem] rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)] p-6 sm:p-9"
              >
                <p className="v-eyebrow mb-3">{system.sector}</p>
                <h2 className="v-h2">{system.name}</h2>
                <p className="mt-3 text-[var(--ink)]">{system.shortDescription}</p>
                {system.slug && (
                  <p className="mt-6">
                    <TextLink link={{ label: systemsIndex.linkLabel, href: `/systems/${system.slug}` }} />
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <PageEnd end={systemsIndex.end} />
    </>
  )
}
