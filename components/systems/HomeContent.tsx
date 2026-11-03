import type { ReactNode } from 'react'
import { home, site } from '@/content/audience'
import { systems } from '@/content/systems'
import { CATEGORY_TONES, TONE_SEQUENCE } from '@/components/brand/categories'
import type { CategoryTone } from '@/content/types'
import AnnotatedSummary from './AnnotatedSummary'
import ArrivingEmail from './ArrivingEmail'
import { FolderRail, FolderStrip, type Folder } from './FolderRail'
import HeroWindow from './HeroWindow'
import MailHeader from './MailHeader'
import SectionChip from './SectionChip'
import SystemCard from './SystemCard'
import { PageEnd, TextLink } from './ui'

// The homepage is an inbox.
//
//   - Hero: one large Outlook-style window on deep ink. The message list is
//     The Front Office's sorting demo; the reading pane is open on our email,
//     whose subject is the page's H1. (The H1 and subhead are company level;
//     the inbox is a worked example, captioned as such.)
//   - Then five sections, each an opened email: a From / To / sent row with
//     its numbered chip, then full-width content in a different layout:
//       01 The work            grid, then the one oversized pull line
//       02 How it runs         numbered list on the teal band
//       03 What never changes  oversized typographic statements
//       04 Systems             The Front Office card
//       05 The next morning    the annotated morning summary
//   - Folders: a sticky rail at 1280px+, a sticky tab strip below that.

const heroDemo = systems.find((s) => s.heroDemo)?.heroDemo
const summary = systems.find((s) => s.illustrations)?.illustrations?.summary
const markers = TONE_SEQUENCE.map((tone) => CATEGORY_TONES[tone].swatch)

const SECTIONS: { id: string; tone: CategoryTone }[] = [
  { id: 'the-work', tone: 'amber' },
  { id: 'how-it-runs', tone: 'teal' },
  { id: 'what-never-changes', tone: 'plum' },
  { id: 'systems', tone: 'sky' },
  { id: 'the-next-morning', tone: 'sage' },
]
const labels = [home.work.eyebrow, home.method.eyebrow, home.principles.eyebrow, home.systems.eyebrow, home.nextMorning.eyebrow]
const counts = [home.work.items.length, home.method.items.length, home.principles.items.length, systems.length, 1]
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
  amber: 'bg-[var(--tint-amber)]',
  teal: 'on-teal bg-[var(--teal)] text-white',
  sky: 'bg-[var(--tint-sky)]',
}

function MailSection({
  index,
  ground,
  sent,
  heading,
  children,
}: {
  index: number
  ground: keyof typeof bg
  sent: string
  heading: string
  children: ReactNode
}) {
  const { id, tone } = SECTIONS[index]
  const inverse = ground === 'teal'
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-28 border-t border-[var(--hairline)] py-16 sm:py-24 xl:scroll-mt-20 ${bg[ground]}`}
    >
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
      <header className="bg-[#16232b] pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          {heroDemo && (
            <div className="xl:ml-[11rem]">
              <HeroWindow hero={home.hero} demo={heroDemo} mail={site.mail} />
            </div>
          )}
        </div>
      </header>

      <FolderStrip folders={folders} label={home.foldersLabel} />

      <div className="relative">
        {/* The rail rides in the left gutter of the sections, over their grounds. */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          <div className="mx-auto h-full w-full max-w-[84rem] px-8 pt-16">
            <FolderRail folders={folders} label={home.foldersLabel} />
          </div>
        </div>

        <MailSection index={0} ground="amber" sent={home.work.sent} heading={home.work.heading}>
          <ul className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {home.work.items.map((item, i) => (
              <li key={item.heading} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3">
                <span aria-hidden="true" className="v-serif pt-0.5 text-[1.75rem] leading-none text-[#845716]">
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

        <MailSection index={1} ground="teal" sent={home.method.sent} heading={home.method.heading}>
          <ol className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {home.method.items.map((item, i) => (
              <li key={item.heading} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-t border-white/20 py-6">
                <span aria-hidden="true" className="v-serif text-[2.5rem] font-semibold leading-none text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="v-h3 !text-white">{item.heading}</h3>
                  <p className="mt-1.5 text-[#e4eeed]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <TextLink link={home.method.link} inverse />
          </p>
        </MailSection>

        <MailSection index={2} ground="ground" sent={home.principles.sent} heading={home.principles.heading}>
          <ul className="mt-10 flex flex-col gap-7">
            {home.principles.items.map((item, i) => {
              const { text, detail } = typeof item === 'string' ? { text: item, detail: undefined } : item
              return (
                <li key={text} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4">
                  <span aria-hidden="true" className="mt-[0.55em] h-3 w-3 rounded-[1px]" style={{ backgroundColor: markers[i % markers.length] }} />
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

        <MailSection index={3} ground="sky" sent={home.systems.sent} heading={home.systems.heading}>
          <p className="v-lead mt-4">{home.systems.intro}</p>
          <ul className="mt-10 flex flex-col gap-6">
            {systems.map((system) => (
              <li key={system.name}>
                <SystemCard system={system} linkLabel={home.systems.linkLabel} showChips />
              </li>
            ))}
          </ul>
        </MailSection>

        {summary && (
          <MailSection index={4} ground="ground" sent={home.nextMorning.sent} heading={home.nextMorning.heading}>
            <ArrivingEmail newLabel={home.nextMorning.newLabel} className="mt-10 max-w-[44rem]">
              <AnnotatedSummary
                summary={summary}
                caption={home.nextMorning.caption}
                annotations={home.nextMorning.annotations}
                notesLabel={home.nextMorning.notesLabel}
              />
            </ArrivingEmail>
          </MailSection>
        )}
      </div>

      <PageEnd end={home.end} />
    </>
  )
}
