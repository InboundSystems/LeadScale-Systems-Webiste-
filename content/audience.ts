import type {
  AboutContent,
  BusinessDetails,
  HomeContent,
  HowItWorksContent,
  SiteChrome,
  SystemsIndexContent,
} from './types'
import { accounts, appointments, frontOfficeCategories, pharmacy, referrals, unclear } from './systems'

// Company-level content (clinics, 10 November 2026). Vicaria builds and runs
// systems that take the administrative work off specialist medical
// practices' front desks, inside the Microsoft 365 they already use. Vicaria
// is the subject and the brand; The Front Office is named as our first
// system, so a second can be added later. The practice inbox may appear at
// company level, including the homepage hero.
//
// Source of truth: docs/WHAT-WE-DO-2026-11.md, then sections 4 to 6 of
// docs/WEBSITE-REWORK-2026-11.md. Where they differ, WHAT-WE-DO wins.
// content/systems.ts holds The Front Office's own detail.

export const business: BusinessDetails = {
  legalName: 'Vicaria Systems',
  abn: '67 221 728 299',
  location: 'Brisbane, Australia',
  // No phone number is published. Email is the only channel.
  email: 'admin@vicaria.com.au',
}

// Read by the shared Media components (components/Footer.tsx and
// components/home/CTA.tsx). Kept in this shape so /media is untouched.
export const audience = {
  contact: { email: business.email, location: business.location },
}

const enquireEnd = {
  line: 'Tell us how your practice’s shared inbox is used today.',
  link: { label: 'Enquire', href: '/enquire' },
}

export const site: SiteChrome = {
  mail: { fromLabel: 'From', toLabel: 'To', from: 'Vicaria', to: 'You', today: 'Today' },
  metaTitle: 'Vicaria: administrative systems for specialist medical practices',
  metaDescription:
    'We build and run systems that take the administrative work off a specialist practice’s front desk, inside the Microsoft 365 it already uses. Brisbane, Australia.',
  navLinks: [
    { label: 'Systems', href: '/systems' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'For IT providers', href: '/it-providers' },
    { label: 'Data handling', href: '/data-handling' },
    { label: 'About', href: '/about' },
  ],
  navCta: { label: 'Enquire', href: '/enquire' },
  // Two columns, filled row by row: company links first, The Front Office
  // at the bottom of the second column.
  footerLinks: [
    { label: 'Systems', href: '/systems' },
    { label: 'For IT providers', href: '/it-providers' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Data handling', href: '/data-handling' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Enquire', href: '/enquire' },
    { label: 'The Front Office', href: '/systems/front-office' },
  ],
  crossBrand: { label: 'Vicaria Media', href: '/media' },
  footerTagline: 'Administrative systems for specialist medical practices.',
  clockPlace: 'Brisbane',
}

export const home: HomeContent = {
  // H1, three options (VOICE.md: plain, concrete, no hedges):
  //   A  "The practice inbox, sorted before reception arrives."   (picked)
  //   B  "Your front desk’s inbox, ready at 7:00 am."
  //   C  "We take the inbox off your front desk."
  hero: {
    line: 'There when you aren’t.',
    heading: 'The practice inbox, sorted before reception arrives.',
    markedWord: 'sorted',
    body:
      'For specialist practices on Microsoft 365. We mark every email in your shared inbox with your own categories, where it sits, and at 7:00 am we send a summary of what’s still waiting for a reply. Nothing is moved. Nothing is sent.',
    primary: { label: 'Email us about your inbox', href: '/enquire' },
    secondary: { label: 'See what it does', href: '#what-we-do' },
  },

  foldersLabel: 'Folders on this page',

  inbox: {
    eyebrow: 'One inbox',
    heading: 'One inbox, everything in it.',
    kinds: [
      'Referrals from GPs and hospitals',
      'Booking and rescheduling requests',
      'Patients’ questions',
      'Pathology and imaging results',
      'Script requests',
      'Pharmacy and supplier mail',
      'Invoices, Medicare and health fund mail',
      'Fax-to-email notifications',
      'Software and business mail',
      'Marketing',
    ],
    paragraphs: [
      'It all arrives as one list, around the clock, including when the practice is closed.',
      'What each email is, who it’s for and what’s still waiting for a reply depends on whoever is on the desk. Practices improvise with red flags, blue flags and coloured categories to keep up.',
    ],
  },

  whatWeDo: {
    eyebrow: 'What we do',
    heading: 'What we do about it.',
    intro: 'The Front Office, our first system, works in that inbox. It does seven things.',
    items: [
      {
        heading: 'Every email gets one of your categories',
        body: 'It’s marked where it sits in the Inbox, with your own numbered categories. Nothing is moved.',
        detail: { kind: 'categories', title: 'Your categories, in your order', categories: frontOfficeCategories },
      },
      {
        heading: 'Unclear goes to the top',
        body: 'If it can’t tell what an email is, it marks it 00 Unclear, so a person looks first. It doesn’t guess.',
        detail: {
          kind: 'row',
          folder: 'Inbox',
          sender: 'Alex',
          subject: 'Quick question',
          received: '7:41 am',
          category: unclear,
          note: 'Top of the Inbox',
        },
      },
      {
        heading: 'Labelled for the doctor it’s for',
        body: 'When an email names a doctor or staff member, it’s labelled for them. Reception still forwards it.',
        detail: {
          kind: 'row',
          folder: 'Inbox',
          sender: 'Wattlebrook Family Medical',
          subject: 'Referral for Dr Smith',
          received: 'Fri 4:40 pm',
          category: referrals,
          personLabel: 'For Dr Smith',
          note: 'Named in the email',
        },
      },
      {
        heading: 'A summary at 7:00 am',
        body: 'On open days, before reception arrives: what’s still waiting for a reply, oldest first, counting open hours only.',
        detail: {
          kind: 'summary',
          title: 'Inbox summary, Monday 7:00 am',
          groups: [
            {
              heading: appointments.label,
              lines: [
                { first: '7h 20m', subject: 'Request to move my appointment', sender: 'd.ng@example.com' },
                { first: '10m', subject: 'New booking request', sender: 'bookings@example.com' },
              ],
            },
            {
              heading: accounts.label,
              lines: [{ first: '6h', subject: 'Question about invoice 2041', sender: 'accounts@example.com' }],
            },
          ],
          note: 'Oldest first. Open hours only.',
        },
      },
      {
        heading: 'Known senders in Junk, listed',
        body: 'Mail from people you already deal with that landed in Junk is listed in the summary. Nothing is moved out of Junk.',
        detail: {
          kind: 'summary',
          title: 'Possibly misfiled in Junk Email',
          groups: [
            {
              heading: 'From someone who has written to the practice before',
              lines: [{ first: 'Sun 18:03', subject: 'Collection booked for Tuesday', sender: 'dispatch@example.com' }],
            },
          ],
          note: 'Listed. Not moved.',
        },
      },
      {
        heading: 'Approved replies, left in Drafts',
        body: 'For a sender you name, like your booking form, it prepares your approved wording. Someone at the practice checks it and presses Send.',
        detail: {
          kind: 'drafts',
          folder: 'Drafts',
          to: 'Jordan Lee',
          subject: 'Re: New booking request',
          status: 'Not sent',
          preview: 'Thanks for your booking request. Please call reception Monday to Thursday, 8:00 am to 4:00 pm…',
        },
      },
      {
        heading: 'Reception’s changes stick',
        body: 'If reception changes a category, the system never changes it back. We go through the corrections with you each month.',
        detail: {
          kind: 'correction',
          sender: 'Bayside Linen Service',
          subject: 'Delivery schedule for December',
          from: accounts,
          to: pharmacy,
          note: 'Changed by reception. Kept.',
        },
      },
    ],
    link: { label: 'The Front Office in full', href: '/systems/front-office' },
  },

  never: {
    eyebrow: 'What it never does',
    heading: 'What it never does.',
    intro: 'These limits are fixed. No practice can switch them on.',
    items: [
      'It never sends an email.',
      'It never deletes mail or moves it out of the mailbox.',
      'It makes no clinical judgement, assigns no priority and never decides what’s urgent.',
      'It works in one mailbox, the one your IT provider grants.',
      'It never stores what a message says.',
      'Everything is stored and processed in Australia.',
    ],
    link: { label: 'How data is handled', href: '/data-handling' },
  },

  start: {
    eyebrow: 'Getting started',
    heading: 'How a practice starts.',
    steps: [
      { title: 'A conversation', description: 'We talk through how your shared inbox is used today.' },
      {
        title: 'Your settings, written down',
        description:
          'Categories and their order, the people mail is labelled for, opening hours, closures, who gets the summary, any approved reply wording. All in one record.',
      },
      {
        title: 'The agreements',
        description: 'We sign a services agreement and a data processing agreement. Nothing connects before that.',
      },
      {
        title: 'Your IT provider grants access',
        description: 'Two Microsoft permissions, restricted to the one mailbox.',
        link: { label: 'For your IT provider', href: '/it-providers' },
      },
      {
        title: 'A quiet test week',
        description: 'The system records what it would have done. Nothing appears in your mailbox, and the summary comes to us.',
      },
      {
        title: 'Switched on when you say so',
        description: 'Reception adds the category names to Outlook once, with a one-page guide.',
      },
    ],
    closing: 'Later changes, like a new category, a new doctor or holiday dates, are approved by email. You administer nothing.',
  },

  judged: {
    eyebrow: 'How it’s judged',
    heading: 'One measure, every month.',
    paragraphs: [
      'Before it starts, we agree one measure in writing: the share of emails whose category nobody at the practice changes. We report it monthly.',
      'Beside it, the median time from arrival to first reply, by category, counted in open hours.',
    ],
  },

  notFor: {
    eyebrow: 'Not for every practice',
    heading: 'It isn’t for every practice.',
    items: [
      'Practices not on Microsoft 365',
      'Practices wanting clinical triage, urgency scoring or risk ranking',
      'Inboxes too quiet to justify it',
      'Practices wanting software to run themselves',
    ],
  },

  end: {
    line: 'Practice managers: email us about your shared inbox.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const systemsIndex: SystemsIndexContent = {
  header: {
    eyebrow: 'Systems',
    heading: 'Systems we build and run.',
    intro:
      'Each system takes one piece of administrative work off a specialist practice’s front desk, inside the Microsoft 365 it already uses. Each is one product, set up from a written record of your practice’s settings, and we run it. The Front Office is our first. We list a system here once it’s available.',
  },
  linkLabel: 'What it does',
  end: enquireEnd,
}

export const howItWorks: HowItWorksContent = {
  header: {
    eyebrow: 'How it works',
    heading: 'How an engagement runs.',
    intro: 'Every system we run goes into a practice the same way.',
  },

  steps: {
    heading: 'From the first conversation to a running system.',
    steps: [
      {
        title: 'We talk through the work',
        description: 'We look at how the work is done at your front desk today.',
      },
      {
        title: 'We write your settings down',
        description: 'We agree the settings with you and record them in one configuration record.',
      },
      {
        title: 'We sign the agreements',
        description: 'We sign a services agreement and a data processing agreement. Nothing connects before that.',
      },
      {
        title: 'Your IT provider grants access',
        description: 'Only to what the system needs, and your IT provider can withdraw it at any time.',
      },
      {
        title: 'We install it and run it',
        description:
          'After a quiet test, the system goes live inside the Microsoft 365 you already use. From then on we run it, and you get the work back done.',
      },
    ],
  },

  sections: [
    {
      heading: 'One product. One record of your settings.',
      paragraphs: [
        'Each system is one product. Nothing is a custom build. Everything that’s different about your practice goes in the configuration record.',
        'Once it’s running, a change to that record takes effect when you approve it by email.',
      ],
    },
    {
      heading: 'One number, agreed up front.',
      paragraphs: [
        'Before a system starts, we agree one measure of its work with you, in writing. We report it every month, from the system’s own record.',
      ],
    },
    {
      heading: 'Nothing for you to run.',
      paragraphs: ['We run every system we install. Reception has no software to learn and you have nothing to maintain.'],
    },
    {
      heading: 'Ending an engagement.',
      paragraphs: [
        'There’s no minimum term. Either of us can end it at any time, in writing.',
        'Your own IT administrator can withdraw our access at any time, without asking us, and it takes effect immediately. Your data is returned or deleted, whichever you choose, within 30 days of asking.',
      ],
      link: { label: 'How data is handled', href: '/data-handling' },
    },
  ],

  example: {
    heading: 'Our first system: The Front Office.',
    paragraphs: [
      'The Front Office goes in over six steps, from a conversation about your shared inbox to a quiet test week and switch-on. Its page walks through each one.',
    ],
    link: { label: 'The Front Office installation', href: '/systems/front-office#installation' },
  },

  end: enquireEnd,
}

export const about: AboutContent = {
  header: {
    eyebrow: 'About',
    heading: 'We’re Vicaria.',
  },
  paragraphs: [
    'We’re a Brisbane firm. We build and run systems that take the administrative work off specialist medical practices’ front desks, inside the Microsoft 365 they already use.',
    'They’re for practices where reception carries the shared inbox alongside the phones, the front counter and the day’s patients.',
    'Each system is one product, set up from a written record of your practice’s settings. We run it, and you get the work back done. The Front Office is our first.',
  ],
  foundersHeading: 'Founders',
  founders: [
    { name: 'Sam Hindmarsh', role: 'Development' },
    { name: 'Blake Russell', role: 'Client communications' },
  ],
  signature: { company: 'Vicaria Systems', place: 'Brisbane', sentFrom: 'Sent from Brisbane' },
  detailsHeading: 'Business details',
  detailLabels: { legalName: 'Trading name', abn: 'ABN', location: 'Location', email: 'Email' },
  end: {
    line: 'The best way to reach us is email: admin@vicaria.com.au.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

// <title> and meta description per flagship route. The layout appends
// " | Vicaria" to each title.
export const pageMeta = {
  systems: {
    title: 'Systems',
    description: 'The systems we build and run for specialist medical practices. The Front Office is our first.',
  },
  howItWorks: {
    title: 'How it works',
    description:
      'How working with us runs, for every system: we write your settings down, sign the agreements, install it and run it, and report one agreed number each month.',
  },
  itProviders: {
    title: 'For IT providers: The Front Office',
    description:
      'What a practice’s IT provider is asked to grant for The Front Office: two Microsoft Graph application permissions, restricted to one mailbox.',
  },
  dataHandling: {
    title: 'Data handling',
    description:
      'How we handle practice data in every system we run: stored and processed in Australia, never used to train a model, returned or deleted on request.',
  },
  privacy: { title: 'Privacy policy', description: 'What personal information we collect, why, and what happens to it.' },
  about: { title: 'About', description: 'Vicaria Systems, Brisbane. ABN 67 221 728 299. Administrative systems for specialist medical practices.' },
  enquire: { title: 'Enquire', description: 'How to reach us: by email.' },
}
