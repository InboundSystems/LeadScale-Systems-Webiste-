import { howItWorks } from '@/content/audience'
import { PageEnd, PageHeader, Section, SplitBlock, TextLink } from './ui'

// /how-it-works. Numbered steps, because the order is real.
export default function HowItWorksContent() {
  const { steps, configuration, judged, access } = howItWorks

  return (
    <>
      <PageHeader header={howItWorks.header} />

      <Section labelledBy="steps-heading">
        <h2 id="steps-heading" className="v-h2">
          {steps.heading}
        </h2>
        <ol className="mt-10 border-t border-[var(--hairline)]">
          {steps.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-[var(--hairline)] py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] lg:grid-cols-[4.5rem_minmax(0,22rem)_minmax(0,1fr)] lg:gap-10"
            >
              <span aria-hidden="true" className="v-mono pt-[0.15em] text-[1.125rem] font-semibold text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="v-h3">{step.title}</h3>
              <div className="col-start-2 lg:col-start-auto">
                <p className="max-w-[60ch] text-[var(--muted)]">{step.description}</p>
                {step.link && (
                  <p className="mt-2">
                    <TextLink link={step.link} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SplitBlock heading={configuration.heading}>
          {configuration.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
        </SplitBlock>
        <SplitBlock heading={judged.heading}>
          {judged.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
        </SplitBlock>
        <SplitBlock heading={access.heading}>
          {access.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
          <p>
            <TextLink link={access.link} />
          </p>
        </SplitBlock>
      </Section>

      <PageEnd end={howItWorks.end} />
    </>
  )
}
