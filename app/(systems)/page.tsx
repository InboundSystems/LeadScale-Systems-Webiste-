import Hero from '@/components/systems/Hero'
import WhoItsFor from '@/components/systems/WhoItsFor'
import SystemsSection from '@/components/systems/SystemsSection'
import Research from '@/components/systems/Research'
import WhyWeRunThem from '@/components/systems/WhyWeRunThem'
import HowItWorksTeaser from '@/components/systems/HowItWorksTeaser'
import WhoThisIsntFor from '@/components/systems/WhoThisIsntFor'
import CTA from '@/components/home/CTA'
import { pricingStatement } from '@/content/pricing'
import { audience } from '@/content/audience'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vicaria',
  url: 'https://leadscalesystems.net',
  logo: 'https://leadscalesystems.net/logo-icon-transparent.png',
  email: audience.contact.email,
  sameAs: [
    'https://www.instagram.com/leadscalesystems/',
    'https://www.facebook.com/profile.php?id=61585639113200',
  ],
  subOrganization: [
    { '@type': 'Organization', name: 'Vicaria Media', url: 'https://leadscalesystems.net/media' },
  ],
}

export default function SystemsHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <WhoItsFor />
      <SystemsSection />
      <Research />
      <WhyWeRunThem />
      <HowItWorksTeaser />
      <WhoThisIsntFor />
      <CTA
        eyebrow="GET IN TOUCH"
        headingLine1="Describe The Job."
        headingAccent="We'll Confirm Whether We Can Take It."
        body="Tell us what the job is, how often it occurs, and how it is handled now."
        buttonLabel="GET IN TOUCH"
        buttonHref="/enquire"
        reassurance={pricingStatement}
      />
    </>
  )
}
