'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import type { MorningSummaryIllustration, SummaryAnnotation } from '@/content/types'
import HandArrow from './HandArrow'
import MorningSummary from './MorningSummary'

// The morning summary with handwritten margin notes (homepage). Notes are not
// email text: they sit outside the email, in Caveat, in the darkened saffron
// #946827 (4.69 on the ground, 4.92 on white), each with a hand-drawn arrow
// to the line it explains, where a small numbered marker sits in the email's
// margin.
//
// Two layouts, one visible at a time (app/globals.css, "Summary notes"):
//   - margin notes beside the email: 1280px+ with JavaScript, positioned
//     from the markers' measured offsets;
//   - a numbered handwritten list under the email: narrower screens, and
//     without JavaScript.
// Offsets are measured relative to this wrapper, so the arrival transform
// (ArrivingEmail) does not disturb them.

const GUTTER = 64 // room for the arrows, px
const GAP = 12 // minimum space between notes, px
const INK = '#946827'

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
        const height = noteEls.current[i]?.offsetHeight ?? 24
        const top = Math.max(target - 14, prevBottom + GAP)
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

  return (
    <div ref={wrap} className="relative">
      <MorningSummary summary={summary} caption={caption} annotations={annotations} />

      {/* Margin notes, 1280px+ with JavaScript. */}
      <div className="summary-margin absolute left-full top-0 h-full w-[16rem]">
        {layout && (
          <svg aria-hidden="true" className="absolute left-0 top-0 h-full w-full overflow-visible">
            {layout.map(({ target, top }, i) => (
              <HandArrow key={i} x1={GUTTER - 8} y1={top + 14} x2={6} y2={target} colour={INK} bow={i % 2 ? -10 : 10} />
            ))}
          </svg>
        )}
        <ol aria-label={notesLabel}>
          {annotations.map((a, i) => (
            <li
              key={a.match}
              ref={(el) => {
                noteEls.current[i] = el
              }}
              className="v-hand absolute flex gap-1.5 text-[1.375rem] leading-[1.05]"
              style={{ left: GUTTER, top: layout?.[i]?.top ?? 0, width: `calc(100% - ${GUTTER}px)`, color: INK }}
            >
              <span aria-hidden="true">{i + 1}</span>
              <span>{a.note}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Numbered handwritten notes under the email: narrower screens, and no JavaScript. */}
      <ol aria-label={notesLabel} className="summary-list mt-5 flex flex-col gap-1.5 border-t border-[var(--hairline)] pt-4">
        {annotations.map((a, i) => (
          <li key={a.match} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[var(--teal)] text-[0.6875rem] font-semibold leading-none text-white"
            >
              {i + 1}
            </span>
            <span className="v-hand text-[1.375rem] leading-tight" style={{ color: INK }}>
              {a.note}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
