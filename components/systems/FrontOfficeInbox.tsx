'use client'

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { CategoryDef, DemoEmail, InboxDemo } from '@/content/types'
import CategoryChip, { personLabelTone } from './CategoryChip'
import CategoryMenu from './CategoryMenu'
import { HeroNotesList } from './HeroNotes'
import { outlookFace, PaneSubject } from './InboxParts'
import Tilt from './Tilt'

// The Front Office's interactive inbox (clinics, 10 November 2026):
//   - variant "hero": the homepage hero's picture of a practice inbox, with
//     only the Before / After toggle.
//   - variant "full": "Try it yourself" on /systems/front-office, with
//     Replay, Reset, changing a category, and the notes under the window.
//
//   - The message list: a Monday-morning Inbox at a fictional practice,
//     sorted Before -> After, with Replay, Reset, chips, unread dots and the
//     counts line.
//   - A reading pane under it, only once a row is chosen (so it adds no
//     height at rest): what the system did, or the visitor's correction.
//   - Each row's chip opens a category menu (CategoryMenu): choosing one moves
//     the row to that group (FLIP), the pane says the correction is recorded
//     and never changed back, and the change is announced. Reset undoes the
//     visitor's corrections; they survive Replay, as reception's would.
//   - Three handwritten notes, as a short list under the window (HeroNotes).
//   - Compact row density, so it sits beside The Front Office card at about
//     1.3x the card's height.
//
// The list's view is driven by CSS from data attributes (app/globals.css,
// "Inbox demo"). It shows After by default, with or without JavaScript, and
// changes only when someone presses Before or After (FLIP, 520ms ease-out,
// transform and opacity only; instant under reduced motion). Nothing plays
// on its own. The window leans towards a fine pointer (Tilt). Every sender
// is fictional (content/systems.ts).

type View = 'before' | 'after'

const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)'
const DURATION = 520

type Item =
  | { kind: 'group'; key: string; label: string; count: number }
  | { kind: 'email'; key: string; email: DemoEmail; beforeOrder: number }

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function FrontOfficeInbox({ demo, variant = 'full' }: { demo: InboxDemo; variant?: 'hero' | 'full' }) {
  const full = variant === 'full'
  const [view, setView] = useState<View>('after')
  const [hovered, setHovered] = useState<string | null>(null)
  const [pulse, setPulse] = useState(0)
  // The row whose explanation the reading pane shows, if any.
  const [paneId, setPaneId] = useState<string | null>(null)
  // The visitor's corrections: row id → category label, and what it was.
  const [overrides, setOverrides] = useState<Record<string, string>>({})
  const [corrections, setCorrections] = useState<Record<string, { from: CategoryDef; to: CategoryDef }>>({})
  const [announcement, setAnnouncement] = useState('')
  const categoryOf = useCallback(
    (email: DemoEmail) => demo.categories.find((c) => c.label === overrides[email.id]) ?? email.category,
    [demo.categories, overrides]
  )

  const items = useMemo<Item[]>(
    () =>
      demo.categories.flatMap((category) => {
        const emails = demo.emails.filter((e) => categoryOf(e).label === category.label)
        if (emails.length === 0) return []
        return [
          { kind: 'group' as const, key: `group-${category.label}`, label: category.label, count: emails.length },
          ...emails.map((email) => ({
            kind: 'email' as const,
            key: email.id,
            email,
            beforeOrder: demo.emails.indexOf(email),
          })),
        ]
      }),
    [demo, categoryOf]
  )
  const opened = paneId ? demo.emails.find((e) => e.id === paneId) : undefined

  const unclearLabel = demo.categories[0]?.label
  const labelled = demo.emails.filter((e) => e.personLabel)
  const labelName = labelled[0]?.personLabel ?? ''
  const counter = (after: boolean) =>
    [
      `${demo.emails.length} ${demo.counter.emails}`,
      `${after ? demo.emails.filter((e) => categoryOf(e).label === unclearLabel).length : 0} ${demo.counter.unclear}`,
      `${after ? labelled.length : 0} ${demo.counter.labelled} ${labelName}`,
      `0 ${demo.counter.moved}`,
    ].join(' · ')

  const windowRef = useRef<HTMLDivElement>(null)
  const els = useRef(new Map<string, HTMLElement>())
  const lastRects = useRef<Map<string, DOMRect> | null>(null)
  const viewRef = useRef<View>('after')
  // Why the last FLIP ran: the chips only fade in on a sort, not a correction.
  const flipReason = useRef<'view' | 'move'>('view')
  const timers = useRef<number[]>([])

  const capture = () => {
    const rects = new Map<string, DOMRect>()
    els.current.forEach((el, key) => rects.set(key, el.getBoundingClientRect()))
    lastRects.current = rects
  }

  const go = useCallback((next: View, animate: boolean) => {
    if (next === viewRef.current) return
    const moving = animate && !reducedMotion()
    flipReason.current = 'view'
    if (moving) capture()
    viewRef.current = next
    setHovered(null)
    if (next === 'before') setPaneId(null)
    setView(next)
    if (next === 'after' && moving) {
      timers.current.push(window.setTimeout(() => setPulse((n) => n + 1), DURATION))
    }
  }, [])

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])

  // FLIP: once the DOM shows the new view, play each element from its old place.
  useLayoutEffect(() => {
    const previous = lastRects.current
    if (!previous) return
    lastRects.current = null
    els.current.forEach((el, key) => {
      if (typeof el.animate !== 'function') return
      const was = previous.get(key)
      const now = el.getBoundingClientRect()
      if (now.height === 0) return
      if (!was || was.height === 0) {
        el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: DURATION - 200,
          easing: EASE_OUT,
          fill: 'backwards',
        })
        return
      }
      const dy = was.top - now.top
      if (Math.abs(dy) < 1) return
      el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], {
        duration: DURATION,
        easing: EASE_OUT,
      })
    })
    if (view === 'after' && flipReason.current === 'view') {
      windowRef.current?.querySelectorAll<HTMLElement>('[data-mark]').forEach((mark) =>
        mark.animate?.([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: DURATION - 160,
          easing: EASE_OUT,
          fill: 'backwards',
        })
      )
    }
  }, [view, overrides])

  function choose(next: View) {
    timers.current.forEach((t) => window.clearTimeout(t))
    go(next, true)
  }

  function replay() {
    timers.current.forEach((t) => window.clearTimeout(t))
    setPaneId(null)
    if (reducedMotion()) {
      go('after', false)
      return
    }
    go('before', false)
    timers.current.push(window.setTimeout(() => go('after', true), 380))
  }

  function recategorise(email: DemoEmail, to: CategoryDef) {
    const from = categoryOf(email)
    if (to.label === from.label) return
    flipReason.current = 'move'
    if (!reducedMotion()) capture()
    setOverrides((o) => ({ ...o, [email.id]: to.label }))
    setCorrections((c) => ({ ...c, [email.id]: { from: c[email.id]?.from ?? email.category, to } }))
    setPaneId(email.id)
    setAnnouncement(`${demo.movedToLabel} ${to.label}. ${demo.correctionText}`)
  }

  // Closing the pane removes its Close button, so focus goes back to the row.
  function closePane() {
    const id = paneId
    setPaneId(null)
    requestAnimationFrame(() =>
      windowRef.current?.querySelector<HTMLButtonElement>(`[data-row-id="${id}"] > button`)?.focus()
    )
  }

  function reset() {
    flipReason.current = 'move'
    if (!reducedMotion()) capture()
    setOverrides({})
    setCorrections({})
    setPaneId(null)
    setAnnouncement('')
  }

  const register = (key: string) => (el: HTMLElement | null) => {
    if (el) els.current.set(key, el)
    else els.current.delete(key)
  }

  const isAfter = view === 'after'

  return (
    <div className="relative">
      <Tilt>
      <div
        ref={windowRef}
        data-view={view}
        data-autoplay="done"
        className="lit lit-screen inbox-demo inbox-window overflow-hidden rounded-[8px] border border-t-[3px] border-[var(--frame)] border-t-[var(--primary)] bg-[var(--surface)] text-[var(--ink)] shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
        style={outlookFace}
      >
        <div aria-hidden="true" className="flex items-center gap-2 border-b border-[var(--hairline)] px-4 py-1 text-[0.75rem] text-[var(--muted)]">
          {demo.toolbar.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="text-[var(--faint)]">·</span>}
              {item}
            </span>
          ))}
        </div>

        <div>
          <section aria-label={`${demo.mailboxName} ${demo.folderName}`}>
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-[var(--hairline)] px-4 py-1.5">
              <p className="tabular-nums text-[0.8125rem] font-semibold tabular-nums">{demo.moment}</p>
              <div className="flex items-center gap-3">
                {full && (
                  <>
                    <button type="button" onClick={replay} className="v-link text-[0.8125rem] font-semibold">
                      {demo.replayLabel}
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      disabled={Object.keys(overrides).length === 0}
                      className="v-link text-[0.8125rem] font-semibold disabled:cursor-default disabled:text-[var(--muted)] disabled:no-underline"
                    >
                      {demo.resetLabel}
                    </button>
                  </>
                )}
                <div
                  role="group"
                  aria-label={`${demo.moment}: ${demo.beforeLabel} or ${demo.afterLabel}`}
                  className="inline-flex rounded-[var(--radius-btn)] border border-[var(--hairline)] bg-[var(--surface)] p-0.5"
                >
                  {(['before', 'after'] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      data-for={v}
                      aria-pressed={view === v}
                      onClick={() => choose(v)}
                      className="inbox-demo-toggle rounded-[3px] px-3 py-1.5 text-[0.8125rem] font-semibold leading-none"
                    >
                      {v === 'before' ? demo.beforeLabel : demo.afterLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] bg-[var(--chrome)] px-4 py-1.5">
              <p className="truncate text-[0.8125rem] text-[var(--muted)]">
                {demo.mailboxName} <span aria-hidden="true">›</span>{' '}
                <span className="font-semibold text-[var(--ink)]">{demo.folderName}</span>
              </p>
              <p className="shrink-0 text-[0.75rem] text-[var(--muted)]">
                <span data-after-only>{demo.arrangedByCategory}</span>
                <span data-before-only>{demo.arrangedByDate}</span>
              </p>
            </div>

            <ul data-list aria-label={`${demo.folderName}, ${isAfter ? demo.arrangedByCategory : demo.arrangedByDate}`}>
              {items.map((item) => {
                if (item.kind === 'group') {
                  const category = demo.categories.find((c) => c.label === item.label)!
                  const dim = hovered !== null && hovered !== item.label
                  return (
                    <li
                      key={item.key}
                      ref={register(item.key)}
                      data-group={item.label}
                      className={`border-b border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-0.5 transition-opacity duration-150 ease-out ${dim ? 'opacity-40' : ''}`}
                    >
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true" className="text-[0.5625rem] text-[var(--muted)]">
                          ▼
                        </span>
                        <CategoryChip category={category} onHover={setHovered} className="cursor-default" />
                        <span className="text-[0.75rem] tabular-nums text-[var(--muted)]">
                          {item.count} {item.count === 1 ? 'item' : 'items'}
                        </span>
                      </span>
                    </li>
                  )
                }
                const { email } = item
                const current = categoryOf(email)
                const dim = isAfter && hovered !== null && hovered !== current.label
                const weight = email.unread ? 'font-semibold' : 'font-normal'
                return (
                  <li
                    key={item.key}
                    ref={register(item.key)}
                    data-row
                    data-row-id={email.id}
                    data-selected={email.id === paneId}
                    style={{ ['--before-order' as string]: item.beforeOrder }}
                    className={`inbox-row relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5 gap-y-0.5 border-b border-[var(--hairline)] py-[3px] pl-4 pr-2.5 transition-opacity duration-150 ease-out sm:grid-cols-[minmax(0,1fr)_auto_auto] ${dim ? 'opacity-40' : ''}`}
                  >
                    {email.unread && (
                      <span
                        key={`dot-${pulse}`}
                        aria-hidden="true"
                        className={`unread-dot top-[11px] ${pulse > 0 ? 'unread-pulse' : ''}`}
                      />
                    )}
                    <button
                      type="button"
                      tabIndex={isAfter ? 0 : -1}
                      aria-pressed={isAfter ? email.id === paneId : undefined}
                      onClick={() => isAfter && setPaneId(email.id)}
                      className="row-span-2 min-w-0 text-left sm:row-span-1 sm:flex sm:items-center sm:gap-3"
                    >
                      <span className={`block truncate text-[0.8125rem] sm:w-[7.25rem] sm:shrink-0 ${weight}`}>
                        {email.unread && <span className="sr-only">Unread. </span>}
                        {email.sender}
                      </span>
                      <span className={`block truncate text-[0.8125rem] ${email.unread ? 'font-semibold' : 'text-[var(--muted)]'}`}>
                        {email.subject}
                      </span>
                    </button>
                    <span className="whitespace-nowrap text-right text-[0.75rem] tabular-nums text-[var(--muted)] sm:order-last sm:min-w-[3.25rem]">
                      {email.received}
                    </span>
                    <span className="flex min-h-[1.25rem] justify-end gap-1">
                      {email.personLabel && (
                        <span data-mark data-person-label className="hidden xl:inline-flex">
                          <CategoryChip category={{ label: email.personLabel, tone: personLabelTone }} />
                        </span>
                      )}
                      <span data-mark className="inline-flex">
                        {full ? (
                        <CategoryMenu
                          current={current}
                          categories={demo.categories}
                          label={`${demo.changeCategoryLabel}, ${email.sender}`}
                          disabled={!isAfter}
                          onChoose={(c) => recategorise(email, c)}
                          onHover={setHovered}
                        />
                        ) : (
                          <CategoryChip category={current} />
                        )}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <p data-counter aria-live="polite" className="border-t border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-1.5 text-[0.75rem] tabular-nums">
              <span data-after-only>{counter(true)}</span>
              <span data-before-only>{counter(false)}</span>
            </p>
          </section>

          {/* The reading pane, under the list: only once a row is chosen. */}
          {isAfter && opened && (
            <section aria-label={demo.paneHeading} className="border-t border-[var(--hairline)] bg-[var(--chrome-soft)]">
              <div className="flex items-center justify-between gap-3 border-b border-[var(--hairline)] px-4 py-1.5">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">{demo.paneHeading}</p>
                <div className="flex items-center gap-3">
                  <CategoryChip category={categoryOf(opened)} />
                  <button type="button" onClick={closePane} className="v-link text-[0.75rem] font-semibold">
                    {demo.closeLabel}
                  </button>
                </div>
              </div>
              <div aria-live="polite" className="px-4 py-3">
                <PaneSubject
                  sender={opened.sender}
                  subject={opened.subject}
                  personLabel={opened.personLabel ? { label: opened.personLabel, tone: personLabelTone } : undefined}
                />
                {corrections[opened.id] ? (
                  <>
                    <p className="mt-2 flex flex-wrap items-center gap-2">
                      <CategoryChip category={corrections[opened.id].from} />
                      <span aria-hidden="true" className="text-[var(--muted)]">
                        →
                      </span>
                      <CategoryChip category={corrections[opened.id].to} />
                    </p>
                    <p className="mt-2 text-[0.875rem] leading-snug">{demo.correctionText}</p>
                  </>
                ) : (
                  <p className="mt-1.5 text-[0.875rem] leading-snug">{opened.outcome}</p>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
      </Tilt>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
      <p className="v-small mt-4">{demo.caption}</p>
      {full && <HeroNotesList notes={demo.notes} label={demo.notesLabel} />}
    </div>
  )
}
