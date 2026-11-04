'use client'

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { useScroll, type MotionValue } from 'framer-motion'

// The scroll stories (the homepage's "One night" and "Every system runs the
// same way", and "A night at the practice" on /systems/front-office): a
// pinned stage that changes as the visitor scrolls through the beats.
//
// Native scrolling always: the stage is position: sticky, nothing traps the
// wheel or touch, and no scroll position is ever set except when a beat
// takes keyboard focus (it is brought into view, as focus would anyway).
//
//   - Each beat is real text in the DOM, in order, in an <ol>. Every beat is
//     focusable, so keyboard users can tab through the story. The stage is
//     aria-hidden: the beats are the accessible content.
//   - The active beat is the one crossing a thin band of the viewport
//     (IntersectionObserver): the middle on desktop, below the compact stage
//     on small screens. Continuous effects (time readouts, the night sky)
//     read a framer-motion scroll progress and animate transform and opacity
//     only, with no re-render per frame.
//   - 1024px and up: the beats on the left, the stage sticky on the right,
//     full height. Below 1024px: a compact sticky stage (at most 45% of the
//     screen) with the beats scrolling underneath it; the stage annotations
//     are left out and the beat text carries the words.
//   - prefers-reduced-motion: no sticky stage and no scroll-linked motion.
//     The stage shows its final state beside the intro, and each beat shows
//     its own static snapshot of the artifact.
//   - No JavaScript: the final state of the artifact, with every beat's text.
// The modes are CSS (app/globals.css, "Scroll stories"), so the server HTML
// is right before hydration.

export type StageMode = 'live' | 'snap' | 'static'
export type StageRender = (beat: number, mode: StageMode, progress?: MotionValue<number>) => ReactNode

export type StoryBeat = {
  key: string
  /** An id on the beat (an anchor target, e.g. for the folder rail). */
  id?: string
  /** Always visible: the time or step label, and anything substantial. */
  content: ReactNode
  /** The words that appear on the stage as annotations in live mode at
   *  1024px+. Elsewhere (small screens, reduced motion, no JavaScript) they
   *  are shown here. Always in the accessibility tree. */
  words?: ReactNode
}

function useActiveBeat(introRef: React.RefObject<HTMLElement>, beatRefs: React.MutableRefObject<(HTMLElement | null)[]>, count: number) {
  const [active, setActive] = useState(-1)
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setActive(count - 1)
      return
    }
    const wide = window.matchMedia('(min-width: 1024px)')
    let observer: IntersectionObserver | undefined
    const setup = () => {
      observer?.disconnect()
      // A thin band: the middle of the screen on desktop; on small screens,
      // the part of the screen below the compact stage.
      const rootMargin = wide.matches ? '-49% 0px -49% 0px' : '-74% 0px -24% 0px'
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const i = Number((entry.target as HTMLElement).dataset.beatIndex)
            setActive(Number.isNaN(i) ? -1 : i)
          })
        },
        { rootMargin }
      )
      if (introRef.current) observer.observe(introRef.current)
      beatRefs.current.forEach((el) => el && observer!.observe(el))
    }
    setup()
    wide.addEventListener('change', setup)
    return () => {
      wide.removeEventListener('change', setup)
      observer?.disconnect()
    }
  }, [introRef, beatRefs, count])
  return active
}

/** Scales its content down (never up) to fit the box it sits in. Transform
 *  only; measured with a ResizeObserver, not per frame. */
export function Fit({
  children,
  className = '',
  max = 1,
  gutter = false,
}: {
  children: ReactNode
  className?: string
  /** At 1024px and up, scale up to this (the artifact's size on a desktop
   *  stage, e.g. 540 / 416 for the notepad). Never above 1 below 1024px. */
  max?: number
  /** At 1024px and up, keep the story's annotation gutter (--gut) free on
   *  the left and set the artifact against the right edge. */
  gutter?: boolean
}) {
  const box = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [wide, setWide] = useState(false)
  useLayoutEffect(() => {
    const b = box.current
    const c = inner.current
    if (!b || !c || typeof ResizeObserver === 'undefined') return
    const mq = window.matchMedia('(min-width: 1024px)')
    const measure = () => {
      const isWide = mq.matches
      const gut = isWide && gutter ? parseFloat(getComputedStyle(b).getPropertyValue('--gut')) || 0 : 0
      const s = Math.min(
        isWide ? max : 1,
        b.clientHeight / Math.max(1, c.offsetHeight),
        (b.clientWidth - gut) / Math.max(1, c.offsetWidth)
      )
      setWide(isWide)
      setScale(Number.isFinite(s) && s > 0 ? +s.toFixed(3) : 1)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(b)
    ro.observe(c)
    mq.addEventListener('change', measure)
    return () => {
      ro.disconnect()
      mq.removeEventListener('change', measure)
    }
  }, [max, gutter])
  const right = wide && gutter
  // --fit lets annotations inside the scaled artifact keep a constant
  // on-screen size (app/globals.css, "Annotations").
  return (
    <div ref={box} className={`flex min-h-0 items-center ${right ? 'justify-end' : 'justify-center'} ${className}`}>
      <div
        ref={inner}
        className="w-max shrink-0"
        style={{ transform: scale !== 1 ? `scale(${scale})` : undefined, transformOrigin: right ? 'right center' : 'center', ['--fit' as string]: scale }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Story({
  label,
  intro,
  beats,
  stage,
  outro,
  backdrop,
  className = '',
  gridClassName = '',
  style,
  beatClassName = '',
  stageClassName = '',
  finalBeat,
  introSpan = false,
  introClassName = '',
}: {
  /** Accessible name of the list of beats. */
  label: string
  intro?: ReactNode
  beats: StoryBeat[]
  stage: StageRender
  outro?: ReactNode
  /** A full-screen layer behind the story (the night sky), given the
   *  story's scroll progress. */
  backdrop?: (progress: MotionValue<number>) => ReactNode
  className?: string
  /** Extra classes on the grid (e.g. room for the folder rail). */
  gridClassName?: string
  /** Sets --story-top (the sticky offset: the header, plus the folder strip
   *  where it shows) and anything else the story's CSS reads. */
  style?: CSSProperties
  beatClassName?: string
  stageClassName?: string
  /** The beat the static (no-JS, reduced motion) stage shows. */
  finalBeat?: number
  /** The intro spans both columns (a section heading); the stage starts
   *  beside the first beat. Otherwise the stage sits beside the intro (the
   *  homepage hero). */
  introSpan?: boolean
  introClassName?: string
}) {
  const introRef = useRef<HTMLDivElement>(null)
  const beatsRef = useRef<HTMLOListElement>(null)
  const beatRefs = useRef<(HTMLElement | null)[]>([])
  const active = useActiveBeat(introRef, beatRefs, beats.length)
  const { scrollYProgress } = useScroll({ target: beatsRef, offset: ['start center', 'end center'] })
  const last = finalBeat ?? beats.length - 1

  // A beat that takes keyboard focus is brought to the active band.
  function onFocus(el: HTMLElement) {
    if (!window.matchMedia('(min-width: 1024px)').matches) {
      const stageEl = el.closest('.story')?.querySelector<HTMLElement>('.story-live')
      const below = stageEl ? stageEl.getBoundingClientRect().bottom : 0
      const y = window.scrollY + el.getBoundingClientRect().top - below - 12
      window.scrollTo({ top: y })
      return
    }
    el.scrollIntoView({ block: 'center' })
  }

  return (
    <div className={`story relative isolate overflow-x-clip ${className}`} style={style}>
      {backdrop && (
        <div aria-hidden="true" className="story-backdrop pointer-events-none sticky top-0 -z-10 -mb-[100svh] h-[100svh] overflow-clip">
          {backdrop(scrollYProgress)}
        </div>
      )}
      <div className={`story-grid mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-x-8 lg:px-8 xl:grid-cols-[19rem_minmax(0,1fr)] ${gridClassName}`}>
        {intro && (
          <div ref={introRef} data-beat-index="-1" className={`relative z-20 lg:col-start-1 lg:row-start-1 ${introSpan ? 'lg:col-span-2' : ''} ${introClassName}`}>
            {intro}
          </div>
        )}
        <div
          aria-hidden="true"
          className={`story-live sticky top-[var(--story-top)] z-10 h-[45svh] self-start lg:col-start-2 lg:h-[calc(100svh-var(--story-top))] ${introSpan ? 'lg:row-start-2' : 'lg:row-span-2 lg:row-start-1'} ${stageClassName}`}
        >
          {stage(active, 'live', scrollYProgress)}
        </div>
        <div aria-hidden="true" className={`story-static lg:col-start-2 lg:self-center ${introSpan ? 'lg:row-start-2 lg:self-start lg:pt-16' : 'lg:row-start-1'}`}>
          {stage(last, 'static')}
        </div>
        {/* With the intro above both columns, the stage starts beside the first
            beat: a lead-in lets it reach its pinned place before that beat
            becomes the active one. */}
        <ol ref={beatsRef} aria-label={label} className={`story-beats lg:col-start-1 lg:row-start-2 ${introSpan ? 'story-lead' : ''}`}>
          {beats.map((beat, i) => (
            <li
              key={beat.key}
              id={beat.id}
              ref={(el) => {
                beatRefs.current[i] = el
              }}
              data-beat-index={i}
              data-active={active === i ? 'true' : undefined}
              tabIndex={0}
              onFocus={(e) => e.target === e.currentTarget && onFocus(e.currentTarget)}
              className={`story-beat scroll-mt-28 ${beatClassName}`}
            >
              <div className="story-beat-body">
                {beat.content}
                {beat.words && <div className="story-words">{beat.words}</div>}
              </div>
              <div aria-hidden="true" className="story-snap mt-6">
                {stage(i, 'snap')}
              </div>
            </li>
          ))}
        </ol>
      </div>
      {outro}
    </div>
  )
}
