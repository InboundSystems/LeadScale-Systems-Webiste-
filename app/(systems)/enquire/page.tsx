import type { Metadata } from 'next'
import EnquiryForm from '@/components/enquire/EnquiryForm'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: "Tell us about your business and we'll get back to you directly.",
  alternates: { canonical: '/enquire' },
}

const extraFields = [
  { name: 'businessType', label: 'What Kind of Business Are You?', placeholder: 'e.g. hair salon, day spa, barbershop, dog grooming' },
  { name: 'staffCount', label: 'How Many Staff, Roughly?' },
  { name: 'bookingSystem', label: 'Which Booking System Do You Use?', placeholder: 'e.g. Fresha, Timely, Phorest, Kitomba, Square Appointments' },
]

export default function EnquirePage() {
  return (
    <EnquiryForm
      eyebrow="GET IN TOUCH"
      headingLine1="Tell Us About"
      headingAccent="Your Business."
      intro="Fill this in and we'll get back to you directly — no automated reply, no sales sequence. The optional fields help us answer honestly about whether this is worth doing for you yet; skip anything you'd rather not say."
      messageLabel="What's Going On?"
      messagePlaceholder="Tell us a bit about your client list and what's prompting you to look into this."
      extraFields={extraFields}
      submitLabel="SEND"
      successMessage="Got it. We'll read this ourselves and reply directly — that might take a day or two, since it's genuinely the two of us."
      reassurance="No pricing until we've actually talked — the offer's new enough that we'd rather have the conversation first."
      brandLabel="LeadScale Systems"
    />
  )
}
