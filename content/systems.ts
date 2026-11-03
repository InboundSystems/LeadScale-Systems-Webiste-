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
const unclear: CategoryDef = { label: '00 Unclear', tone: 'amber' }
const appointments: CategoryDef = { label: '01 Appointments', tone: 'teal' }
const enquiries: CategoryDef = { label: '02 Patient Enquiries', tone: 'sky' }
const referrals: CategoryDef = { label: '03 Referrals', tone: 'plum' }
const accounts: CategoryDef = { label: '04 Accounts', tone: 'sage' }
const suppliers: CategoryDef = { label: '05 Suppliers', tone: 'rose' }

export const systems: SystemContent[] = [
  {
    name: 'The Front Office',
    sector: 'Specialist medical and allied health practices',
    slug: 'front-office',
    cardFor: 'for practices with a shared Microsoft 365 inbox',
    shortDescription:
      'Marks every email with your practice’s own categories, keeps track of what’s still waiting for a reply, and tells you each morning.',
    heroLine:
      'Every new email in the shared inbox gets one of your practice’s own categories, right where it sits. On open days, one email each morning lists what’s still waiting for a reply.',

    theProblem: {
      heading: 'One inbox. Every kind of email.',
      paragraphs: [
        'A specialist practice’s shared inbox gets bookings, referrals, results, scripts, invoices, supplier mail and marketing, all in one list.',
        'Knowing what each one is, and what’s still waiting for an answer, depends on whoever’s on the desk. The Front Office does the sorting and the keeping track.',
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
          heading: 'Marks every new email with one of your categories',
          body:
            'Each email is marked where it sits in the Inbox. Nothing is moved. Categories are numbered in your own order, like 01 Appointments and 02 Patient Enquiries, so sorting the Inbox by category puts it in the order you work.',
        },
        {
          heading: 'Says so when it can’t tell',
          body: 'If it can’t place an email, it marks it 00 Unclear, which sits at the top, so a person looks first. It doesn’t guess.',
        },
        {
          heading: 'Labels mail for the person it’s for',
          body:
            'When an email makes it clear by name or email address, it’s labelled for that person, like For Dr Smith. The label never depends on what the message is about. Reception still forwards it.',
        },
        {
          heading: 'Sends one morning summary on open days',
          body:
            'It goes to whoever you choose, and lists what’s still waiting for a reply, oldest first, counting only open hours. You can switch on two more blocks: mail passed on to a colleague where the sender hasn’t had a reply yet, and mail that’s been answered but is still sitting in the Inbox.',
        },
        {
          heading: 'Lists mail from known senders that landed in Junk',
          body:
            'The morning summary lists mail from people you already deal with that ended up in Junk. Nothing is moved out of Junk.',
        },
        {
          heading: 'Prepares approved replies for a sender you name',
          body:
            'For a sender like your website booking form, it prepares a reply in the exact wording you approved, addressed to the person who filled in the form. It waits in Drafts until someone checks it and presses Send.',
        },
        {
          heading: 'Respects reception’s corrections',
          body:
            'If reception changes a category, the system never changes it back. Every correction is recorded, never overwritten, and we go through them with you at a monthly review.',
        },
      ],
    },

    cardChips: [unclear, appointments, enquiries, referrals, accounts, { label: 'For Dr Smith', tone: 'slate' }],

    // The homepage hero demo. Same fictional practice and Monday morning as
    // the illustrations below. Every outcome line is a section 4 fact.
    heroDemo: {
      caption: 'The Front Office, our first system. Fictional practice.',
      mailboxName: 'reception@',
      folderName: 'Inbox',
      moment: 'Monday, 8:00am',
      beforeLabel: 'Before',
      afterLabel: 'After',
      replayLabel: 'Replay',
      resetLabel: 'Reset',
      changeCategoryLabel: 'Change category',
      correctionText: 'Correction recorded. The system never changes it back.',
      movedToLabel: 'Moved to',
      arrangedByDate: 'Arranged by: Date',
      arrangedByCategory: 'Arranged by: Categories',
      beforeHint: 'Every email in one list, newest first. Press After to see each one marked.',
      paneHint: 'Choose an email to see what the system did with it.',
      paneHeading: 'What the system did',
      toolbar: ['New mail', 'Reply', 'Categorise'],
      counter: { emails: 'emails', unclear: 'Unclear', labelled: 'labelled', moved: 'moved out of the Inbox' },
      // "Reception still forwards it" is the fact (section 4): the system
      // labels, it never forwards.
      notes: [
        { target: 'unclear', text: 'can’t tell? a person looks first' },
        { target: 'label', text: 'labelled for Dr Smith, reception still forwards it' },
        { target: 'counter', text: 'nothing leaves the Inbox' },
      ],
      notesLabel: 'Notes on the inbox',
      categories: [unclear, appointments, enquiries, referrals, accounts],
      emails: [
        {
          id: 'alex',
          sender: 'Alex',
          subject: 'Quick question',
          received: '7:48 am',
          unread: true,
          category: unclear,
          outcome:
            'Marked 00 Unclear. The system couldn’t tell what kind of email this is, so it sits at the top for a person to look at first.',
        },
        {
          id: 'booking',
          sender: 'Website booking form',
          subject: 'New booking request',
          received: '7:31 am',
          unread: true,
          category: appointments,
          outcome:
            'Marked 01 Appointments. A reply in the practice’s approved wording waits in Drafts until a person checks it and presses Send.',
        },
        {
          id: 'raman',
          sender: 'Priya Raman',
          subject: 'Can I bring my appointment forward?',
          received: 'Sun 8:05 pm',
          unread: true,
          category: appointments,
          outcome:
            'Marked 01 Appointments and left in the Inbox. If it still has no reply, it’s in tomorrow’s morning summary.',
        },
        {
          id: 'collins',
          sender: 'R. Collins',
          subject: 'Following up',
          received: 'Sun 6:14 pm',
          unread: true,
          category: unclear,
          outcome: 'Marked 00 Unclear. Nothing in it says what it’s about, so the system doesn’t guess.',
        },
        {
          id: 'avery',
          sender: 'Tom Avery',
          subject: 'Updating my contact details',
          received: 'Sat 10:22 am',
          unread: true,
          category: enquiries,
          outcome: 'Marked 02 Patient Enquiries where it sits. Nothing is moved and nothing is sent.',
        },
        {
          id: 'wattlebrook',
          sender: 'Wattlebrook Family Medical',
          subject: 'Referral for Dr Smith',
          received: 'Fri 4:40 pm',
          category: referrals,
          personLabel: 'For Dr Smith',
          outcome:
            'Marked 03 Referrals and labelled For Dr Smith, because the email names Dr Smith. Reception still forwards it.',
        },
        {
          id: 'hill',
          sender: 'Margaret Hill',
          subject: 'Parking near the rooms',
          received: 'Fri 2:15 pm',
          category: enquiries,
          outcome:
            'Marked 02 Patient Enquiries. While it waits for a reply, the morning summary counts open hours only, so the weekend doesn’t count.',
        },
        {
          id: 'kestrel',
          sender: 'Kestrel Office Supplies',
          subject: 'Question about invoice 2041',
          received: 'Fri 11:00 am',
          category: accounts,
          outcome: 'Marked 04 Accounts. The reply is left to a person. The system never sends an email.',
        },
        {
          id: 'ng',
          sender: 'Daniel Ng',
          subject: 'Request to move my appointment',
          received: 'Fri 9:40 am',
          category: appointments,
          outcome: 'Marked 01 Appointments. If reception changes the category, the system never changes it back.',
        },
        {
          id: 'northgate',
          sender: 'Northgate Medical Centre',
          subject: 'Referral: new patient',
          received: 'Thu 2:05 pm',
          category: referrals,
          outcome:
            'Marked 03 Referrals, by what kind of email it is. The system makes no clinical judgement and assigns no priority.',
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
        'Both use a fictional practice, open 8:00am to 5:00pm, Monday to Friday. Every sender is fictional.',
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

    // The working day, step by step. The same fictional practice, open
    // 8:00am to 5:00pm. It is the Friday before the Monday shown in the
    // illustrations, so it agrees with the summary it ends on: Daniel Ng
    // (9:40am) waits 7h 20m, Kestrel (11:00am) 6h, the booking form (4:50pm)
    // 10m, and Tom Avery (Saturday) 0m. The correction is made to a supplier
    // email, not Kestrel, which the summary still lists under 04 Accounts.
    dayTimeline: {
      heading: 'A working day.',
      intro: 'Same fictional practice, from before opening on Friday to the morning summary on Monday, the next open day.',
      hint: 'Press Next, or use the arrow keys.',
      startClock: 'Friday, 7:45am',
      startNote: 'The practice opens at 8:00am. Press Next to watch the day’s email arrive.',
      nextLabel: 'Next',
      backLabel: 'Back',
      restartLabel: 'Start again',
      ofLabel: 'of',
      paneHeading: 'What the system did',
      toolbar: ['New mail', 'Reply', 'Categorise'],
      mailboxName: 'reception@',
      folderName: 'Inbox',
      arrangedBy: 'Arranged by: Date',
      summaryLinkLabel: 'Read the full summary',
      newLabel: 'New',
      steps: [
        {
          clock: 'Friday, 7:48am',
          arrival: { id: 'moreau', sender: 'A. Moreau', subject: 'Checking in', received: '7:48 am', category: unclear },
          outcome:
            'Marked 00 Unclear. The system couldn’t tell what kind of email this is, so it sits at the top and a person looks first.',
        },
        {
          clock: 'Friday, 9:40am',
          arrival: {
            id: 'ng',
            sender: 'Daniel Ng',
            subject: 'Request to move my appointment',
            received: '9:40 am',
            category: appointments,
          },
          outcome: 'Marked 01 Appointments where it sits. Nothing is moved. Until it gets a reply, it counts as waiting.',
        },
        {
          clock: 'Friday, 11:00am',
          arrival: {
            id: 'kestrel',
            sender: 'Kestrel Office Supplies',
            subject: 'Question about invoice 2041',
            received: '11:00 am',
            category: accounts,
          },
          outcome: 'Marked 04 Accounts. The reply is left to a person. The system never sends an email.',
        },
        {
          clock: 'Friday, 2:30pm',
          arrival: {
            id: 'bayside',
            sender: 'Bayside Linen Service',
            subject: 'Delivery schedule for December',
            received: '2:30 pm',
            category: accounts,
          },
          outcome: 'Marked 04 Accounts where it sits in the Inbox.',
        },
        {
          clock: 'Friday, 2:45pm',
          correction: { id: 'bayside', to: suppliers },
          outcome:
            'Reception changes the category to 05 Suppliers. The system records the correction and never changes it back. We go through corrections with the practice every month.',
        },
        {
          clock: 'Friday, 4:40pm',
          arrival: {
            id: 'harbourside',
            sender: 'Harbourside Family Practice',
            subject: 'Referral for Dr Smith',
            received: '4:40 pm',
            category: referrals,
            personLabel: 'For Dr Smith',
          },
          outcome:
            'Marked 03 Referrals and labelled For Dr Smith, because the email names Dr Smith. Reception still forwards it.',
        },
        {
          clock: 'Friday, 4:50pm',
          arrival: {
            id: 'booking',
            sender: 'Website booking form',
            subject: 'New booking request',
            received: '4:50 pm',
            category: appointments,
          },
          outcome:
            'Marked 01 Appointments. A reply in the practice’s approved wording, addressed to the person who filled in the form, waits in Drafts until a person checks it and presses Send.',
        },
        {
          clock: 'Saturday, 10:22am',
          arrival: {
            id: 'avery',
            sender: 'Tom Avery',
            subject: 'Updating my contact details',
            received: 'Sat 10:22 am',
            category: enquiries,
          },
          outcome:
            'Arrives while the practice is closed and gets marked all the same. The weekend doesn’t count as waiting.',
        },
        {
          clock: 'Monday, 7:00am',
          summary: true,
          outcome:
            'The morning summary reaches the practice manager. The booking form email from 4:50pm on Friday shows as waiting ten minutes, because only open hours count.',
        },
      ],
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
          title: 'Your IT administrator grants access',
          description: 'Your IT administrator grants access to one mailbox, and restricts it to that mailbox.',
          link: { label: 'What is granted', href: '/it-providers' },
        },
        {
          title: 'A quiet test week',
          description: 'The system records what it would have done. Nothing shows up in the mailbox.',
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
        'Every correction is recorded, never overwritten, and we go through them with you at a monthly review.',
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
          question: 'Can it send email?',
          answer:
            'No. It doesn’t request or hold Mail.Send. A prepared reply waits in Drafts until a person presses Send.',
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
