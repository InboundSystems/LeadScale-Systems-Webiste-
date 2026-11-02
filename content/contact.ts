import type { ContactPageContent } from './types'

// /enquire — a plain email contact, no form. The mailto link is the whole
// mechanism. The address itself comes from business.email in ./audience.

export const contact: ContactPageContent = {
  header: {
    eyebrow: 'Enquire',
    heading: 'Email Vicaria directly.',
    intro: 'Enquiries are by email. Every email is read and answered.',
  },
  helpfulIntro: 'A reply is quicker with a few details, where they are available:',
  helpfulItems: [
    'The practice name',
    'Whether the practice uses Microsoft 365',
    'How much email arrives in a typical week',
    'Which emails tend to wait longest',
  ],
  closing: 'None of this is required. An email asking for a conversation is a complete enquiry.',
  links: [
    { label: 'For IT providers', href: '/it-providers' },
    { label: 'How data is handled', href: '/data-handling' },
    { label: 'Privacy policy', href: '/privacy' },
  ],
}
