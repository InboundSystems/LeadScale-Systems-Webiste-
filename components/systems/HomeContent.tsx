import type { ReactNode } from 'react'
import { home } from '@/content/audience'
import { systems } from '@/content/systems'
import { CATEGORY_TONES } from '@/components/brand/categories'
import VicariaOwl from '@/components/brand/VicariaOwl'
import type { CategoryTone } from '@/content/types'
import { FolderRail, FolderStrip, type Folder } from './FolderRail'
import FrontOfficeInbox from './FrontOfficeInbox'
import HeroList from './HeroList'
import MailHeader from './MailHeader'
import MarkedHeading from './MarkedHeading'
import EyeDot from './EyeDot'
import SectionChip from './SectionChip'
import StarField from './StarField'
import SystemCard from './SystemCard'
import { ButtonLink, PageEnd, TextLink } from './ui'

// The homepage reads as an inbox, and stays company level
// (docs/REPLY-2026-11-03-company-first.md): The Front Office never sits in
// the hero.
//
//   - Hero, on deep ink: our email to you (From / To, the H1, the subhead and
//     both buttons) beside a hand-made picture, a Monday to-do list for a
//     fictional business with its correspondence jobs crossed off.
//   - Then four sections, each an opened email: a From / To / sent row with
//     its numbered chip, then full-width content in a different layout:
//       01 The work            grid, then the one oversized pull line
//       02 How it runs         numbered list on the dark band (the second night)
//       03 What never changes  oversized typographic statements
//       04 Systems             The Front Office card, with its interactive
//                              inbox as the card's illustration
//   - Folders: a sticky rail at 1280px+, a sticky tab strip below that.


const SECTIONS: { id: string; tone: CategoryTone }[] = [
  { id: 'the-work', tone: 'blue' },
  { id: 'how-it-runs', tone: 'violet' },
  { id: 'what-never-changes', tone: 'cyan' },
  { id: 'systems', tone: 'sky' },
]
const labels = [home.work.eyebrow, home.method.eyebrow, home.principles.eyebrow, home.systems.eyebrow]
const counts = [home.work.items.length, home.method.items.length, home.principles.items.length, systems.length]
const folders: Folder[] = SECTIONS.map((s, i) => ({
  id: s.id,
  tone: s.tone,
  label: `${String(i + 1).padStart(2, '0')} ${labels[i]}`,
  count: counts[i],
}))

/** The homepage column: wide, with room for the folder rail at 1280px+. */
function Column({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8 xl:pl-[17rem] ${className}`}>{children}</div>
}

const bg = {
  ground: 'bg-[var(--ground)]',
  white: 'bg-[var(--surface)]',
  band: 'on-band bg-[var(--band)] text-white',
}

function MailSection({
  index,
  ground,
  sent,
  heading,
  stars,
  children,
}: {
  index: number
  ground: keyof typeof bg
  sent: string
  heading: string
  /** A very sparse, very faint static sky behind the section. */
  stars?: number
  children: ReactNode
}) {
  const { id, tone } = SECTIONS[index]
  const inverse = ground === 'band'
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative isolate scroll-mt-28 py-16 sm:py-24 xl:scroll-mt-20 ${index === 0 ? '' : 'border-t border-[var(--hairline)]'} ${stars ? 'overflow-hidden' : ''} ${bg[ground]}`}
    >
      {stars ? <StarField seed={1100 + index} count={stars} maxOpacity={0.28} className="-z-10" /> : null}
      <Column>
        <MailHeader
          sent={sent}
          inverse={inverse}
          chip={<SectionChip n={index + 1} label={labels[index]} tone={tone} inverse={inverse} className="!mb-0" />}
        />
        <h2 id={`${id}-heading`} className={`v-h2 max-w-[24ch] ${inverse ? '!text-white' : ''}`}>
          {heading}
        </h2>
        {children}
      </Column>
    </section>
  )
}

export default function HomeContent() {
  return (
    <>
      {/* Night: ink, a faint static star field, and the owl mark very large
          and faint (4%) behind the illustration, cropped by the hero's edge. */}
      <header className="on-dark relative isolate overflow-hidden bg-[var(--dark)] pb-16 pt-12 text-white sm:pb-24 sm:pt-20">
        <StarField className="-z-10" />
        <VicariaOwl className="pointer-events-none absolute -right-[18%] top-1/2 -z-10 h-[135%] w-auto -translate-y-1/2 text-white opacity-[0.04] lg:-right-[8%]" />
        <div className="mx-auto grid w-full max-w-[84rem] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8">
          <div className="lg:col-span-6 xl:col-span-6">
            <MailHeader sent={home.hero.sent} inverse />
            <MarkedHeading text={home.hero.heading} marked={home.hero.markedWord} className="v-display max-w-[16ch] !text-white" />
            <p className="v-lead mt-6 !text-[var(--on-dark-soft)]">{home.hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink link={home.hero.primary} />
              <ButtonLink link={home.hero.secondary} variant="inverse" />
            </div>
          </div>
          <div className="relative lg:col-span-6 xl:col-span-5 xl:col-start-8">
            {/* The one soft glow on the site: blue to violet, behind the
                illustration only. Static. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.28),rgba(124,58,237,0.16)_55%,transparent)] blur-2xl"
            />
            <HeroList list={home.hero.list} className="relative" />
          </div>
        </div>
      </header>

      <FolderStrip folders={folders} label={home.foldersLabel} />

      <div className="relative">
        {/* The rail rides in the left gutter of the sections, over their grounds. */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
          <div className="mx-auto h-full w-full max-w-[84rem] px-8 pt-16">
            <FolderRail folders={folders} label={home.foldersLabel} />
          </div>
        </div>

        <MailSection index={0} ground="white" sent={home.work.sent} heading={home.work.heading}>
          <ul className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {home.work.items.map((item, i) => (
              <li key={item.heading} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3">
                <span aria-hidden="true" className="v-serif pt-0.5 text-[1.75rem] leading-none text-[var(--violet)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="v-serif text-[1.375rem] font-semibold leading-snug">{item.heading}</h3>
                  <p className="mt-1.5 text-[var(--muted)]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* The one oversized pull line on the page. */}
          <p className="v-pull mt-16 max-w-[20ch] sm:mt-24">{home.work.closing}</p>
        </MailSection>

        <MailSection index={1} ground="band" stars={22} sent={home.method.sent} heading={home.method.heading}>
          <ol className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {home.method.items.map((item, i) => (
              <li key={item.heading} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-t border-white/20 py-6">
                <span aria-hidden="true" className="v-serif text-[2.5rem] font-semibold leading-none text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="v-h3 !text-white">{item.heading}</h3>
                  <p className="mt-1.5 text-[var(--on-dark-soft)]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <TextLink link={home.method.link} inverse />
          </p>
        </MailSection>

        <MailSection index={2} ground="ground" stars={14} sent={home.principles.sent} heading={home.principles.heading}>
          <ul className="mt-10 flex flex-col gap-7">
            {home.principles.items.map((item, i) => {
              const { text, detail } = typeof item === 'string' ? { text: item, detail: undefined } : item
              return (
                <li key={text} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4">
                  <EyeDot colour={CATEGORY_TONES[SECTIONS[2].tone].dark.swatch} size={14} className="mt-[0.5em]" />
                  <div>
                    <p className="v-serif max-w-[34ch] text-[1.5rem] leading-[1.2] sm:text-[1.875rem]">{text}</p>
                    {detail && <p className="mt-2 max-w-[60ch] text-[var(--muted)]">{detail}</p>}
                  </div>
                </li>
              )
            })}
          </ul>
          <p className="mt-10">
            <TextLink link={home.principles.link} />
          </p>
        </MailSection>

        <MailSection index={3} ground="white" sent={home.systems.sent} heading={home.systems.heading}>
          <p className="v-lead mt-4">{home.systems.intro}</p>
          {/* One entry in a list of systems: the card (about 40%) beside its
              illustration, the interactive inbox (about 60%), top-aligned.
              Stacked below 1024px, card first. */}
          <ul className="mt-10 flex flex-col gap-12">
            {systems.map((system) => (
              <li key={system.name} className="grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-10">
                <SystemCard system={system} linkLabel={home.systems.linkLabel} />
                {system.heroDemo && <FrontOfficeInbox demo={system.heroDemo} />}
              </li>
            ))}
          </ul>
        </MailSection>

      </div>

      <PageEnd end={home.end} />
    </>
  )
}
