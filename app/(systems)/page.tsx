import Hero from '@/components/systems/Hero'
import WhoItsFor from '@/components/systems/WhoItsFor'
import WhatGetsDone from '@/components/systems/WhatGetsDone'
import HowItWorksTeaser from '@/components/systems/HowItWorksTeaser'
import WhoThisIsntFor from '@/components/systems/WhoThisIsntFor'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import { offer } from '@/content/offer'

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
      <WhatGetsDone />
      <HowItWorksTeaser />
      <WhoThisIsntFor />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headingLine1="The Questions"
        headingAccent="You'd Actually Ask."
        intro="Not sales copy — the practical stuff, before you reach out."
        faqs={offer.faq}
      />
      <CTA
        eyebrow="GET IN TOUCH"
        headingLine1="Let's Talk About"
        headingAccent="Your Client List."
        body="Tell us what booking software you use and roughly how many clients you've got — we'll tell you honestly whether this is worth doing for your business yet."
        buttonLabel="GET IN TOUCH"
        buttonHref="/enquire"
        reassurance="No pricing on the site because nothing's been proven yet. If it's a fit, we'll talk about cost directly."
      />
    </>
  )
}
