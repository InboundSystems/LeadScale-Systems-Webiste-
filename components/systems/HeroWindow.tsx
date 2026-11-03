'use client'

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { DemoEmail, HomeContent, InboxDemo, SiteChrome } from '@/content/types'
import CategoryChip, { personLabelTone } from './CategoryChip'
import { outlookFace, PaneSubject } from './InboxParts'
import MarkedHeading from './MarkedHeading'
import { ButtonLink } from './ui'

// The homepage hero: one large Outlook-style window on deep ink.
//
//   left   the message list: The Front Office's Monday-morning Inbox, sorted
//          Before → After (the existing demo: chips, unread dots, counter);
//   right  the reading pane, open on our email to you. Its subject is the
//          page's real H1; its body is the subhead and the two buttons.
//          Choosing a row swaps the pane to what the system did with that
//          email, with "Back to our email".
//   mobile the pane (and the H1) first, the list below.
//
// The list's view is driven by CSS from data attributes (app/globals.css,
// "Inbox demo"), so one DOM serves three states: no JavaScript (the
// server-rendered After state and our email), JavaScript before hydration
// (html.js: CSS shows Before, no flash), and hydrated (React plays Before →
// After once, 700ms after the window is 40% in view; FLIP, 520ms ease-out,
// transform and opacity only; reduced motion skips straight to After).
// Every sender is fictional (content/systems.ts).

type View = 'before' | 'after'
type Autoplay = 'pending' | 'waiting' | 'done'

const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)'
const DURATION = 520
const START_DELAY = 700

type Item =
  | { kind: 'group'; key: string; label: string; count: number }
  | { kind: 'email'; key: string; email: DemoEmail; beforeOrder: number }

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function HeroWindow({
  hero,
  demo,
  mail,
}: {
  hero: HomeContent['hero']
  demo: InboxDemo
  mail: SiteChrome['mail']
}) {
  const [view, setView] = useState<View>('after')
  const [autoplay, setAutoplay] = useState<Autoplay>('pending')
  const [hovered, setHovered] = useState<string | null>(null)
  const [pulse, setPulse] = useState(0)
  // null: the pane shows our email (with the H1). Otherwise a row's id.
  const [paneId, setPaneId] = useState<string | null>(null)

  const items = useMemo<Item[]>(
    () =>
      demo.categories.flatMap((category) => {
        const emails = demo.emails.filter((e) => e.category.label === category.label)
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
    [demo]
  )
  const opened = paneId ? demo.emails.find((e) => e.id === paneId) : undefined

  const unclearLabel = demo.categories[0]?.label
  const labelled = demo.emails.filter((e) => e.personLabel)
  const labelName = labelled[0]?.personLabel ?? ''
  const counter = (after: boolean) =>
    [
      `${demo.emails.length} ${demo.counter.emails}`,
      `${after ? demo.emails.filter((e) => e.category.label === unclearLabel).length : 0} ${demo.counter.unclear}`,
      `${after ? labelled.length : 0} ${demo.counter.labelled} ${labelName}`,
      `0 ${demo.counter.moved}`,
    ].join(' · ')

  const windowRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLButtonElement>(null)
  const els = useRef(new Map<string, HTMLElement>())
  const lastRects = useRef<Map<string, DOMRect> | null>(null)
  const viewRef = useRef<View>('after')
  const timers = useRef<number[]>([])

  const capture = () => {
    const rects = new Map<string, DOMRect>()
    els.current.forEach((el, key) => rects.set(key, el.getBoundingClientRect()))
    lastRects.current = rects
  }

  const go = useCallback((next: View, animate: boolean) => {
    if (next === viewRef.current) return
    const moving = animate && !reducedMotion()
    if (moving) capture()
    viewRef.current = next
    setHovered(null)
    if (next === 'before') setPaneId(null)
    setView(next)
    if (moving && next === 'after') {
      timers.current.push(window.setTimeout(() => setPulse((n) => n + 1), DURATION))
    }
  }, [])

  // Hydrated: take over from the CSS pre-hydration state.
  useLayoutEffect(() => {
    if (!document.documentElement.classList.contains('js') || reducedMotion()) {
      setAutoplay('done')
      return
    }
    viewRef.current = 'before'
    setView('before')
    setAutoplay('waiting')
  }, [])

  // Play once, 700ms after 40% of the window is in view (restarting if it
  // leaves view first, so it only plays where it can be seen).
  useEffect(() => {
    if (autoplay !== 'waiting' || !windowRef.current) return
    let timer: number | undefined
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[entries.length - 1].isIntersecting
        window.clearTimeout(timer)
        if (!visible) return
        timer = window.setTimeout(() => {
          observer.disconnect()
          go('after', true)
          setAutoplay('done')
        }, START_DELAY)
      },
      { threshold: 0.4 }
    )
    observer.observe(windowRef.current)
    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [autoplay, go])

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
    if (view === 'after') {
      windowRef.current?.querySelectorAll<HTMLElement>('[data-mark]').forEach((mark) =>
        mark.animate?.([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: DURATION - 160,
          easing: EASE_OUT,
          fill: 'backwards',
        })
      )
    }
  }, [view])

  // When a row's explanation opens, the Back link takes focus only if the
  // reader is not mid-way through the list with the keyboard.
  useEffect(() => {
    if (paneId === null) return
    backRef.current?.scrollIntoView({ block: 'nearest' })
  }, [paneId])

  function choose(next: View) {
    timers.current.forEach((t) => window.clearTimeout(t))
    setAutoplay('done')
    go(next, true)
  }

  function replay() {
    timers.current.forEach((t) => window.clearTimeout(t))
    setAutoplay('done')
    setPaneId(null)
    if (reducedMotion()) {
      go('after', false)
      return
    }
    go('before', false)
    timers.current.push(window.setTimeout(() => go('after', true), 380))
  }

  const register = (key: string) => (el: HTMLElement | null) => {
    if (el) els.current.set(key, el)
    else els.current.delete(key)
  }

  const isAfter = view === 'after'

  return (
    <div className="relative">
      <div
        ref={windowRef}
        data-view={view}
        data-autoplay={autoplay}
        className="inbox-demo hero-window overflow-hidden rounded-[8px] border-t-[6px] border-[var(--saffron)] bg-[var(--surface)] text-[var(--ink)] shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        style={outlookFace}
      >
        <div aria-hidden="true" className="flex items-center gap-2 border-b border-[var(--hairline)] px-4 py-1.5 text-[0.75rem] text-[#6b787d]">
          {demo.toolbar.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#b9c3c5]">·</span>}
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)]">
          {/* The message list. Second on mobile, left on desktop. */}
          <section aria-label={`${demo.mailboxName} ${demo.folderName}`} className="order-2 border-t border-[var(--hairline)] lg:order-1 lg:border-r lg:border-t-0">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-[var(--hairline)] px-4 py-2.5">
              <p className="v-mono text-[0.8125rem] font-semibold tabular-nums">{demo.moment}</p>
              <div className="flex items-center gap-3">
                <button type="button" onClick={replay} className="v-link text-[0.8125rem] font-semibold">
                  {demo.replayLabel}
                </button>
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

            <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] bg-[#f3f6f6] px-4 py-2">
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
                      className={`border-b border-[var(--hairline)] bg-[#fafbfb] px-4 py-1 transition-opacity duration-150 ease-out ${dim ? 'opacity-40' : ''}`}
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
                const dim = isAfter && hovered !== null && hovered !== email.category.label
                const weight = email.unread ? 'font-semibold' : 'font-normal'
                return (
                  <li
                    key={item.key}
                    ref={register(item.key)}
                    data-row
                    data-selected={email.id === paneId}
                    style={{ ['--before-order' as string]: item.beforeOrder }}
                    className={`inbox-row relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 border-b border-[var(--hairline)] py-[7px] pl-4 pr-3 transition-opacity duration-150 ease-out sm:grid-cols-[minmax(0,1fr)_auto_4.25rem] ${dim ? 'opacity-40' : ''}`}
                  >
                    {email.unread && (
                      <span
                        key={`dot-${pulse}`}
                        aria-hidden="true"
                        className={`unread-dot top-[14px] ${pulse > 0 ? 'unread-pulse' : ''}`}
                      />
                    )}
                    <button
                      type="button"
                      tabIndex={isAfter ? 0 : -1}
                      aria-pressed={isAfter ? email.id === paneId : undefined}
                      onClick={() => isAfter && setPaneId(email.id)}
                      className="row-span-2 min-w-0 text-left sm:row-span-1 sm:flex sm:items-center sm:gap-3"
                    >
                      <span className={`block truncate text-[0.8125rem] sm:w-[8.5rem] sm:shrink-0 ${weight}`}>
                        {email.unread && <span className="sr-only">Unread. </span>}
                        {email.sender}
                      </span>
                      <span className={`block truncate text-[0.8125rem] ${email.unread ? 'font-semibold' : 'text-[var(--muted)]'}`}>
                        {email.subject}
                      </span>
                    </button>
                    <span className="text-right text-[0.6875rem] tabular-nums text-[var(--muted)] sm:order-last">
                      {email.received}
                    </span>
                    <span className="flex min-h-[1.25rem] justify-end gap-1">
                      {email.personLabel && (
                        <span data-mark data-person-label className="hidden xl:inline-flex">
                          <CategoryChip category={{ label: email.personLabel, tone: personLabelTone }} />
                        </span>
                      )}
                      <span data-mark className="inline-flex">
                        <CategoryChip category={email.category} onHover={setHovered} />
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <p data-counter aria-live="polite" className="v-mono border-t border-[var(--hairline)] bg-[#fafbfb] px-4 py-2.5 text-[0.75rem] tabular-nums">
              <span data-after-only>{counter(true)}</span>
              <span data-before-only>{counter(false)}</span>
            </p>
          </section>

          {/* The reading pane. First on mobile, right on desktop. */}
          <section aria-label={hero.paneLabel} className="order-1 lg:order-2">
            <div hidden={opened !== undefined} className="px-6 py-7 sm:px-9 sm:py-9">
              <MarkedHeading text={hero.heading} marked={hero.markedWord} className="v-h1 xl:text-[3.25rem]" />
              <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-b border-[var(--hairline)] pb-4 text-[0.875rem]">
                <div className="flex gap-1.5">
                  <dt className="v-mono text-[0.75rem] leading-[1.6] text-[var(--muted)]">{mail.fromLabel}:</dt>
                  <dd className="font-semibold">{mail.from}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="v-mono text-[0.75rem] leading-[1.6] text-[var(--muted)]">{mail.toLabel}:</dt>
                  <dd>{mail.to}</dd>
                </div>
              </dl>
              <p className="v-lead mt-5">{hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink link={hero.primary} />
                <ButtonLink link={hero.secondary} variant="secondary" />
              </div>
            </div>

            <div hidden={opened === undefined} aria-live="polite" className="px-6 py-7 sm:px-9 sm:py-9">
              {opened && (
                <>
                  <button
                    ref={backRef}
                    type="button"
                    onClick={() => setPaneId(null)}
                    className="v-link text-[0.875rem] font-semibold"
                  >
                    <span aria-hidden="true">← </span>
                    {hero.backLabel}
                  </button>
                  <div className="mt-6 flex items-center justify-between gap-3 border-b border-[var(--hairline)] pb-3">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
                      {demo.paneHeading}
                    </p>
                    <CategoryChip category={opened.category} />
                  </div>
                  <div className="mt-4">
                    <PaneSubject
                      sender={opened.sender}
                      subject={opened.subject}
                      personLabel={opened.personLabel ? { label: opened.personLabel, tone: personLabelTone } : undefined}
                    />
                  </div>
                  <p className="v-serif mt-4 text-[1.375rem] leading-snug">{opened.outcome}</p>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
      <p className="mt-4 text-[0.875rem] text-[#a7b4b9]">{demo.caption}</p>
    </div>
  )
}
