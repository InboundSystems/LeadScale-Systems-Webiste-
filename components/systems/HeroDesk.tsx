import type { HeroDesk as HeroDeskContent } from '@/content/types'

// The company-level hero visual. Generic items at three stages across a desk,
// in HTML/CSS: no images, no icons. It names no task, so it implies no system.
// Static on purpose; the staircase of filled bars carries the movement.
export default function HeroDesk({ desk, className = '' }: { desk: HeroDeskContent; className?: string }) {
  // Static so Tailwind generates it: three stages.
  const cols = 'grid-cols-[4.25rem_repeat(3,minmax(0,1fr))]'
  return (
    <figure className={className}>
      <div
        role="group"
        aria-label={`${desk.label}: ${desk.title}`}
        className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] px-5 py-3">
          <p className="v-serif text-[1rem] font-semibold text-[var(--ink)]">{desk.title}</p>
          <p className="v-mono text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--muted)]">{desk.label}</p>
        </div>

        <div aria-hidden="true" className={`grid ${cols} gap-3 border-b border-[var(--hairline)] px-5 py-2.5`}>
          <span />
          {desk.stages.map((stage) => (
            <span key={stage} className="text-[0.75rem] leading-tight text-[var(--muted)]">
              {stage}
            </span>
          ))}
        </div>

        <ol>
          {desk.rows.map((row) => {
            const current = desk.stages[row.reached - 1]
            return (
              <li
                key={row.label}
                className={`grid ${cols} items-center gap-3 border-b border-[var(--hairline)] px-5 py-5 last:border-b-0`}
              >
                <span className="v-mono text-[0.8125rem] font-semibold text-[var(--ink)]">{row.label}</span>
                <span className="sr-only">{current}</span>
                {desk.stages.map((stage, i) => {
                  const step = i + 1
                  const tone =
                    step === row.reached
                      ? 'bg-[var(--accent)]'
                      : step < row.reached
                        ? 'bg-[var(--accent-light)]'
                        : 'bg-[var(--hairline)]'
                  return <span key={stage} aria-hidden="true" className={`block h-2 rounded-full ${tone}`} />
                })}
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption className="v-small mt-3">{desk.caption}</figcaption>
    </figure>
  )
}
