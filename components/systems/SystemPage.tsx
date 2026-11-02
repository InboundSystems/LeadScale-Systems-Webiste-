import { intendedPurpose } from '@/content/intended-purpose'
import type { SystemContent } from '@/content/types'
import FAQList from './FAQList'
import InboxIllustration from './InboxIllustration'
import IntendedPurpose from './IntendedPurpose'
import MorningSummary from './MorningSummary'
import { Container, Eyebrow, PageEnd, RuledList, Section, TextLink } from './ui'

// A system's own page, /systems/<slug>. Every slot is optional except the
// header and the end line; an unset slot renders nothing.
export default function SystemPage({ system }: { system: SystemContent }) {
  return (
    <>
      <header className="pb-14 pt-12 sm:pb-20 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <Eyebrow>{system.sector}</Eyebrow>
              <h1 className="v-display">{system.name}</h1>
              {system.heroLine && <p className="v-lead mt-7">{system.heroLine}</p>}
            </div>
            {system.requirements && (
              <aside
                aria-labelledby="requirements-heading"
                className="self-end border-t-2 border-[var(--accent)] pt-4 lg:col-span-4"
              >
                <h2 id="requirements-heading" className="v-h3">
                  {system.requirements.heading}
                </h2>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {system.requirements.items.map((item) => (
                    <li key={item} className="text-[var(--muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </Container>
      </header>

      {system.theProblem && (
        <Section labelledBy="problem-heading">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
            <h2 id="problem-heading" className="v-h2 lg:col-span-5">
              {system.theProblem.heading}
            </h2>
            <div className="flex flex-col gap-4 lg:col-span-7">
              {system.theProblem.paragraphs.map((p) => (
                <p key={p} className="v-body">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Section>
      )}

      {system.illustrations && (
        <Section tone="surface" labelledBy="illustrations-heading">
          <h2 id="illustrations-heading" className="v-h2 max-w-[26ch]">
            {system.illustrations.heading}
          </h2>
          <p className="v-body mt-4 text-[var(--muted)]">{system.illustrations.intro}</p>
          <div className="mt-10 flex flex-col gap-14">
            <InboxIllustration inbox={system.illustrations.inbox} className="max-w-[60rem]" />
            <MorningSummary summary={system.illustrations.summary} className="max-w-[48rem] lg:ml-[12rem]" />
          </div>
        </Section>
      )}

      {system.whatItDoes && (
        <Section labelledBy="does-heading">
          <h2 id="does-heading" className="v-h2">
            {system.whatItDoes.heading}
          </h2>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {system.whatItDoes.items.map((item) => (
              <div key={item.heading} className="border-t border-[var(--hairline)] py-6">
                <h3 className="v-h3">{item.heading}</h3>
                <p className="mt-2 text-[var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {system.whatItNeverDoes && (
        <Section tone="warm" labelledBy="never-heading">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 id="never-heading" className="v-h2">
                {system.whatItNeverDoes.heading}
              </h2>
              <p className="mt-4 text-[var(--ink)]">{system.whatItNeverDoes.intro}</p>
            </div>
            <RuledList items={system.whatItNeverDoes.items} className="lg:col-span-7" />
          </div>
        </Section>
      )}

      {system.aTypicalDay && (
        <Section labelledBy="day-heading">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 id="day-heading" className="v-h2">
                {system.aTypicalDay.heading}
              </h2>
              {system.aTypicalDay.intro && <p className="mt-4 text-[var(--muted)]">{system.aTypicalDay.intro}</p>}
            </div>
            <ol className="border-t border-[var(--hairline)] lg:col-span-7">
              {system.aTypicalDay.beats.map((beat) => (
                <li
                  key={beat.time}
                  className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 border-b border-[var(--hairline)] py-5 sm:grid-cols-[6rem_minmax(0,1fr)]"
                >
                  <span className="v-mono pt-[0.2em] text-[0.875rem] font-semibold text-[var(--accent)]">{beat.time}</span>
                  <p className="text-[var(--ink)]">{beat.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {system.whoThisIsntFor && (
        <Section labelledBy="not-for-heading">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <h2 id="not-for-heading" className="v-h2 lg:col-span-5">
              {system.whoThisIsntFor.heading}
            </h2>
            <div className="lg:col-span-7">
              <RuledList items={system.whoThisIsntFor.criteria} />
              {system.installationPointer && (
                <p className="mt-8 text-[var(--ink)]">
                  {system.installationPointer.body} <TextLink link={system.installationPointer.link} />
                </p>
              )}
            </div>
          </div>
        </Section>
      )}

      {system.showsIntendedPurpose && (
        <Section labelledBy="purpose-heading">
          <h2 id="purpose-heading" className="sr-only">
            {intendedPurpose.label.replace(/\.$/, '')}
          </h2>
          <IntendedPurpose />
        </Section>
      )}

      {system.faq && system.faq.items.length > 0 && (
        <Section labelledBy="faq-heading">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <h2 id="faq-heading" className="v-h2 lg:col-span-5">
              {system.faq.heading}
            </h2>
            <div className="lg:col-span-7">
              <FAQList items={system.faq.items} />
            </div>
          </div>
        </Section>
      )}

      <PageEnd end={system.end} />
    </>
  )
}
