import type { MorningSummaryIllustration, SummaryGroup, SummaryLine } from '@/content/types'

// The morning summary, set as the plain-text email it is: monospace, no
// tables, no colour, category headings on their own lines. Body copy comes
// from content/systems.ts and matches the real email line for line. The
// optional-block notes sit outside the email, as annotations.

function Line({ line }: { line: SummaryLine }) {
  return (
    <li className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
      <span className="tabular-nums">{line.waited}</span>
      <span>
        {line.subject} — {line.sender}
        {line.personLabel && <span> [{line.personLabel}]</span>}
      </span>
    </li>
  )
}

function Groups({ groups }: { groups: SummaryGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.category}>
          <p className="font-semibold">{group.category}</p>
          <ul className="mt-1 flex flex-col gap-1">
            {group.lines.map((line) => (
              <Line key={`${line.sender}-${line.subject}`} line={line} />
            ))}
          </ul>
        </div>
      ))}
    </>
  )
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

        <div className="v-mono flex flex-col gap-5 px-5 py-6 text-[0.8125rem] leading-[1.6] text-[var(--ink)] sm:px-7 sm:py-7">
          <div className="flex flex-col gap-1">
            {summary.opening.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <Groups groups={summary.groups} />

          {summary.optionalBlocks.map((block) => (
            <section key={block.heading} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h4 className="font-semibold">{block.heading}</h4>
                <p
                  className="text-[0.75rem] italic text-[var(--muted)] sm:shrink-0 sm:text-right"
                  style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
                >
                  {block.optionalNote}
                </p>
              </div>
              <Groups groups={block.groups} />
            </section>
          ))}

          <section className="flex flex-col gap-1">
            <h4 className="font-semibold">{summary.junk.heading}</h4>
            <ul className="flex flex-col gap-1">
              {summary.junk.lines.map((line) => (
                <Line key={`${line.sender}-${line.subject}`} line={line} />
              ))}
            </ul>
          </section>

          <div className="flex flex-col gap-1">
            {summary.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </article>
      <figcaption className="v-small mt-3">{summary.caption}</figcaption>
    </figure>
  )
}
