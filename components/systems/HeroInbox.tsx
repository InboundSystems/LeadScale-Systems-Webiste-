'use client'

import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { DemoEmail, InboxDemo } from '@/content/types'
import CategoryChip, { personLabelTone } from './CategoryChip'

// The homepage hero demo: one Monday-morning Inbox, before and after The Front
// Office marks it. Server-rendered in the after state, so it reads correctly
// without JavaScript. The switch animates once with FLIP (rows glide from
// where they were to their category group, 500ms ease-out); with
// prefers-reduced-motion it switches instantly. Every sender is fictional
// (content/systems.ts).

type View = 'before' | 'after'

const outlookFace = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }
const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)'
const DURATION = 520

type Item = { kind: 'group'; key: string; label: string; count: number; email?: undefined } | { kind: 'email'; key: string; email: DemoEmail }

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function HeroInbox({ demo, className = '' }: { demo: InboxDemo; className?: string }) {
  const [view, setView] = useState<View>('after')
  const [hovered, setHovered] = useState<string | null>(null)

  // The after order: categories in the practice's order, newest first within each.
  const afterItems = useMemo<Item[]>(
    () =>
      demo.categories.flatMap((category) => {
        const emails = demo.emails.filter((e) => e.category.label === category.label)
        if (emails.length === 0) return []
        return [
          { kind: 'group' as const, key: `group-${category.label}`, label: category.label, count: emails.length },
          ...emails.map((email) => ({ kind: 'email' as const, key: email.id, email })),
        ]
      }),
    [demo]
  )
  const beforeItems = useMemo<Item[]>(
    () => demo.emails.map((email) => ({ kind: 'email' as const, key: email.id, email })),
    [demo]
  )
  const items = view === 'after' ? afterItems : beforeItems
  const firstAfter = afterItems.find((i) => i.kind === 'email')?.email
  const [selectedId, setSelectedId] = useState<string | undefined>(firstAfter?.id)
  const selected = demo.emails.find((e) => e.id === selectedId)

  const rowEls = useRef(new Map<string, HTMLElement>())
  const lastRects = useRef<Map<string, DOMRect> | null>(null)

  function switchTo(next: View) {
    if (next === view) return
    if (!prefersReducedMotion()) {
      const rects = new Map<string, DOMRect>()
      rowEls.current.forEach((el, key) => rects.set(key, el.getBoundingClientRect()))
      lastRects.current = rects
    }
    setHovered(null)
    setView(next)
  }

  // FLIP: after the DOM has the new order, play each row from its old place.
  useLayoutEffect(() => {
    const previous = lastRects.current
    if (!previous) return
    lastRects.current = null
    rowEls.current.forEach((el, key) => {
      const was = previous.get(key)
      if (!was) {
        if (typeof el.animate === 'function') {
          el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DURATION * 0.6, delay: DURATION * 0.4, easing: EASE_OUT, fill: 'backwards' })
        }
        return
      }
      const now = el.getBoundingClientRect()
      const dy = was.top - now.top
      if (Math.abs(dy) < 1 || typeof el.animate !== 'function') return
      el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], {
        duration: DURATION,
        easing: EASE_OUT,
      })
    })
    if (view === 'after') {
      rowEls.current.forEach((el) => {
        el.querySelectorAll<HTMLElement>('[data-mark]').forEach((mark) =>
          mark.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: DURATION - 120, easing: EASE_OUT, fill: 'backwards' })
        )
      })
    }
  }, [view])

  const setRow = (key: string) => (el: HTMLElement | null) => {
    if (el) rowEls.current.set(key, el)
    else rowEls.current.delete(key)
  }

  const isAfter = view === 'after'

  return (
    <figure className={className}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="v-mono text-[0.8125rem] font-semibold tabular-nums text-[var(--ink)]">{demo.moment}</p>
        <div
          role="group"
          aria-label={`${demo.moment}: ${demo.beforeLabel} or ${demo.afterLabel}`}
          className="inline-flex rounded-[var(--radius-btn)] border border-[var(--hairline)] bg-[var(--surface)] p-0.5"
        >
          {(['before', 'after'] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => switchTo(v)}
              className={`rounded-[3px] px-3.5 py-1.5 text-[0.8125rem] font-semibold leading-none transition-colors duration-150 ${
                view === v ? 'bg-[var(--accent)] text-white' : 'text-[var(--muted)] hover:bg-[var(--accent-tint)] hover:text-[var(--ink)]'
              }`}
            >
              {v === 'before' ? demo.beforeLabel : demo.afterLabel}
            </button>
          ))}
        </div>
      </div>

      <div
        className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)] shadow-[0_1px_2px_rgba(22,35,43,0.04),0_8px_24px_-12px_rgba(22,35,43,0.12)]"
        style={outlookFace}
      >
        <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] bg-[#f3f6f6] px-4 py-2">
          <p className="truncate text-[0.8125rem] text-[var(--muted)]">
            {demo.mailboxName} <span aria-hidden="true">›</span>{' '}
            <span className="font-semibold text-[var(--ink)]">{demo.folderName}</span>
          </p>
          <p className="shrink-0 text-[0.75rem] text-[var(--muted)]">
            {isAfter ? demo.arrangedByCategory : demo.arrangedByDate}
          </p>
        </div>

        <ul aria-label={`${demo.folderName}, ${isAfter ? demo.arrangedByCategory : demo.arrangedByDate}`}>
          {items.map((item) => {
            if (item.kind === 'group') {
              const category = demo.categories.find((c) => c.label === item.label)!
              const dim = hovered !== null && hovered !== item.label
              return (
                <li
                  key={item.key}
                  ref={setRow(item.key)}
                  className={`flex items-center gap-2 border-b border-[var(--hairline)] bg-[#fafbfb] px-4 py-1 transition-opacity duration-150 ${dim ? 'opacity-40' : ''}`}
                >
                  <span aria-hidden="true" className="text-[0.5625rem] text-[var(--muted)]">
                    ▼
                  </span>
                  <CategoryChip category={category} onHover={setHovered} className="cursor-default" />
                  <span className="text-[0.75rem] tabular-nums text-[var(--muted)]">
                    {item.count} {item.count === 1 ? 'item' : 'items'}
                  </span>
                </li>
              )
            }
            const { email } = item
            const isSelected = isAfter && email.id === selectedId
            const dim = isAfter && hovered !== null && hovered !== email.category.label
            const weight = email.unread ? 'font-semibold text-[var(--ink)]' : 'font-normal text-[var(--ink)]'
            return (
              <li
                key={item.key}
                ref={setRow(item.key)}
                className={`relative border-b border-[var(--hairline)] last:border-b-0 transition-opacity duration-150 ${dim ? 'opacity-40' : ''}`}
              >
                {email.unread && <span aria-hidden="true" className="absolute inset-y-0 left-0 z-10 w-[3px] bg-[var(--accent)]" />}
                <button
                  type="button"
                  aria-pressed={isAfter ? isSelected : undefined}
                  onClick={() => isAfter && setSelectedId(email.id)}
                  className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 py-[7px] pl-4 pr-3 text-left transition-colors duration-100 sm:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)_auto_4.5rem] sm:gap-x-3 ${
                    isSelected ? 'bg-[var(--accent-tint)]' : isAfter ? 'hover:bg-[#f3f6f6]' : 'cursor-default'
                  }`}
                >
                  <span className={`truncate text-[0.8125rem] ${weight}`}>
                    {email.unread && <span className="sr-only">Unread. </span>}
                    {email.sender}
                  </span>
                  <span className="text-right text-[0.6875rem] tabular-nums text-[var(--muted)] sm:order-last">{email.received}</span>
                  <span
                    className={`truncate text-[0.8125rem] ${email.unread ? 'text-[var(--ink)]' : 'text-[var(--muted)]'}`}
                  >
                    {email.subject}
                  </span>
                  <span className="flex min-h-[1.25rem] justify-end gap-1">
                    {isAfter && (
                      <>
                        {email.personLabel && (
                          <span data-mark className="hidden md:inline-flex">
                            <CategoryChip category={{ label: email.personLabel, tone: personLabelTone }} />
                          </span>
                        )}
                        <span data-mark className="inline-flex">
                          <CategoryChip category={email.category} onHover={setHovered} />
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div aria-live="polite" className="border-t border-[var(--hairline)] bg-[#fafbfb] px-4 py-3.5">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">{demo.paneHeading}</p>
          {isAfter && selected ? (
            <div className="mt-1.5">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-[var(--ink)]">
                <span className="font-semibold">{selected.sender}</span>
                <span className="text-[var(--muted)]">{selected.subject}</span>
                {selected.personLabel && (
                  <CategoryChip category={{ label: selected.personLabel, tone: personLabelTone }} />
                )}
              </p>
              <p className="mt-1 text-[0.875rem] leading-snug text-[var(--ink)]">{selected.outcome}</p>
            </div>
          ) : (
            <p className="mt-1.5 text-[0.875rem] leading-snug text-[var(--muted)]">{demo.beforeHint}</p>
          )}
        </div>
      </div>
      <figcaption className="v-small mt-3">{demo.caption}</figcaption>
    </figure>
  )
}
