import type { Metadata } from 'next'
import EnquiryForm from '@/components/enquire/EnquiryForm'

export const metadata: Metadata = {
  title: 'Get in Touch | LeadScale Systems',
  description: "Tell us about your business and we'll be in touch to set up the two-hour diagnostic.",
  alternates: { canonical: '/enquire' },
}

const extraFields = [
  { name: 'trade', label: 'Trade / Business Type' },
  { name: 'teamSize', label: 'Team Size, Roughly' },
  {
    name: 'software',
    label: 'Job-Management Software You Currently Use',
    placeholder: 'e.g. Simpro, ServiceTitan, AroFlo, Tradify, ServiceM8, Fergus',
  },
]

export default function EnquirePage() {
  return (
    <EnquiryForm
      eyebrow="GET IN TOUCH"
      headingLine1="Tell Us About"
      headingAccent="Your Business."
      intro="Fill this in and we'll be in touch to set up the two-hour diagnostic. The optional fields help us prepare — skip anything you'd rather not answer."
      messageLabel="What's Going On?"
      messagePlaceholder="Tell us what's slow, late, or falling through the cracks."
      extraFields={extraFields}
      submitLabel="SEND"
      successMessage="Got it. We'll be in touch shortly to set up a time."
      reassurance="No sales pitch. No pressure. Just two hours and a report with your name on it."
      brandLabel="LeadScale Systems"
    />
  )
}
