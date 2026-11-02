// Archived 2026-11-02 from content/systems.ts — The Booking Line entry exactly
// as it stood before the November 2026 rework. Not routed, not built (archive/
// is excluded in tsconfig.json). See README.md in this directory.
//
// The `research` field was removed from SystemContent in the rework; its
// former type is reproduced here so this file still reads on its own.

import type { SystemContent } from '../../content/types'
import { pricingStatement } from '../../content/pricing'

type ArchivedSystemContent = SystemContent & {
  research?: {
    heading: string
    body: string
    quote?: string
    attribution?: string
  }
}

export const bookingLine: ArchivedSystemContent = {
  name: 'The Booking Line',
  sector: 'Service businesses',
  slug: 'booking-line',
  shortDescription:
    'Clients book by text or direct message. The system responds, checks live availability, and writes the booking into the calendar the business already uses.',
  heroLine: 'Enquiries that arrive outside trading hours are answered as they come in.',
  whatMakesItDifferent: [
    {
      heading: 'No migration.',
      body:
        'The system writes into the calendar the existing booking software already syncs with. Bookings appear in that software as normal bookings. Nothing is exported, nothing is moved, and no new software is introduced.',
    },
    {
      heading: 'Correct duration, not average duration.',
      body:
        'A single job is not always one continuous block. It may consist of setting up, the period of active work, an interval during which something develops or sets and the room is occupied but the staff member is not, and the clean-up afterwards. Booked as one block, that interval is lost from the working day. The Booking Line books each part separately, so it remains available.',
    },
  ],
  // Moved from the homepage — see components/systems/Research.tsx, now
  // deleted. Adjusted to read as this system's own origin rather than a
  // company-level claim: dropped "System 01" (renamed) and the line about
  // a second sector being under research, which no longer holds now that
  // The Front Office exists without research behind it.
  research: {
    heading: 'Twenty Of Fifty-Eight Described The Same Problem.',
    body:
      'Two hundred and four Australian salon and beauty businesses were approached in person, by phone and by message, and asked what work they were still doing after close. Fifty-eight gave a substantive answer. Twenty of them described the same thing: clients booking by text, DM and phone instead of the booking system, and someone re-entering it by hand at the end of the day. Nothing else came close. The hypothesis held going in — winning back lapsed clients — placed seventh. The Booking Line was built for that finding.',
    // Restored from the deleted Research.tsx — an anonymous research
    // participant, not a client. No business named.
    quote: 'Getting people to actually use the booking system rather than clients ringing or texting.',
    attribution: 'Salon owner, research response',
  },
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
    // Given as a two-line heading ("Where The Booking Line" / "Does Not
    // Apply."). This field renders into a single eyebrow-style <p>, same
    // slot used for the section's label — stored as one line, no
    // component change made.
    intro: 'Where The Booking Line Does Not Apply.',
    criteria: [
      'Businesses that do not take appointments',
      'Businesses seeking to replace their booking system. The Booking Line operates on top of an existing system and does not replace it',
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
  ctaBody:
    'Tell us how many enquiries you answer yourself, when they arrive, and what you are using now. We will confirm whether The Booking Line applies to your business.',
}

// Also removed in the same pass:
// content/audience.ts about.intro[2]:
//   'The Booking Line was specified from research into one sector, Australian salon and beauty businesses, rather than assumption. The research itself is set out on The Booking Line’s own page.',
// content/privacy.ts, Automated Processing, paragraph 2:
//   'For The Front Office, no message is ever sent without a person choosing to send it. For The Booking Line, a person reviews every message during the first week of an engagement; after that, approval can continue or be discontinued, at the client’s choice.',
