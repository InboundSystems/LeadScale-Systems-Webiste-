import type { MorningSummaryIllustration, SummaryBlock } from '@/content/types'
import CategoryChip from './CategoryChip'

// The morning summary, typeset as the email it is. Fictional data from
// content/systems.ts. Optional blocks carry a margin note so the reader can
// tell what every practice receives from what a practice switches on.

function Block({ block }: { block: SummaryBlock }) {
  return (
    <section className="border-t border-[var(--hairline)] pt-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h4 className="text-[0.9375rem] font-semibold text-[var(--ink)]">{block.heading}</h4>
        {block.optionalNote && (
          <p className="text-[0.75rem] italic text-[var(--muted)] sm:shrink-0 sm:text-right">{block.optionalNote}</p>
        )}
      </div>
      {block.note && <p className="mt-1 text-[0.8125rem] text-[var(--muted)]">{block.note}</p>}

      <div
        aria-hidden="true"
        className="mt-3 hidden grid-cols-[4.75rem_10.5rem_minmax(0,11rem)_minmax(0,1fr)] gap-3 border-b border-[var(--hairline)] pb-1.5 text-[0.6875rem] uppercase tracking-[0.06em] text-[var(--muted)] md:grid"
      >
        <span>{block.firstColumnLabel}</span>
        <span>Category</span>
        <span>From</span>
        <span>Subject</span>
      </div>
      <ol className="mt-2 md:mt-0">
        {block.rows.map((row) => (
          <li
            key={`${row.sender}-${row.subject}`}
            className="grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-[var(--hairline)] py-2.5 text-[0.875rem] last:border-b-0 md:grid-cols-[4.75rem_10.5rem_minmax(0,11rem)_minmax(0,1fr)] md:items-center md:py-2"
          >
            <span className="font-semibold tabular-nums text-[var(--ink)] md:row-auto">
              <span className="sr-only">{block.firstColumnLabel}: </span>
              {row.waited}
            </span>
            <span className="md:col-auto">
              <CategoryChip category={row.category} />
            </span>
            <span className="col-start-2 truncate text-[var(--ink)] md:col-start-auto">{row.sender}</span>
            <span className="col-start-2 truncate text-[var(--muted)] md:col-start-auto">{row.subject}</span>
          </li>
        ))}
      </ol>
    </section>
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

        <div className="flex flex-col gap-6 px-5 py-6 sm:px-7 sm:py-7">
          <p className="text-[0.9375rem] text-[var(--ink)]">{summary.opening}</p>

          {summary.blocks.map((block) => (
            <Block key={block.heading} block={block} />
          ))}

          <section className="border-t border-[var(--hairline)] pt-5">
            <h4 className="text-[0.9375rem] font-semibold text-[var(--ink)]">{summary.junk.heading}</h4>
            <p className="mt-1 text-[0.8125rem] text-[var(--muted)]">{summary.junk.note}</p>
            <ul className="mt-2">
              {summary.junk.rows.map((row) => (
                <li
                  key={`${row.sender}-${row.subject}`}
                  className="flex flex-col gap-0.5 border-b border-[var(--hairline)] py-2.5 text-[0.875rem] last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="text-[var(--ink)] sm:w-[11rem] sm:shrink-0">{row.sender}</span>
                  <span className="min-w-0 flex-1 text-[var(--muted)]">{row.subject}</span>
                  <span className="text-[0.8125rem] text-[var(--muted)] sm:shrink-0">{row.received}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <figcaption className="v-small mt-3">{summary.caption}</figcaption>
    </figure>
  )
}
