import Hero from '@/components/systems/Hero'
import Problem from '@/components/systems/Problem'
import Ladder from '@/components/systems/Ladder'
import Diagnostic from '@/components/systems/Diagnostic'
import Accountability from '@/components/systems/Accountability'
import WhoWeAre from '@/components/systems/WhoWeAre'
import FAQ from '@/components/home/FAQ'
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

const faqs = [
  {
    question: 'What does the diagnostic actually involve, and what does it cost me in time?',
    answer:
      "Two hours on site, once. We walk through how enquiries, quotes and invoices move through your business today. No prep beforehand and no disruption to the job — book it around a quiet afternoon and that's the only time cost.",
  },
  {
    question: 'Do I need to switch software?',
    answer:
      "No. We configure what you're already running — Simpro, ServiceTitan, AroFlo, Tradify, ServiceM8, Fergus, whatever it is. If there's a genuine gap, we'll say so, but switching platforms isn't the default move.",
  },
  {
    question: 'What happens if the diagnostic finds nothing worth fixing?',
    answer:
      "Then you've got a one-page report confirming your back office is tight, and you keep it. That's a real, if less common, outcome — we're not incentivised to invent a problem that isn't there.",
  },
  {
    question: 'What does the retainer actually cover, month to month?',
    answer:
      "Ongoing ownership of the number the diagnostic measured — monitoring it, reporting on it against your baseline, and adjusting the install when something in your business changes. It's the accountability, not just the software.",
  },
  {
    question: 'How is this different from just hiring an admin?',
    answer:
      "An admin does the work. We build and own the system the work runs through, then report on it — that doesn't go on leave, and it scales past one person's hours.",
  },
  {
    question: 'Is this just AI?',
    answer:
      "Native AI already ships inside most job-management platforms — Simpro, ServiceTitan and the rest all have it. So partly, yes. But the tool was never the hard part. The hard part is someone measuring what's actually leaking, configuring it correctly, and staying accountable for the number — that's what we do.",
  },
]

export default function SystemsHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Problem />
      <Ladder />
      <Diagnostic />
      <Accountability />
      <WhoWeAre />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headingLine1="The Questions"
        headingAccent="You'd Actually Ask."
        intro="Not sales copy — the practical stuff, before you reach out."
        faqs={faqs}
      />
      <CTA
        eyebrow="THE FIRST TWO HOURS"
        headingLine1="Let's Find"
        headingAccent="What It's Costing You."
        body="Two hours on site. A one-page report with a number attached. You keep it either way — get in touch and we'll set up a time."
        buttonLabel="GET IN TOUCH"
        buttonHref="/enquire"
        reassurance="No sales pitch. No pressure. Just two hours and a report with your name on it."
      />
      {/* Real service pages slot in here once the offering is finalised. */}
    </>
  )
}
