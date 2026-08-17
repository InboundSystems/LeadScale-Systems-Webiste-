import type { Metadata } from 'next'
import WhatWeOfferContent from '@/components/systems/WhatWeOfferContent'

export const metadata: Metadata = {
  title: 'What We Offer',
  description: 'The systems LeadScale Systems currently builds and runs.',
  alternates: { canonical: '/what-we-offer' },
}

export default function WhatWeOfferPage() {
  return <WhatWeOfferContent />
}
