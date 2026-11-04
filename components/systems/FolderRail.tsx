'use client'

import { useEffect, useState } from 'react'
import type { CategoryTone } from '@/content/types'
import { CATEGORY_TONES } from '@/components/brand/categories'
import EyeDot from './EyeDot'

// The homepage's folders: one per section, with its category colour square
// and an item count, like an Outlook folder pane.
//   - 1280px and up: a slim sticky rail in the left gutter (FolderRail).
//   - below that: a sticky horizontal tab strip under the header (FolderStrip).
// The folder for the section in view is highlighted (IntersectionObserver on
// the sections' ids). Each folder is an ordinary in-page link, so it works
// with the keyboard and without JavaScript; aria-current marks the active one.
export type Folder = { id: string; label: string; tone: CategoryTone; count: number }

function useActive(folders: Folder[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const sections = folders
      .map((f) => document.getElementById(f.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return
    // A section is "in view" when it crosses a band 35-45% down the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting)
        if (hit.length > 0) setActive(hit[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [folders])
  return active
}

/** A colour square (hollow for the outline tone), on the dark page. */
export function ToneSquare({ tone, className = '' }: { tone: CategoryTone; className?: string }) {
  const t = CATEGORY_TONES[tone]
  return (
    <span
      aria-hidden="true"
      className={`h-2.5 w-2.5 shrink-0 rounded-[1px] ${className}`}
      style={t.hollow ? { border: `1.5px solid ${t.dark.swatch}` } : { backgroundColor: t.dark.swatch }}
    />
  )
}

/** A colour square, or the owl's eye for the current folder. */
function Square({ tone, current = false }: { tone: CategoryTone; current?: boolean }) {
  if (current) return <EyeDot colour={CATEGORY_TONES[tone].dark.swatch} />
  return <ToneSquare tone={tone} />
}

export function FolderRail({ folders, label }: { folders: Folder[]; label: string }) {
  const active = useActive(folders)
  return (
    <nav
      aria-label={label}
      className="pointer-events-auto sticky top-24 w-[13rem] overflow-hidden rounded-[8px] border border-[var(--frame)] bg-[var(--surface)] py-2"
    >
      <ul>
        {folders.map((f) => {
          const current = active === f.id
          return (
            <li key={f.id}>
              <a
                href={`#${f.id}`}
                aria-current={current ? 'true' : undefined}
                className={`relative flex items-center gap-2 px-3.5 py-2 text-[0.8125rem] transition-colors duration-150 ease-out ${
                  current ? 'bg-[var(--row-selected)] font-semibold text-[var(--ink)]' : 'text-[var(--ink)] hover:bg-[var(--row-hover)]'
                }`}
              >
                {current && <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-[var(--note)]" />}
                <Square tone={f.tone} current={current} />
                <span className="min-w-0 flex-1 truncate">{f.label}</span>
                <span className="text-[0.75rem] tabular-nums text-[var(--muted)]">{f.count}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function FolderStrip({ folders, label }: { folders: Folder[]; label: string }) {
  const active = useActive(folders)
  return (
    <nav
      aria-label={label}
      className="sticky top-16 z-30 border-b border-[var(--hairline)] bg-[var(--surface)] xl:hidden"
    >
      <ul className="mx-auto flex max-w-[84rem] gap-1 overflow-x-auto px-3 py-1.5 sm:px-5 lg:px-7">
        {folders.map((f) => {
          const current = active === f.id
          return (
            <li key={f.id} className="shrink-0">
              <a
                href={`#${f.id}`}
                aria-current={current ? 'true' : undefined}
                className={`flex items-center gap-2 whitespace-nowrap rounded-[4px] px-2.5 py-1.5 text-[0.8125rem] transition-colors duration-150 ease-out ${
                  current ? 'bg-[var(--row-selected)] font-semibold text-[var(--ink)]' : 'text-[var(--ink)] hover:bg-[var(--row-hover)]'
                }`}
              >
                <Square tone={f.tone} current={current} />
                {f.label}
                <span className="text-[0.75rem] tabular-nums text-[var(--muted)]">{f.count}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
