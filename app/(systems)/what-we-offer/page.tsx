import type { Metadata } from 'next'
import WhatWeOfferContent from '@/components/systems/WhatWeOfferContent'

export const metadata: Metadata = {
  title: 'What Vicaria Offers',
  description: 'The system Vicaria builds and operates.',
  alternates: { canonical: '/what-we-offer' },
}

export default function WhatWeOfferPage() {
  return <WhatWeOfferContent />
}
