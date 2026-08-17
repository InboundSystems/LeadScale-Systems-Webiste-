import Hero from '@/components/systems/Hero'
import WhoItsFor from '@/components/systems/WhoItsFor'
import WhatWeDo from '@/components/systems/WhatWeDo'
import HowItWorksTeaser from '@/components/systems/HowItWorksTeaser'
import WhoThisIsntFor from '@/components/systems/WhoThisIsntFor'
import CTA from '@/components/home/CTA'

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
      <WhatWeDo />
      <HowItWorksTeaser />
      <WhoThisIsntFor />
      <CTA
        eyebrow="GET IN TOUCH"
        headingLine1="Let's Talk About"
        headingAccent="What You Need Off Your Plate."
        body="Tell us about your business and the job you're looking to hand off — we'll tell you plainly whether we can run it."
        buttonLabel="GET IN TOUCH"
        buttonHref="/enquire"
        reassurance="There's no pricing on the site — nothing here is priced publicly yet. Get in touch and we'll talk specifics."
      />
    </>
  )
}
