import type { CategoryDef, SystemContent } from './types'
import { pricingStatement } from './pricing'

// Adding a system means appending an entry to this array; nothing else about
// the shape needs to change. Every claim about The Front Office traces to
// section 4 of docs/WEBSITE-REWORK-2026-11.md, and data claims to section 5.
// Later stages and add-ons that do not exist are not described at all.
//
// The Booking Line was removed in November 2026 and lives in
// archive/booking-line/. It must not reappear here.

// The Front Office's categories: a typical set (docs/WHAT-WE-DO-2026-11.md),
// numbered in the order a practice works, so sorting by category puts the
// Inbox in that order. Every practice chooses its own categories, names and
// order; 00 Unclear always sorts first. Chips are shades of the blue family,
// a white outline and slate; the number tells one from another.
export const unclear: CategoryDef = { label: '00 Unclear', tone: 'outline' }
export const appointments: CategoryDef = { label: '01 Appointments', tone: 'blue' }
export const enquiries: CategoryDef = { label: '02 Patient Enquiries', tone: 'sky' }
export const results: CategoryDef = { label: '03 Results & Clinical Correspondence', tone: 'navy' }
export const scripts: CategoryDef = { label: '04 Scripts', tone: 'blue' }
export const pharmacy: CategoryDef = { label: '05 Pharmacy & Suppliers', tone: 'sky' }
export const accounts: CategoryDef = { label: '06 Accounts & Billing', tone: 'slate' }
export const faxes: CategoryDef = { label: '07 Faxes & Scans', tone: 'slate' }
export const referrals: CategoryDef = { label: '08 Referrals', tone: 'navy' }
export const businessAdmin: CategoryDef = { label: '09 Business Admin', tone: 'slate' }
export const marketing: CategoryDef = { label: '10 Marketing & Promotions', tone: 'slate' }
export const frontOfficeCategories: CategoryDef[] = [
  unclear,
  appointments,
  enquiries,
  results,
  scripts,
  pharmacy,
  accounts,
  faxes,
  referrals,
  businessAdmin,
  marketing,
]

export const systems: SystemContent[] = [
  {
    name: 'The Front Office',
    sector: 'Our first system · Specialist medical practices',
    slug: 'front-office',
    cardFor: 'for specialist practices with a shared Microsoft 365 inbox',
    shortDescription:
      'Marks every email in the practice’s shared inbox with its own categories, keeps track of what’s still waiting for a reply, and sends a summary at 7:00 am.',
    heroLine:
      'It works in the shared inbox your front desk already uses, in Outlook, on Microsoft 365. It marks each email where it sits, labels mail for the doctor it’s for, and has a list of what’s still waiting ready before reception arrives.',

    theProblem: {
      heading: 'One shared inbox, and reception carrying it.',
      paragraphs: [
        'It’s built for practices whose front desk works out of one shared mailbox, such as bookings@ or reception@, opened in Outlook on the reception computers. Reception looks after it alongside the phones, the front counter and the day’s patients.',
        'Everything lands there as one list, at any hour. Who it’s for and whether anyone has answered it is worked out by hand, often with flags and coloured categories made up along the way. The Front Office does the sorting and the keeping track. What to deal with first stays reception’s call.',
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
      heading: 'What it does, in full.',
      items: [
        {
          heading: 'Marks every new email with one of your categories',
          body:
            'Each email gets one of your practice’s own categories where it sits in the Inbox. Your categories are numbered in the order you work, so sorting the Inbox by category puts it in that order. You choose the categories, their names and their order.',
        },
        {
          heading: 'Says so when it can’t tell',
          body: 'If it can’t place an email, it marks it 00 Unclear. That category always sorts to the top, so a person looks first. It doesn’t guess.',
        },
        {
          heading: 'Labels mail for the person it’s for',
          body:
            'When an email names a doctor or staff member, or is addressed to them, it’s labelled for them, like For Dr Smith. The label never depends on what the message is about. Reception still forwards it.',
        },
        {
          heading: 'Sends one morning summary on open days',
          body:
            'At 7:00 am, before reception arrives, it emails the person you choose (usually the practice manager) a list of what’s still waiting for a reply, oldest first within each category. Waiting time counts open hours only, so evenings, days you don’t open and closures such as Christmas don’t add to it. Categories that never need a reply, such as Faxes & Scans and Marketing, are left out. Two optional blocks: mail passed on to a colleague where the sender hasn’t had a reply, and mail that’s been answered but is still in the Inbox.',
        },
        {
          heading: 'Lists known senders that landed in Junk',
          body:
            'The summary lists mail from people the practice already deals with that ended up in Junk.',
        },
        {
          heading: 'Prepares approved replies for a sender you name',
          body:
            'For a sender like your website booking form, it prepares a reply in the exact wording you approved, addressed to the person who filled in the form. It waits in Drafts until someone at the practice checks it and presses Send. It never prepares replies to clinical mail, such as results, scripts or referrals.',
        },
        {
          heading: 'Respects reception’s corrections',
          body:
            'If reception changes a category, the system never changes it back. Every correction is recorded. Corrections are reviewed every month.',
        },
      ],
    },

    // The practice inbox: the homepage hero (Before / After only) and "Try
    // it yourself" on this system's page. A fictional specialist practice
    // (no specialty named) at 7:55 am on a Monday: overnight and weekend
    // mail already marked, 00 Unclear at the top, one email labelled For Dr
    // Smith. No clinical detail in any subject. Every outcome line is a
    // fact from docs/WHAT-WE-DO-2026-11.md.
    heroDemo: {
      caption: 'The practice’s shared Inbox at 7:55 am on a Monday. Fictional practice and senders.',
      mailboxName: 'reception@',
      folderName: 'Inbox',
      moment: 'Monday, 7:55 am',
      beforeLabel: 'Before',
      afterLabel: 'After',
      replayLabel: 'Replay',
      resetLabel: 'Reset',
      changeCategoryLabel: 'Change category',
      correctionText: 'Correction recorded. The system never changes it back.',
      movedToLabel: 'Moved to',
      arrangedByDate: 'Arranged by: Date',
      arrangedByCategory: 'Arranged by: Categories',
      paneHeading: 'What the system did',
      closeLabel: 'Close',
      toolbar: ['New mail', 'Reply', 'Categorise'],
      counter: { emails: 'emails', unclear: 'Unclear', labelled: 'labelled' },
      notes: [
        { target: 'unclear', text: 'can’t tell? a person looks first' },
        { target: 'label', text: 'labelled for Dr Smith, reception still forwards it' },
      ],
      notesLabel: 'Notes on the inbox',
      categories: frontOfficeCategories,
      emails: [
        {
          id: 'alex',
          sender: 'Alex',
          subject: 'Quick question',
          received: '7:41 am',
          unread: true,
          category: unclear,
          outcome:
            'Marked 00 Unclear. The system couldn’t tell what kind of email this is, so it sits at the top for a person to look at first.',
        },
        {
          id: 'booking',
          sender: 'Website booking form',
          subject: 'New booking request',
          received: '7:12 am',
          unread: true,
          category: appointments,
          outcome:
            'Marked 01 Appointments. A reply in the practice’s approved wording is ready in Drafts.',
        },
        {
          id: 'fax',
          sender: 'Fax to email',
          subject: 'Fax received, 2 pages',
          received: 'Sun 11:48 pm',
          category: faxes,
          outcome: 'Marked 07 Faxes & Scans. It never needs a reply, so the morning summary leaves it out.',
        },
        {
          id: 'raman',
          sender: 'Priya Raman',
          subject: 'Can I bring my appointment forward?',
          received: 'Sun 8:05 pm',
          unread: true,
          category: appointments,
          outcome:
            'Marked 01 Appointments where it sits. If it still has no reply, it’s in tomorrow’s morning summary.',
        },
        {
          id: 'chen',
          sender: 'M. Chen',
          subject: 'Repeat script request',
          received: 'Sun 9:30 am',
          unread: true,
          category: scripts,
          outcome: 'Marked 04 Scripts. No reply is ever prepared for clinical mail.',
        },
        {
          id: 'avery',
          sender: 'Tom Avery',
          subject: 'Updating my contact details',
          received: 'Sat 10:22 am',
          unread: true,
          category: enquiries,
          outcome:
            'Arrived on Saturday, while the practice was closed, and was marked where it sits. The weekend doesn’t count as waiting.',
        },
        {
          id: 'pathology',
          sender: 'Northside Pathology',
          subject: 'Results available',
          received: 'Sat 6:12 am',
          unread: true,
          category: results,
          outcome:
            'Marked 03 Results & Clinical Correspondence, by what kind of email it is. The system makes no clinical judgement and assigns no priority.',
        },
        {
          id: 'wattlebrook',
          sender: 'Wattlebrook Family Medical',
          subject: 'Referral for Dr Smith',
          received: 'Fri 4:40 pm',
          category: referrals,
          personLabel: 'For Dr Smith',
          outcome:
            'Marked 08 Referrals and labelled For Dr Smith, because the email names Dr Smith. Reception still forwards it.',
        },
      ],
    },

    whatItNeverDoes: {
      heading: 'What it never does.',
      intro: 'These limits are the same for every practice. They can’t be configured.',
      items: [
        { text: 'Never sends an email.', detail: 'Mail.Send is not requested and not held.' },
        { text: 'Never deletes mail or moves it out of the mailbox.' },
        { text: 'Never touches any mailbox but the one it was granted.' },
        {
          text: 'Never stores the contents of a message.',
          detail: 'It keeps a record of what it did: sender, subject line, time, category, and whether it has been replied to.',
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
        'Both use a fictional practice, open Monday to Friday, 8:30 am to 5:00 pm. Every sender is fictional.',
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
            category: accounts,
            messages: [
              { sender: 'Kestrel Office Supplies', subject: 'Question about invoice 2041', received: 'Fri 11:00 am' },
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
        ],
      },
      // Matches the real plain-text summary email (summary.mjs) line for
      // line (Sam, 2 November 2026). Counts are consistent with the inbox
      // above: the five with no reply are R. Collins, Daniel Ng, the booking
      // form, Tom Avery and Kestrel. Alex arrived after 7:00am. Waits are
      // kept under one open day, so no line depends on how days are counted.
      summary: {
        caption: 'The morning summary, sent at 7:00am on the same Monday. Illustration with fictional senders.',
        from: 'Vicaria',
        to: 'Practice manager',
        subject: 'Elsworth Lane Specialists — inbox summary, Monday 2 November',
        sent: 'Monday 7:00 am',
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

    // The categories in full, each with what it covers (docs/WHAT-WE-DO-
    // 2026-11.md). An example set: every practice chooses its own.
    categoryList: {
      heading: 'Your categories, in your order.',
      intro:
        'A typical set for a specialist practice. You choose the categories, what they’re called and the order they sort in. Each email gets exactly one.',
      items: [
        { category: unclear, covers: 'Anything the system can’t place. It sorts to the top so a person looks first.' },
        { category: appointments, covers: 'Booking, rescheduling and cancellation requests.' },
        { category: enquiries, covers: 'Patients’ questions and updates, such as new contact details.' },
        { category: results, covers: 'Pathology and imaging results, and other clinical correspondence.' },
        { category: scripts, covers: 'Script requests.' },
        { category: pharmacy, covers: 'Mail from pharmacies and suppliers.' },
        { category: accounts, covers: 'Invoices, and Medicare and health fund mail.' },
        { category: faxes, covers: 'Fax-to-email notifications and scans. They never need a reply, so the morning summary leaves them out.' },
        { category: referrals, covers: 'Referrals from GPs and hospitals.' },
        { category: businessAdmin, covers: 'Software and other business mail.' },
        { category: marketing, covers: 'Marketing and promotions. Left out of the morning summary.' },
      ],
    },

    tryIt: {
      heading: 'Try it yourself.',
      intro:
        'A Monday-morning Inbox at a fictional practice. Switch between Before and After, replay the sort, or change a category the way reception would.',
    },

    installation: {
      heading: 'Installation, in six steps.',
      intro: [
        'The Front Office is one product. Everything that’s different about your practice goes in the configuration record we agree at step two.',
        'Once it’s running, a change to that record takes effect when you approve it by email.',
      ],
      steps: [
        {
          title: 'A conversation about the inbox',
          description: 'We talk through how your shared inbox is used today, and look at its shape.',
        },
        {
          title: 'The settings are written down',
          description:
            'We agree your settings and record them in one configuration record: the categories and their order, the people mail is labelled for, opening hours, closures, who gets the summary, and any approved reply wording.',
        },
        {
          title: 'The agreements are signed',
          description: 'We sign a services agreement and a data processing agreement. Nothing connects before that.',
        },
        {
          title: 'Your IT provider grants access',
          description: 'Your IT provider grants two Microsoft permissions, restricted to the one mailbox.',
          link: { label: 'What is granted', href: '/it-providers' },
        },
        {
          title: 'A quiet test week',
          description: 'The system records what it would have done. Nothing shows up in the mailbox, and the summary comes to us, not to you.',
        },
        {
          title: 'Switched on when you say so',
          description: 'Reception adds the category names to Outlook once, using a one-page guide.',
        },
      ],
    },

    judged: {
      heading: 'How it’s judged.',
      paragraphs: [
        'Before it starts, we agree one measure in writing: the proportion of emails whose category nobody at the practice changes. We report it monthly, from the system’s own record.',
        'Beside it we report a second figure: the median time from arrival to first reply, by category, counted in open hours.',
        'Every correction is recorded, never overwritten. Corrections are reviewed every month.',
      ],
    },

    whoThisIsntFor: {
      heading: 'Practices it doesn’t suit.',
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
          question: 'Does it decide what’s urgent?',
          answer:
            'No. It sorts by what kind of email it is. It assigns no priority and makes no clinical judgement.',
        },
        {
          question: 'Does it reply to patients?',
          answer:
            'No: for a sender you name, such as your booking form, it prepares your approved wording in Drafts, and someone at the practice checks it and presses Send.',
        },
        {
          question: 'What changes for reception?',
          answer:
            'Reception keeps working in the Outlook they already use. The category names go into Outlook once, using a one-page guide.',
        },
        {
          question: 'What does our IT provider need to do?',
          answer:
            'Grant one registered application access to the one shared mailbox, then restrict it to that mailbox and check that a second mailbox is refused.',
          answerLink: { label: 'For IT providers', href: '/it-providers' },
        },
        {
          question: 'Where is our data held?',
          answer:
            'In Australia, in the Sydney region. We don’t store message contents. Email bodies are read at the moment of categorising and not kept.',
          answerLink: { label: 'Data handling', href: '/data-handling' },
        },
        {
          question: 'How is it priced?',
          answer: pricingStatement,
        },
      ],
    },

    end: {
      line: 'To ask whether The Front Office suits your practice, email admin@vicaria.com.au with the practice name and how the shared inbox is used today.',
      link: { label: 'Enquire', href: '/enquire' },
    },
  },
]
