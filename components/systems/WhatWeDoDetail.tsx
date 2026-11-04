import type { SummaryGroup, WhatWeDoDetail as Detail } from '@/content/types'
import CategoryChip, { personLabelTone } from './CategoryChip'
import { outlookFace } from './InboxParts'
import Tilt from './Tilt'

// The small static lit-screen detail beside each of "What we do" on the
// homepage (clinics, 10 November 2026): the category list, an Unclear row, a
// row labelled For Dr Smith, a summary excerpt, the Junk lines, a reply in
// Drafts, a correction kept. Nothing moves; each leans towards a fine
// pointer like every lit screen. Fictional practice and senders.

const SUBJECT = 30

/** The plain-text summary's columns, narrowed to fit a small window: time
 *  waited (or a date) padded, subject cut and padded, sender. */
function excerpt(groups: SummaryGroup[]) {
  return groups
    .map((g) =>
      [
        ...(g.heading ? [`  ${g.heading}`] : []),
        ...g.lines.map((l) => {
          const first = /^\d/.test(l.first) ? `${l.first.padEnd(7)} ` : `${l.first}  `
          const subject = l.subject.length > SUBJECT ? `${l.subject.slice(0, SUBJECT - 1)}…` : l.subject.padEnd(SUBJECT)
          return `    ${first}${subject} ${l.sender}`
        }),
      ].join('\n')
    )
    .join('\n\n')
}

function Frame({ bar, children }: { bar: React.ReactNode; children: React.ReactNode }) {
  return (
    <Tilt>
      <div aria-hidden="true" className="lit lit-screen overflow-hidden rounded-[8px] border border-[var(--frame)] bg-[var(--surface)] text-[var(--ink)]" style={outlookFace}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--hairline)] bg-[var(--chrome)] px-4 py-1.5 text-[0.75rem] text-[var(--muted)]">
          {bar}
        </div>
        {children}
      </div>
    </Tilt>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="border-t border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-1.5 text-[0.75rem] font-semibold text-[var(--note)]">{children}</p>
}

export default function WhatWeDoDetail({ detail }: { detail: Detail }) {
  switch (detail.kind) {
    case 'categories':
      return (
        <Frame bar={<span>{detail.title}</span>}>
          <ul className="grid gap-x-3 gap-y-1.5 px-4 py-3 sm:grid-cols-2">
            {detail.categories.map((c) => (
              <li key={c.label} className="min-w-0">
                <CategoryChip category={c} className="max-w-full overflow-hidden text-ellipsis" />
              </li>
            ))}
          </ul>
        </Frame>
      )
    case 'row':
      return (
        <Frame
          bar={
            <>
              <span>
                reception@ › <span className="font-semibold text-[var(--ink)]">{detail.folder}</span>
              </span>
              <span>{detail.note}</span>
            </>
          }
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 px-4 py-2.5">
            <p className="min-w-0 truncate text-[0.8125rem]">
              <span className="font-semibold">{detail.sender}</span>
              <span className="text-[var(--muted)]"> · {detail.subject}</span>
            </p>
            <span className="text-[0.75rem] tabular-nums text-[var(--muted)]">{detail.received}</span>
            <span className="col-span-2 flex flex-wrap justify-end gap-1">
              {detail.personLabel && <CategoryChip category={{ label: detail.personLabel, tone: personLabelTone }} />}
              <CategoryChip category={detail.category} />
            </span>
          </div>
        </Frame>
      )
    case 'summary':
      return (
        <Frame bar={<span className="font-semibold text-[var(--ink)]">{detail.title}</span>}>
          <div className="overflow-x-auto">
            <pre className="v-mono m-0 w-max min-w-full whitespace-pre px-4 py-3 text-[0.75rem] leading-[1.6] text-[var(--ink)]">{excerpt(detail.groups)}</pre>
          </div>
          <Note>{detail.note}</Note>
        </Frame>
      )
    case 'drafts':
      return (
        <Frame
          bar={
            <>
              <span>
                reception@ › <span className="font-semibold text-[var(--ink)]">{detail.folder}</span>
              </span>
              <span className="rounded-[4px] border border-[var(--frame-strong)] bg-[var(--surface)] px-1.5 py-0.5 font-semibold text-[var(--ink)]">{detail.status}</span>
            </>
          }
        >
          <div className="px-4 py-2.5 text-[0.8125rem]">
            <p>
              <span className="text-[var(--muted)]">To </span>
              <span className="font-semibold">{detail.to}</span>
            </p>
            <p className="mt-0.5 font-semibold">{detail.subject}</p>
            <p className="mt-1.5 text-[var(--muted)]">{detail.preview}</p>
          </div>
        </Frame>
      )
    case 'correction':
      return (
        <Frame bar={<span>reception@ › <span className="font-semibold text-[var(--ink)]">Inbox</span></span>}>
          <div className="px-4 py-2.5">
            <p className="truncate text-[0.8125rem]">
              <span className="font-semibold">{detail.sender}</span>
              <span className="text-[var(--muted)]"> · {detail.subject}</span>
            </p>
            <p className="mt-2 flex flex-wrap items-center gap-2">
              <span className="line-through decoration-[var(--muted)] opacity-60">
                <CategoryChip category={detail.from} />
              </span>
              <span aria-hidden="true" className="text-[var(--muted)]">
                →
              </span>
              <CategoryChip category={detail.to} />
            </p>
          </div>
          <Note>{detail.note}</Note>
        </Frame>
      )
  }
}
