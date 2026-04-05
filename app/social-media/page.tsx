import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialMediaPage from '@/components/service-pages/SocialMediaPage'

export const metadata: Metadata = {
  title: 'Social Media Management | LeadScale Systems',
  description:
    'Our Social Media Presence & Maintenance System ensures your business maintains a professional and active presence across key social platforms.',
}

export default function SocialMedia() {
  return (
    <>
      <Navbar />
      <main>
        <SocialMediaPage />
      </main>
      <Footer />
    </>
  )
}
