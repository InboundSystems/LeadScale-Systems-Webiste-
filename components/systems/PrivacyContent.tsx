import { privacy } from '@/content/privacy'
import ProseSections from './ProseSections'
import { PageEnd, PageHeader, Section } from './ui'

export default function PrivacyContent() {
  return (
    <>
      <PageHeader header={privacy.header} chipTone="slate">
        <p className="v-small mt-6">{privacy.lastUpdatedLabel} {privacy.lastUpdated}.</p>
      </PageHeader>
      <Section>
        <ProseSections sections={privacy.sections} />
      </Section>
      <PageEnd end={privacy.end} />
    </>
  )
}
