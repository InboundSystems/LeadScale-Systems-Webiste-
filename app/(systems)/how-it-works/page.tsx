import type { Metadata } from 'next'
import HowItWorksContent from '@/components/systems/HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'The mechanism, in plain language — including exactly what happens to your client list.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return <HowItWorksContent />
}
