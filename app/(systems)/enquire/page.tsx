import type { Metadata } from 'next'
import EnquiryForm from '@/components/enquire/EnquiryForm'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: "Tell us about your business and we'll get back to you directly.",
  alternates: { canonical: '/enquire' },
}

const extraFields = [
  {
    name: 'businessType',
    label: 'What Kind of Business Are You?',
    options: ['Hair salon', 'Beauty or skin studio', 'Lash and brow', 'Massage or day spa', 'Nail salon', 'Barbershop', 'Something else'],
  },
  {
    name: 'staffCount',
    label: 'How Many Staff, Roughly?',
    options: ['Just me', '2 to 3', '4 to 6', '7 or more'],
  },
  {
    name: 'bookingSystem',
    label: 'Which Booking System Do You Use?',
    options: ['Fresha', 'Timely', 'Kitomba', 'Phorest', 'Zenoti', 'Square', 'Pen and paper', 'Something else'],
    required: true,
  },
]

export default function EnquirePage() {
  return (
    <EnquiryForm
      eyebrow="GET IN TOUCH"
      headingLine1="Tell Us About"
      headingAccent="Your Business."
      intro="Fill this in and we'll get back to you directly — no automated reply, no sales sequence. Booking system is the one thing we need answered; skip anything else you'd rather not say."
      messageLabel="What Does a Typical Week Look Like?"
      messageHelperText="Roughly how many messages you end up answering yourself, when they come in, and what you're using now."
      messagePlaceholder="Tell us a bit about your client list and what's prompting you to look into this."
      extraFields={extraFields}
      submitLabel="SEND"
      successMessage="Got it. We'll read this ourselves and reply directly — that might take a day or two, since it's genuinely the two of us."
      reassurance="No pricing until we've actually talked — the offer's new enough that we'd rather have the conversation first."
      brandLabel="Vicaria Systems"
    />
  )
}
