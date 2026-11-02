import type { Metadata } from 'next'
import ContactContent from '@/components/systems/ContactContent'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.enquire.title,
  description: pageMeta.enquire.description,
  alternates: { canonical: '/enquire' },
}

export default function EnquirePage() {
  return <ContactContent />
}
