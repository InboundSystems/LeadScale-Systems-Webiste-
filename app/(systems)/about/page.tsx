import type { Metadata } from 'next'
import AboutContent from '@/components/systems/AboutContent'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutContent />
}
