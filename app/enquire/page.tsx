import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EnquiryForm from '@/components/enquire/EnquiryForm'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description:
    "Tell us about your business and we'll be in touch. We'll audit your current marketing, identify gaps, and show you exactly how to generate more qualified leads.",
}

export default function Enquire() {
  return (
    <>
      <Navbar />
      <main>
        <EnquiryForm />
      </main>
      <Footer />
    </>
  )
}
