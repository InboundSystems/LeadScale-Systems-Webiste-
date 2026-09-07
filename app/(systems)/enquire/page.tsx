import type { Metadata } from 'next'
import EnquiryForm from '@/components/enquire/EnquiryForm'
import { pricingStatement } from '@/content/pricing'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: 'A form for describing a recurring job and confirming whether Vicaria can take it.',
  alternates: { canonical: '/enquire' },
}

const extraFields = [
  {
    name: 'businessType',
    label: 'Business Type',
    options: ['Hair salon', 'Beauty or skin studio', 'Lash and brow', 'Massage or day spa', 'Nail salon', 'Barbershop', 'Something else'],
  },
  {
    name: 'staffCount',
    label: 'Staff Count',
    options: ['Just me', '2 to 3', '4 to 6', '7 or more'],
  },
  {
    name: 'bookingSystem',
    label: 'Booking System',
    options: ['Fresha', 'Timely', 'Kitomba', 'Phorest', 'Zenoti', 'Square', 'Pen and paper', 'Something else'],
    required: true,
  },
]

export default function EnquirePage() {
  return (
    <EnquiryForm
      eyebrow="GET IN TOUCH"
      headingLine1="Describe"
      headingAccent="The Job."
      intro="Enquiries are read and answered directly, without an automated reply or a sales sequence. Booking system is the only required field. Everything else is optional."
      messageLabel="What Does a Typical Week Look Like?"
      messageHelperText="How many enquiries you answer yourself, when they arrive, and what you are using now."
      messagePlaceholder="Which channels the enquiries come through, and roughly how many a week."
      extraFields={extraFields}
      submitLabel="SEND"
      successMessage="Received. Enquiries are read and answered directly, usually within one or two working days."
      reassurance={pricingStatement}
      brandLabel="Vicaria"
    />
  )
}
