'use client'

import { useEffect, useRef, useState } from 'react'
import type { InboxDemo } from '@/content/types'
import CategoryChip from './CategoryChip'
import { outlookFace } from './InboxParts'
import Tilt from './Tilt'
import { TextLink } from './ui'

// The Front Office's compact preview on the homepage's Systems section
// (night story, 9 November 2026; it replaces the full inbox demo, which now
// lives in "A night at the practice" on /systems/front-office). A few rows
// of the same fictional Inbox mark themselves with their categories, one
// after another, slowly, then start again; only while the preview is in
// view. Under reduced motion, and without JavaScript, every row is simply
// marked. A lit screen.
const ROWS = 5
const STEP = 1100
const HOLD = 3200

export default function InboxPreview({ demo, href, linkLabel }: { demo: InboxDemo; href: string; linkLabel: string }) {
  const rows = demo.emails.slice(0, ROWS)
  const [marked, setMarked] = useState(rows.length)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !ref.current) return
    let timer: number | undefined
    let n = 0
    const tick = () => {
      n = n >= rows.length ? 0 : n + 1
      setMarked(n)
      timer = window.setTimeout(tick, n >= rows.length ? HOLD : n === 0 ? 700 : STEP)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(timer)
        if (entry.isIntersecting) {
          n = rows.length
          tick()
        } else setMarked(rows.length)
      },
      { threshold: 0.35 }
    )
    observer.observe(ref.current)
    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [rows.length])

  return (
    <div ref={ref}>
      <Tilt>
        <div
          aria-hidden="true"
          className="lit lit-screen overflow-hidden rounded-[8px] border border-t-[3px] border-[var(--frame)] border-t-[var(--primary)] bg-[var(--surface)] text-[var(--ink)]"
          style={outlookFace}
        >
          <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] bg-[var(--chrome)] px-4 py-1.5">
            <p className="truncate text-[0.8125rem] text-[var(--muted)]">
              {demo.mailboxName} › <span className="font-semibold text-[var(--ink)]">{demo.folderName}</span>
            </p>
            <p className="shrink-0 text-[0.75rem] tabular-nums text-[var(--muted)]">{demo.moment}</p>
          </div>
          <ul>
            {rows.map((email, i) => (
              <li
                key={email.id}
                className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 border-b border-[var(--hairline)] py-[7px] pl-4 pr-3 last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)_auto]"
              >
                {email.unread && <span className="unread-dot top-[15px]" />}
                <span className={`truncate text-[0.8125rem] ${email.unread ? 'font-semibold' : ''}`}>{email.sender}</span>
                <span className="hidden truncate text-[0.8125rem] text-[var(--muted)] sm:block">{email.subject}</span>
                <span className={`stage-fade flex justify-end ${i < marked ? '' : 'stage-off translate-x-1'}`}>
                  <CategoryChip category={email.category} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
      <p className="v-small mt-4">{demo.caption}</p>
      <p className="mt-3">
        <TextLink link={{ label: linkLabel, href }} />
      </p>
    </div>
  )
}
