import { howItWorks } from '@/content/audience'
import { NumberedSteps, PageEnd, PageHeader, Section, SplitBlock, TextLink } from './ui'

// /how-it-works. The company-level method, true of every system. One
// system's own installation steps live on that system's page and are linked
// here as an example.
export default function HowItWorksContent() {
  const { steps, sections, example } = howItWorks

  return (
    <>
      <PageHeader header={howItWorks.header} />

      <Section labelledBy="steps-heading">
        <h2 id="steps-heading" className="v-h2">
          {steps.heading}
        </h2>
        <NumberedSteps steps={steps.steps} className="mt-10" />
      </Section>

      <Section>
        {sections.map((section) => (
          <SplitBlock key={section.heading} heading={section.heading}>
            {section.paragraphs.map((p) => (
              <p key={p} className="v-body">
                {p}
              </p>
            ))}
            {section.link && (
              <p>
                <TextLink link={section.link} />
              </p>
            )}
          </SplitBlock>
        ))}
        <SplitBlock heading={example.heading}>
          {example.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
          <p>
            <TextLink link={example.link} />
          </p>
        </SplitBlock>
      </Section>

      <PageEnd end={howItWorks.end} />
    </>
  )
}
