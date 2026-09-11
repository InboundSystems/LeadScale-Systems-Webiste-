import type { SystemContent, SystemsSectionIntro } from './types'
import { pricingStatement } from './pricing'

// UNVALIDATED — content here is a best guess, not a proven product. Adding a
// system means appending an entry to this array; nothing else about the
// shape needs to change. Most optional slots stay empty until a system is
// actually validated — see the comment on SystemContent in ./types.ts for
// what "empty" should render as (nothing, not an empty heading).

export const systems: SystemContent[] = [
  {
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
  },
  {
    name: 'The Front Office',
    sector: 'Specialist clinics',
    slug: 'front-office',
    shortDescription:
      'Every email arriving in the practice’s shared mailbox is categorised and filed before reception opens it. Nothing sits unseen.',
    // Deliberately different from shortDescription above — see the doc
    // comment on SystemContent.heroLine in ./types.ts.
    heroLine: 'By the time reception opens each morning, every message that arrived overnight is already sorted into place.',
    theProblem: {
      heading: 'Nothing Arrives Already Sorted.',
      paragraphs: [
        'A specialist practice’s shared inbox takes every kind of message in one undifferentiated stream — new enquiries, referrals, results correspondence, billing, supplier mail, post-procedure questions, recruitment. It arrives whether or not anyone is at the desk to read it.',
        'Reception’s day begins by working out what each message actually is, before anything is done about it. Sorting comes first every time, and sorting produces nothing anyone can point to at the end of the week.',
        'The cost is not the time this takes. It is that something waits. A referral arrives on a Friday afternoon, underneath forty other things, and sits for three days. Nobody decided to let it wait. It was not seen.',
      ],
    },
    whatMakesItDifferent: [
      {
        heading: 'No clinical judgement.',
        body:
          'The system does not decide what is urgent, what is serious, or what should be seen first. The practice sets the categories, the response-time target for each, and the specific words that matter. The system sorts against those categories and keeps time against them, and nothing more.',
      },
      {
        heading: 'Nothing sends.',
        body:
          'Every draft is left in the thread for a person to read and send. Nothing is deleted, archived, or moved anywhere reception cannot find it.',
      },
      {
        heading: 'Almost no interface.',
        body:
          'The system appears inside the mail client reception already uses, plus one short summary email each morning. There is no login, no dashboard, and nothing to learn on day one.',
      },
    ],
    aTypicalDay: {
      heading: 'A Working Day.',
      intro: 'Six moments from an ordinary working day, showing what the system actually does and does not decide.',
      beats: [
        {
          time: '7:50am',
          body:
            'Reception opens the mail client, and the overnight mail is already sitting in folders — enquiries, referrals, results, billing, post-procedure, suppliers. The inbox itself holds only the handful of messages the system was not confident about.',
        },
        {
          time: '7:52am',
          body:
            'The short morning summary arrives: what was filed overnight, the thread that has waited longest, anything past the practice’s own response targets, and what is still unanswered.',
        },
        {
          time: '9:15am',
          body:
            'A patient writes in about a procedure site. The message files under post-procedure, the category it matches. It also contains a phrase the practice put on its own watch-list, so a copy goes to an attention folder and the message is flagged. No judgement is made about what the message means or how serious it is — a rule the practice wrote was matched, nothing more.',
        },
        {
          time: '11:00am',
          body:
            'Someone in reception moves a message from billing to insurance. The correction is recorded. If the same correction keeps happening, it becomes a proposal in the monthly report, with the count behind it.',
        },
        {
          time: '4:30pm',
          body:
            'A supplier email files itself away. Nobody opens it until Thursday, and that is correct — the practice set no response target on that folder.',
        },
        {
          time: '6:40pm',
          body:
            'An enquiry arrives after close. It files, a reply is drafted and left in the thread, and nothing sends. It is first in the folder tomorrow, with an answer already waiting to be checked and sent.',
        },
      ],
    },
    whatWeDo: [
      'Reads every message arriving in the shared mailbox',
      'Files each one into the folder the practice defined for it',
      'Says so when it is not confident, rather than guessing, and leaves that message in a review folder',
      'Flags messages containing phrases the practice has specified itself',
      'Sends one short summary each morning: what was filed overnight, what has waited longest, what has passed the practice’s own response target, and what remains unanswered',
      'Drafts replies for the categories the practice has nominated, left in the thread for a person to send',
      'Never drafts a reply for a category the practice has marked never-draft — clinical matters, results, complaints, anything legal',
    ],
    howItWorks: {
      steps: [
        {
          title: 'A week of the inbox is audited',
          description:
            'Vicaria reads a week of the practice’s mail and returns with the categories it actually contains and the volume in each. The practice corrects that starting point; it is never asked to invent a filing structure from nothing.',
        },
        {
          title: 'Thirty minutes to configure',
          description:
            'The categories are agreed, and the practice sets its own response-time target for each one. It names the specific words it wants surfaced, and says which categories must never receive a drafted reply.',
        },
        {
          title: 'Filing begins',
          description:
            'Folders appear, mail sorts into them, and the morning summary starts. Results are checked daily through the first week.',
        },
        {
          title: 'Drafting, on the practice’s terms',
          description:
            'Once filing has run for a fortnight, drafts are written in the practice’s own voice, drawn from mail it has already sent. Drafting is switched on only for the categories the practice allows.',
        },
      ],
      closingLine: 'The engagement is reviewed at the end of the first month against a single figure agreed before installation.',
    },
    whatChanges: {
      heading: 'What Changes For The Practice.',
      changes: [
        'Mail is sorted before anyone opens it. The desk begins the day already answering.',
        'Nothing waits unseen — what has waited longest is stated every morning, in writing',
        'The questions the practice answers repeatedly stop being retyped',
        'A message the practice has said matters surfaces the moment it arrives, on the practice’s own terms',
        'Covering the desk is easier — the structure stays the same no matter who is sitting there',
      ],
      measureIntro:
        'Every engagement is judged against figures agreed before installation and reported monthly, drawn from the system’s own record rather than from an impression.',
      measures: [
        'The proportion of mail filed correctly without anyone moving it',
        'Median time from arrival to first reply, by category',
        'Where drafting is enabled, the proportion of drafts sent unedited',
      ],
    },
    whoThisIsntFor: {
      intro: 'Where The Front Office Does Not Apply.',
      criteria: [
        'Practices that are not on Microsoft 365 or Google Workspace. This is a technical prerequisite',
        'Practices wanting clinical triage, urgency scoring or risk ranking. The system does not make clinical judgements and is not built to',
        'Practices with mail volumes too low to justify the cost of an engagement',
        'Practices seeking software they administer themselves',
      ],
    },
    faq: [
      {
        question: 'Does it decide what is urgent?',
        answer:
          'No. Priority comes from the folder a message is filed into, the response-time target the practice set for that folder, and how long the message has waited.',
      },
      {
        question: 'Does it send anything?',
        answer: 'No. Every reply waits for a person to read and send it.',
      },
      {
        question: 'What does reception have to learn?',
        answer: 'Nothing. It works inside the mail client they already use.',
      },
      {
        question: 'What happens when it is not sure?',
        answer:
          'It says so. The message goes to a review folder rather than being guessed into the wrong place.',
      },
      {
        question: 'Where does our data go?',
        answer: 'It is stored in Australia and handled under the same rules for every client.',
        answerLink: { href: '/data-handling', label: 'Read the data handling page →' },
      },
      {
        question: 'How much does it cost?',
        answer: pricingStatement,
      },
    ],
    endingLine: {
      body:
        'An engagement can be ended at any point, without notice. Access is revoked by the practice’s own administrator, and data is returned or deleted on request.',
      href: '/how-it-works',
      label: 'How Vicaria works →',
    },
    ctaBody:
      'Tell us roughly how many emails arrive in a typical week, who currently reads them, and which ones tend to wait longest. We will confirm whether The Front Office applies to your practice.',
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
  closingLine: 'Systems are added as new sectors are researched.',
}
