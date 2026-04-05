import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEOPage from '@/components/service-pages/SEOPage'

export const metadata: Metadata = {
  title: 'Search Engine Optimisation | LeadScale Systems',
  description:
    'Our Local SEO Growth System positions your business where customers are already searching — improving your visibility, authority, and relevance on Google.',
}

export default function SEO() {
  return (
    <>
      <Navbar />
      <main>
        <SEOPage />
      </main>
      <Footer />
    </>
  )
}
