import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookPage from '@/components/BookPage'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call | LeadScale Systems',
  description:
    'Book a free 30-minute strategy call. We\'ll audit your current marketing, identify gaps, and show you exactly how to generate more qualified leads.',
}

export default function Book() {
  return (
    <>
      <Navbar />
      <main>
        <BookPage />
      </main>
      <Footer />
    </>
  )
}
