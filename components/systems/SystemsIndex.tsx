import { systemsIndex } from '@/content/audience'
import { systems } from '@/content/systems'
import SystemCard from './SystemCard'
import { Container, PageEnd, PageHeader } from './ui'

// /systems. Company-level intro, then one card per system; a second system
// slots in by appending to content/systems.ts.
export default function SystemsIndex() {
  return (
    <>
      <PageHeader header={systemsIndex.header} chipTone="sky" />
      <section aria-label="Systems" className="pb-16 sm:pb-24">
        <Container>
          <ul className="flex flex-col gap-6">
            {systems.map((system) => (
              <li key={system.name}>
                <SystemCard system={system} linkLabel={systemsIndex.linkLabel} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <PageEnd end={systemsIndex.end} />
    </>
  )
}
