import type { HeroList as HeroListContent } from '@/content/types'

// The homepage hero picture: a Monday to-do list for a fictional service
// business (no sector, no name), on a white card tilted like a note on a
// desk. Company level only: it names no system.
//
// Items run in two groups. The repetitive correspondence jobs are crossed
// off ("off your desk"); the ones that need judgement stay unticked ("needs a
// person"). Each group's annotation label sits to its right behind a thin
// bracket (under the group on small screens).
//
// Ink on white: 16.68; annotations, ticks and strikes in violet #7C3AED
// (5.70 on white). The strikes draw in once on load (CSS, staggered), static
// under reduced motion (app/globals.css, "Strike").
function Bracket() {
  return (
    <span aria-hidden="true" className="hidden w-2.5 shrink-0 self-stretch border-y border-r border-[var(--violet)] sm:block" />
  )
}

function Box({ ticked }: { ticked: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative mt-[0.2em] flex h-[1.05rem] w-[1.05rem] shrink-0 items-center justify-center rounded-[4px] border ${
        ticked ? 'border-[var(--violet)] bg-[var(--violet)]' : 'border-[var(--frame-strong)] bg-[var(--surface)]'
      }`}
    >
      {ticked && (
        <svg viewBox="0 0 16 16" className="h-3 w-3">
          <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  )
}

export default function HeroList({ list, className = '' }: { list: HeroListContent; className?: string }) {
  // Consecutive runs of done / not-done items, each with its note.
  const runs: { done: boolean; items: string[] }[] = []
  for (const item of list.items) {
    const last = runs[runs.length - 1]
    if (last && last.done === item.done) last.items.push(item.text)
    else runs.push({ done: item.done, items: [item.text] })
  }
  let n = 0

  return (
    <figure className={className}>
      <div className="tilt-card relative overflow-hidden rounded-[10px] border border-[var(--frame)] bg-[var(--surface)] px-6 pb-7 pt-7 text-[var(--ink)] shadow-[0_24px_60px_rgba(2,6,23,0.45)] sm:px-8 sm:pb-8 sm:pt-8">
        {/* The thin blue-to-violet top edge. */}
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--violet)]" />
        <p className="v-serif border-b border-[var(--hairline)] pb-3 text-[1.5rem] font-semibold leading-none tracking-[-0.02em]">{list.title}</p>
        <div className="mt-2 flex flex-col">
          {runs.map((run) => (
            <div key={run.items[0]} className="flex flex-col gap-x-4 border-b border-[var(--hairline)] py-3.5 last:border-b-0 sm:flex-row sm:items-stretch">
              <ul className="flex min-w-0 flex-1 flex-col gap-2.5">
                {run.items.map((text) => {
                  const index = n++
                  return (
                    <li key={text} className="flex gap-3 text-[1rem] leading-snug">
                      <Box ticked={run.done} />
                      <span>
                        {run.done ? (
                          <>
                            <span className="sr-only">{list.doneLabel} </span>
                            <span className="strike" style={{ animationDelay: `${350 + index * 220}ms` }}>
                              {text}
                            </span>
                          </>
                        ) : (
                          text
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-2 flex items-center gap-2.5 sm:mt-0 sm:w-[8.5rem] sm:shrink-0">
                <Bracket />
                <p aria-hidden={run.done ? true : undefined} className="text-[0.8125rem] font-medium leading-snug text-[var(--violet)]">
                  {run.done ? list.doneNote : list.personNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-[0.875rem] text-[var(--on-dark-muted)]">{list.caption}</figcaption>
    </figure>
  )
}
