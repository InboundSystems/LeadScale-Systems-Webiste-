import type { ItProvidersContent } from './types'

// /it-providers — the page a practice manager forwards to their IT provider.
// It is The Front Office's access page and says so; a second system gets its
// own access page rather than a section here.
// Factual and technical, no marketing. Order and every claim follow section 6
// of docs/WEBSITE-REWORK-2026-11.md. Never publish the application (client)
// ID or any tenant ID here; both go in the access request document only.

export const itProviders: ItProvidersContent = {
  header: {
    eyebrow: 'Access',
    heading: 'For IT providers: The Front Office',
    intro:
      'Each system Vicaria operates has its own access page. This one is for the IT provider of a practice considering The Front Office. It sets out the access requested, the permissions and their reasons, how access is restricted to one mailbox, how the system runs and how access is withdrawn.',
  },

  asked: {
    heading: 'What is being asked.',
    paragraphs: [
      'Admin consent for one registered application, Vicaria Front Office, to access one shared mailbox.',
      'Consent is granted once, in the Microsoft Entra admin centre. It can be withdrawn at any time without involving Vicaria.',
    ],
  },

  permissions: {
    heading: 'The permissions.',
    intro: 'Two Microsoft Graph application permissions, and nothing else.',
    items: [
      {
        name: 'Mail.ReadWrite',
        type: 'Application permission',
        reason:
          'Read new mail in the one mailbox, apply Outlook categories, and save unsent draft replies. Each of these is a write, so read-only access is not enough.',
      },
      {
        name: 'MailboxSettings.ReadWrite',
        type: 'Application permission',
        reason:
          'Add the system’s category names to that mailbox’s category list so they show with colours. No other mailbox setting is read or changed.',
        note: 'Optional. Without it, the categories still apply but show without colours.',
      },
    ],
  },

  notRequested: {
    heading: 'What is not requested.',
    intro: 'The application does not request, and does not hold:',
    items: [
      'Mail.Send',
      'Any password',
      'Access to any other mailbox',
      'Changes to mail flow, rules or security settings',
    ],
  },

  restriction: {
    heading: 'Restricting access to one mailbox.',
    intro: 'This step is required.',
    steps: [
      'Apply an Exchange Online application access restriction scoped to the one shared mailbox.',
      'Test that a second mailbox is refused.',
    ],
    closing: 'Vicaria asks for the connection to stay off until that test passes.',
  },

  howItRuns: {
    heading: 'How it runs.',
    paragraphs: [
      'The system runs unattended on a schedule, under application permissions. There is no signed-in user and no interactive session.',
      'It runs on Amazon Web Services in the Sydney region. The AI model is Amazon Bedrock in the Sydney region. The database is Supabase, in Sydney.',
    ],
  },

  withdrawing: {
    heading: 'Withdrawing access.',
    paragraphs: ['Remove the application, or revoke its consent. Either takes effect immediately.'],
    pathLabel: 'Where to find it',
    path: ['Microsoft Entra admin centre', 'Enterprise applications', 'Vicaria Front Office'],
  },

  end: {
    line: 'Questions go to admin@vicaria.com.au. The full access request document is available on request.',
    link: { label: 'Email admin@vicaria.com.au', href: 'mailto:admin@vicaria.com.au?subject=Access%20request%20document' },
  },
}
