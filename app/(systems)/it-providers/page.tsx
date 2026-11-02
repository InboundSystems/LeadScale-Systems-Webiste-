import type { Metadata } from 'next'
import ItProvidersContent from '@/components/systems/ItProvidersContent'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.itProviders.title,
  description: pageMeta.itProviders.description,
  alternates: { canonical: '/it-providers' },
}

export default function ItProvidersPage() {
  return <ItProvidersContent />
}
