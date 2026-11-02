import type { MorningSummaryIllustration, SummaryGroup, SummaryLine } from '@/content/types'

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

function Pre({ children, className = '' }: { children: string; className?: string }) {
  return <pre className={`v-mono m-0 whitespace-pre ${className}`}>{children}</pre>
}

export default function MorningSummary({ summary, className = '' }: { summary: MorningSummaryIllustration; className?: string }) {
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
          <dd className="text-[var(--ink)]">{summary.sent}</dd>
          <dt className="text-[var(--muted)]">Subject</dt>
          <dd className="font-semibold text-[var(--ink)]">{summary.subject}</dd>
        </dl>

        {/* Plain-text lines are wider than a phone; the email scrolls
            sideways inside its frame, never the page. */}
        <div className="overflow-x-auto">
          <div className="flex w-max min-w-full flex-col gap-[1.6em] px-5 py-6 text-[0.75rem] leading-[1.6] text-[var(--ink)] sm:px-7 sm:py-7">
            <Pre>{summary.title.join('\n')}</Pre>
            {summary.opening.map((paragraph) => (
              <Pre key={paragraph[0]}>{paragraph.join('\n')}</Pre>
            ))}

            <Pre>{formatGroups(summary.groups)}</Pre>

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
                  <Pre>{[block.heading, ...block.text].join('\n')}</Pre>
                </div>
                <Pre>{formatGroups(block.groups)}</Pre>
              </section>
            ))}

            <Pre>{summary.closing.join('\n')}</Pre>
          </div>
        </div>
      </article>
      <figcaption className="v-small mt-3">{summary.caption}</figcaption>
    </figure>
  )
}
