import type { ReactNode } from 'react'
import { home } from '@/content/audience'
import { systems } from '@/content/systems'
import type { CategoryTone } from '@/content/types'
import { FolderRail, FolderStrip, type Folder } from './FolderRail'
import InboxPreview from './InboxPreview'
import MailHeader from './MailHeader'
import MarkedHeading from './MarkedHeading'
import EyeDot from './EyeDot'
import SectionChip from './SectionChip'
import StarField from './StarField'
import SystemCard from './SystemCard'
import MethodStory from './story/MethodStory'
import NightStory from './story/NightStory'
import { ButtonLink, PageEnd, TextLink } from './ui'

// The homepage, company level (docs/REPLY-2026-11-03-company-first.md): The
// Front Office never sits in the hero. Night story (9 November 2026): the
// site is built into its illustrations, and the explanation happens inside
// them as you scroll.
//
//   - One night (story/NightStory): the hero (our email to you: From / To,
//     the H1, the subhead, both buttons) beside the Monday notepad, which
//     stays pinned while the business closes and the night passes. It
//     absorbs "The kind of work we take on" and ends on the pull line.
//   - 02 How it runs (story/MethodStory), in the night-blue band: the same
//     notepad through the six steps every system runs by.
//   - 03 What never changes: the list under the stars; each bullet's eye
//     opens as it scrolls into view.
//   - 04 Systems: The Front Office card beside a compact inbox preview,
//     linking to "A night at the practice" on its own page.
//   - Folders: a sticky rail at 1280px+, a sticky tab strip below that. "01
//     The work" points at the story's beat about the work.

const SECTIONS: { id: string; tone: CategoryTone }[] = [
  { id: 'the-work', tone: 'blue' },
  { id: 'how-it-runs', tone: 'sky' },
  { id: 'what-never-changes', tone: 'outline' },
  { id: 'systems', tone: 'navy' },
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
function Column({ children, className = '', reveal = true }: { children: ReactNode; className?: string; reveal?: boolean }) {
  return (
    <div data-reveal={reveal ? '' : undefined} className={`mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8 xl:pl-[17rem] ${className}`}>
      {children}
    </div>
  )
}

const bg = {
  ground: 'bg-[var(--ground)]',
  white: 'bg-[var(--surface)]',
  band: 'on-band bg-[var(--band)] text-white',
}

function SectionHead({ index, sent, heading, inverse = false }: { index: number; sent: string; heading: string; inverse?: boolean }) {
  const { id, tone } = SECTIONS[index]
  return (
    <>
      <MailHeader
        sent={sent}
        inverse={inverse}
        chip={<SectionChip n={index + 1} label={labels[index]} tone={tone} inverse={inverse} className="!mb-0" />}
      />
      <h2 id={`${id}-heading`} className={`v-h2 max-w-[24ch] ${inverse ? '!text-white' : ''}`}>
        {heading}
      </h2>
    </>
  )
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
  const { id } = SECTIONS[index]
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative isolate scroll-mt-28 overflow-clip border-t border-[var(--hairline)] py-16 sm:py-24 xl:scroll-mt-20 ${bg[ground]}`}
    >
      {stars ? <StarField seed={1100 + index} count={stars} maxOpacity={0.28} className="-z-10" /> : null}
      <Column>
        <SectionHead index={index} sent={sent} heading={heading} inverse={ground === 'band'} />
        {children}
      </Column>
    </section>
  )
}

export default function HomeContent() {
  return (
    <>
      <NightStory
        home={home}
        intro={
          <header className="flex flex-col justify-center pb-10 pt-12 sm:pb-16 sm:pt-20 lg:min-h-[calc(100svh-4rem)] lg:py-16">
            <MailHeader sent={home.hero.sent} inverse />
            <MarkedHeading text={home.hero.heading} marked={home.hero.markedWord} className="v-display max-w-[16ch] !text-white" />
            <p className="v-lead mt-6 !text-[var(--on-dark-soft)]">{home.hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink link={home.hero.primary} />
              <ButtonLink link={home.hero.secondary} variant="inverse" />
            </div>
          </header>
        }
      />

      <FolderStrip folders={folders} label={home.foldersLabel} />

      <div className="relative">
        {/* The rail rides in the left gutter of the sections, over their grounds. */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
          <div className="mx-auto h-full w-full max-w-[84rem] px-8 pt-16">
            <FolderRail folders={folders} label={home.foldersLabel} />
          </div>
        </div>

        <section
          id={SECTIONS[1].id}
          aria-labelledby={`${SECTIONS[1].id}-heading`}
          className="on-band relative isolate scroll-mt-28 bg-[var(--band)] pt-16 text-white sm:pt-24 xl:scroll-mt-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-clip">
            <StarField seed={1101} count={26} maxOpacity={0.3} />
          </div>
          <MethodStory
            home={home}
            intro={
              <div className="pb-6">
                <SectionHead index={1} sent={home.method.sent} heading={home.method.heading} inverse />
              </div>
            }
            outro={
              <Column className="pb-16 pt-6 sm:pb-24" reveal={false}>
                <TextLink link={home.method.link} inverse />
              </Column>
            }
          />
        </section>

        <MailSection index={2} ground="ground" stars={18} sent={home.principles.sent} heading={home.principles.heading}>
          <ul data-reveal-stagger className="mt-10 flex flex-col gap-7">
            {home.principles.items.map((item) => {
              const { text, detail } = typeof item === 'string' ? { text: item, detail: undefined } : item
              return (
                <li key={text} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4">
                  <EyeDot watch colour="#93C5FD" size={14} delay={350} className="mt-[0.5em]" />
                  <div>
                    <p className="v-serif max-w-[34ch] text-[1.5rem] leading-[1.2]">{text}</p>
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

        <MailSection index={3} ground="white" stars={10} sent={home.systems.sent} heading={home.systems.heading}>
          <p className="v-lead mt-4">{home.systems.intro}</p>
          {/* One entry in a list of systems: the card beside its compact
              preview, top-aligned. Stacked below 1024px, card first. */}
          <ul data-reveal-stagger className="mt-10 flex flex-col gap-12">
            {systems.map((system) => (
              <li key={system.name} className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
                <SystemCard system={system} linkLabel={home.systems.linkLabel} />
                {system.heroDemo && system.slug && (
                  <InboxPreview demo={system.heroDemo} href={`/systems/${system.slug}#night`} linkLabel={home.systems.previewLinkLabel} />
                )}
              </li>
            ))}
          </ul>
        </MailSection>
      </div>

      <PageEnd end={home.end} />
    </>
  )
}
