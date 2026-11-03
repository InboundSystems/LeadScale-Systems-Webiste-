import type { HeroList as HeroListContent } from '@/content/types'

// The homepage hero picture: a Monday to-do list for a fictional service
// business (no sector, no name), on a paper card tilted like a note on a
// desk. Company level only: it names no system.
//
// Items run in two groups. The repetitive correspondence jobs are crossed
// off with a hand-drawn strike ("off your desk"); the ones that need
// judgement stay unticked ("needs a person"). Each group's Caveat note sits
// to its right behind a hand-drawn brace (under the group on small screens).
//
// Ink on the paper (#FFFCF5): 15.65; notes, strikes and ticks in darkened
// saffron #946827: 4.80. The strikes draw in once on load (CSS, staggered),
// static under reduced motion (app/globals.css, "Hand strike").
const PEN = '#946827'

function Brace() {
  return (
    <svg aria-hidden="true" viewBox="0 0 14 100" preserveAspectRatio="none" className="hidden h-full w-3.5 shrink-0 sm:block">
      <path
        d="M2 3 C 9 3, 7 22, 7 44 C 7 49, 11 50, 13 50 C 11 50, 7 51, 7 56 C 7 78, 9 97, 2 97"
        fill="none"
        stroke={PEN}
        strokeWidth={1.75}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function Box({ ticked }: { ticked: boolean }) {
  return (
    <span aria-hidden="true" className="relative mt-[0.2em] h-[1.05rem] w-[1.05rem] shrink-0 rounded-[3px] border-[1.5px] border-[#5c6b71]">
      {ticked && (
        <svg viewBox="0 0 20 20" className="absolute -left-[3px] -top-[5px] h-6 w-6 overflow-visible">
          <path d="M3.5 10.5 C 5 11.5, 6.5 13.5, 8 15.5 C 10.5 10, 13.5 5.5, 18 1.5" fill="none" stroke={PEN} strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="tilt-card rounded-[8px] border-t-[6px] border-[var(--saffron)] bg-[#fffcf5] px-6 pb-7 pt-6 text-[var(--ink)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:px-8 sm:pb-9 sm:pt-7">
        <p className="v-serif border-b border-[#e9e1cf] pb-3 text-[1.875rem] font-semibold leading-none">{list.title}</p>
        <div className="mt-2 flex flex-col">
          {runs.map((run) => (
            <div key={run.items[0]} className="flex flex-col gap-x-3 border-b border-[#e9e1cf] py-3 last:border-b-0 sm:flex-row sm:items-stretch">
              <ul className="flex min-w-0 flex-1 flex-col gap-2.5">
                {run.items.map((text) => {
                  const index = n++
                  return (
                    <li key={text} className="flex gap-3 text-[1.0625rem] leading-snug">
                      <Box ticked={run.done} />
                      <span>
                        {run.done ? (
                          <>
                            <span className="sr-only">{list.doneLabel} </span>
                            <span className="hand-strike" style={{ animationDelay: `${350 + index * 220}ms` }}>
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
              <div className="mt-2 flex items-center gap-2 sm:mt-0 sm:w-[8.25rem] sm:shrink-0">
                <Brace />
                <p aria-hidden={run.done ? true : undefined} className="v-hand text-[1.5rem] leading-[1.05]" style={{ color: PEN }}>
                  {run.done ? list.doneNote : list.personNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-[0.875rem] text-[#a7b4b9]">{list.caption}</figcaption>
    </figure>
  )
}
