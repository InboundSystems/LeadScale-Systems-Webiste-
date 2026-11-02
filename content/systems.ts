import type { CategoryDef, SystemContent } from './types'
import { pricingStatement } from './pricing'

// Adding a system means appending an entry to this array; nothing else about
// the shape needs to change. Every claim about The Front Office traces to
// section 4 of docs/WEBSITE-REWORK-2026-11.md, and data claims to section 5.
// Later stages and add-ons that do not exist are not described at all.
//
// The Booking Line was removed in November 2026 and lives in
// archive/booking-line/. It must not reappear here.

// Fictional categories for the illustrations. Numbered in a practice's own
// order, as the system does; 00 Unclear always sorts first.
const unclear: CategoryDef = { label: '00 Unclear', colour: '#B45309' }
const appointments: CategoryDef = { label: '01 Appointments', colour: '#2E6E6B' }
const enquiries: CategoryDef = { label: '02 Patient Enquiries', colour: '#4A6FA5' }
const referrals: CategoryDef = { label: '03 Referrals', colour: '#7B5EA7' }
const accounts: CategoryDef = { label: '04 Accounts', colour: '#8C6A3F' }

export const systems: SystemContent[] = [
  {
    name: 'The Front Office',
    sector: 'Specialist medical and allied health practices',
    slug: 'front-office',
    cardFor: 'for practices with a shared Microsoft 365 inbox',
    shortDescription:
      'Marks every email with the practice’s own categories, keeps track of what is still waiting for a reply, and reports it each morning.',
    heroLine:
      'Every new email in the shared inbox is marked with one of the practice’s own categories, where it sits. On open days, one email each morning lists what is still waiting for a reply.',

    theProblem: {
      heading: 'One inbox, every kind of email.',
      paragraphs: [
        'A specialist practice’s shared inbox receives bookings, referrals, results, scripts, invoices, supplier mail and marketing in one list.',
        'Knowing what each email is, and what is still waiting for an answer, depends on whoever is on the desk. The Front Office does the sorting and the keeping track.',
      ],
    },

    requirements: {
      heading: 'What it needs.',
      items: [
        'Microsoft 365',
        'One shared mailbox, such as bookings@ or reception@',
        'Reception keeps working in the Outlook they already use',
      ],
    },

    whatItDoes: {
      heading: 'What it does.',
      items: [
        {
          heading: 'Marks every new email with one of the practice’s own categories',
          body:
            'Each email is marked where it sits in the Inbox. Nothing is moved. Categories are numbered in the practice’s own order, such as 01 Appointments and 02 Patient Enquiries, so sorting the Inbox by category puts them in the order the practice works.',
        },
        {
          heading: 'Says so when it cannot tell',
          body:
            'An email it cannot place is marked 00 Unclear and sits at the top, so a person looks at it first. The system does not guess.',
        },
        {
          heading: 'Labels mail for the person it is for',
          body:
            'Where an email makes it clear by name or email address, it is labelled for that person, such as For Dr Smith. The label never depends on what the message is about. Reception still forwards it.',
        },
        {
          heading: 'Sends one morning summary on open days',
          body:
            'The summary goes to the person the practice chooses. It lists what is still waiting for a reply, oldest first, counting only open hours. Two further blocks can be switched on: mail passed on to a colleague where the sender has not yet had a reply, and mail that has been answered but is still sitting in the Inbox.',
        },
        {
          heading: 'Lists mail from known senders that landed in Junk',
          body:
            'The morning summary lists mail from people the practice already deals with that landed in Junk. Nothing is moved out of Junk.',
        },
        {
          heading: 'Prepares approved replies for a sender the practice names',
          body:
            'For a sender such as the website booking form, the system prepares a reply in the exact wording the practice approved, addressed to the person who filled in the form. It waits in Drafts until a person checks it and presses Send.',
        },
        {
          heading: 'Respects reception’s corrections',
          body:
            'If reception changes a category, the system never changes it back. Every correction is recorded, never overwritten, and reviewed with the practice at a monthly review.',
        },
      ],
    },

    whatItNeverDoes: {
      heading: 'What it never does.',
      intro: 'These limits are fixed for every practice and cannot be configured.',
      items: [
        { text: 'Never sends an email.', detail: 'Mail.Send is not requested and not held.' },
        { text: 'Never deletes mail or moves it out of the mailbox.' },
        { text: 'Never touches any mailbox but the one it was granted.' },
        {
          text: 'Never stores the contents of a message.',
          detail: 'It keeps a record of what it did: sender, subject line, time and category.',
        },
        { text: 'Never processes information outside Australia.' },
        { text: 'Never writes into a colour, flag or category the practice already uses.' },
        {
          text: 'Makes no clinical judgement, assigns no priority and does not decide what is urgent.',
          detail: 'It sorts by what kind of email it is, not by what it says about a patient.',
        },
      ],
    },

    illustrations: {
      heading: 'What reception and the practice manager see.',
      intro:
        'Both illustrations use a fictional practice, open from 8:00am to 5:00pm, Monday to Friday. Every sender is fictional.',
      inbox: {
        caption:
          'The shared Inbox in Outlook at 8:00am on a Monday, arranged by category. Illustration with fictional senders.',
        mailboxName: 'reception@',
        folderName: 'Inbox',
        arrangedBy: 'Arranged by: Categories',
        groups: [
          {
            category: unclear,
            messages: [
              { sender: 'Alex', subject: 'Quick question', received: '7:48 am', unread: true },
              { sender: 'R. Collins', subject: 'Following up', received: 'Sun 6:14 pm', unread: true },
            ],
          },
          {
            category: appointments,
            messages: [
              { sender: 'Website booking form', subject: 'New booking request', received: 'Fri 4:50 pm', unread: true },
              { sender: 'Daniel Ng', subject: 'Request to move my appointment', received: 'Fri 9:40 am' },
            ],
          },
          {
            category: enquiries,
            messages: [
              { sender: 'Tom Avery', subject: 'Updating my contact details', received: 'Sat 10:22 am', unread: true },
              { sender: 'Margaret Hill', subject: 'Parking near the rooms', received: 'Fri 2:15 pm' },
            ],
          },
          {
            category: referrals,
            messages: [
              {
                sender: 'Wattlebrook Family Medical',
                subject: 'Referral for Dr Smith',
                received: 'Thu 4:40 pm',
                personLabel: 'For Dr Smith',
              },
            ],
          },
          {
            category: accounts,
            messages: [
              { sender: 'Kestrel Office Supplies', subject: 'Question about invoice 2041', received: 'Fri 11:00 am' },
            ],
          },
        ],
      },
      // Matches the real plain-text summary email (summary.mjs) line for
      // line (Sam, 2 November 2026). Counts are consistent with the inbox
      // above: the five with no reply are R. Collins, Daniel Ng, the booking
      // form, Tom Avery and Kestrel. Alex arrived after 7:30am. Waits are
      // kept under one open day, so no line depends on how days are counted.
      summary: {
        caption: 'The morning summary, sent at 7:30am on the same Monday. Illustration with fictional senders.',
        from: 'Vicaria',
        to: 'Practice manager',
        subject: 'Elsworth Lane Specialists — inbox summary, Monday 2 November',
        sent: 'Monday 7:30 am',
        title: ['Elsworth Lane Specialists — inbox summary', 'Monday 2 November'],
        opening: [
          ['18 messages arrived in the last 7 open days. 5 have no reply yet.'],
          [
            'Oldest first, within each category. Time counts open hours only —',
            'evenings, weekends and closures do not add to it.',
          ],
        ],
        groups: [
          {
            heading: unclear.label,
            lines: [{ first: '0m', subject: 'Following up', sender: 'r.collins@example.com' }],
          },
          {
            heading: appointments.label,
            lines: [
              { first: '7h 20m', subject: 'Request to move my appointment', sender: 'd.ng@example.com' },
              { first: '10m', subject: 'New booking request', sender: 'bookings@example.com' },
            ],
          },
          {
            heading: enquiries.label,
            lines: [{ first: '0m', subject: 'Updating my contact details', sender: 't.avery@example.com' }],
          },
          {
            heading: accounts.label,
            lines: [{ first: '6h', subject: 'Question about invoice 2041', sender: 'accounts@example.com' }],
          },
        ],
        blocks: [
          {
            heading: 'Passed on, no reply to the sender yet',
            text: [
              'These were sent on to someone at the practice. The person who wrote in',
              'has not had a reply. Time counts open hours since it was passed on.',
            ],
            optionalNote: 'Optional block, switched on by the practice',
            groups: [
              {
                heading: 'With Dr Smith',
                lines: [{ first: '2h 10m', subject: 'Referral for Dr Smith', sender: 'referrals@example.com' }],
              },
            ],
          },
          {
            heading: 'Replied, still in the Inbox',
            text: ['A reply has gone out to each of these. If they are finished, they can go to COMPLETED.'],
            optionalNote: 'Optional block, switched on by the practice',
            groups: [{ lines: [{ first: 'Fri 30 Oct', subject: 'Parking near the rooms', sender: 'm.hill@example.com' }] }],
          },
          {
            heading: 'Possibly misfiled in Junk Email',
            text: [
              'These are in the Junk Email folder but appear to come from people the',
              'practice deals with. Nothing has been moved. If one belongs in the Inbox,',
              'move it there. Senders can be faked, so if one looks wrong, do not open',
              'its links or attachments.',
            ],
            groups: [
              {
                heading: 'From someone who has written to the practice before',
                lines: [
                  { first: 'Sun 1 Nov 18:03', subject: 'Collection booked for Tuesday', sender: 'dispatch@example.com' },
                ],
              },
            ],
          },
        ],
        closing: [
          'This summary lists what has arrived and what has no reply yet.',
          'It does not judge what any message is about.',
        ],
      },
    },

    aTypicalDay: {
      heading: 'A working day.',
      intro: 'The same fictional practice, through one ordinary Monday.',
      beats: [
        {
          time: '7:30am',
          body:
            'The morning summary reaches the practice manager. An email from 4:50pm on Friday shows as waiting ten minutes, because only open hours count.',
        },
        {
          time: '8:00am',
          body:
            'Reception opens Outlook with the Inbox arranged by category. The two emails marked 00 Unclear sit at the top and are read first. The rest follow in the practice’s own order.',
        },
        {
          time: '9:20am',
          body:
            'An email from a referring practice names Dr Smith. It is marked 03 Referrals and labelled For Dr Smith, and reception forwards it.',
        },
        {
          time: '10:45am',
          body:
            'Someone completes the website booking form. A reply in the wording the practice approved waits in Drafts, addressed to that person. Reception checks it and presses Send.',
        },
        {
          time: '1:10pm',
          body:
            'Reception changes an email’s category from 04 Accounts to 05 Suppliers. The system leaves the change in place and records it for the monthly review.',
        },
        {
          time: '5:00pm',
          body:
            'The practice closes. Email that arrives overnight is still marked, and the hours until opening do not count as waiting.',
        },
      ],
    },

    installation: {
      heading: 'Installation, in six steps.',
      intro: [
        'The Front Office is one product. Everything that differs between practices is written in the configuration record agreed at step two.',
        'Once the system operates, a change to that record takes effect when the practice approves it by email.',
      ],
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

    judged: {
      heading: 'How it is judged.',
      paragraphs: [
        'Before the system first operates, one measure is agreed in writing: the proportion of emails whose category nobody at the practice changes. It is reported monthly, from the system’s own record.',
        'A second figure is reported beside it: the median time from arrival to first reply, by category, counted in open hours.',
        'Every correction is recorded, never overwritten, and reviewed with the practice at a monthly review.',
      ],
    },

    whoThisIsntFor: {
      heading: 'Practices it does not suit.',
      criteria: [
        'Practices not on Microsoft 365',
        'Practices wanting clinical triage, urgency scoring or risk ranking',
        'Practices whose shared inbox is too quiet to justify an engagement',
        'Practices wanting software to administer themselves',
      ],
    },

    showsIntendedPurpose: true,

    faq: {
      heading: 'Questions about The Front Office.',
      items: [
        {
          question: 'Does it decide what is urgent?',
          answer:
            'No. It sorts by what kind of email it is. It assigns no priority and makes no clinical judgement.',
        },
        {
          question: 'Can it send email?',
          answer:
            'No. Mail.Send is not requested and not held. A prepared reply waits in Drafts until a person presses Send.',
        },
        {
          question: 'What changes for reception?',
          answer:
            'Reception keeps working in the Outlook they already use. The category names are added to Outlook once, using a one-page guide.',
        },
        {
          question: 'What does our IT provider need to do?',
          answer:
            'Grant one registered application access to the one shared mailbox, then restrict it to that mailbox and test that a second mailbox is refused.',
          answerLink: { label: 'For IT providers', href: '/it-providers' },
        },
        {
          question: 'Where is our data held?',
          answer:
            'In Australia, in the Sydney region. Message contents are not stored. Email bodies are read at the moment of categorising and not kept.',
          answerLink: { label: 'Data handling', href: '/data-handling' },
        },
        {
          question: 'How is it priced?',
          answer: pricingStatement,
        },
      ],
    },

    end: {
      line: 'To ask whether The Front Office suits a practice, email admin@vicaria.com.au with the practice name and how the shared inbox is used today.',
      link: { label: 'Enquire', href: '/enquire' },
    },
  },
]
