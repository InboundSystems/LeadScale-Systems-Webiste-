import type { Metadata } from 'next'
import AboutContent from '@/components/systems/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Blake and Sam — a two-person partnership based in Brisbane.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutContent />
}
