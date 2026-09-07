import type { Metadata } from 'next'
import HowItWorksContent from '@/components/systems/HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'How Vicaria selects, builds and operates a system, including what happens to client data.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return <HowItWorksContent />
}
