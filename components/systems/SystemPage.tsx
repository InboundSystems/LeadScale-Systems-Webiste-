import { intendedPurpose } from '@/content/intended-purpose'
import type { SystemContent } from '@/content/types'
import CategoryChip from './CategoryChip'
import FAQList from './FAQList'
import FrontOfficeInbox from './FrontOfficeInbox'
import InboxIllustration from './InboxIllustration'
import IntendedPurpose from './IntendedPurpose'
import MorningSummary from './MorningSummary'
import Tilt from './Tilt'
import { Container, Eyebrow, NumberedSteps, PageEnd, RuledList, Section, SplitBlock, sentAt } from './ui'

// A system's own page, /systems/<slug> (clinics, 10 November 2026). The
// homepage summarises; this page explains: the problem, the practice's
// categories in full, all seven things in detail, the full inbox and morning
// summary illustrations, what it never does, "Try it yourself", installation,
// how it's judged, who it isn't for, the intended purpose (verbatim) and the
// FAQ. Every slot is optional except the header and the end line; an unset
// slot renders nothing.
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
        <Section labelledBy="problem-heading" sent={sentAt(0)}>
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

      {system.categoryList && (
        <Section tone="surface" id="categories" labelledBy="categories-heading" className="scroll-mt-20" sent={sentAt(1)}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 id="categories-heading" className="v-h2">
                {system.categoryList.heading}
              </h2>
              <p className="mt-4 text-[var(--muted)]">{system.categoryList.intro}</p>
            </div>
            <dl className="border-t border-[var(--hairline)] lg:col-span-8">
              {system.categoryList.items.map(({ category, covers }) => (
                <div key={category.label} className="grid gap-2 border-b border-[var(--hairline)] py-4 sm:grid-cols-[17rem_minmax(0,1fr)] sm:gap-6">
                  <dt>
                    <CategoryChip category={category} size="md" />
                  </dt>
                  <dd className="text-[var(--body)]">{covers}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      {system.whatItDoes && (
        <Section labelledBy="does-heading" sent={sentAt(2)}>
          <h2 id="does-heading" className="v-h2">
            {system.whatItDoes.heading}
          </h2>
          <ol className="mt-10 grid gap-x-14 md:grid-cols-2">
            {system.whatItDoes.items.map((item, i) => (
              <li key={item.heading} className="border-t border-[var(--hairline)] py-6">
                <h3 className="v-h3">
                  <span aria-hidden="true" className="mr-3 tabular-nums text-[var(--note)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.heading}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{item.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {system.illustrations && (
        <Section tone="surface" id="illustrations" labelledBy="illustrations-heading" className="scroll-mt-20" sent={sentAt(3)}>
          <h2 id="illustrations-heading" className="v-h2 max-w-[26ch]">
            {system.illustrations.heading}
          </h2>
          <p className="v-body mt-4 text-[var(--muted)]">{system.illustrations.intro}</p>
          <div className="mt-10 flex flex-col gap-14">
            <Tilt className="max-w-[60rem]">
              <InboxIllustration inbox={system.illustrations.inbox} />
            </Tilt>
            <Tilt className="max-w-[48rem] lg:ml-[12rem]">
              <MorningSummary summary={system.illustrations.summary} />
            </Tilt>
          </div>
        </Section>
      )}

      {system.whatItNeverDoes && (
        <Section tone="band" labelledBy="never-heading" sent={sentAt(4)}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 id="never-heading" className="v-h2 !text-white">
                {system.whatItNeverDoes.heading}
              </h2>
              <p className="mt-4 text-[var(--on-dark-soft)]">{system.whatItNeverDoes.intro}</p>
            </div>
            <RuledList items={system.whatItNeverDoes.items} className="lg:col-span-7" />
          </div>
        </Section>
      )}

      {system.tryIt && system.heroDemo && (
        <Section id="try-it" labelledBy="try-heading" className="scroll-mt-20" sent={sentAt(5)}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 id="try-heading" className="v-h2">
                {system.tryIt.heading}
              </h2>
              <p className="mt-4 text-[var(--muted)]">{system.tryIt.intro}</p>
            </div>
            <div className="lg:col-span-8">
              <FrontOfficeInbox demo={system.heroDemo} variant="full" />
            </div>
          </div>
        </Section>
      )}

      {system.installation && (
        <Section tone="surface" id="installation" labelledBy="installation-heading" className="scroll-mt-20" sent={sentAt(6)}>
          <h2 id="installation-heading" className="v-h2">
            {system.installation.heading}
          </h2>
          <div className="mt-4 flex max-w-[65ch] flex-col gap-3">
            {system.installation.intro.map((p) => (
              <p key={p} className="v-body text-[var(--muted)]">
                {p}
              </p>
            ))}
          </div>
          <NumberedSteps steps={system.installation.steps} className="mt-10" />
        </Section>
      )}

      {system.judged && (
        <Section sent={sentAt(7)}>
          <SplitBlock heading={system.judged.heading}>
            {system.judged.paragraphs.map((p) => (
              <p key={p} className="v-body">
                {p}
              </p>
            ))}
          </SplitBlock>
        </Section>
      )}

      {system.whoThisIsntFor && (
        <Section labelledBy="not-for-heading" sent={sentAt(8)}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <h2 id="not-for-heading" className="v-h2 lg:col-span-5">
              {system.whoThisIsntFor.heading}
            </h2>
            <div className="lg:col-span-7">
              <RuledList items={system.whoThisIsntFor.criteria} />
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
        <Section labelledBy="faq-heading" sent={sentAt(9)}>
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
