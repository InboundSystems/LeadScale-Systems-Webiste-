import type { DataHandlingPageContent } from './types'

// Its own page, /data-handling — the page a practice manager forwards to
// their IT provider. Every sentence describes how Vicaria works, not what
// it is currently doing for a live client: nothing has been installed yet.
export const dataHandling: DataHandlingPageContent = {
  intro:
    'Client data is what makes a system function. Everything below applies to how it is stored, accessed, used and returned.',

  sections: [
    {
      heading: 'Where Data Is Stored.',
      paragraphs: [
        'All storage and processing takes place in an Australian region. Vicaria does not process client data offshore, and this is a condition of the engagement, not a default that could later change. Two providers are used: Amazon Web Services, in Sydney, for model processing, and Supabase, in Sydney, for the database, storage and the system’s own processing. That is the complete list.',
        'Where a practice handles information derived from My Health Record, Australian law prohibits holding or processing that information outside Australia. This obligation binds Vicaria as a service provider in the same way it binds the practice, and it cannot be waived by patient consent. Vicaria’s Australian-only position satisfies it.',
      ],
    },
    {
      heading: 'Sub-Processors.',
      paragraphs: [
        'The practice’s own email platform is not a sub-processor. It is the practice’s own system, accessed under permissions the practice grants and can withdraw at any time.',
        'Clients receive thirty days’ written notice before any provider is added or replaced, and may object.',
      ],
    },
    {
      heading: 'Who Can See It.',
      paragraphs: [
        'Access is limited to the people who operate the system. It is granted for the purpose of operating that client’s system, and for no other purpose. Client data is never used to operate another client’s system, and never used to train any general-purpose model.',
      ],
    },
    {
      heading: 'What Is Stored, And What Is Not.',
      paragraphs: [
        'Each system records what it did with an item of information — for example, when it arrived and what happened to it — rather than retaining the item itself. Full message contents are not retained, unless a feature the client has switched on requires it. For The Front Office, that record includes which folder a message was filed into, and how confident the system was in that decision.',
      ],
    },
    {
      heading: 'Permissions.',
      paragraphs: [
        'Vicaria requests the narrowest set of permissions that allow a system to work, and documents each one with a plain-English reason. That list is provided to the client on request.',
        'Access is limited to named individuals, with multi-factor authentication. Each client’s data is kept separate from every other client’s, enforced at the database layer. It is encrypted in transit and at rest. Access by Vicaria personnel is logged.',
        'Vicaria never asks anyone for a password. Access is granted by the client’s own administrator, and can be revoked by that administrator at any time, without going through Vicaria.',
      ],
    },
    {
      heading: 'Getting It Back, Or Having It Deleted.',
      paragraphs: [
        'Client data remains the property of the client. It is returned or deleted, at the client’s election, when an engagement ends, and within thirty days of a deletion request.',
      ],
    },
    {
      heading: 'If Something Goes Wrong.',
      paragraphs: [
        'Vicaria monitors its own systems and contacts the client if a fault occurs, rather than waiting to be told. Where personal information is lost or accessed without authorisation and serious harm is likely, Vicaria acts under Australia’s notifiable data breach scheme and notifies the affected client without undue delay.',
      ],
    },
    {
      heading: 'Automated Decision-Making.',
      paragraphs: [
        'From 10 December 2026, Australian privacy law will require disclosure where an automated system is involved in a decision affecting a person. Ahead of that date, Vicaria will supply the wording each client needs for their own privacy policy, describing what the system does within that business.',
      ],
    },
    {
      heading: 'Before Anything Is Connected.',
      paragraphs: [
        'A data processing agreement is signed before Vicaria connects to any client system. It is not negotiable, and it is not treated as a formality.',
      ],
    },
  ],
}
