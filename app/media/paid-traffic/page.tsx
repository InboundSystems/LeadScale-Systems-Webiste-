import type { Metadata } from 'next'
import PaidTrafficPage from '@/components/service-pages/PaidTrafficPage'

export const metadata: Metadata = {
  title: 'Paid Traffic Advertising | LeadScale Media Systems',
  description:
    'Our advertising service manages the full process — from account setup and strategy through to ongoing optimisation across Facebook, Instagram, and Google.',
  alternates: { canonical: '/media/paid-traffic' },
}

export default function PaidTraffic() {
  return <PaidTrafficPage />
}
