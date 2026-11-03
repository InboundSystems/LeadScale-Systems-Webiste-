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
    subject: 'The job that takes the most time',
    prompts: [
      'Business name',
      'Which job takes the most time',
      'What software you use',
      'Roughly how much arrives each week',
    ],
    sendLabel: 'Open in your email',
    note: 'This opens a new message in your own email, with the prompts filled in. Nothing on this page is sent or stored.',
  },
  helpfulIntro: 'We can reply faster if you tell us a little, where you can:',
  helpfulItems: ['What your business does', 'Which admin job takes the most time', 'What software you use'],
  systemNote: 'For The Front Office, it also helps to know whether the practice uses Microsoft 365.',
  closing: 'None of it is required. An email asking for a conversation is a complete enquiry.',
  links: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'How data is handled', href: '/data-handling' },
    { label: 'Privacy policy', href: '/privacy' },
  ],
}
