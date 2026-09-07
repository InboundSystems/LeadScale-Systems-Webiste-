import type { SystemContent, SystemsSectionIntro } from './types'
import { pricingStatement } from './pricing'

// UNVALIDATED — content here is a best guess, not a proven product. Adding a
// system means appending an entry to this array; nothing else about the
// shape needs to change. Most optional slots stay empty until a system is
// actually validated — see the comment on SystemContent in ./types.ts for
// what "empty" should render as (nothing, not an empty heading).

export const systems: SystemContent[] = [
  {
    name: 'The Front Desk',
    shortDescription:
      'Clients book by text or direct message. The system responds, checks live availability, and writes the booking into the calendar the business already uses.',
    // slug: intentionally unset — see the reserved-for comment on
    // SystemContent.slug in ./types.ts.
    whatMakesItDifferent: [
      {
        heading: 'No migration.',
        body:
          'The system writes into the calendar the existing booking software already syncs with. Bookings appear in that software as normal bookings. Nothing is exported, nothing is moved, and no new software is introduced.',
      },
      {
        heading: 'Correct duration, not average duration.',
        body:
          'A single job is not always one continuous block. It may consist of setting up, the period of active work, an interval during which something develops or sets and the room is occupied but the staff member is not, and the clean-up afterwards. Booked as one block, that interval is lost from the working day. The Front Desk books each part separately, so it remains available.',
      },
    ],
    whatWeDo: [
      'Answers enquiries outside trading hours and while staff are occupied',
      'Identifies the service requested and the time it requires',
      'Checks live availability and offers only genuine openings',
      'Writes confirmed bookings into the existing calendar',
      'Recognises returning clients, their usual service and when they are next due',
      'Sends confirmations, reminders and follow-ups on a set schedule',
      'Refers anything outside its remit to the owner',
    ],
    // Reshaped from a bare array to { steps, closingLine } to mirror
    // audience.howItWorks — authorised this pass, see content/types.ts.
    howItWorks: {
      steps: [
        {
          title: 'Provide what exists',
          description:
            'A client list, a price list, a photograph of the menu on the wall. It does not need to be tidy or consolidated. Reconciling inconsistent records is part of the work.',
        },
        {
          title: 'One call, approximately thirty minutes',
          description:
            'The service list is read back and the timings corrected. This is the only stage that requires the owner’s time, and it determines whether the system books accurately.',
        },
        {
          title: 'Connection and installation',
          description:
            'Two connections are made: the calendar, so availability can be read, and the messaging channels the system will answer on. Both are permission-based and can be revoked. Same day in most engagements.',
        },
        {
          title: 'First week under approval',
          description:
            'Every message the system composes is sent to the owner before it goes out. Approving or correcting it is what teaches the system the business. Approval can be discontinued after the first week, or retained indefinitely.',
        },
      ],
      closingLine: 'An engagement can be ended at any point, without notice.',
    },
    whoThisIsntFor: {
      // Given as a two-line heading ("Where The Front Desk" / "Does Not
      // Apply."). This field renders into a single eyebrow-style <p>, same
      // slot used for the section's label — stored as one line, no
      // component change made.
      intro: 'Where The Front Desk Does Not Apply.',
      criteria: [
        'Businesses that do not take appointments',
        'Businesses seeking to replace their booking system. The Front Desk operates on top of an existing system and does not replace it',
        'Businesses with reception or administrative staff already answering enquiries',
        'Booking systems that do not synchronise with an external calendar. This is a technical prerequisite',
      ],
    },
    // Was 6 entries: 3 rewritten against docs/VOICE.md, cost wired to the
    // pricing constant (unchanged), and the 3 that carried PLACEHOLDER
    // answers now have final copy.
    faq: [
      {
        question: 'Does it know how long each job actually takes?',
        answer:
          'Only because the business specifies it. On the setup call the service list is read back and the owner corrects the timings, including the intervals most systems record incorrectly — a period during which something is setting and the room is occupied but the staff member is free. The system books what it was told, not an average.',
      },
      {
        question: 'What happens to my client list?',
        answer:
          'It is stored in Australia and remains the property of the business. It is returnable, or deletable, on request at any time.',
      },
      {
        question: 'How much does it cost?',
        answer: pricingStatement,
      },
      {
        question: 'What happens when the system cannot answer something?',
        answer:
          'It does not attempt an answer. The message is referred to the owner, and the system takes no further action on that conversation until the owner responds.',
      },
      {
        question: 'How long before it is running?',
        answer:
          'Same day in most engagements, once the setup call is complete and the calendar and messaging channels are connected.',
      },
      {
        question: 'What am I responsible for once it is live?',
        answer:
          'Approving replies during the first week. After that, nothing, unless the owner chooses to continue approving. Commercial decisions — pricing, deposits, refunds and cancellation terms — remain with the owner permanently and are not delegated to the system.',
      },
    ],
  },
]

// The short, company-level intro to the systems roster — shown on the
// homepage, above the system card(s). Distinct from any one system's own
// content above.
export const systemsSectionIntro: SystemsSectionIntro = {
  // Given as two lines in the brief ("Systems Vicaria Builds" / "And
  // Operates."); stored as one continuous string since SystemsSection.tsx
  // renders this field as a single text node with no line-break support —
  // no component change made here, so it wraps naturally instead.
  heading: 'Systems Vicaria Builds And Operates.',
  body: 'Each system is built for a single recurring job within a single sector, and is operated by Vicaria rather than licensed to the client.',
  closingLine: 'A second system is in research.',
}
