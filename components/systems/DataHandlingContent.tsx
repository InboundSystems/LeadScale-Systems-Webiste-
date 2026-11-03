import { dataHandling } from '@/content/data-handling'
import ProseSections from './ProseSections'
import { PageEnd, PageHeader, Section, sentAt } from './ui'

// Principles for every system first, then one clearly labelled subsection per
// system for what is specific to it.
export default function DataHandlingContent() {
  return (
    <>
      <PageHeader header={dataHandling.header} chipTone="sky" />
      <Section sent={sentAt(0)}>
        <ProseSections sections={dataHandling.sections} />
      </Section>
      {dataHandling.systemSections.map((sub) => {
        const id = `system-${sub.system.toLowerCase().replace(/\W+/g, '-')}`
        return (
          <Section key={sub.system} tone="surface" labelledBy={id} sent={sentAt(1)}>
            <h2 id={id} className="v-h2">
              {sub.system}
            </h2>
            <p className="v-body mt-4 text-[var(--muted)]">{sub.intro}</p>
            <div className="mt-10">
              <ProseSections sections={sub.sections} headingLevel="h3" />
            </div>
          </Section>
        )
      })}
      <PageEnd end={dataHandling.end} />
    </>
  )
}
