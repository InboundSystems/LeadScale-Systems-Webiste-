import type { Metadata } from 'next'
import ContactContent from '@/components/systems/ContactContent'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: 'How to reach Vicaria directly, by email.',
  alternates: { canonical: '/enquire' },
}

export default function EnquirePage() {
  return <ContactContent />
}
