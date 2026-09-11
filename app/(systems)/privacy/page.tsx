import type { Metadata } from 'next'
import PrivacyContent from '@/components/systems/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What personal information Vicaria collects, why, and what happens to it.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
