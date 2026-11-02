import type { Metadata } from 'next'
import PrivacyContent from '@/components/systems/PrivacyContent'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
