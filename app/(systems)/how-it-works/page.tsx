import type { Metadata } from 'next'
import HowItWorksContent from '@/components/systems/HowItWorksContent'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.howItWorks.title,
  description: pageMeta.howItWorks.description,
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return <HowItWorksContent />
}
