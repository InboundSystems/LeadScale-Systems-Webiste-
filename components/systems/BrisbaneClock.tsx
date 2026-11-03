'use client'

import { useEffect, useState } from 'react'

// The footer's local clock: "Brisbane, 8:42 am". Australia/Brisbane is AEST
// all year (no daylight saving). No seconds; it updates on the minute.
// Server-rendered (and without JavaScript) it is just "Brisbane".
const format = new Intl.DateTimeFormat('en-AU', {
  timeZone: 'Australia/Brisbane',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
})

function now() {
  // en-AU gives "8:42 am"; normalise any narrow no-break space.
  return format.format(new Date()).replace(/\u202f/g, ' ').toLowerCase()
}

export default function BrisbaneClock({ place }: { place: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(now())
    let interval: number | undefined
    // Line up with the start of the next minute, then tick each minute.
    const first = window.setTimeout(() => {
      setTime(now())
      interval = window.setInterval(() => setTime(now()), 60_000)
    }, 60_000 - (Date.now() % 60_000) + 50)
    return () => {
      window.clearTimeout(first)
      window.clearInterval(interval)
    }
  }, [])

  return (
    <span>
      {place}
      {time && <span className="tabular-nums">, {time}</span>}
    </span>
  )
}
