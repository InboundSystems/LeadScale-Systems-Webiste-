'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import type { MorningSummaryIllustration, SummaryAnnotation } from '@/content/types'
import MorningSummary from './MorningSummary'

// The morning summary with margin notes (homepage). Notes are not email text:
// they sit outside the email, in the sans face, each joined by a thin teal
// leader line to the email's edge at the line it explains, where a small
// numbered marker sits in the email's margin.
//
// Two layouts, one visible at a time (app/globals.css, "Summary notes"):
//   - margin notes beside the email: ≥1280px with JavaScript, positioned from
//     the markers' measured offsets;
//   - a numbered list under the email: narrower screens, and without
//     JavaScript.
// Offsets are measured relative to this wrapper, so the arrival transform
// (ArrivingEmail) does not disturb them.

const GUTTER = 56 // leader line width, px
const GAP = 14 // minimum space between notes, px

export default function AnnotatedSummary({
  summary,
  caption,
  annotations,
  notesLabel,
}: {
  summary: MorningSummaryIllustration
  caption: string
  annotations: SummaryAnnotation[]
  notesLabel: string
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const noteEls = useRef<(HTMLLIElement | null)[]>([])
  const [layout, setLayout] = useState<{ target: number; top: number }[] | null>(null)

  useLayoutEffect(() => {
    const root = wrap.current
    if (!root) return
    const measure = () => {
      const base = root.getBoundingClientRect().top
      let prevBottom = -Infinity
      const next = annotations.map((_, i) => {
        const marker = root.querySelector<HTMLElement>(`[data-note="${i + 1}"]`)
        const r = marker?.getBoundingClientRect()
        const target = r ? r.top - base + r.height / 2 : 0
        const height = noteEls.current[i]?.offsetHeight ?? 20
        // A note's first line centres on its target, unless the note above
        // is in the way.
        const top = Math.max(target - 10, prevBottom + GAP)
        prevBottom = top + height
        return { target, top }
      })
      setLayout((old) =>
        old && old.every((o, i) => o.target === next[i].target && o.top === next[i].top) ? old : next
      )
    }
    measure()
    document.fonts?.ready.then(measure)
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => observer.disconnect()
  }, [annotations])

  const height = wrap.current?.offsetHeight ?? 0

  return (
    <div ref={wrap} className="relative">
      <MorningSummary summary={summary} caption={caption} annotations={annotations} />

      {/* Margin notes, ≥1280px with JavaScript. */}
      <div className="summary-margin absolute left-full top-0 h-full w-[20rem]">
        {layout && (
          <svg
            aria-hidden="true"
            className="absolute left-0 top-0 overflow-visible"
            width={GUTTER}
            height={height}
            fill="none"
          >
            {layout.map(({ target, top }, i) => {
              const noteY = top + 10
              return (
                <g key={i} stroke="var(--teal)" strokeWidth={1}>
                  <circle cx={0} cy={target} r={2.5} fill="var(--teal)" stroke="none" />
                  <path d={`M0 ${target} H16 L${GUTTER - 16} ${noteY} H${GUTTER - 6}`} />
                </g>
              )
            })}
          </svg>
        )}
        <ol aria-label={notesLabel}>
          {annotations.map((a, i) => (
            <li
              key={a.match}
              ref={(el) => {
                noteEls.current[i] = el
              }}
              className="absolute flex gap-2 text-[0.875rem] leading-snug text-[var(--muted)]"
              style={{ left: GUTTER, top: layout?.[i]?.top ?? 0, width: `calc(100% - ${GUTTER}px)` }}
            >
              <span className="v-mono pt-[0.1em] text-[0.75rem] font-semibold text-[var(--teal)]">{i + 1}</span>
              <span>{a.note}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Numbered notes under the email: narrower screens, and no JavaScript. */}
      <ol aria-label={notesLabel} className="summary-list mt-5 flex flex-col gap-2 border-t border-[var(--hairline)] pt-4">
        {annotations.map((a, i) => (
          <li key={a.match} className="flex gap-3 text-[0.9375rem] leading-snug text-[var(--muted)]">
            <span
              aria-hidden="true"
              className="mt-[0.15em] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[var(--teal)] text-[0.6875rem] font-semibold leading-none text-white"
            >
              {i + 1}
            </span>
            <span>{a.note}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
