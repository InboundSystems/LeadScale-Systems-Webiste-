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
  mail: { fromLabel: 'From', toLabel: 'To', from: 'Vicaria', to: 'You', today: 'Today' },
  metaTitle: 'Vicaria: administrative systems for service businesses',
  metaDescription:
    'We take the repetitive admin off service businesses and run it inside the software you already use. Brisbane, Australia.',
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
  footerTagline: 'We take the repetitive admin off service businesses.',
  clockPlace: 'Brisbane',
}

export const home: HomeContent = {
  hero: {
    sent: 'Today, 8:00 am',
    heading: 'Nobody started a business to do the admin.',
    markedWord: 'the admin',
    body:
      'We take the repetitive admin off your desk and run it inside the software you already use. You keep the judgement calls. We handle the rest.',
    primary: { label: 'Tell us what’s eating your week', href: '/enquire' },
    secondary: { label: 'See how it works', href: '/how-it-works' },
    list: {
      title: 'Monday',
      items: [
        { text: 'Sort the weekend’s email', done: true },
        { text: 'Work out who’s still waiting for a reply', done: true },
        { text: 'Call back about the complaint', done: false },
        { text: 'Decide on the new supplier quote', done: false },
        { text: 'Approve the roster change', done: false },
      ],
      doneNote: 'off your desk',
      personNote: 'needs a person',
      doneLabel: 'Off your desk:',
      caption: 'A Monday list. Fictional business.',
    },
  },

  // The first story, "One night". The opening line, two options (VOICE.md;
  // claim limited to: our systems keep working while the business is closed):
  //   A  "There when you aren’t."            (picked: the brand idea in four words)
  //   B  "Still working after you lock up."
  night: {
    heading: 'There when you aren’t.',
    clock: { days: ['Monday', 'Tuesday'], start: 18 * 60 },
    watch: { off: 'Vicaria', on: 'Vicaria · on watch' },
    beats: [
      { key: 'close', minute: 18 * 60, text: 'Closed. Five things still on the list.', target: 'title' },
      {
        key: 'the-work',
        id: 'the-work',
        minute: 18 * 60 + 20,
        text: 'Two of them are the kind of work we take on. Three need a person.',
        target: 'none',
        showsWork: true,
      },
      { key: 'sorted', minute: 23 * 60 + 40, label: 'Overnight', text: 'While you’re closed, we sort the email.', target: 0, crosses: [0] },
      {
        key: 'waiting',
        minute: 24 * 60 + 150,
        label: 'Overnight',
        text: 'Then we work out who’s still waiting for a reply.',
        target: 1,
        crosses: [1],
      },
      { key: 'judgement', minute: 24 * 60 + 285, text: 'The judgement calls wait for a person.', target: 'person', waits: true },
      { key: 'morning', minute: 24 * 60 + 7 * 60, text: 'Two done. Three waiting for you.', target: 'none', morning: true },
    ],
    tags: [
      { item: 0, text: 'turns up every day' },
      { item: 0, text: 'follows your rules' },
      { item: 1, text: 'needs no judgement' },
      { item: 1, text: 'still takes hours' },
    ],
    personTag: 'needs a person',
    morningLine: 'Two done. Three waiting for you.',
  },

  foldersLabel: 'Folders on this page',

  work: {
    eyebrow: 'The work',
    sent: 'Today, 8:02 am',
    heading: 'The kind of work we take on.',
    items: [
      {
        heading: 'It turns up every day',
        body: 'The same kinds of thing land on the desk daily, and every one has to be dealt with.',
      },
      {
        heading: 'It follows your rules',
        body: 'You already know how each one should be handled. The rules fit on a page.',
      },
      {
        heading: 'It needs no judgement',
        body: 'None of it calls for a decision only a person should make.',
      },
      {
        heading: 'It still takes hours',
        body: 'Done by hand, it takes hours a week from people with other work to do.',
      },
    ],
    closing: 'The same work, every day, done the same way, by people with other work to do.',
  },

  method: {
    eyebrow: 'How it runs',
    sent: 'Today, 8:09 am',
    heading: 'Every system runs the same way.',
    items: [
      {
        heading: 'We agree the job',
        body: 'Together we pick the one recurring job the system takes on.',
      },
      {
        heading: 'We write your rules down',
        body: 'The system is set up to your own rules, recorded in one document.',
      },
      {
        heading: 'We install it and run it',
        body: 'It runs inside the software you already use.',
      },
      {
        heading: 'You administer nothing',
        body: 'You get the work back done. There’s nothing to set up or maintain.',
      },
      {
        heading: 'One number, every month',
        body: 'Before it starts, we agree one measure in writing. We report it every month.',
      },
      {
        heading: 'You approve every change',
        body: 'A change to the setup takes effect when you approve it by email.',
      },
    ],
    link: { label: 'How an engagement runs', href: '/how-it-works' },
    // The artifact in the second story. Fictional and generic: no sector,
    // no business, no product names, no figures.
    story: {
      jobTitle: 'The job',
      rulesTitle: 'Your rules',
      rules: [
        'Every email → one of your own categories',
        'Waiting for a reply → listed, oldest first',
        'Can’t tell → a person looks first',
        'Needs judgement → left for you',
      ],
      windowTitle: 'Your software',
      doneRows: ['Sort the weekend’s email', 'Work out who’s still waiting for a reply'],
      runBy: 'Run by Vicaria',
      monthlyTitle: 'Every month',
      monthlyText: 'One measure, agreed before we start. Reported every month.',
      change: {
        from: 'Vicaria',
        subject: 'Proposed change to your setup',
        body: 'It takes effect when you approve it.',
        approve: 'Approve',
        notNow: 'Not now',
        applied: 'Change approved. In effect.',
      },
    },
  },

  principles: {
    eyebrow: 'What never changes',
    sent: 'Today, 8:15 am',
    heading: 'What never changes.',
    items: [
      'You keep your software. We don’t replace anything.',
      'Anything that needs judgement stays with a person.',
      'We run the system. You have nothing to administer.',
      'We sign a services agreement and a data processing agreement before anything connects.',
      'Your data is stored and processed in Australia.',
      {
        text: 'There’s no minimum term. Either of us can end it at any time, in writing.',
        detail:
          'Your own IT administrator can withdraw our access at any time, without asking us, and it takes effect immediately. Your data is returned or deleted, whichever you choose, within 30 days of asking.',
      },
    ],
    link: { label: 'How data is handled', href: '/data-handling' },
  },

  systems: {
    eyebrow: 'Systems',
    sent: 'Today, 8:21 am',
    heading: 'Systems we run.',
    intro: 'Each system takes one recurring admin job off your desk. We list a system here once it’s available.',
    linkLabel: 'What it does',
    previewLinkLabel: 'See a night at the practice',
  },

  end: {
    line: 'Tell us which admin job takes the most time in your business.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const systemsIndex: SystemsIndexContent = {
  header: {
    eyebrow: 'Systems',
    heading: 'Systems we build and run.',
    intro:
      'Each system takes one recurring admin job off your desk. Each is one product, set up from a written record of your own rules, and we run it. We list a system here once it’s available.',
  },
  linkLabel: 'What it does',
  end: {
    line: 'Tell us which admin job takes the most time in your business.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const howItWorks: HowItWorksContent = {
  header: {
    eyebrow: 'How it works',
    heading: 'How an engagement runs.',
    intro: 'Every system we run goes in the same way, whatever job it takes on.',
  },

  steps: {
    heading: 'From the first conversation to a running system.',
    steps: [
      {
        title: 'We agree the job',
        description: 'We sit down with you, pick one recurring admin job, and look at how it’s done today.',
      },
      {
        title: 'We write your rules down',
        description: 'We set the system up to your own rules. We agree them with you and record them in one configuration record.',
      },
      {
        title: 'We sign the agreements',
        description: 'We sign a services agreement and a data processing agreement. Nothing connects before that.',
      },
      {
        title: 'We install it and run it',
        description:
          'We install the system inside the software you already use. From then on we run it, and you get the work back done.',
      },
    ],
  },

  sections: [
    {
      heading: 'One product. One record of your rules.',
      paragraphs: [
        'Each system is one product. Nothing is a custom build. Everything that’s different about your business goes in the configuration record.',
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
      paragraphs: ['We run every system we install. You’ve no software to learn and nothing to maintain.'],
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
    heading: 'An example: The Front Office.',
    paragraphs: [
      'The Front Office goes in over six steps, from a conversation about the practice’s shared inbox to a quiet test week and switch-on. Its page walks through each one.',
    ],
    link: { label: 'The Front Office installation', href: '/systems/front-office#installation' },
  },

  end: {
    line: 'Tell us which admin job takes the most time in your business.',
    link: { label: 'Enquire', href: '/enquire' },
  },
}

export const about: AboutContent = {
  header: {
    eyebrow: 'About',
    heading: 'We’re Vicaria.',
  },
  paragraphs: [
    'We’re a Brisbane firm. We take the repetitive admin off service businesses: we build systems for it, and we run them inside the software each business already uses.',
    'It’s for service businesses where nobody is dedicated to the admin, or where reception is carrying more than the role allows.',
    'Each system is one product, set up from a written record of your own rules. We run it, and you get the work back done.',
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
// " | Vicaria" to each title. Company-level routes carry no email or inbox
// wording; /it-providers is a system page and names its system.
export const pageMeta = {
  systems: {
    title: 'Systems',
    description: 'The systems we build and run, each taking one recurring admin job off a business’s desk.',
  },
  howItWorks: {
    title: 'How it works',
    description:
      'How working with us runs, for every system: we agree the job, write your rules down, install and run it, and report one agreed number each month.',
  },
  itProviders: {
    title: 'For IT providers: The Front Office',
    description:
      'What a practice’s IT provider is asked to grant for The Front Office: two Microsoft Graph application permissions, restricted to one mailbox.',
  },
  dataHandling: {
    title: 'Data handling',
    description:
      'How we handle data in every system we run: stored and processed in Australia, never used to train a model, returned or deleted on request.',
  },
  privacy: { title: 'Privacy policy', description: 'What personal information we collect, why, and what happens to it.' },
  about: { title: 'About', description: 'Vicaria Systems, Brisbane. ABN 67 221 728 299.' },
  enquire: { title: 'Enquire', description: 'How to reach us: by email.' },
}
