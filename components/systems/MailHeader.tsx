import type { ReactNode } from 'react'
import { site } from '@/content/audience'

// The row that opens every section set as an opened email:
// "From: Vicaria  To: You  Today, 8:02 am", with the section's chip on the
// right. Used on the homepage and the main flagship pages, so the whole site
// reads as one inbox. On the teal band it is inverse (white text, 88% white
// labels, 20% white rule).
export default function MailHeader({
  sent,
  chip,
  inverse = false,
  className = '',
}: {
  sent: string
  chip?: ReactNode
  inverse?: boolean
  className?: string
}) {
  const label = inverse ? 'text-[#e4eeed]' : 'text-[var(--muted)]'
  const rule = inverse ? 'border-white/20' : 'border-[var(--hairline)]'
  return (
    <div
      className={`mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b pb-4 text-[0.875rem] ${rule} ${className}`}
    >
      <dl className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <div className="flex items-baseline gap-1.5">
          <dt className={`v-mono text-[0.75rem] ${label}`}>{site.mail.fromLabel}:</dt>
          <dd className="font-semibold">{site.mail.from}</dd>
        </div>
        <div className="flex items-baseline gap-1.5">
          <dt className={`v-mono text-[0.75rem] ${label}`}>{site.mail.toLabel}:</dt>
          <dd>{site.mail.to}</dd>
        </div>
        <div className="flex items-baseline">
          <dt className="sr-only">Sent</dt>
          <dd className={`tabular-nums ${label}`}>{sent}</dd>
        </div>
      </dl>
      {chip}
    </div>
  )
}
