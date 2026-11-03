'use client'

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { DemoEmail, InboxDemo } from '@/content/types'
import CategoryChip, { personLabelTone } from './CategoryChip'
import { InboxFrame, PaneSubject, ReadingPane } from './InboxParts'

// The homepage hero demo: one Monday-morning Inbox, before and after The Front
// Office marks it.
//
// The view is driven by CSS from data attributes (app/globals.css, "Inbox
// demo"), not by rendering different markup, so three states share one DOM:
//   - no JavaScript: the server-rendered After state stands;
//   - JavaScript, before hydration: the inline script in the flagship layout
//     has put "js" on <html>, and CSS shows the Before layout (no flash);
//   - hydrated: React owns data-view, and plays Before → After once when the
//     demo is 40% in view, 700ms later. Rows glide with FLIP (520ms ease-out,
//     transform and opacity only). prefers-reduced-motion skips straight to
//     After with no movement.
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

export default function HeroInbox({ demo, className = '' }: { demo: InboxDemo; className?: string }) {
  const [view, setView] = useState<View>('after')
  const [autoplay, setAutoplay] = useState<Autoplay>('pending')
  const [hovered, setHovered] = useState<string | null>(null)

  // One DOM order, the After order: categories in the practice's order,
  // newest first within each. Before is the same rows reordered by CSS.
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
  const firstAfter = items.find((i): i is Extract<Item, { kind: 'email' }> => i.kind === 'email')?.email
  const [selectedId, setSelectedId] = useState<string | undefined>(firstAfter?.id)
  const selected = demo.emails.find((e) => e.id === selectedId)

  // The counter under the panel. Before: nothing marked yet. After: what
  // the system did. Nothing is ever moved out of the Inbox.
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

  const figureRef = useRef<HTMLElement>(null)
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
    if (animate && !reducedMotion()) capture()
    viewRef.current = next
    setHovered(null)
    setView(next)
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

  // Play once, when 40% of the demo is in view.
  useEffect(() => {
    if (autoplay !== 'waiting' || !figureRef.current) return
    // The 700ms wait restarts if the demo leaves view before it ends, so it
    // only ever plays where the reader can see it.
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
    observer.observe(figureRef.current)
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
      figureRef.current?.querySelectorAll<HTMLElement>('[data-mark]').forEach((mark) =>
        mark.animate?.([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: DURATION - 160,
          easing: EASE_OUT,
          fill: 'backwards',
        })
      )
    }
  }, [view])

  function choose(next: View) {
    timers.current.forEach((t) => window.clearTimeout(t))
    setAutoplay('done')
    go(next, true)
  }

  function replay() {
    timers.current.forEach((t) => window.clearTimeout(t))
    setAutoplay('done')
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
    <figure ref={figureRef} data-view={view} data-autoplay={autoplay} className={`inbox-demo ${className}`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="v-mono text-[0.8125rem] font-semibold tabular-nums text-[var(--ink)]">{demo.moment}</p>
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
                className="inbox-demo-toggle rounded-[3px] px-3.5 py-1.5 text-[0.8125rem] font-semibold leading-none"
              >
                {v === 'before' ? demo.beforeLabel : demo.afterLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      <InboxFrame
        toolbar={demo.toolbar}
        mailboxName={demo.mailboxName}
        folderName={demo.folderName}
        right={
          <>
            <span data-after-only>{demo.arrangedByCategory}</span>
            <span data-before-only>{demo.arrangedByDate}</span>
          </>
        }
      >

        <ul data-list aria-label={`${demo.folderName}, ${isAfter ? demo.arrangedByCategory : demo.arrangedByDate}`}>
          {items.map((item) => {
            if (item.kind === 'group') {
              const category = demo.categories.find((c) => c.label === item.label)!
              const dim = hovered !== null && hovered !== item.label
              return (
                <li
                  key={item.key}
                  ref={register(item.key)}
                  data-group
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
            const weight = email.unread ? 'font-semibold text-[var(--ink)]' : 'font-normal text-[var(--ink)]'
            return (
              <li
                key={item.key}
                ref={register(item.key)}
                data-row
                data-selected={email.id === selectedId}
                style={{ ['--before-order' as string]: item.beforeOrder }}
                className={`inbox-row relative border-b border-[var(--hairline)] transition-opacity duration-150 ease-out ${dim ? 'opacity-40' : ''}`}
              >
                {email.unread && <span aria-hidden="true" className="unread-dot top-[14px]" />}
                <button
                  type="button"
                  tabIndex={isAfter ? 0 : -1}
                  aria-pressed={isAfter ? email.id === selectedId : undefined}
                  onClick={() => isAfter && setSelectedId(email.id)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 py-[7px] pl-4 pr-3 text-left sm:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)_auto_4.5rem]"
                >
                  <span className={`truncate text-[0.8125rem] ${weight}`}>
                    {email.unread && <span className="sr-only">Unread. </span>}
                    {email.sender}
                  </span>
                  <span className="text-right text-[0.6875rem] tabular-nums text-[var(--muted)] sm:order-last">
                    {email.received}
                  </span>
                  <span className={`truncate text-[0.8125rem] ${email.unread ? 'font-semibold text-[var(--ink)]' : 'text-[var(--muted)]'}`}>
                    {email.subject}
                  </span>
                  <span className="flex min-h-[1.25rem] justify-end gap-1">
                    {email.personLabel && (
                      <span data-mark className="hidden md:inline-flex">
                        <CategoryChip category={{ label: email.personLabel, tone: personLabelTone }} />
                      </span>
                    )}
                    <span data-mark className="inline-flex">
                      <CategoryChip category={email.category} onHover={setHovered} />
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <ReadingPane
          heading={demo.paneHeading}
          category={
            selected && (
              <span data-after-only>
                <CategoryChip category={selected.category} />
              </span>
            )
          }
        >
          <div data-after-only>
            {selected && (
              <>
                <PaneSubject
                  sender={selected.sender}
                  subject={selected.subject}
                  personLabel={selected.personLabel ? { label: selected.personLabel, tone: personLabelTone } : undefined}
                />
                <p className="mt-1 text-[0.875rem] leading-snug text-[var(--ink)]">{selected.outcome}</p>
              </>
            )}
          </div>
          <p data-before-only className="text-[0.875rem] leading-snug text-[var(--muted)]">
            {demo.beforeHint}
          </p>
        </ReadingPane>
      </InboxFrame>

      <p aria-live="polite" className="v-mono mt-3 text-[0.75rem] tabular-nums text-[var(--ink)]">
        <span data-after-only>{counter(true)}</span>
        <span data-before-only>{counter(false)}</span>
      </p>
      <figcaption className="v-small mt-1.5">{demo.caption}</figcaption>
    </figure>
  )
}
