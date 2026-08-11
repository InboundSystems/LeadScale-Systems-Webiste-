import type { Metadata } from 'next'
import BrandChooser from '@/components/chooser/BrandChooser'

export const metadata: Metadata = {
  title: 'LeadScale Systems | Media Systems & AI Systems',
  description:
    'LeadScale Systems is the parent company behind LeadScale Media Systems (SEO, paid traffic, social media and websites) and LeadScale AI Systems (launching soon).',
  alternates: { canonical: '/' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeadScale Systems',
  url: 'https://leadscalesystems.net',
  logo: 'https://leadscalesystems.net/logo-icon-transparent.png',
  email: 'admin@leadscalesystems.net',
  sameAs: [
    'https://www.instagram.com/leadscalesystems/',
    'https://www.facebook.com/profile.php?id=61585639113200',
  ],
  subOrganization: [
    { '@type': 'Organization', name: 'LeadScale Media Systems', url: 'https://leadscalesystems.net/media' },
    { '@type': 'Organization', name: 'LeadScale AI Systems', url: 'https://leadscalesystems.net/ai' },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <BrandChooser />
    </>
  )
}
