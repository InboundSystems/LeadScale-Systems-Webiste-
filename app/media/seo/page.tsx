import type { Metadata } from 'next'
import SEOPage from '@/components/service-pages/SEOPage'

export const metadata: Metadata = {
  title: 'Search Engine Optimisation | LeadScale Media Systems',
  description:
    'Our Local SEO Growth System positions your business where customers are already searching — improving your visibility, authority, and relevance on Google.',
  alternates: { canonical: '/media/seo' },
}

export default function SEO() {
  return <SEOPage />
}
