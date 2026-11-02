import HomeContent from '@/components/systems/HomeContent'
import { business } from '@/content/audience'

// No sameAs: the old social profiles are not linked from the flagship.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vicaria',
  legalName: business.legalName,
  url: 'https://vicaria.com.au',
  email: business.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Brisbane', addressCountry: 'AU' },
  subOrganization: [{ '@type': 'Organization', name: 'Vicaria Media', url: 'https://vicaria.com.au/media' }],
}

export default function SystemsHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <HomeContent />
    </>
  )
}
