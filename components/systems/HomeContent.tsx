import { home } from '@/content/audience'
import { systems } from '@/content/systems'
import { CATEGORY_TONES, TONE_SEQUENCE } from '@/components/brand/categories'
import ArrivingEmail from './ArrivingEmail'
import EmailHeader from './EmailHeader'
import HeroInbox from './HeroInbox'
import MorningSummary from './MorningSummary'
import SystemCard from './SystemCard'
import { ButtonLink, Container, Eyebrow, PageEnd, RuledList, Section, TextLink } from './ui'

const heroDemo = systems.find((s) => s.heroDemo)?.heroDemo
const summary = systems.find((s) => s.illustrations)?.illustrations?.summary
const principleMarkers = TONE_SEQUENCE.map((tone) => CATEGORY_TONES[tone].swatch)

// Company level throughout (docs/REPLY-2026-11-03-company-first.md). The H1
// and subhead sell what Vicaria is; the hero's inbox is The Front Office as a
// worked example, captioned as such. The rest: the work Vicaria takes on, how
// every system runs, the principles every system keeps, then the systems.
export default function HomeContent() {
  return (
    <>
      <header className="pb-16 pt-14 sm:pb-24 sm:pt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-5 lg:pt-14">
              <Eyebrow>{home.hero.eyebrow}</Eyebrow>
              <h1 className="v-display max-w-[22ch]">{home.hero.heading}</h1>
              <p className="v-lead mt-7">{home.hero.body}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink link={home.hero.primary} />
                <ButtonLink link={home.hero.secondary} variant="secondary" />
              </div>
            </div>
            {heroDemo && <HeroInbox demo={heroDemo} className="lg:col-span-7" />}
          </div>
        </Container>
      </header>

      <Section labelledBy="work-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <EmailHeader email={home.work.email} heading={home.work.heading} headingId="work-heading" />
          </div>
          <div className="lg:col-span-7">
            <dl className="border-t border-[var(--hairline)]">
              {home.work.items.map((item) => (
                <div key={item.heading} className="border-b border-[var(--hairline)] py-5">
                  <dt className="v-h3">{item.heading}</dt>
                  <dd className="mt-1 text-[var(--muted)]">{item.body}</dd>
                </div>
              ))}
            </dl>
            <p className="v-body mt-6">{home.work.closing}</p>
          </div>
        </div>
      </Section>

      {/* The one full-width teal band: white text, hairlines at 20% white. */}
      <Section tone="teal" rule={false} labelledBy="method-heading">
        <EmailHeader
          email={home.method.email}
          heading={home.method.heading}
          headingId="method-heading"
          className="max-w-[34rem]"
        />
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {home.method.items.map((item) => (
            <div key={item.heading} className="border-t border-white/20 pt-5">
              <h3 className="v-h3 !text-white">{item.heading}</h3>
              <p className="mt-2 text-[#e4eeed]">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10">
          <TextLink link={home.method.link} inverse />
        </p>
      </Section>

      <Section tone="warm" labelledBy="principles-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <EmailHeader email={home.principles.email} heading={home.principles.heading} headingId="principles-heading" />
            <p className="mt-6">
              <TextLink link={home.principles.link} />
            </p>
          </div>
          <RuledList items={home.principles.items} markers={principleMarkers} className="lg:col-span-7" />
        </div>
      </Section>

      <Section labelledBy="systems-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>{home.systems.eyebrow}</Eyebrow>
            <h2 id="systems-heading" className="v-h2">
              {home.systems.heading}
            </h2>
            <p className="mt-4 text-[var(--ink)]">{home.systems.intro}</p>
          </div>
          <ul className="flex flex-col gap-6 lg:col-span-7">
            {systems.map((system) => (
              <li key={system.name}>
                <SystemCard system={system} linkLabel={home.systems.linkLabel} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {summary && (
        <Section tone="surface" labelledBy="next-morning-heading">
          <Eyebrow>{home.nextMorning.eyebrow}</Eyebrow>
          <h2 id="next-morning-heading" className="v-h2 max-w-[26ch]">
            {home.nextMorning.heading}
          </h2>
          <ArrivingEmail newLabel={home.nextMorning.newLabel} className="mt-10 max-w-[48rem]">
            <MorningSummary summary={summary} caption={home.nextMorning.caption} />
          </ArrivingEmail>
        </Section>
      )}

      <PageEnd end={home.end} />
    </>
  )
}
