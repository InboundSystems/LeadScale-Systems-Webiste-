'use client'

import { useLayoutEffect, useState, type RefObject } from 'react'
import type { InboxDemo } from '@/content/types'
import HandArrow from './HandArrow'

// Handwritten notes on The Front Office's inbox, in Caveat and saffron
// darkened to #8A5E1F (5.01 on the sky tint of the Systems section).
//   - 1280px and up, with JavaScript: in the gutter left of the window, each
//     with a hand-drawn arrow to what it explains (the 00 Unclear group, the
//     For Dr Smith label, the counter). They fade in one by one, 200ms apart,
//     once the sort finishes (`shown`); reduced motion shows them at once.
//   - Below that, and without JavaScript: a short handwritten list under the
//     window (app/globals.css, "Hero notes").
// Positions are measured from the targets, relative to the window's wrapper,
// and re-measured on resize and when the window's tilt changes.

const SAFFRON = '#8a5e1f'
const SELECTOR = {
  unclear: '[data-group="00 Unclear"]',
  label: '[data-person-label]',
  counter: '[data-counter]',
} as const

type Spot = { noteTop: number; targetY: number; targetX: number; missing: boolean }

export function HeroNotesMargin({
  notes,
  label,
  shown,
  rootRef,
  version,
}: {
  notes: InboxDemo['notes']
  label: string
  shown: number
  rootRef: RefObject<HTMLDivElement>
  /** Changes when the list's layout changes (a correction), to re-measure. */
  version: unknown
}) {
  const [spots, setSpots] = useState<Spot[] | null>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => {
      const base = root.getBoundingClientRect()
      let prevBottom = -Infinity
      const next = notes.map((note) => {
        const el = root.querySelector<HTMLElement>(SELECTOR[note.target])
        const r = el?.getBoundingClientRect()
        const targetY = r ? r.top - base.top + r.height / 2 : 0
        // The arrow lands just inside the window's left edge, beside the target.
        const targetX = r ? Math.max(6, Math.min(r.left - base.left - 4, 24)) : 6
        const missing = !r || r.height === 0
        const noteTop = Math.max(targetY - 22, prevBottom + 18)
        if (!missing) prevBottom = noteTop + 52
        return { noteTop, targetY, targetX, missing }
      })
      setSpots((old) =>
        old && old.every((o, i) => Math.abs(o.noteTop - next[i].noteTop) < 0.5 && Math.abs(o.targetY - next[i].targetY) < 0.5)
          ? old
          : next
      )
    }
    measure()
    document.fonts?.ready.then(measure)
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    const win = root.querySelector('.inbox-window')
    win?.addEventListener('transitionend', measure)
    return () => {
      observer.disconnect()
      win?.removeEventListener('transitionend', measure)
    }
  }, [notes, rootRef, shown, version])

  return (
    <div className="hero-notes-margin pointer-events-none absolute inset-0">
      {spots && (
        <svg aria-hidden="true" className="absolute left-0 top-0 h-full w-full overflow-visible">
          {spots.map((s, i) => (
            <g key={i} className="transition-opacity duration-300 ease-out" style={{ opacity: shown > i && !s.missing ? 1 : 0 }}>
              <HandArrow x1={-18} y1={s.noteTop + 16} x2={s.targetX} y2={s.targetY} colour={SAFFRON} bow={i % 2 ? -12 : 12} />
            </g>
          ))}
        </svg>
      )}
      <ul aria-label={label} className="absolute right-full top-0 mr-6 w-[9.5rem]">
        {notes.map((note, i) => (
          <li
            key={note.target}
            className="v-hand absolute right-0 w-full text-right text-[1.375rem] leading-[1.05] text-[#8a5e1f] transition-opacity duration-300 ease-out"
            style={{ top: spots?.[i]?.noteTop ?? 0, opacity: spots && shown > i && !spots[i].missing ? 1 : 0 }}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Below 1280px, and without JavaScript: the notes as a short list. */
export function HeroNotesList({ notes, label }: { notes: InboxDemo['notes']; label: string }) {
  return (
    <ul aria-label={label} className="hero-notes-list mt-5 flex flex-col gap-1">
      {notes.map((note) => (
        <li key={note.target} className="v-hand text-[1.375rem] leading-tight text-[#8a5e1f]">
          <span aria-hidden="true">↳ </span>
          {note.text}
        </li>
      ))}
    </ul>
  )
}
