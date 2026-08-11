import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import WebsiteBuilds from '@/components/home/WebsiteBuilds'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import Expectations from '@/components/home/Expectations'
import About from '@/components/home/About'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'LeadScale Media Systems | More Enquiries. More Booked Jobs. More Growth.',
  description:
    'We help tradespeople, contractors and local service businesses get found online and turn their traffic into real, paying customers through SEO, paid advertising and social media.',
  alternates: { canonical: '/media' },
}

export default function MediaHomePage() {
  return (
    <>
      <Hero />
      <WebsiteBuilds />
      <Services />
      <Process />
      <Expectations />
      <About />
      <FAQ />
      <CTA />
    </>
  )
}
