import type { ContactPageContent } from './types'

// /enquire — a plain email contact, no form. The mailto link is the whole
// mechanism. The address itself comes from business.email in ./audience.

export const contact: ContactPageContent = {
  header: {
    eyebrow: 'Enquire',
    heading: 'Email us.',
    intro: 'We take enquiries by email, and we read and answer every one.',
  },
  compose: {
    windowTitle: 'New message',
    toLabel: 'To',
    subjectLabel: 'Subject',
    subject: 'Our practice’s shared inbox',
    prompts: [
      'Practice name',
      'Specialty',
      'Shared mailbox address (for example bookings@ or reception@)',
      'On Microsoft 365? (yes or no)',
      'Roughly how many emails a day',
      'Who manages your IT',
    ],
    sendLabel: 'Open in your email',
    note: 'This opens a new message in your own email, with the prompts filled in. Nothing on this page is sent or stored.',
  },
  helpfulIntro: 'We can reply faster if you tell us a little, where you can:',
  helpfulItems: [
    'Your practice name and specialty',
    'Your shared mailbox address, such as bookings@ or reception@',
    'Whether the practice is on Microsoft 365',
    'Roughly how many emails arrive a day',
    'Who manages your IT',
  ],
  systemNote: 'The Front Office needs Microsoft 365. If you’re not sure whether the practice uses it, your IT provider can tell you.',
  closing: 'None of it is required. An email asking for a conversation is a complete enquiry.',
  links: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'How data is handled', href: '/data-handling' },
    { label: 'Privacy policy', href: '/privacy' },
  ],
}
