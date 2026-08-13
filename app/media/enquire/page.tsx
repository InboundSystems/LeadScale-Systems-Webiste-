import type { Metadata } from 'next'
import EnquiryForm from '@/components/enquire/EnquiryForm'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call',
  description:
    "Book a free 30-minute strategy call. We'll audit your current marketing, identify gaps, and show you exactly how to generate more qualified leads.",
  alternates: { canonical: '/media/enquire' },
}

export default function MediaEnquirePage() {
  return (
    <EnquiryForm
      eyebrow="NEXT STEPS"
      headingLine1="Book Your Free"
      headingAccent="Strategy Call"
      intro="Book a free 30-minute strategy call. We'll audit your current marketing, identify gaps, and show you exactly how to generate more qualified leads."
      messageLabel="What Do You Need Help With?"
      messagePlaceholder="Tell us about your business and what you're looking to achieve."
      submitLabel="SEND"
      successMessage="Got it. We'll be in touch shortly to set up your strategy call."
      reassurance="No commitment required. No sales pressure. Just a conversation about your growth."
      brandLabel="LeadScale Media Systems"
    />
  )
}
