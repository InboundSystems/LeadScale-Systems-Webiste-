import { intendedPurpose } from '@/content/intended-purpose'

// Renders the verbatim intended purpose statement. Used on
// /systems/front-office and /privacy; both read the same constant.
export default function IntendedPurpose({ className = '' }: { className?: string }) {
  return (
    <div
      className={`max-w-[65ch] border-l-2 border-[var(--accent)] bg-[var(--surface)] py-5 pl-5 pr-5 sm:pl-7 ${className}`}
    >
      <p className="text-[var(--ink)]">
        <strong className="font-semibold">{intendedPurpose.label}</strong> {intendedPurpose.body}
      </p>
    </div>
  )
}
