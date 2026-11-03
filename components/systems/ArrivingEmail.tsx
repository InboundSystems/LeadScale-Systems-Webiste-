'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// An email that "arrives": it slides up 24px and fades in over 450ms
// (ease-out, transform and opacity only), with a saffron unread dot and a
// "New" pill that fade 1.5s later.
//
// By default it arrives when 30% of it is in view. Pass `arrived` to control
// it instead (The Front Office's working day does, on its last step).
//
// The hidden starting state is CSS-only and applies under html.js
// (app/globals.css, "Arriving email"), so without JavaScript the email is
// simply there, and with prefers-reduced-motion it is shown immediately.
type State = 'pending' | 'arrived' | 'read'

const READ_AFTER = 1500

export default function ArrivingEmail({
  children,
  newLabel,
  arrived,
  className = '',
}: {
  children: ReactNode
  newLabel: string
  arrived?: boolean
  className?: string
}) {
  const [state, setState] = useState<State>('pending')
  const ref = useRef<HTMLDivElement>(null)

  // Observer mode.
  useEffect(() => {
    if (arrived !== undefined || !ref.current) return
    if (typeof IntersectionObserver === 'undefined') {
      setState('arrived')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        observer.disconnect()
        setState('arrived')
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [arrived])

  // Controlled mode. Two frames, so the hidden state paints before the
  // transition starts, even when it mounts already arrived.
  useEffect(() => {
    if (arrived === undefined) return
    if (!arrived) {
      setState('pending')
      return
    }
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setState('arrived'))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [arrived])

  // The unread marks fade once it has been seen for a moment.
  useEffect(() => {
    if (state !== 'arrived') return
    const timer = window.setTimeout(() => setState('read'), READ_AFTER)
    return () => window.clearTimeout(timer)
  }, [state])

  return (
    <div ref={ref} data-state={state} className={`arriving-email relative ${className}`}>
      <div aria-hidden="true" className="arriving-badge absolute right-4 top-3.5 z-10 items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--saffron)]" />
        <span className="rounded-full bg-[var(--saffron)] px-2 py-0.5 text-[0.6875rem] font-semibold leading-none text-[var(--ink)]">
          {newLabel}
        </span>
      </div>
      {children}
    </div>
  )
}
