'use client'

import type { ReactNode } from 'react'
import type { HomeContent } from '@/content/types'
import EyeDot from '../EyeDot'
import Tilt from '../Tilt'
import Story, { Fit, type StageMode } from './Story'

// The homepage's second story, "Every system runs the same way", in the
// night-blue band (night story, 9 November 2026). One artifact changes
// through the six steps as the visitor scrolls, and each step's own words
// are written onto it:
//   1 We agree the job        the two crossed-off items lift off the Monday
//                             list and join into one card, "The job"
//   2 We write your rules     the card unfolds into a one-page rules document
//   3 We install it, run it   the page slides into a plain window frame,
//                             "Your software" (no product names or logos)
//   4 You administer nothing  no settings panel: just "Run by Vicaria", the
//                             owl's eye on
//   5 One number, every month a small monthly card. No figures
//   6 You approve every change an email lands, Approve is pressed, the window
//                             updates
// Only the existing step wording; the artifact's lines are generic and
// fictional (content/audience.ts, home.method.story). Transform and opacity
// only, as CSS transitions keyed off the beat.

const T = 'stage-fade'
const off = (on: boolean, extra = '') => (on ? '' : `stage-off ${extra}`)

function Row({ text, done, ticked }: { text: string; done: boolean; ticked?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-[0.875rem] leading-snug">
      <span
        aria-hidden="true"
        className={`mt-[0.15em] flex h-[0.95rem] w-[0.95rem] shrink-0 items-center justify-center rounded-[3px] border ${
          ticked ? 'border-[var(--note)] bg-[var(--note)]' : 'border-[var(--frame-strong)]'
        }`}
      >
        {ticked && (
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5">
            <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className={done ? 'text-[var(--muted)] line-through decoration-[var(--note)] decoration-[1.5px]' : ''}>{text}</span>
    </li>
  )
}

function Artifact({ home, beat }: { home: HomeContent; beat: number }) {
  const s = home.method.story
  const list = home.hero.list
  const job = list.items.filter((i) => i.done)
  const rest = list.items.filter((i) => !i.done)
  const asJob = beat >= 0
  const asDoc = beat >= 1
  const inWindow = beat >= 2
  const running = beat >= 3
  const monthly = beat >= 4
  const change = beat >= 5

  return (
    <div className="relative mx-auto h-[23rem] w-[30rem] text-[var(--ink)]">
      {/* The window frame ("Your software"), from step 3. */}
      <div className={`${T} lit lit-screen absolute inset-0 rounded-[10px] border border-[var(--frame)] bg-[var(--surface)] ${off(inWindow, 'scale-[1.04]')}`}>
        <div className="flex h-9 items-center gap-2 rounded-t-[10px] border-b border-[var(--hairline)] bg-[var(--chrome)] px-3.5">
          <span aria-hidden="true" className="flex gap-1.5">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-2 w-2 rounded-full bg-[var(--frame-strong)]" />
            ))}
          </span>
          <span className="ml-2 text-[0.75rem] font-semibold text-[var(--muted)]">{s.windowTitle}</span>
        </div>
        {/* Running: the work, done. No settings panel. */}
        <div className={`${T} absolute inset-x-0 top-9 px-6 pt-6 ${off(running, 'translate-y-2')}`}>
          <ul className="flex flex-col gap-3">
            {s.doneRows.map((r) => (
              <Row key={r} text={r} done={false} ticked />
            ))}
          </ul>
          <p className={`${T} mt-5 inline-flex items-center gap-2 rounded-[6px] border border-[var(--accent-tint)] bg-[var(--accent-tint)] px-2.5 py-1.5 text-[0.75rem] font-semibold text-[var(--note)] ${off(change, 'translate-y-1')}`} style={{ transitionDelay: change ? '1500ms' : '0ms' }}>
            {s.change.applied}
          </p>
        </div>
        <div className={`${T} absolute inset-x-0 bottom-0 flex items-center justify-between rounded-b-[10px] border-t border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-2 ${off(running)}`}>
          <span className="flex items-center gap-2 text-[0.75rem] font-semibold text-[var(--ink)]">
            <EyeDot watch open={running} colour="#3B82F6" size={11} delay={300} />
            {s.runBy}
          </span>
        </div>
      </div>

      {/* The Monday list, then the job card, then the rules page. */}
      <div
        className={`${T} absolute left-[3rem] top-[1.25rem] w-[24rem] origin-top ${running ? 'stage-off scale-[0.74]' : ''}`}
        style={{ transform: inWindow && !running ? 'translateY(1.6rem) scale(0.8)' : undefined }}
      >
        {/* The page behind: the notepad at first, then the card growing into a page. */}
        <div
          className={`${T} lit lit-screen absolute inset-x-0 top-0 h-[19.5rem] origin-top rounded-[10px] border border-[var(--frame)] bg-[var(--surface)]`}
          style={{ transform: asJob && !asDoc ? 'scaleY(0.46)' : undefined }}
        />
        <div className="lit relative px-6 pt-5">
          <div className="relative h-7">
            <p className={`${T} absolute inset-0 text-[1.125rem] font-semibold leading-none ${off(!asJob, '-translate-y-1')}`}>{list.title}</p>
            <p className={`${T} absolute inset-0 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--note)] ${off(asJob, 'translate-y-1')}`}>
              {s.jobTitle}
            </p>
          </div>
          <ul className={`${T} flex flex-col gap-2.5 ${asJob ? '-translate-y-1' : ''}`}>
            {job.map((i) => (
              <Row key={i.text} text={i.text} done={!asJob} ticked={!asJob} />
            ))}
          </ul>
          <ul className={`${T} mt-2.5 flex flex-col gap-2.5 ${off(!asJob, 'translate-y-4')}`}>
            {rest.map((i) => (
              <Row key={i.text} text={i.text} done={false} />
            ))}
          </ul>
          {/* The rules, from step 2. */}
          <div className={`${T} absolute inset-x-6 top-[6.75rem] border-t border-[var(--hairline)] pt-3 ${off(asDoc, 'translate-y-2')}`}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--note)]">{s.rulesTitle}</p>
            <ul className="mt-2.5 flex flex-col gap-2">
              {s.rules.map((r, i) => (
                <li
                  key={r}
                  className={`${T} text-[0.8125rem] leading-snug ${off(asDoc, 'translate-y-1')}`}
                  style={{ transitionDelay: asDoc ? `${200 + i * 110}ms` : '0ms' }}
                >
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-1.5">
              {[0, 1, 2].map((l) => (
                <span key={l} className="h-1.5 rounded-full bg-[var(--chrome)]" style={{ width: `${88 - l * 18}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The monthly card, from step 5. No figures. */}
      <div className={`${T} lit lit-screen absolute -bottom-6 -right-8 w-[13.5rem] rounded-[8px] border border-[var(--frame)] bg-[var(--surface)] px-4 py-3.5 ${off(monthly, 'translate-y-4')}`}>
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--note)]">{s.monthlyTitle}</p>
        <p className="mt-1.5 text-[0.8125rem] leading-snug">{s.monthlyText}</p>
      </div>

      {/* The change email, step 6: it lands, Approve is pressed, the window updates. */}
      <div className={`${T} lit lit-screen absolute -right-12 -top-14 w-[17rem] rounded-[8px] border border-[var(--frame)] bg-[var(--surface)] ${off(change, '-translate-y-6')}`}>
        <div className="border-b border-[var(--hairline)] px-4 py-2.5 text-[0.75rem]">
          <p className="text-[var(--muted)]">
            From <span className="font-semibold text-[var(--ink)]">{s.change.from}</span>
          </p>
          <p className="mt-0.5 font-semibold">{s.change.subject}</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[0.8125rem] leading-snug text-[var(--muted)]">{s.change.body}</p>
          <p className="mt-3 flex gap-2">
            <span className={`approve rounded-[6px] bg-[var(--primary)] px-3 py-1.5 text-[0.75rem] font-semibold leading-none text-white ${change ? 'approve-pressed' : ''}`}>
              {s.change.approve}
            </span>
            <span className="rounded-[6px] border border-[var(--frame-strong)] px-3 py-1.5 text-[0.75rem] font-semibold leading-none text-[var(--muted)]">
              {s.change.notNow}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

/** The step's own words on the stage, joined to the artifact by a short
 *  leader line (live desktop stage only). */
function StepCallout({ home, beat }: { home: HomeContent; beat: number }) {
  return (
    <div className="stage-callout relative mx-auto mt-14 h-16 w-[30rem] flex-col">
      {home.method.items.map((item, i) => (
        <p
          key={item.heading}
          className={`${T} absolute inset-x-0 top-0 flex items-start gap-3 text-[0.875rem] font-medium leading-snug text-[#BFDBFE] ${off(beat === i, 'translate-y-2')}`}
        >
          <span aria-hidden="true" className="mt-[0.6em] h-px w-8 shrink-0 bg-[#93C5FD]/70" />
          <span>
            <span className="mr-2 tabular-nums text-[#93C5FD]">{i + 1}</span>
            {item.body}
          </span>
        </p>
      ))}
    </div>
  )
}

function Stage({ home, beat, mode }: { home: HomeContent; beat: number; mode: StageMode }) {
  const art = (
    <Tilt>
      <Artifact home={home} beat={beat} />
    </Tilt>
  )
  if (mode !== 'live') {
    return (
      <div className="w-full overflow-hidden py-10">
        <div className="mx-auto w-[30rem] max-w-full origin-top-left [zoom:0.72] sm:[zoom:0.9] lg:[zoom:1]">{art}</div>
      </div>
    )
  }
  return (
    <Fit className="h-full w-full px-2 py-6 lg:py-12">
      <div className="px-10 pt-10">
        {art}
        <StepCallout home={home} beat={beat} />
      </div>
    </Fit>
  )
}

export default function MethodStory({ home, intro, outro, className = '' }: { home: HomeContent; intro: ReactNode; outro: ReactNode; className?: string }) {
  const { method } = home
  return (
    <Story
      label={method.heading}
      className={`[--story-stage-bg:rgb(10_22_48/0.92)] [--story-top:6.9rem] xl:[--story-top:4rem] ${className}`}
      gridClassName="xl:pl-[17rem]"
      intro={intro}
      stage={(beat, mode) => <Stage home={home} beat={beat} mode={mode} />}
      beats={method.items.map((item, i) => ({
        key: item.heading,
        content: (
          <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-t border-white/20 pt-6">
            <span aria-hidden="true" className="text-[1.5rem] font-semibold leading-none tabular-nums text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="v-h3 !text-white">{item.heading}</h3>
              <div className="story-words">
                <p className="mt-1.5 text-[var(--on-dark-soft)]">{item.body}</p>
              </div>
            </div>
          </div>
        ),
      }))}
      outro={outro}
    />
  )
}
