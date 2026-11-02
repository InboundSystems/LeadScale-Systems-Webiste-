import type {
  AboutContent,
  BusinessDetails,
  HomeContent,
  HowItWorksContent,
  SiteChrome,
  SystemsIndexContent,
} from './types'

// Company-level content: what Vicaria is, independent of which systems it
// currently runs. This is what the homepage sells. content/systems.ts is kept
// separate so a system change never requires touching this file.
//
// Every claim traces to sections 3 and 4 of docs/WEBSITE-REWORK-2026-11.md.

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

export const site: SiteChrome = {
  metaTitle: 'Vicaria | Systems for service businesses, built and operated',
  metaDescription:
    'Vicaria builds and operates systems that take recurring administrative work off service businesses, inside the software they already use. Brisbane, Australia.',
  navLinks: [
    { label: 'Systems', href: '/systems' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'For IT providers', href: '/it-providers' },
    { label: 'Data handling', href: '/data-handling' },
    { label: 'About', href: '/about' },
  ],
  navCta: { label: 'Enquire', href: '/enquire' },
  footerLinks: [
    { label: 'Systems', href: '/systems' },
    { label: 'The Front Office', href: '/systems/front-office' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'For IT providers', href: '/it-providers' },
    { label: 'Data handling', href: '/data-handling' },
    { label: 'About', href: '/about' },
    { label: 'Enquire', href: '/enquire' },
    { label: 'Privacy', href: '/privacy' },
  ],
  crossBrand: { label: 'Vicaria Media', href: '/media' },
  footerTagline:
    'Vicaria builds and operates systems that take recurring administrative work off service businesses.',
}

export const home: HomeContent = {
  hero: {
    eyebrow: 'Systems, built and operated',
    heading: 'Systems that take recurring administrative work off service businesses.',
    body:
      'Vicaria is a Brisbane firm that builds these systems and operates them inside the software a business already uses. Each one delivers completed work. The client administers nothing and learns nothing new.',
    primary: { label: 'Enquire', href: '/enquire' },
    secondary: { label: 'See The Front Office', href: '/systems/front-office' },
  },

  model: {
    eyebrow: 'The model',
    heading: 'Every system is one product, configured in writing.',
    items: [
      {
        heading: 'Configured, not custom-built',
        body:
          'Each system is a single product. It is configured for each business from a written set of settings agreed at onboarding.',
      },
      {
        heading: 'Changes approved by email',
        body:
          'Once a system operates, a change to its settings takes effect when the client approves it by email.',
      },
      {
        heading: 'Operated by Vicaria',
        body:
          'Vicaria runs each system and delivers its output as completed work. There is nothing for the client to administer.',
      },
    ],
  },

  firstSystem: {
    eyebrow: 'The first system',
    heading: 'Built first for specialist medical and allied health practices.',
    linkLabel: 'What The Front Office does',
  },

  neverHappens: {
    eyebrow: 'Fixed limits',
    heading: 'What The Front Office never does.',
    intro: 'These limits are the same for every practice. None of them is a setting.',
    items: [
      'It never sends an email.',
      'It never deletes mail or moves it out of the mailbox.',
      'It never touches any mailbox but the one it was granted.',
      'It never stores the contents of a message.',
      'It never processes information outside Australia.',
      'It makes no clinical judgement and assigns no priority.',
    ],
    link: { label: 'The Front Office in full', href: '/systems/front-office' },
  },

  data: {
    eyebrow: 'Data',
    heading: 'Stored and processed in Australia.',
    paragraphs: [
      'All storage and processing takes place in the Sydney region. Amazon Web Services runs the system and sends the morning summary. Supabase holds the database.',
      'Message contents are not stored. The system keeps a record of what it did: sender, subject line, time and category.',
    ],
    links: [
      { label: 'How data is handled', href: '/data-handling' },
      { label: 'What an IT provider is asked to grant', href: '/it-providers' },
    ],
  },

  end: {
    line: 'Enquiries are by email, to admin@vicaria.com.au.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const systemsIndex: SystemsIndexContent = {
  header: {
    eyebrow: 'Systems',
    heading: 'Systems Vicaria builds and operates.',
    intro:
      'Each system is one product, configured for each business from a written set of settings and operated by Vicaria. The Front Office is the first.',
  },
  linkLabel: 'What it does',
  end: {
    line: 'To ask whether a system suits a business, email admin@vicaria.com.au.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const howItWorks: HowItWorksContent = {
  header: {
    eyebrow: 'How it works',
    heading: 'How an engagement runs.',
    intro:
      'Every engagement follows the same six steps, from the first conversation to the day The Front Office is switched on.',
  },

  steps: {
    heading: 'Installation, in six steps.',
    steps: [
      {
        title: 'A conversation about the inbox',
        description: 'Vicaria and the practice discuss how the shared inbox is used today, and look at its shape.',
      },
      {
        title: 'The settings are written down',
        description:
          'The practice’s settings are agreed and recorded in one configuration record: the categories and their order, the people mail is labelled for, opening hours, closures, who receives the summary, and any approved reply wording.',
      },
      {
        title: 'The agreements are signed',
        description: 'A services agreement and a data processing agreement are signed. Nothing connects before that.',
      },
      {
        title: 'The IT administrator grants access',
        description: 'The practice’s IT administrator grants access to one mailbox and restricts it to that mailbox.',
        link: { label: 'What is granted', href: '/it-providers' },
      },
      {
        title: 'A quiet test week',
        description: 'The system records what it would have done. Nothing appears in the mailbox.',
      },
      {
        title: 'Switched on when the practice says so',
        description: 'Reception adds the category names to Outlook once, using a one-page guide.',
      },
    ],
  },

  configuration: {
    heading: 'One configuration record per practice.',
    paragraphs: [
      'The Front Office is one product. Everything that differs between practices is written in the configuration record agreed at step two.',
      'Once the system operates, a change to that record takes effect when the practice approves it by email.',
    ],
  },

  judged: {
    heading: 'One measure, agreed in writing.',
    paragraphs: [
      'Before the system first operates, one measure is agreed in writing: the proportion of emails whose category nobody at the practice changes. It is reported monthly, from the system’s own record.',
      'A second figure is reported beside it: the median time from arrival to first reply, by category, counted in open hours.',
      'Every correction is recorded, never overwritten, and reviewed with the practice at a monthly review.',
    ],
  },

  access: {
    heading: 'Withdrawing access and returning data.',
    paragraphs: [
      'The practice’s own IT administrator can withdraw access at any time, without involving Vicaria.',
      'Data is returned or deleted at the practice’s election. Deletion is completed within 30 days of a request.',
    ],
    link: { label: 'How data is handled', href: '/data-handling' },
  },

  end: {
    line: 'Step four is set out in full for the practice’s IT provider.',
    link: { label: 'For IT providers', href: '/it-providers' },
  },
}

export const about: AboutContent = {
  header: {
    eyebrow: 'About',
    heading: 'Vicaria.',
  },
  paragraphs: [
    'Vicaria is a Brisbane firm that builds and operates systems which take recurring administrative work off service businesses, inside the software they already use.',
    'Each system is one product, configured for each business from a written set of settings. The first is The Front Office, for specialist medical and allied health practices.',
  ],
  foundersHeading: 'Founders',
  founders: [
    { name: 'Sam Hindmarsh', role: 'Development' },
    { name: 'Blake Russell', role: 'Client communications' },
  ],
  detailsHeading: 'Business details',
  detailLabels: { legalName: 'Trading name', abn: 'ABN', location: 'Location', email: 'Email' },
  end: {
    line: 'Enquiries are by email, to admin@vicaria.com.au.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

// <title> and meta description per flagship route. The layout appends
// " | Vicaria" to each title.
export const pageMeta = {
  systems: { title: 'Systems', description: 'The systems Vicaria builds and operates.' },
  howItWorks: {
    title: 'How it works',
    description: 'How an engagement runs: six installation steps, one configuration record, and one agreed measure.',
  },
  itProviders: {
    title: 'For IT providers',
    description:
      'What a practice’s IT provider is asked to grant for The Front Office: two Microsoft Graph application permissions, restricted to one mailbox.',
  },
  dataHandling: {
    title: 'Data handling',
    description: 'Where The Front Office stores and processes data, what it keeps, and who can access it.',
  },
  privacy: { title: 'Privacy policy', description: 'What personal information Vicaria collects, why, and what happens to it.' },
  about: { title: 'About', description: 'Vicaria Systems, Brisbane. ABN 67 221 728 299.' },
  enquire: { title: 'Enquire', description: 'How to reach Vicaria, by email.' },
}
