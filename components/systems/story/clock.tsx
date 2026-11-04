'use client'

import { useEffect, useRef } from 'react'
import { useMotionValueEvent, useTransform, type MotionValue } from 'framer-motion'

// Story clocks. A time is minutes since midnight at the start of the story's
// first day; `days` names each day in turn (content/, e.g. Monday, Tuesday).
export function formatClock(minute: number, days: string[], withDay = true) {
  const m = Math.round(minute)
  const day = days[Math.min(days.length - 1, Math.max(0, Math.floor(m / 1440)))]
  const inDay = ((m % 1440) + 1440) % 1440
  const h24 = Math.floor(inDay / 60)
  const h = h24 % 12 === 0 ? 12 : h24 % 12
  const time = `${h}:${String(inDay % 60).padStart(2, '0')} ${h24 < 12 ? 'am' : 'pm'}`
  return withDay ? `${day}, ${time}` : time
}

/** The scroll position (0..1 over the beats) at which each beat becomes the
 *  active one (its top reaches the middle of the screen). */
export function beatStarts(count: number) {
  return Array.from({ length: count }, (_, i) => i / count)
}

/** The time on a stage. Live: it runs with scroll, from `start` to each
 *  beat's time in turn, written straight into the DOM (no re-render).
 *  Otherwise it shows the beat's own time. */
export function Readout({
  progress,
  start,
  minutes,
  days,
  step = 1,
  beat,
  className = '',
}: {
  progress?: MotionValue<number>
  start: number
  minutes: number[]
  days: string[]
  /** Round the running clock to this many minutes. */
  step?: number
  beat: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const staticMinute = beat < 0 ? start : minutes[Math.min(beat, minutes.length - 1)]
  if (!progress) return <span className={`tabular-nums ${className}`}>{formatClock(staticMinute, days)}</span>
  // Live: React renders a constant first value and never updates it; the
  // running time is written over it.
  return (
    <>
      <span ref={ref} className={`tabular-nums ${className}`}>
        {formatClock(start, days)}
      </span>
      <LiveText progress={progress} start={start} minutes={minutes} days={days} step={step} target={ref} />
    </>
  )
}

function LiveText({
  progress,
  start,
  minutes,
  days,
  step,
  target,
}: {
  progress: MotionValue<number>
  start: number
  minutes: number[]
  days: string[]
  step: number
  target: React.RefObject<HTMLSpanElement>
}) {
  // The clock reaches each beat's time as that beat becomes active, holds
  // it while the beat is read, then runs on towards the next one.
  const n = minutes.length
  const input = beatStarts(n).flatMap((p) => [p, p + 0.55 / n])
  const output = minutes.flatMap((m) => [m, m])
  const minute = useTransform(progress, input, output)
  const write = (v: number) => {
    if (target.current) target.current.textContent = formatClock(Math.round(v / step) * step, days)
  }
  useMotionValueEvent(minute, 'change', write)
  useEffect(() => write(minute.get()))
  return null
}
