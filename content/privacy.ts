import type { PrivacyPageContent } from './types'

// Its own page, /privacy. Overdue rather than early — the website has
// collected personal information since the enquiry form went live, and does
// so now through the plain email contact at /enquire that replaced it.
export const privacy: PrivacyPageContent = {
  lastUpdated: '11 September 2026',

  intro:
    'This policy explains what personal information Vicaria collects, why, and what happens to it. It applies to everyone who deals with Vicaria directly, and describes the separate arrangement that applies to information handled on behalf of a client.',

  sections: [
    {
      heading: 'Two Different Kinds Of Information.',
      paragraphs: [
        'Most personal information Vicaria encounters is not its own to decide what happens to it. Some information belongs to Vicaria directly: the contact details of people who enquire, and of the people at a client business Vicaria deals with day to day. Separately, Vicaria handles information inside a client’s own systems on that client’s behalf — correspondence that may contain personal and health information about the client’s own patients.',
        'For that second kind, the client decides how it is used. Vicaria acts only as their service provider, on their instructions, under a written data processing agreement, signed before Vicaria connects to any client system.',
      ],
    },
    {
      heading: 'What Vicaria Collects For Itself.',
      paragraphs: [
        'No website analytics or tracking is used, and nobody is required to identify themselves to read the site. Vicaria does not ask for any sensitive information through the website. Personal information is collected through the website only when a person chooses to email, and then only what that person has put in the email. Beyond that, Vicaria collects:',
      ],
      bullets: [
        'Contact details and role, for people at a client business Vicaria deals with',
        'Records of correspondence',
      ],
    },
    {
      heading: 'Why It Is Collected.',
      paragraphs: [
        'Information Vicaria collects about itself is used to answer an enquiry, to provide and operate the systems Vicaria is engaged to run, to invoice and keep business records, and to meet legal obligations.',
        'It is not used for marketing. There is no mailing list, and it is never sold.',
      ],
    },
    {
      heading: 'Information Handled For Clients.',
      paragraphs: [
        'Information inside a client’s own systems is used only to provide the service, and only on that client’s documented instructions. It is never used for another client, and never used to train any general-purpose model.',
        'Full message contents are not retained unless a feature the client has switched on requires it. For The Front Office, the record kept instead includes which folder a message was filed into, and how confident the system was in that decision. Access is limited to the individuals operating that client’s system, and is logged.',
        'Anyone whose information is handled this way should contact the business they dealt with directly. Where Vicaria receives a request of this kind, it is referred to that business rather than acted on.',
      ],
    },
    {
      heading: 'Where Information Is Held.',
      paragraphs: [
        'Where information derived from My Health Record is involved, Australian law prohibits holding or processing it outside Australia. This obligation binds Vicaria as a service provider in the same way it binds the client, and it cannot be waived by patient consent.',
        'All storage and processing takes place within Australia, and there is no disclosure of personal information to any recipient overseas. The client’s own email platform is not a sub-processor of Vicaria; the information is already theirs, and already there. Two providers are used, and this is the complete list. Each is bound by written terms requiring information to remain in Australia. Clients receive thirty days’ written notice before either is added, replaced, or changed, and may object:',
      ],
      bullets: [
        'Amazon Web Services, in Sydney, for model processing',
        'Supabase, in Sydney, for the database, storage and the system’s own processing',
      ],
    },
    {
      heading: 'Security.',
      paragraphs: ['Vicaria applies the following:'],
      bullets: [
        'Access limited to named individuals, with multi-factor authentication',
        'Each client’s information kept separate, enforced at the database layer',
        'Encrypted in transit and at rest',
        'Access by Vicaria personnel logged',
        'The narrowest permissions that allow a system to work, each documented with a reason, and provided to the client on request',
        'Vicaria never asks anyone for a password; access is granted and revoked by the client’s own administrator, without going through Vicaria',
      ],
    },
    {
      heading: 'Automated Processing.',
      paragraphs: [
        'Vicaria’s systems work with the personal information contained in the messages a client’s system receives — a name, contact details, or the substance of what someone has written. Each system processes that information to produce an output for a person to check: a booking entry, a filed message, or a drafted reply. No system makes a clinical assessment, assigns a clinical priority, or reaches a conclusion about any individual.',
        'For The Front Office, no message is ever sent without a person choosing to send it. For The Booking Line, a person reviews every message during the first week of an engagement; after that, approval can continue or be discontinued, at the client’s choice.',
        'From 10 December 2026, Australian privacy law will require disclosure where a system is involved in a decision affecting an individual. Ahead of that date, Vicaria will supply the client with wording for that client’s own privacy policy, describing what the system does within that business.',
      ],
    },
    {
      heading: 'Access And Correction.',
      paragraphs: [
        'Anyone may ask what Vicaria holds about them, and ask for it to be corrected, free of charge.',
        'A request concerning information held for a client is referred to that client.',
      ],
    },
    {
      heading: 'Complaints.',
      paragraphs: [
        'A complaint may be made in writing, by email to the address given in Contact. Vicaria acknowledges it and responds. A postal option will be added once that address is confirmed.',
        'Where the response is unsatisfactory, a complaint may be made to the Office of the Australian Information Commissioner, at oaic.gov.au.',
      ],
    },
    {
      heading: 'How Long Information Is Kept.',
      paragraphs: [
        'Information is kept only as long as needed, or as required by law.',
        'Information handled for a client is returned or deleted, at the client’s election, when an engagement ends, and within thirty days of a deletion request.',
      ],
    },
    {
      heading: 'Data Breaches.',
      paragraphs: [
        'Vicaria monitors its own systems, and contacts the client if a fault occurs, rather than waiting to be told.',
        'Where personal information is lost or accessed without authorisation and serious harm is likely, Vicaria acts under the notifiable data breach scheme and notifies the affected client without undue delay.',
      ],
    },
    {
      heading: 'Contact.',
      // Placeholders — not yet settled. Flagged in the task report rather
      // than invented.
      paragraphs: ['Privacy enquiries can be directed to:'],
      bullets: ['Email: admin@vicaria.com.au', 'Postal address: [to be confirmed]', 'ABN: [to be confirmed]'],
    },
  ],
}
