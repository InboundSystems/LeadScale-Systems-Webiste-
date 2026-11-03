import type { PrivacyPageContent } from './types'

// /privacy. The automated decision-making section carries the verbatim
// intended purpose statement (content/intended-purpose.ts), as section 7 of
// docs/WEBSITE-REWORK-2026-11.md requires. Data claims trace to section 5.

export const privacy: PrivacyPageContent = {
  header: {
    eyebrow: 'Privacy',
    heading: 'Privacy policy.',
    intro:
      'This policy explains what personal information we, Vicaria, collect, why, and what happens to it. It applies to everyone who deals with us directly, and describes the separate arrangement for information we handle on behalf of a client.',
  },

  lastUpdatedLabel: 'Last updated',
  lastUpdated: '2 November 2026',

  sections: [
    {
      heading: 'Two different kinds of information.',
      paragraphs: [
        'Some personal information is ours directly: the contact details of people who enquire, and of the people at a client business we deal with day to day. Separately, we handle information inside a client’s own systems on that client’s behalf. That includes correspondence that may contain personal and health information about the client’s own patients.',
        'For that second kind, the client decides how it’s used. We act only as the client’s service provider, on its instructions, under a written data processing agreement signed before we connect to any client system.',
      ],
    },
    {
      heading: 'What we collect for ourselves.',
      paragraphs: [
        'We use no website analytics or tracking, and nobody has to identify themselves to read the site. We don’t ask for any sensitive information through the website. We collect personal information through the website only when you choose to email us, and then only what you put in the email. Beyond that, we collect:',
      ],
      bullets: [
        'Contact details and role, for people at a client business we deal with',
        'Records of correspondence',
      ],
    },
    {
      heading: 'Why we collect it.',
      paragraphs: [
        'We use the information we collect for ourselves to answer an enquiry, to provide and run the systems we’re engaged to run, to invoice and keep business records, and to meet legal obligations.',
        'We don’t use it for marketing. There’s no mailing list, and we never sell it.',
      ],
    },
    {
      heading: 'Information handled for clients.',
      paragraphs: [
        'We use information inside a client’s own systems only to provide the service, and only on that client’s documented instructions. It’s never used for another client, and never used to train any AI model.',
        'We don’t store message contents. Email bodies are read at the moment of categorising and not kept. What we keep instead is the sender, subject line, dates, category, and whether the email has been replied to.',
        'If your information is handled this way, contact the business you dealt with directly. If we receive a request like this, we refer it to that business rather than act on it.',
      ],
    },
    {
      heading: 'Where information is held.',
      paragraphs: [
        'Where information derived from My Health Record is involved, Australian law prohibits holding or processing it outside Australia. That obligation binds us as a service provider just as it binds the client, and patient consent can’t waive it.',
        'All storage and processing happens in Australia, in the Sydney region, and we disclose no personal information to any recipient overseas. A client’s own Microsoft 365 is not our sub-processor: the information is already the client’s, and already there.',
        'We use two providers, and this is the complete list. Clients get 30 days’ notice before we add or replace any provider:',
      ],
      bullets: [
        'Amazon Web Services, in the Sydney region, which runs the system, runs the AI model through Amazon Bedrock, and sends the morning summary',
        'Supabase, in Sydney, which holds the database',
      ],
    },
    {
      heading: 'Security.',
      paragraphs: ['We apply the following:'],
      bullets: [
        'Access by our people limited to named individuals, with multi-factor authentication',
        'Every access by our people logged',
        'Each client’s information separated at the database layer',
        'Encrypted in transit and at rest',
        'No password ever requested; access is granted and withdrawn by the client’s own administrator',
        'The permissions requested published in full on the page for IT providers',
      ],
    },
    {
      heading: 'Automated decision-making.',
      paragraphs: [
        'The Front Office reads email arriving in a client’s shared mailbox and marks each email with a category the client has defined. It makes no clinical judgement, assigns no priority and does not decide what is urgent. It never sends an email: a prepared reply waits in Drafts until a person sends it.',
      ],
      includesIntendedPurpose: true,
      after: [
        'From 10 December 2026, Australian privacy law requires disclosure where an automated system is involved in decisions affecting individuals. We give each client the wording for its own privacy policy.',
      ],
    },
    {
      heading: 'Access and correction.',
      paragraphs: [
        'You can ask what we hold about you, and ask us to correct it, free of charge.',
        'If your request concerns information held for a client, we refer it to that client.',
      ],
    },
    {
      heading: 'Complaints.',
      paragraphs: [
        'You can make a complaint by email to admin@vicaria.com.au. We’ll acknowledge it and respond.',
        'If you’re not satisfied with our response, you can complain to the Office of the Australian Information Commissioner, at oaic.gov.au.',
      ],
    },
    {
      heading: 'How long information is kept.',
      paragraphs: [
        'We keep information only as long as we need it, or as the law requires.',
        'We return or delete information handled for a client, as the client chooses. Deletion is done within 30 days of a request.',
      ],
    },
    {
      heading: 'Data breaches.',
      paragraphs: [
        'We’re alerted automatically if the system reports an error or stops running.',
        'If personal information is lost or accessed without authorisation and serious harm is likely, we act under the notifiable data breach scheme. We notify the affected client without undue delay, and the agreement commits us to do so within 48 hours of becoming aware.',
      ],
    },
    {
      heading: 'Contact.',
      paragraphs: ['Privacy enquiries go to:'],
      bullets: ['Email: admin@vicaria.com.au', 'Vicaria Systems, ABN 67 221 728 299', 'Brisbane, Australia'],
    },
  ],

  end: {
    line: 'Privacy enquiries go to admin@vicaria.com.au.',
    link: { label: 'Email admin@vicaria.com.au', href: 'mailto:admin@vicaria.com.au?subject=Privacy%20enquiry' },
  },
}
