import { dataHandling } from '@/content/data-handling'
import ProseSections from './ProseSections'
import { PageEnd, PageHeader, Section } from './ui'

export default function DataHandlingContent() {
  return (
    <>
      <PageHeader header={dataHandling.header} />
      <Section>
        <ProseSections sections={dataHandling.sections} />
      </Section>
      <PageEnd end={dataHandling.end} />
    </>
  )
}
