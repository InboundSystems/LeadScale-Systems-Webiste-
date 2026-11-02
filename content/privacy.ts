import type { PrivacyPageContent } from './types'

// /privacy. The automated decision-making section carries the verbatim
// intended purpose statement (content/intended-purpose.ts), as section 7 of
// docs/WEBSITE-REWORK-2026-11.md requires. Data claims trace to section 5.

export const privacy: PrivacyPageContent = {
  header: {
    eyebrow: 'Privacy',
    heading: 'Privacy policy.',
    intro:
      'This policy explains what personal information Vicaria collects, why, and what happens to it. It applies to everyone who deals with Vicaria directly, and describes the separate arrangement that applies to information handled on behalf of a client.',
  },

  lastUpdatedLabel: 'Last updated',
  lastUpdated: '2 November 2026',

  sections: [
    {
      heading: 'Two different kinds of information.',
      paragraphs: [
        'Some personal information belongs to Vicaria directly: the contact details of people who enquire, and of the people at a client business Vicaria deals with day to day. Separately, Vicaria handles information inside a client’s own systems on that client’s behalf. That includes correspondence that may contain personal and health information about the client’s own patients.',
        'For that second kind, the client decides how it is used. Vicaria acts only as the client’s service provider, on its instructions, under a written data processing agreement signed before Vicaria connects to any client system.',
      ],
    },
    {
      heading: 'What Vicaria collects for itself.',
      paragraphs: [
        'No website analytics or tracking is used, and nobody is required to identify themselves to read the site. Vicaria does not ask for any sensitive information through the website. Personal information is collected through the website only when a person chooses to email, and then only what that person has put in the email. Beyond that, Vicaria collects:',
      ],
      bullets: [
        'Contact details and role, for people at a client business Vicaria deals with',
        'Records of correspondence',
      ],
    },
    {
      heading: 'Why it is collected.',
      paragraphs: [
        'Information Vicaria collects for itself is used to answer an enquiry, to provide and operate the systems Vicaria is engaged to run, to invoice and keep business records, and to meet legal obligations.',
        'It is not used for marketing. There is no mailing list, and it is never sold.',
      ],
    },
    {
      heading: 'Information handled for clients.',
      paragraphs: [
        'Information inside a client’s own systems is used only to provide the service, and only on that client’s documented instructions. It is never used for another client, and never used to train any AI model.',
        'Message contents are not stored. Email bodies are read at the moment of categorising and are not kept. The record kept instead is the sender, subject line, dates, category, and whether the email has been replied to.',
        'Anyone whose information is handled this way should contact the business they dealt with directly. Where Vicaria receives a request of this kind, it is referred to that business rather than acted on.',
      ],
    },
    {
      heading: 'Where information is held.',
      paragraphs: [
        'Where information derived from My Health Record is involved, Australian law prohibits holding or processing it outside Australia. This obligation binds Vicaria as a service provider in the same way it binds the client, and it cannot be waived by patient consent.',
        'All storage and processing takes place in Australia, in the Sydney region, and there is no disclosure of personal information to any recipient overseas. A client’s own Microsoft 365 is not a sub-processor of Vicaria: the information is already the client’s, and already there.',
        'Two providers are used, and this is the complete list. Clients receive 30 days’ notice before any provider is added or replaced:',
      ],
      bullets: [
        'Amazon Web Services, in the Sydney region, which runs the system, runs the AI model through Amazon Bedrock, and sends the morning summary',
        'Supabase, in Sydney, which holds the database',
      ],
    },
    {
      heading: 'Security.',
      paragraphs: ['Vicaria applies the following:'],
      bullets: [
        'Access by Vicaria personnel limited to named individuals, with multi-factor authentication',
        'Every access by Vicaria personnel logged',
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
        'From 10 December 2026, Australian privacy law requires disclosure where an automated system is involved in decisions affecting individuals. Vicaria supplies each client the wording for its own privacy policy.',
      ],
    },
    {
      heading: 'Access and correction.',
      paragraphs: [
        'Anyone may ask what Vicaria holds about them, and ask for it to be corrected, free of charge.',
        'A request concerning information held for a client is referred to that client.',
      ],
    },
    {
      heading: 'Complaints.',
      paragraphs: [
        'A complaint may be made by email to admin@vicaria.com.au. Vicaria acknowledges it and responds.',
        'Where the response is unsatisfactory, a complaint may be made to the Office of the Australian Information Commissioner, at oaic.gov.au.',
      ],
    },
    {
      heading: 'How long information is kept.',
      paragraphs: [
        'Information is kept only as long as needed, or as required by law.',
        'Information handled for a client is returned or deleted at the client’s election. Deletion is completed within 30 days of a request.',
      ],
    },
    {
      heading: 'Data breaches.',
      paragraphs: [
        'Vicaria is alerted automatically if the system reports an error or stops running.',
        'Where personal information is lost or accessed without authorisation and serious harm is likely, Vicaria acts under the notifiable data breach scheme. The affected client is notified without undue delay, and the agreement commits Vicaria to do so within 48 hours of becoming aware.',
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
