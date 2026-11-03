import type { DataHandlingPageContent } from './types'

// /data-handling. Principles that apply to every system come first; what is
// specific to a system sits under its own labelled subsection
// (docs/REPLY-2026-11-03-company-first.md). Every statement describes how the system is built and
// operated, never what it is doing for a client today. Every claim traces to
// section 5 of docs/WEBSITE-REWORK-2026-11.md (and the agreement order in
// section 4), plus three facts Sam confirmed on 2 November 2026: encryption
// (Security Summary), My Health Record (DPA clause 6.3) and monitoring.
// "AI model" is permitted here because precision requires it.

export const dataHandling: DataHandlingPageContent = {
  header: {
    eyebrow: 'Data handling',
    heading: 'Where data goes and who can see it.',
    intro:
      'First, the rules for data in every system we run. Then what’s specific to The Front Office: what it stores, where, and who can see it.',
  },

  sections: [
    {
      heading: 'Stored and processed in Australia.',
      paragraphs: ['Every system we run stores and processes data in Australia, and nowhere else.'],
    },
    {
      heading: 'Never used to train an AI model.',
      paragraphs: [
        'Your data is used only for your system. It’s never used for another client, and never used to train any AI model.',
      ],
    },
    {
      heading: 'Agreements before anything connects.',
      paragraphs: [
        'We sign a services agreement and a data processing agreement before a system connects to any of your software.',
      ],
    },
    {
      heading: 'You can withdraw access at any time.',
      paragraphs: ['You can withdraw a system’s access at any time.'],
    },
    {
      heading: 'Return and deletion.',
      paragraphs: [
        'We return or delete your data, as you choose. Deletion is done within 30 days of a request.',
      ],
    },
  ],

  systemSections: [
    {
      system: 'The Front Office',
      intro: 'The Front Office works inside your practice’s own Microsoft 365. Everything below applies to it.',
      sections: [
        {
          heading: 'Where it runs.',
          paragraphs: [
            'All storage and processing happens in the Sydney region. We use two providers, and this is the complete list:',
          ],
          bullets: [
            'Amazon Web Services runs the system, runs the AI model through Amazon Bedrock, and sends the morning summary',
            'Supabase holds the database',
          ],
          after: [
            'If your practice handles information derived from My Health Record, Australian law prohibits holding or processing it outside Australia. That obligation binds us as a service provider just as it binds the practice, and patient consent can’t waive it. Our Australian-only position satisfies it.',
          ],
        },
        {
          heading: 'Your Microsoft 365 is not a sub-processor.',
          paragraphs: [
            'It’s the practice’s own system, accessed under permissions your administrator grants and can withdraw.',
          ],
        },
        {
          heading: 'What is stored, and what is not.',
          paragraphs: [
            'Stored: the sender, subject line, dates, category, and whether the email has been replied to.',
            'Not stored: message contents. Email bodies are read at the moment of categorising and not kept.',
          ],
        },
        {
          heading: 'Kept separate.',
          paragraphs: [
            'Each practice’s data is separated at the database layer. It’s encrypted in transit and at rest.',
          ],
        },
        {
          heading: 'Who can access it.',
          paragraphs: [
            'We never ask for a password. Access by our people is limited to named individuals with multi-factor authentication, and every access is logged.',
          ],
        },
        {
          heading: 'Changes of provider.',
          paragraphs: ['You get 30 days’ notice before we add or replace any provider.'],
        },
        {
          heading: 'If something goes wrong.',
          paragraphs: [
            'We’re alerted automatically if the system reports an error or stops running.',
            'We act under Australia’s notifiable data breach scheme. We notify an affected client without undue delay, and the agreement commits us to do so within 48 hours of becoming aware.',
          ],
        },
        {
          heading: 'Automated decision-making disclosure.',
          paragraphs: [
            'From 10 December 2026, Australian privacy law requires disclosure where an automated system is involved in decisions affecting individuals. We give each client the wording for its own privacy policy.',
          ],
        },
      ],
    },
  ],

  end: {
    line: 'The exact Microsoft 365 permissions are set out for your IT provider.',
    link: { label: 'For IT providers', href: '/it-providers' },
  },
}
