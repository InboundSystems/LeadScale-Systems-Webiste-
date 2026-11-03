import type {
  AboutContent,
  BusinessDetails,
  HomeContent,
  HowItWorksContent,
  SiteChrome,
  SystemsIndexContent,
} from './types'

// Company-level content: what Vicaria is, independent of which systems it
// currently runs. Vicaria takes recurring administrative work off service
// businesses; The Front Office is one system it operates, never the brand.
// Nothing here describes email, inboxes or one system's details, except
// where a system is named as an example and linked. content/systems.ts holds
// everything system-specific.
//
// Positioning: docs/REPLY-2026-11-03-company-first.md, which overrides
// sections 3 and 7 of docs/WEBSITE-REWORK-2026-11.md. Facts: sections 4 and 5.

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
  metaTitle: 'Vicaria: administrative systems for service businesses',
  metaDescription:
    'Vicaria takes recurring administrative work off service businesses. It builds and operates systems for that work inside the software a business already uses. Brisbane, Australia.',
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
  footerTagline: 'Vicaria takes recurring administrative work off service businesses.',
}

export const home: HomeContent = {
  hero: {
    eyebrow: 'Administrative systems, built and operated',
    heading: 'Recurring administrative work leaves the desk and comes back finished.',
    body:
      'Vicaria builds and operates systems that take on the repetitive administrative work in a service business, inside the software it already uses. That leaves the business’s people free for work that needs a person.',
    primary: { label: 'Enquire', href: '/enquire' },
    secondary: { label: 'How it works', href: '/how-it-works' },
  },

  work: {
    email: { from: 'Vicaria', to: 'You', subject: 'The work on your desk' },
    heading: 'The kind of work Vicaria takes on.',
    items: [
      {
        heading: 'It arrives every day',
        body: 'The same kinds of item come in daily, and each one has to be dealt with.',
      },
      {
        heading: 'It follows the business’s own rules',
        body: 'How each item is handled is already settled, and the rules can be written down.',
      },
      {
        heading: 'It needs no judgement',
        body: 'Nothing in it calls for a decision that belongs to a person.',
      },
      {
        heading: 'It still takes hours',
        body: 'Done by hand, it takes hours each week from people with other work to do.',
      },
    ],
    closing:
      'Sorting the correspondence a business receives, and keeping track of what is still waiting for a reply, is work of this kind.',
  },

  method: {
    email: { from: 'Vicaria', subject: 'How every system runs' },
    heading: 'Every system runs the same way.',
    items: [
      {
        heading: 'The job is identified',
        body: 'Vicaria and the business agree which recurring job the system takes on.',
      },
      {
        heading: 'The rules are written down',
        body: 'The system is configured to the business’s own rules, recorded in one document.',
      },
      {
        heading: 'Vicaria installs and operates it',
        body: 'The system runs inside the software the business already uses.',
      },
      {
        heading: 'The client administers nothing',
        body: 'The client receives completed work. There is nothing to set up or maintain.',
      },
      {
        heading: 'One figure, reported monthly',
        body: 'One measure is agreed in writing before the system operates, then reported each month.',
      },
      {
        heading: 'Changes approved by the client',
        body: 'A change to the configuration takes effect when the client approves it by email.',
      },
    ],
    link: { label: 'How an engagement runs', href: '/how-it-works' },
  },

  principles: {
    email: { from: 'Vicaria', subject: 'What holds for every system' },
    heading: 'What holds for every system.',
    items: [
      'Existing software is kept. Nothing is replaced.',
      'Anything that needs judgement stays with a person.',
      'Vicaria operates the system. The client has nothing to administer.',
      'An agreement and a data processing agreement are signed before anything connects.',
      'All data is stored and processed in Australia.',
      {
        text: 'An engagement has no minimum term. Either party can end it at any time by written notice.',
        detail:
          'The client’s own administrator can withdraw access immediately, without going through Vicaria, and data is returned or deleted at the client’s election, within 30 days of a request.',
      },
    ],
    link: { label: 'How data is handled', href: '/data-handling' },
  },

  systems: {
    eyebrow: 'Systems',
    heading: 'Systems Vicaria operates.',
    intro:
      'Each system takes one recurring administrative job off a business. Systems are listed here when they are available.',
    linkLabel: 'What it does',
  },

  nextMorning: {
    eyebrow: 'The next morning',
    heading: 'One email says what is still waiting.',
    caption: 'The Front Office morning summary. Fictional practice.',
    newLabel: 'New',
    notesLabel: 'Notes on the summary',
    annotations: [
      { match: 'Time counts open hours only', note: 'Counts open hours only' },
      { match: '00 Unclear', note: 'Unclear sits first, so a person looks at it' },
      { match: 'Passed on, no reply to the sender yet', note: 'Optional: mail passed on with no reply yet' },
      { match: 'Possibly misfiled in Junk Email', note: 'Listed only. Nothing is moved out of Junk' },
    ],
  },

  end: {
    line: 'Tell us which administrative job takes the most time in your business.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const systemsIndex: SystemsIndexContent = {
  header: {
    eyebrow: 'Systems',
    heading: 'Systems Vicaria builds and operates.',
    intro:
      'Each system takes one recurring administrative job off a business. It is one product, configured from a written record of the business’s own rules, and operated by Vicaria. Systems are listed here when they are available.',
  },
  linkLabel: 'What it does',
  end: {
    line: 'Tell us which administrative job takes the most time in your business.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const howItWorks: HowItWorksContent = {
  header: {
    eyebrow: 'How it works',
    heading: 'How an engagement runs.',
    intro: 'Every system Vicaria operates follows the same method, whatever job it takes on.',
  },

  steps: {
    heading: 'From the first conversation to operation.',
    steps: [
      {
        title: 'The job is identified',
        description:
          'Vicaria and the business identify one recurring administrative job and look at how it is done today.',
      },
      {
        title: 'The rules are written down',
        description:
          'The system is configured to the business’s own rules. They are agreed and recorded in one configuration record.',
      },
      {
        title: 'The agreements are signed',
        description: 'A services agreement and a data processing agreement are signed. Nothing connects before that.',
      },
      {
        title: 'Vicaria installs and operates it',
        description:
          'The system is installed inside the software the business already uses. From then on Vicaria operates it, and the client receives completed work.',
      },
    ],
  },

  sections: [
    {
      heading: 'One product, one configuration record.',
      paragraphs: [
        'Each system is one product. Nothing is a custom build. Everything that differs between businesses is written in the configuration record.',
        'Once the system operates, a change to that record takes effect when the client approves it by email.',
      ],
    },
    {
      heading: 'One measure, agreed in writing.',
      paragraphs: [
        'Before a system first operates, one measure of its work is agreed with the client in writing. It is reported monthly, from the system’s own record.',
      ],
    },
    {
      heading: 'Nothing to administer.',
      paragraphs: [
        'Vicaria operates every system it installs. The client has no software to learn and nothing to maintain.',
      ],
    },
    {
      heading: 'Ending an engagement.',
      paragraphs: [
        'An engagement has no minimum term. Either party can end it at any time by written notice.',
        'The client’s own administrator can withdraw access immediately, without going through Vicaria, and data is returned or deleted at the client’s election, within 30 days of a request.',
      ],
      link: { label: 'How data is handled', href: '/data-handling' },
    },
  ],

  example: {
    heading: 'An example: The Front Office.',
    paragraphs: [
      'The Front Office is installed in six steps, from a conversation about the shared inbox to a quiet test week and switch-on. Its page sets out each step.',
    ],
    link: { label: 'The Front Office installation', href: '/systems/front-office#installation' },
  },

  end: {
    line: 'Tell us which administrative job takes the most time in your business.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const about: AboutContent = {
  header: {
    eyebrow: 'About',
    heading: 'Vicaria.',
  },
  paragraphs: [
    'Vicaria is a Brisbane firm that takes recurring administrative work off service businesses. It builds systems for that work and operates them inside the software each business already uses.',
    'Its clients are service businesses where administrative work has no one dedicated to it, or where reception carries more than the role allows.',
    'Each system is one product, configured from a written record of the business’s own rules. Vicaria operates it, and the client receives completed work.',
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
// " | Vicaria" to each title. Company-level routes carry no email or inbox
// wording; /it-providers is a system page and names its system.
export const pageMeta = {
  systems: {
    title: 'Systems',
    description: 'The systems Vicaria builds and operates, each taking one recurring administrative job off a business.',
  },
  howItWorks: {
    title: 'How it works',
    description:
      'How an engagement with Vicaria runs, for every system: the job identified, the rules written down, the system operated by Vicaria, one measure agreed.',
  },
  itProviders: {
    title: 'For IT providers: The Front Office',
    description:
      'What a practice’s IT provider is asked to grant for The Front Office: two Microsoft Graph application permissions, restricted to one mailbox.',
  },
  dataHandling: {
    title: 'Data handling',
    description:
      'How Vicaria handles data in every system it operates: stored and processed in Australia, never used to train a model, returned or deleted on request.',
  },
  privacy: { title: 'Privacy policy', description: 'What personal information Vicaria collects, why, and what happens to it.' },
  about: { title: 'About', description: 'Vicaria Systems, Brisbane. ABN 67 221 728 299.' },
  enquire: { title: 'Enquire', description: 'How to reach Vicaria, by email.' },
}
