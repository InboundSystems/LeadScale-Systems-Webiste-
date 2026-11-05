import type { ReactNode } from 'react'
import { home } from '@/content/audience'
import { systems } from '@/content/systems'
import type { CategoryTone } from '@/content/types'
import VicariaOwl from '@/components/brand/VicariaOwl'
import EyeDot from './EyeDot'
import { FolderRail, FolderStrip, type Folder } from './FolderRail'
import FrontOfficeInbox from './FrontOfficeInbox'
import MarkedHeading from './MarkedHeading'
import SectionChip from './SectionChip'
import StarField from './StarField'
import WhatWeDoDetail from './WhatWeDoDetail'
import { ButtonLink, NumberedSteps, PageEnd, RuledList, TextLink } from './ui'

// The homepage (clinics, 10 November 2026): for specialist medical
// practices, saying exactly what we do, with much less movement. Nothing
// moves on its own: sections fade in once as they arrive, lit screens lean
// towards a fine pointer, and the hero inbox changes only when Before or
// After is pressed.
//
//   Hero                    the H1 and subhead beside the practice inbox at
//                           7:55 am on a Monday (Before / After)
//   01 One inbox            what a specialist practice's shared inbox gets
//   02 Your order           why the sorting helps: you decide what comes first
//   03 What we do           the seven things, each with a small static detail
//   04 What it never does   the fixed limits, on the night-blue band
//   05 How a practice starts  the six steps
//   06 How it's judged      the one measure
//   07 Not for every practice
// Copy: content/audience.ts (home); The Front Office's data:
// content/systems.ts. Folders: a sticky rail at 1280px+, a tab strip below.

const SECTIONS: { id: string; tone: CategoryTone; label: string; count?: number }[] = [
  { id: 'one-inbox', tone: 'blue', label: home.inbox.eyebrow, count: home.inbox.kinds.length },
  { id: 'your-order', tone: 'navy', label: home.order.eyebrow },
  { id: 'what-we-do', tone: 'sky', label: home.whatWeDo.eyebrow, count: home.whatWeDo.items.length },
  { id: 'never', tone: 'outline', label: home.never.eyebrow, count: home.never.items.length },
  { id: 'getting-started', tone: 'navy', label: home.start.eyebrow, count: home.start.steps.length },
  { id: 'judged', tone: 'slate', label: home.judged.eyebrow },
  { id: 'not-for', tone: 'blue', label: home.notFor.eyebrow, count: home.notFor.items.length },
]
const folders: Folder[] = SECTIONS.map((s, i) => ({
  id: s.id,
  tone: s.tone,
  label: `${String(i + 1).padStart(2, '0')} ${s.label}`,
  count: s.count,
}))

const grounds = {
  ground: 'bg-[var(--ground)]',
  surface: 'bg-[var(--surface)]',
  band: 'on-band bg-[var(--band)] text-white',
}

function HomeSection({
  index,
  ground,
  heading,
  children,
}: {
  index: number
  ground: keyof typeof grounds
  heading: string
  children: ReactNode
}) {
  const { id, tone, label } = SECTIONS[index]
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative scroll-mt-28 border-t border-[var(--hairline)] py-20 sm:py-28 xl:scroll-mt-20 ${grounds[ground]}`}
    >
      <div data-reveal className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8 xl:pl-[17rem]">
        <SectionChip n={index + 1} label={label} tone={tone} inverse={ground === 'band'} />
        <h2 id={`${id}-heading`} className={`v-h2 max-w-[26ch] ${ground === 'band' ? '!text-white' : ''}`}>
          {heading}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default function HomeContent() {
  const frontOffice = systems.find((s) => s.heroDemo)
  return (
    <>
      {/* The hero: static stars and the faint owl, the practice inbox beside
          the heading. */}
      <header className="on-dark relative isolate overflow-hidden bg-[var(--dark)] pb-20 pt-14 text-white sm:pb-28 sm:pt-20">
        <StarField className="-z-10" />
        <VicariaOwl className="pointer-events-none absolute -right-[18%] top-1/2 -z-10 h-[130%] w-auto -translate-y-1/2 text-white opacity-[0.035] lg:-right-[6%]" />
        <div className="mx-auto grid w-full max-w-[84rem] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="mb-6 text-[1rem] font-semibold text-[#93C5FD]">{home.hero.line}</p>
            <MarkedHeading text={home.hero.heading} marked={home.hero.markedWord} className="v-display max-w-[15ch] !text-white" />
            <p className="v-lead mt-7 !text-[var(--on-dark-soft)]">{home.hero.body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink link={home.hero.primary} />
              <ButtonLink link={home.hero.secondary} variant="inverse" />
            </div>
          </div>
          {frontOffice?.heroDemo && (
            <div className="lg:col-span-7">
              <FrontOfficeInbox demo={frontOffice.heroDemo} variant="hero" />
            </div>
          )}
        </div>
      </header>

      <FolderStrip folders={folders} label={home.foldersLabel} />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
          <div className="mx-auto h-full w-full max-w-[84rem] px-8 pt-20">
            <FolderRail folders={folders} label={home.foldersLabel} />
          </div>
        </div>

        <HomeSection index={0} ground="surface" heading={home.inbox.heading}>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {home.inbox.kinds.map((k) => (
                <li key={k} className="flex gap-3 border-b border-[var(--hairline)] pb-3 text-[var(--ink)]">
                  <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--note)]" />
                  {k}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-5">
              {home.inbox.paragraphs.map((p) => (
                <p key={p} className="v-lead">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </HomeSection>

        <HomeSection index={1} ground="ground" heading={home.order.heading}>
          <div className="mt-8 flex max-w-[60ch] flex-col gap-4">
            {home.order.paragraphs.map((p) => (
              <p key={p} className="v-lead">
                {p}
              </p>
            ))}
          </div>
        </HomeSection>

        <HomeSection index={2} ground="surface" heading={home.whatWeDo.heading}>
          <p className="v-lead mt-5">{home.whatWeDo.intro}</p>
          <ol className="mt-12 border-t border-[var(--hairline)]">
            {home.whatWeDo.items.map((item, i) => (
              <li
                key={item.heading}
                className="grid gap-6 border-b border-[var(--hairline)] py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-14"
              >
                <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3">
                  <span aria-hidden="true" className="pt-0.5 text-[1.125rem] font-semibold tabular-nums text-[var(--note)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="v-h3">{item.heading}</h3>
                    <p className="mt-2 text-[var(--muted)]">{item.body}</p>
                  </div>
                </div>
                <div className="max-w-[32rem] lg:justify-self-end lg:w-full">
                  <WhatWeDoDetail detail={item.detail} />
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10">
            <TextLink link={home.whatWeDo.link} />
          </p>
        </HomeSection>

        <HomeSection index={3} ground="band" heading={home.never.heading}>
          <p className="v-lead mt-5 !text-[var(--on-dark-soft)]">{home.never.intro}</p>
          <ul className="mt-12 grid gap-x-14 gap-y-8 md:grid-cols-2">
            {home.never.items.map((item) => (
              <li key={item} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4">
                <EyeDot colour="#93C5FD" size={14} className="mt-[0.45em]" />
                <p className="text-[1.5rem] font-semibold leading-[1.25] text-white">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12">
            <TextLink link={home.never.link} inverse />
          </p>
        </HomeSection>

        <HomeSection index={4} ground="surface" heading={home.start.heading}>
          <NumberedSteps steps={home.start.steps} className="mt-10" />
          <p className="v-body mt-8 text-[var(--muted)]">{home.start.closing}</p>
        </HomeSection>

        <HomeSection index={5} ground="ground" heading={home.judged.heading}>
          <div className="mt-8 flex max-w-[60ch] flex-col gap-4">
            {home.judged.paragraphs.map((p) => (
              <p key={p} className="v-lead">
                {p}
              </p>
            ))}
          </div>
        </HomeSection>

        <HomeSection index={6} ground="surface" heading={home.notFor.heading}>
          <RuledList items={home.notFor.items} className="mt-10 max-w-[48rem]" />
        </HomeSection>
      </div>

      <PageEnd end={home.end} />
    </>
  )
}
