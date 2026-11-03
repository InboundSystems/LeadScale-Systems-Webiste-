'use client'

import { useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import type { CategoryDef, DayStep, DayTimeline as DayTimelineContent, MorningSummaryIllustration } from '@/content/types'
import ArrivingEmail from './ArrivingEmail'
import CategoryChip, { personLabelTone } from './CategoryChip'
import { InboxFrame, PaneSubject, ReadingPane } from './InboxParts'

// The Front Office's working day as an inbox timeline. "Next" (or the right
// arrow) adds the day's emails one at a time: each arrives at the top, gets
// its chip, and the reading pane says what the system did. The last step is
// the morning summary arriving on the next open day.
//
// Two renderings share the server HTML: a static list of every step (shown
// without JavaScript) and the interactive panel (shown under html.js; see
// .js-only / .no-js-only in app/globals.css). Motion is FLIP on transform and
// opacity, ease-out, 300–420ms, and is skipped under prefers-reduced-motion.

const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)'

type Arrival = NonNullable<DayStep['arrival']>

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Each email's category after the first `count` steps, with corrections applied. */
function categoriesAfter(steps: DayStep[], count: number) {
  const map = new Map<string, CategoryDef>()
  steps.slice(0, count).forEach((s) => {
    if (s.arrival) map.set(s.arrival.id, s.arrival.category)
    if (s.correction) map.set(s.correction.id, s.correction.to)
  })
  return map
}

function Row({
  arrival,
  category,
  selected,
  unread,
  rowRef,
}: {
  arrival: Arrival
  category: CategoryDef
  selected: boolean
  unread: boolean
  rowRef: (el: HTMLElement | null) => void
}) {
  const weight = unread ? 'font-semibold text-[var(--ink)]' : 'font-normal text-[var(--ink)]'
  return (
    <li ref={rowRef} data-selected={selected} className="inbox-row relative border-b border-[var(--hairline)] last:border-b-0">
      {unread && <span aria-hidden="true" className="unread-dot top-[14px]" />}
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 py-[7px] pl-4 pr-3 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_auto_5rem]">
        <span className={`truncate text-[0.8125rem] ${weight}`}>
          {unread && <span className="sr-only">Unread. </span>}
          {arrival.sender}
        </span>
        <span className="text-right text-[0.6875rem] tabular-nums text-[var(--muted)] sm:order-last">{arrival.received}</span>
        <span className={`truncate text-[0.8125rem] ${unread ? 'font-semibold text-[var(--ink)]' : 'text-[var(--muted)]'}`}>
          {arrival.subject}
        </span>
        <span className="flex min-h-[1.25rem] justify-end gap-1">
          {arrival.personLabel && (
            <span className="hidden md:inline-flex">
              <CategoryChip category={{ label: arrival.personLabel, tone: personLabelTone }} />
            </span>
          )}
          <span key={category.label} data-mark className="inline-flex">
            <CategoryChip category={category} />
          </span>
        </span>
      </div>
    </li>
  )
}

function SummaryCard({ summary, linkLabel }: { summary: MorningSummaryIllustration; linkLabel: string }) {
  return (
    <article
      aria-label={summary.subject}
      className="rounded-[8px] border border-[#d9e1e1] bg-[var(--surface)]"
    >
      <dl className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-[var(--hairline)] px-5 py-4 pr-24 text-[0.8125rem]">
        <dt className="text-[var(--muted)]">From</dt>
        <dd className="text-[var(--ink)]">{summary.from}</dd>
        <dt className="text-[var(--muted)]">To</dt>
        <dd className="text-[var(--ink)]">{summary.to}</dd>
        <dt className="text-[var(--muted)]">Sent</dt>
        <dd className="tabular-nums text-[var(--ink)]">{summary.sent}</dd>
        <dt className="text-[var(--muted)]">Subject</dt>
        <dd className="font-semibold text-[var(--ink)]">{summary.subject}</dd>
      </dl>
      <div className="px-5 py-4">
        <p className="v-mono text-[0.75rem] leading-[1.6] text-[var(--ink)]">{summary.opening[0].join(' ')}</p>
        <p className="mt-3 text-[0.875rem]">
          <a href="#illustrations" className="v-link font-semibold">
            {linkLabel}
            <span aria-hidden="true"> ↑</span>
          </a>
        </p>
      </div>
    </article>
  )
}

/** Without JavaScript: every step, in order. */
function StaticSteps({ timeline, summary }: { timeline: DayTimelineContent; summary?: MorningSummaryIllustration }) {
  const byId = new Map(timeline.steps.flatMap((s) => (s.arrival ? [[s.arrival.id, s.arrival] as const] : [])))
  return (
    <ol className="no-js-only border-t border-[var(--hairline)]">
      {timeline.steps.map((step, i) => {
        const subject = step.arrival ?? (step.correction ? byId.get(step.correction.id) : undefined)
        const before = step.correction ? categoriesAfter(timeline.steps, i).get(step.correction.id) : undefined
        return (
          <li key={step.clock} className="grid gap-2 border-b border-[var(--hairline)] py-5 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4">
            <span className="v-mono pt-[0.15em] text-[0.8125rem] font-semibold tabular-nums text-[var(--accent)]">{step.clock}</span>
            <div>
              {subject && (
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[0.9375rem]">
                  <span className="font-semibold text-[var(--ink)]">{subject.sender}</span>
                  <span className="text-[var(--muted)]">{subject.subject}</span>
                  {before && <CategoryChip category={before} />}
                  {before && <span aria-hidden="true">→</span>}
                  <CategoryChip category={step.correction?.to ?? step.arrival!.category} />
                  {step.arrival?.personLabel && (
                    <CategoryChip category={{ label: step.arrival.personLabel, tone: personLabelTone }} />
                  )}
                </p>
              )}
              {step.summary && summary && <p className="font-semibold text-[var(--ink)]">{summary.subject}</p>}
              <p className="mt-1 text-[var(--ink)]">{step.outcome}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default function DayTimeline({
  timeline,
  summary,
}: {
  timeline: DayTimelineContent
  summary?: MorningSummaryIllustration
}) {
  const { steps } = timeline
  // pos 0 is the empty Inbox before opening; pos k shows steps[k - 1].
  const [pos, setPos] = useState(0)
  const step = pos > 0 ? steps[pos - 1] : undefined

  const arrivals = useMemo(
    () => steps.slice(0, pos).flatMap((s) => (s.arrival ? [s.arrival] : [])).reverse(),
    [steps, pos]
  )
  const categories = useMemo(() => categoriesAfter(steps, pos), [steps, pos])
  const latestArrivalId = arrivals[0]?.id
  const selectedId = step?.arrival?.id ?? step?.correction?.id
  const selected = arrivals.find((a) => a.id === selectedId)
  const corrected = step?.correction ? categoriesAfter(steps, pos - 1).get(step.correction.id) : undefined

  const els = useRef(new Map<string, HTMLElement>())
  const lastRects = useRef<Map<string, DOMRect> | null>(null)

  function goTo(next: number) {
    const clamped = Math.max(0, Math.min(steps.length, next))
    if (clamped === pos) return
    if (!reducedMotion()) {
      const rects = new Map<string, DOMRect>()
      els.current.forEach((el, key) => rects.set(key, el.getBoundingClientRect()))
      lastRects.current = rects
    }
    setPos(clamped)
  }

  // FLIP: rows already there slide down; the new one drops in from above.
  useLayoutEffect(() => {
    const previous = lastRects.current
    if (!previous) return
    lastRects.current = null
    els.current.forEach((el, key) => {
      if (typeof el.animate !== 'function') return
      const was = previous.get(key)
      if (!was) {
        el.animate(
          [
            { opacity: 0, transform: 'translateY(-10px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 360, easing: EASE_OUT }
        )
        el.querySelector<HTMLElement>('[data-mark]')?.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: 260,
          easing: EASE_OUT,
          fill: 'backwards',
        })
        return
      }
      const dy = was.top - el.getBoundingClientRect().top
      if (Math.abs(dy) >= 1) {
        el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], {
          duration: 360,
          easing: EASE_OUT,
        })
      }
    })
    // A correction: the new chip fades in where the old one was.
    if (step?.correction) {
      els.current
        .get(step.correction.id)
        ?.querySelector<HTMLElement>('[data-mark]')
        ?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: EASE_OUT })
    }
  }, [pos, step])

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(pos + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(pos - 1)
    }
  }

  const register = (key: string) => (el: HTMLElement | null) => {
    if (el) els.current.set(key, el)
    else els.current.delete(key)
  }

  const atEnd = pos === steps.length
  const btn =
    'rounded-[var(--radius-btn)] px-4 py-2 text-[0.875rem] font-semibold leading-none transition-[background-color,color,transform] duration-150 ease-out enabled:hover:-translate-y-px disabled:cursor-default disabled:opacity-40'

  return (
    <>
      <StaticSteps timeline={timeline} summary={summary} />

      <div className="js-only" onKeyDown={onKeyDown}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <p aria-live="polite" className="v-mono text-[1rem] font-semibold tabular-nums text-[var(--ink)]">
            {step?.clock ?? timeline.startClock}
          </p>
          <div className="flex items-center gap-2">
            <span className="mr-1 text-[0.8125rem] tabular-nums text-[var(--muted)]">
              {pos} {timeline.ofLabel} {steps.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(pos - 1)}
              disabled={pos === 0}
              className={`${btn} border border-[var(--teal)] text-[var(--teal)] enabled:hover:bg-[var(--row-selected)]`}
            >
              {timeline.backLabel}
            </button>
            <button
              type="button"
              onClick={() => goTo(atEnd ? 0 : pos + 1)}
              className={`${btn} bg-[var(--teal)] text-white hover:bg-[var(--saffron)] hover:text-[var(--ink)]`}
            >
              {atEnd ? timeline.restartLabel : timeline.nextLabel}
            </button>
          </div>
        </div>

        <InboxFrame
          toolbar={timeline.toolbar}
          mailboxName={timeline.mailboxName}
          folderName={timeline.folderName}
          right={timeline.arrangedBy}
        >
          <ul aria-label={`${timeline.folderName}, ${timeline.arrangedBy}`} className="min-h-[9rem]">
            {arrivals.map((a) => (
              <Row
                key={a.id}
                arrival={a}
                category={categories.get(a.id)!}
                selected={a.id === selectedId}
                unread={a.id === latestArrivalId}
                rowRef={register(a.id)}
              />
            ))}
          </ul>
          <ReadingPane
            heading={timeline.paneHeading}
            category={selected && <CategoryChip category={categories.get(selected.id)!} />}
          >
            {selected && (
              <PaneSubject
                sender={selected.sender}
                subject={selected.subject}
                personLabel={selected.personLabel ? { label: selected.personLabel, tone: personLabelTone } : undefined}
              />
            )}
            {corrected && step?.correction && (
              <p className="mt-1.5 flex flex-wrap items-center gap-2">
                <CategoryChip category={corrected} />
                <span aria-hidden="true" className="text-[var(--muted)]">
                  →
                </span>
                <CategoryChip category={step.correction.to} />
              </p>
            )}
            <p className={`${selected ? 'mt-1.5' : ''} text-[0.875rem] leading-snug text-[var(--ink)]`}>
              {step?.outcome ?? timeline.startNote}
            </p>
          </ReadingPane>
        </InboxFrame>

        {step?.summary && summary && (
          <ArrivingEmail newLabel={timeline.newLabel} arrived className="mt-6">
            <SummaryCard summary={summary} linkLabel={timeline.summaryLinkLabel} />
          </ArrivingEmail>
        )}
      </div>
    </>
  )
}
