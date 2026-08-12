import Hero from '@/components/ai/Hero'
import Problem from '@/components/ai/Problem'
import Ladder from '@/components/ai/Ladder'
import Diagnostic from '@/components/ai/Diagnostic'
import Accountability from '@/components/ai/Accountability'
import WhoWeAre from '@/components/ai/WhoWeAre'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

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

export default function AiHomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Ladder />
      <Diagnostic />
      <Accountability />
      <WhoWeAre />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headingLine1="The questions"
        headingAccent="you'd actually ask."
        intro="Not sales copy — the practical stuff, before you reach out."
        faqs={faqs}
      />
      <CTA
        eyebrow="THE FIRST TWO HOURS"
        headingLine1="Let's find"
        headingAccent="what it's costing you."
        body="Two hours on site. A one-page report with a number attached. You keep it either way — get in touch and we'll set up a time."
        buttonLabel="GET IN TOUCH"
        buttonHref="/ai/enquire"
        reassurance="No sales pitch. No pressure. Just two hours and a report with your name on it."
      />
      {/* Real service pages (app/ai/<service>/page.tsx) slot in here once the offering is finalised. */}
    </>
  )
}
