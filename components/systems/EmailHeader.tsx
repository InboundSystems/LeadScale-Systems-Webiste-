import type { SectionEmail } from '@/content/types'

// The site's signature: a section intro set as an email header — a white
// card with From / To / Subject in monospace, and the section's H2 inside.
// Used on exactly three homepage sections (work, method, principles).
// Nowhere else, so it stays recognisable rather than decorative.
export default function EmailHeader({
  email,
  heading,
  headingId,
  className = '',
}: {
  email: SectionEmail
  heading: string
  headingId: string
  className?: string
}) {
  const fields: [string, string][] = [
    ['From', email.from],
    ...(email.to ? ([['To', email.to]] as [string, string][]) : []),
    ['Subject', email.subject],
  ]
  return (
    <div className={`rounded-[8px] border border-[#d9e1e1] bg-[var(--surface)] text-[var(--ink)] ${className}`}>
      <dl className="flex flex-wrap gap-x-3 gap-y-1 border-b border-[var(--hairline)] px-5 py-3 text-[0.8125rem] sm:px-6">
        {fields.map(([label, value], i) => (
          <div key={label} className="flex items-baseline gap-1.5">
            <dt className="v-mono text-[0.75rem] text-[var(--muted)]">{label}:</dt>
            <dd className={label === 'Subject' ? 'font-semibold' : ''}>
              {value}
              {/* The separator trails its field, so a wrapped line never
                  starts with one. */}
              {i < fields.length - 1 && (
                <span aria-hidden="true" className="ml-3 font-normal text-[#b9c3c5]">
                  ·
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <h2 id={headingId} className="v-h2 px-5 py-5 sm:px-6 sm:py-6">
        {heading}
      </h2>
    </div>
  )
}
