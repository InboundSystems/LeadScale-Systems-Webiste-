import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaidTrafficPage from '@/components/service-pages/PaidTrafficPage'

export const metadata: Metadata = {
  title: 'Paid Traffic Advertising | LeadScale Systems',
  description:
    'Our advertising service manages the full process — from account setup and strategy through to ongoing optimisation across Facebook, Instagram, and Google.',
}

export default function PaidTraffic() {
  return (
    <>
      <Navbar />
      <main>
        <PaidTrafficPage />
      </main>
      <Footer />
    </>
  )
}
