import type { ContactPageContent } from './types'

// /enquire — replaces the enquiry form. No form fields, no submission state:
// the mailto link is the whole mechanism. Placeholder email — see the
// task report for what to swap in before launch.
export const contact: ContactPageContent = {
  eyebrow: 'GET IN TOUCH',
  headingLine1: 'Email Us',
  headingAccent: 'Directly.',
  lead: 'There is no form here. An email reaches Vicaria directly, and every one is read and answered.',
  email: 'admin@vicaria.com.au',
  helpfulIntro: 'A reply is quicker with a few details, where they’re available:',
  helpfulItems: [
    'The practice or business name',
    'Which mail platform is used — Microsoft 365 or Google Workspace',
    'Roughly how much correspondence arrives in a week',
    'What is currently taking the most time',
  ],
  closing: 'None of this is required. An email that just says “can we talk” is a complete enquiry.',
  dataHandlingLinkLabel: 'How client data is handled →',
  privacyLinkLabel: 'Read the privacy policy →',
}
