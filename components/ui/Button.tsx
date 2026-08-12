import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-2 text-[#6b7a99] hover:text-white font-semibold text-sm px-7 py-4 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 ${className}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-1-hover)] hover:from-[var(--accent-1-hover)] hover:to-[var(--accent-2-hover)] text-white font-bold tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_35px_rgb(var(--accent-1-rgb)/0.4)] hover:shadow-[0_0_55px_rgb(var(--accent-1-rgb)/0.65)] hover:scale-[1.04] ${className}`}
    >
      {children}
    </Link>
  )
}
