import type { MorningSummaryIllustration, SummaryAnnotation, SummaryGroup, SummaryLine } from '@/content/types'

// The morning summary, set as the plain-text email it is: preformatted
// monospace, fixed columns, no tables, no colour. Body copy comes from
// content/systems.ts; the column layout below reproduces summary.mjs:
//   group heading indented 2, items indented 4
//   time waited padded to 7, then one space
//   a date (Replied, Junk) followed by two spaces
//   subject cut to 44 and padded to 44, then one space
//   sender email address, then "  [For …]" when a label applies
// The optional-block notes sit outside the email, as annotations above
// each optional block.
//
// Each line renders as its own block, so an annotation (homepage only) can
// put a small numbered marker in the left padding beside the first line
// that contains its `match`. The marker is aria-hidden and outside the
// text; the notes themselves live outside the email (AnnotatedSummary).

const SUBJECT_WIDTH = 44

function formatLine(line: SummaryLine): string {
  // Waited times start with a digit ("45m", "3h 20m", "1d 2h"); dates
  // start with a weekday ("Fri 30 Oct").
  const first = /^\d/.test(line.first) ? `${line.first.padEnd(7)} ` : `${line.first}  `
  const subject = line.subject.slice(0, SUBJECT_WIDTH).padEnd(SUBJECT_WIDTH)
  const label = line.personLabel ? `  [${line.personLabel}]` : ''
  return `    ${first}${subject} ${line.sender}${label}`
}

function formatGroups(groups: SummaryGroup[]): string {
  return groups
    .map((group) => [...(group.heading ? [`  ${group.heading}`] : []), ...group.lines.map(formatLine)].join('\n'))
    .join('\n\n')
}

function Pre({
  children,
  markFor,
  className = '',
}: {
  children: string
  /** The annotation number for a line, if one points to it. */
  markFor?: (line: string) => number | undefined
  className?: string
}) {
  return (
    <pre className={`v-mono m-0 whitespace-pre ${className}`}>
      {children.split('\n').map((line, i) => {
        const n = markFor?.(line)
        return (
          <span key={i} className="relative block" data-note={n}>
            {n !== undefined && (
              <span
                aria-hidden="true"
                className="absolute -left-[17px] top-1/2 flex h-[14px] w-[14px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--teal)] font-sans text-[0.5625rem] font-semibold leading-none text-white"
              >
                {n}
              </span>
            )}
            {line || ' '}
          </span>
        )
      })}
    </pre>
  )
}

export default function MorningSummary({
  summary,
  caption,
  annotations,
  className = '',
}: {
  summary: MorningSummaryIllustration
  /** Replaces summary.caption. */
  caption?: string
  /** Numbered markers beside the lines these notes point to. */
  annotations?: SummaryAnnotation[]
  className?: string
}) {
  // Each annotation marks the first line that contains its match, in reading
  // order, so it is numbered by its place in the list.
  const used = new Set<number>()
  const markFor = annotations
    ? (line: string) => {
        const i = annotations.findIndex((a, j) => !used.has(j) && line.includes(a.match))
        if (i < 0) return undefined
        used.add(i)
        return i + 1
      }
    : undefined
  return (
    <figure className={className}>
      <article
        aria-label={`Illustration: ${summary.subject}`}
        className="rounded-[var(--radius-card)] border border-[var(--hairline)] bg-[var(--surface)]"
      >
        <dl className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-[var(--hairline)] px-5 py-4 text-[0.8125rem] sm:px-7">
          <dt className="text-[var(--muted)]">From</dt>
          <dd className="text-[var(--ink)]">{summary.from}</dd>
          <dt className="text-[var(--muted)]">To</dt>
          <dd className="text-[var(--ink)]">{summary.to}</dd>
          <dt className="text-[var(--muted)]">Sent</dt>
          <dd className="tabular-nums text-[var(--ink)]">{summary.sent}</dd>
          <dt className="text-[var(--muted)]">Subject</dt>
          <dd className="font-semibold text-[var(--ink)]">{summary.subject}</dd>
        </dl>

        {/* Plain-text lines are wider than a phone; the email scrolls
            sideways inside its frame, never the page. */}
        <div className="overflow-x-auto">
          <div className="flex w-max min-w-full flex-col gap-[1.6em] px-5 py-6 text-[0.75rem] leading-[1.6] text-[var(--ink)] sm:px-7 sm:py-7">
            <Pre markFor={markFor}>{summary.title.join('\n')}</Pre>
            {summary.opening.map((paragraph) => (
              <Pre key={paragraph[0]} markFor={markFor}>{paragraph.join('\n')}</Pre>
            ))}

            <Pre markFor={markFor}>{formatGroups(summary.groups)}</Pre>

            {summary.blocks.map((block) => (
              <section key={block.heading} className="flex flex-col gap-[1.6em]">
                <div className="flex flex-col gap-1">
                  {block.optionalNote && (
                    <p
                      className="text-[0.75rem] italic text-[var(--muted)]"
                      style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
                    >
                      {block.optionalNote}
                    </p>
                  )}
                  <Pre markFor={markFor}>{[block.heading, ...block.text].join('\n')}</Pre>
                </div>
                <Pre markFor={markFor}>{formatGroups(block.groups)}</Pre>
              </section>
            ))}

            <Pre markFor={markFor}>{summary.closing.join('\n')}</Pre>
          </div>
        </div>
      </article>
      <figcaption className="v-small mt-3">{caption ?? summary.caption}</figcaption>
    </figure>
  )
}
