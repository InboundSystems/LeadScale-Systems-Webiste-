'use client'

import type { ReactNode } from 'react'
import { motion, type MotionValue } from 'framer-motion'
import type { CategoryDef, MorningSummaryIllustration, PracticeNightContent, PracticeRow } from '@/content/types'
import CategoryChip, { personLabelTone } from '../CategoryChip'
import { outlookFace } from '../InboxParts'
import MorningSummary from '../MorningSummary'
import StarField from '../StarField'
import Tilt from '../Tilt'
import { Readout, formatClock } from './clock'
import Story, { Fit, type StageMode } from './Story'

// "A night at the practice" on /systems/front-office (night story, 9
// November 2026; it replaces the step-through working day). A pinned inbox
// at the fictional practice, from Friday's 5:00pm close to Monday morning.
// As the visitor scrolls, emails arrive one by one and each beat's words
// attach to the row they describe: the referral labelled For Dr Smith, the
// booking form's reply waiting in Drafts, an after-hours email marked where
// it sits, a known sender in Junk (listed, not moved), one it can't tell
// marked 00 Unclear at the top, the morning summary at 7:00am (the same
// summary component and data as the illustration above), and reception's
// correction once the practice opens. After the story, "Try it yourself"
// (SystemPage) holds the interactive inbox.
//
// Rows are arranged by category, as the practice's Inbox would be. New rows
// and moves animate with framer-motion layout (transform and opacity only).

type State = {
  rows: (PracticeRow & { category: CategoryDef })[]
  drafts: number
  junk?: { sender: string; subject: string; received: string }
  summary: boolean
  target?: string
  corrected?: string
}

function stateAt(night: PracticeNightContent, beat: number): State {
  const rows = night.startRows.map((r) => ({ ...r }))
  let drafts = 0
  let junk: State['junk']
  let summary = false
  let corrected: string | undefined
  night.beats.slice(0, beat + 1).forEach((b) => {
    if (b.arrival) rows.unshift({ ...b.arrival })
    if (b.draft) drafts += 1
    if (b.junk) junk = b.junk
    if (b.summary) summary = true
    if (b.correction) {
      const row = rows.find((r) => r.id === b.correction!.id)
      if (row) row.category = b.correction.to
      corrected = b.correction.id
    }
  })
  return { rows, drafts, junk, summary, target: beat >= 0 ? night.beats[beat].target : undefined, corrected }
}

/** The beat's words, outside the inbox, joined to their row by a thin
 *  light-blue leader line. Live desktop stage only. */
function Callout({ children }: { children: ReactNode }) {
  return (
    <span className="stage-callout pointer-events-none absolute right-[calc(100%-0.5rem)] top-1/2 z-10 w-[17rem] -translate-y-1/2 items-center gap-2 xl:w-[19rem]">
      <span className="max-w-[13rem] text-right text-[0.8125rem] font-medium leading-snug text-[#BFDBFE] xl:max-w-[15rem]">{children}</span>
      <span className="relative h-px min-w-[2rem] flex-1 bg-[#93C5FD]/70">
        <span className="absolute -right-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#93C5FD]" />
      </span>
    </span>
  )
}

function Inbox({
  night,
  summary,
  beat,
  mode,
  progress,
}: {
  night: PracticeNightContent
  summary: MorningSummaryIllustration
  beat: number
  mode: StageMode
  progress?: MotionValue<number>
}) {
  const st = stateAt(night, beat)
  const live = mode === 'live'
  const words = beat >= 0 ? night.beats[beat].text : undefined
  const categories = Array.from(new Map(st.rows.map((r) => [r.category.label, r.category])).values()).sort((a, b) =>
    a.label.localeCompare(b.label)
  )
  const L: React.ElementType = live ? motion.li : 'li'
  const layout = live ? { layout: true as const, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } } : {}
  const isJunkBeat = beat >= 0 && !!night.beats[beat].junk
  const isSummaryBeat = beat >= 0 && !!night.beats[beat].summary
  const isDraftBeat = beat >= 0 && !!night.beats[beat].draft

  return (
    <div className="relative mx-auto w-full max-w-[31rem] lg:mr-0">
      <Tilt>
        <div className="lit lit-screen rounded-[8px] border border-t-[3px] border-[var(--frame)] border-t-[var(--primary)] bg-[var(--surface)] text-[var(--ink)]" style={outlookFace}>
          <div className="flex items-center justify-between gap-3 border-b border-[var(--hairline)] px-4 py-1.5 text-[0.75rem] text-[var(--muted)]">
            <span className="flex items-center gap-2">
              {night.toolbar.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[var(--faint)]">·</span>}
                  {t}
                </span>
              ))}
            </span>
            <span className="font-semibold text-[var(--ink)]">
              <Readout progress={live ? progress : undefined} start={night.clock.start} minutes={night.beats.map((b) => b.minute)} days={night.clock.days} beat={beat} />
            </span>
          </div>
          {/* Folders: Inbox, Drafts, Junk Email, with counts. */}
          <div className="relative flex items-center gap-1 border-b border-[var(--hairline)] bg-[var(--chrome)] px-3 py-1.5 text-[0.75rem]">
            {[
              { label: night.folders.inbox, n: st.rows.length, on: true },
              { label: night.folders.drafts, n: st.drafts, on: isDraftBeat },
              { label: night.folders.junk, n: st.junk ? 1 : 0, on: isJunkBeat },
            ].map((f, i) => (
              <span
                key={f.label}
                className={`flex items-center gap-1.5 rounded-[4px] px-2 py-0.5 transition-colors duration-500 ${
                  i === 0 ? 'font-semibold text-[var(--ink)]' : f.on ? 'bg-[var(--row-selected)] font-semibold text-[var(--ink)]' : 'text-[var(--muted)]'
                }`}
              >
                {f.label}
                <span className="tabular-nums text-[var(--muted)]">{f.n}</span>
              </span>
            ))}
            <span className="ml-auto shrink-0 text-[var(--muted)]">{night.arrangedBy}</span>
            {live && isDraftBeat && <Callout>{words}</Callout>}
          </div>
          {st.junk && (
            <div className="relative flex items-center gap-2 border-b border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-1.5 text-[0.75rem]">
              <span className="font-semibold text-[var(--muted)]">{night.folders.junk}</span>
              <span className="truncate">
                <span className="font-semibold">{st.junk.sender}</span> <span className="text-[var(--muted)]">{st.junk.subject}</span>
              </span>
              <span className="ml-auto shrink-0 tabular-nums text-[var(--muted)]">{st.junk.received}</span>
              {live && isJunkBeat && <Callout>{words}</Callout>}
            </div>
          )}
          <ul className="relative min-h-[15rem]">
            {categories.map((cat) => {
              const rows = st.rows.filter((r) => r.category.label === cat.label)
              return [
                <L key={`g-${cat.label}`} {...layout} className="border-b border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-0.5">
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-[0.5625rem] text-[var(--muted)]">
                      ▼
                    </span>
                    <CategoryChip category={cat} />
                    <span className="text-[0.75rem] tabular-nums text-[var(--muted)]">
                      {rows.length} {rows.length === 1 ? 'item' : 'items'}
                    </span>
                  </span>
                </L>,
                ...rows.map((r) => {
                  const selected = st.target === r.id
                  const isNew = beat >= 0 && night.beats[beat].arrival?.id === r.id
                  return (
                    <L
                      key={r.id}
                      {...layout}
                      {...(live && isNew ? { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 } } : {})}
                      data-selected={selected}
                      className="inbox-row relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5 border-b border-[var(--hairline)] py-[5px] pl-4 pr-2.5 sm:grid-cols-[7.25rem_minmax(0,1fr)_auto]"
                    >
                      {isNew && <span aria-hidden="true" className="unread-dot top-[13px]" />}
                      <span className={`truncate text-[0.8125rem] ${isNew ? 'font-semibold' : ''}`}>{r.sender}</span>
                      <span className="hidden truncate text-[0.8125rem] text-[var(--muted)] sm:block">{r.subject}</span>
                      <span className="flex items-center justify-end gap-1">
                        {r.personLabel && (
                          <span className="hidden xl:inline-flex">
                            <CategoryChip category={{ label: r.personLabel, tone: personLabelTone }} />
                          </span>
                        )}
                        <CategoryChip category={r.category} />
                      </span>
                      {live && selected && words && !isSummaryBeat && <Callout>{words}</Callout>}
                    </L>
                  )
                }),
              ]
            })}
          </ul>
          <p className="border-t border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-1.5 text-[0.75rem] tabular-nums text-[var(--muted)]">
            {st.rows.length} emails · 0 moved out of the Inbox
          </p>
        </div>
      </Tilt>

      {/* 7:00am: the morning summary arrives and opens, over the inbox. */}
      <div
        className={`stage-fade absolute left-6 right-[-1.5rem] top-12 h-[21rem] ${st.summary ? '' : 'stage-off translate-y-6'} ${
          beat >= 0 && night.beats[beat].correction ? 'stage-off translate-y-6' : ''
        }`}
      >
        <div className="relative h-full overflow-hidden rounded-[8px]">
          <MorningSummary summary={summary} caption="" className="[&_figcaption]:hidden" />
          {/* The email runs on below; it fades to the page, not to the inbox. */}
          <div className="lit absolute inset-x-px bottom-0 h-20 rounded-b-[8px] border-b border-[var(--hairline)] bg-gradient-to-b from-white/0 via-white/90 to-white" />
        </div>
        {live && isSummaryBeat && (
          <span className="absolute left-0 top-10 h-0 w-0">
            <Callout>{words}</Callout>
          </span>
        )}
      </div>
    </div>
  )
}

function Sky() {
  return (
    <>
      <div className="absolute inset-0 bg-[var(--dark)]" />
      <StarField seed={20261109} count={40} maxOpacity={0.3} />
    </>
  )
}

export default function PracticeNight({
  night,
  summary,
  intro,
}: {
  night: PracticeNightContent
  summary: MorningSummaryIllustration
  intro: ReactNode
}) {
  return (
    <Story
      label={night.heading}
      className="[--story-stage-bg:rgb(5_5_15/0.92)] [--story-top:4rem]"
      backdrop={() => <Sky />}
      intro={intro}
      stage={(beat, mode, progress) =>
        mode === 'live' ? (
          <Fit className="h-full w-full py-3 lg:py-12">
            <div className="pb-8">
              <Inbox night={night} summary={summary} beat={beat} mode={mode} progress={progress} />
            </div>
          </Fit>
        ) : (
          <div className={mode === 'snap' ? 'pb-8' : 'pb-10'}>
            <Inbox night={night} summary={summary} beat={beat} mode={mode} />
          </div>
        )
      }
      beats={night.beats.map((b) => ({
        key: b.key,
        content: <p className="text-[1.5rem] font-semibold leading-none tabular-nums text-[#93C5FD]">{formatClock(b.minute, night.clock.days)}</p>,
        words: <p className="mt-4 max-w-[34ch] text-[1.125rem] leading-snug text-[var(--body)]">{b.text}</p>,
      }))}
    />
  )
}
