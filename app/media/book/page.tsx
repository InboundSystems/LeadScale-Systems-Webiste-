import type { Metadata } from 'next'
import BookPage from '@/components/BookPage'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call | LeadScale Media Systems',
  description:
    'Book a free 30-minute strategy call. We\'ll audit your current marketing, identify gaps, and show you exactly how to generate more qualified leads.',
  alternates: { canonical: '/media/book' },
}

export default function Book() {
  return <BookPage />
}
