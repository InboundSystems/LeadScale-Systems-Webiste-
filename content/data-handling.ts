import type { DataHandlingPageContent } from './types'

// /data-handling. Every statement describes how the system is built and
// operated, never what it is doing for a client today. Every claim traces to
// section 5 of docs/WEBSITE-REWORK-2026-11.md (and the agreement order in
// section 4). "AI model" is permitted here because precision requires it.

export const dataHandling: DataHandlingPageContent = {
  header: {
    eyebrow: 'Data handling',
    heading: 'Where data goes and who can see it.',
    intro:
      'This page sets out where The Front Office stores and processes data, what it keeps, who can access it, and how it is returned or deleted.',
  },

  sections: [
    {
      heading: 'Stored and processed in Australia.',
      paragraphs: [
        'All storage and processing takes place in Australia, in the Sydney region. Two providers are used, and this is the complete list:',
      ],
      bullets: [
        'Amazon Web Services runs the system, runs the AI model through Amazon Bedrock, and sends the morning summary',
        'Supabase holds the database',
      ],
    },
    {
      heading: 'The practice’s Microsoft 365 is not a sub-processor.',
      paragraphs: [
        'It is the practice’s own system, accessed under permissions its administrator grants and can withdraw.',
      ],
    },
    {
      heading: 'What is stored, and what is not.',
      paragraphs: [
        'Stored: the sender, subject line, dates, category, and whether the email has been replied to.',
        'Not stored: message contents. Email bodies are read at the moment of categorising and are not kept.',
      ],
    },
    {
      heading: 'Kept separate.',
      paragraphs: [
        'Each practice’s data is separated at the database layer. It is never used for another practice, and never used to train any AI model.',
      ],
    },
    {
      heading: 'Who can access it.',
      paragraphs: [
        'No password is ever requested. Access by Vicaria personnel is limited to named individuals with multi-factor authentication, and every access is logged.',
      ],
    },
    {
      heading: 'Before anything connects.',
      paragraphs: [
        'A services agreement and a data processing agreement are signed before the system connects to any mailbox.',
      ],
    },
    {
      heading: 'Changes of provider.',
      paragraphs: ['Clients receive 30 days’ notice before any provider is added or replaced.'],
    },
    {
      heading: 'Return and deletion.',
      paragraphs: [
        'Data is returned or deleted at the practice’s election. Deletion is completed within 30 days of a request.',
      ],
    },
    {
      heading: 'Data breaches.',
      paragraphs: [
        'Vicaria acts under Australia’s notifiable data breach scheme. An affected client is notified without undue delay, and the agreement commits Vicaria to do so within 48 hours of becoming aware.',
      ],
    },
    {
      heading: 'Automated decision-making disclosure.',
      paragraphs: [
        'From 10 December 2026, Australian privacy law requires disclosure where an automated system is involved in decisions affecting individuals. Vicaria supplies each client the wording for its own privacy policy.',
      ],
    },
  ],

  end: {
    line: 'The exact Microsoft 365 permissions are set out for the practice’s IT provider.',
    link: { label: 'For IT providers', href: '/it-providers' },
  },
}
