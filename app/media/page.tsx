import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import WebsiteBuilds from '@/components/home/WebsiteBuilds'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import Expectations from '@/components/home/Expectations'
import About from '@/components/home/About'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'LeadScale Media Systems | More Enquiries. More Booked Jobs. More Growth.' },
  description:
    'We help tradespeople, contractors and local service businesses get found online and turn their traffic into real, paying customers through SEO, paid advertising and social media.',
  alternates: { canonical: '/media' },
}

const faqs = [
  {
    question: 'How does LeadScale Systems help my business get more clients?',
    answer:
      'We build a multi-channel marketing system tailored to your business using SEO, paid advertising, and social media management working together. Rather than running one-off campaigns, we create a compounding growth engine — improving your search rankings so customers find you organically, running paid ads to generate immediate enquiries, and maintaining a consistent social presence that builds trust.',
  },
  {
    question: 'What results can I expect from paid advertising?',
    answer:
      'Paid advertising typically generates leads faster than organic channels — you can expect to see enquiries within the first few weeks of a campaign launching. We focus on building a system that improves over time: refining audiences, testing creative angles, and optimising bidding strategies so your cost per enquiry decreases as campaigns mature.',
  },
  {
    question: 'What does SEO actually do for a local business?',
    answer:
      'SEO positions your business to appear when potential customers search for the services you offer in your local area. This includes optimising your Google Business Profile, improving your website structure, and building local authority signals. The result is a consistent stream of organic enquiries from people actively looking to buy — without paying per click.',
  },
  {
    question: 'What makes LeadScale Systems different from other agencies?',
    answer:
      'Most agencies sell individual services and report on vanity metrics. We build integrated systems focused on one outcome: qualified enquiries that turn into booked appointments and paying clients. We work with a limited number of clients at a time to maintain quality, and we give you full access and transparency to everything we do on your behalf.',
  },
  {
    question: 'How long before I start seeing results?',
    answer:
      'Paid advertising can generate enquiries within weeks of launching. Social media builds credibility over 1–3 months of consistent posting. SEO is the longest runway — expect 3–6 months for rankings to move meaningfully, with compounding growth continuing for years. We run all three channels together so you get immediate results while longer-term channels build in the background.',
  },
  {
    question: 'Do I need all three services, or can I start with one?',
    answer:
      "You can absolutely start with one service. That said, the system works best when all three channels run together, because they reinforce each other. We'll recommend the right starting point based on your goals and budget during our initial strategy call.",
  },
]

export default function MediaHomePage() {
  return (
    <>
      <Hero />
      <WebsiteBuilds />
      <Services />
      <Process />
      <Expectations />
      <About />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headingLine1="Digital marketing"
        headingAccent="— FAQ"
        intro="Everything you need to know about working with LeadScale Systems."
        faqs={faqs}
      />
      <CTA
        eyebrow="READY TO SCALE?"
        headingLine1="Let's build your"
        headingAccent="client acquisition machine"
        body="Book a free 30-minute strategy call. We'll audit your current marketing, identify gaps, and show you exactly how to generate more qualified leads."
        buttonLabel="BOOK YOUR FREE CALL"
        buttonHref="/media/book"
        reassurance="No commitment required. No sales pressure. Just a conversation about your growth."
      />
    </>
  )
}
