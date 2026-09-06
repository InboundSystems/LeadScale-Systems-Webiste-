'use client'

import { useBrand, WORDMARKS } from '@/components/brand/BrandProvider'

interface WordmarkProps {
  className?: string
}

// Shared house mark: "[Prefix] SYSTEMS", with only "SYSTEMS" ever taking the
// brand accent. Reads prefix/min-width from brand context — see
// docs/brand/shared-system.md "Logo and wordmark".
export default function Wordmark({ className = '' }: WordmarkProps) {
  const brand = useBrand()
  const { prefix, suffix, minWidth } = WORDMARKS[brand]

  return (
    <span
      className={`inline-flex items-baseline whitespace-nowrap font-bold text-lg ${className}`}
      style={{ minWidth, padding: '0.15em', gap: '0.3em' }}
    >
      <span className="text-white" style={{ letterSpacing: '-0.8px' }}>
        {prefix}
      </span>
      <span className="text-[var(--accent)]" style={{ letterSpacing: '2.4px' }}>
        {suffix}
      </span>
    </span>
  )
}
