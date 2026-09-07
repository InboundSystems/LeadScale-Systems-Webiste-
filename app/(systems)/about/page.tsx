import type { Metadata } from 'next'
import AboutContent from '@/components/systems/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: "Who builds and operates Vicaria's systems, and how an engagement is run.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutContent />
}
