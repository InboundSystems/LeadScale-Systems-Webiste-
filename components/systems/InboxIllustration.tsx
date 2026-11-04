import type { CategoryDef, InboxIllustration as InboxData, InboxMessage } from '@/content/types'
import CategoryChip, { personLabelTone } from './CategoryChip'

// An illustrated Outlook-style message list, built in HTML/CSS. Evokes
// Outlook through layout and the system UI face only; no Microsoft marks.
// Every sender and subject comes from content/systems.ts and is fictional.

// One font on the flagship: Plus Jakarta Sans.
const outlookFace = { fontFamily: 'var(--font-sans), system-ui, sans-serif' }

function Row({ message, category, stacked }: { message: InboxMessage; category: CategoryDef; stacked: boolean }) {
  const weight = message.unread ? 'font-semibold text-[var(--ink)]' : 'text-[var(--ink)]'
  return (
    <li className="relative border-b border-[var(--hairline)] last:border-b-0">
      {message.unread && <span aria-hidden="true" className="unread-dot top-[16px] sm:top-[15px]" />}
      {message.unread && <span className="sr-only">Unread. </span>}
      <div
        className={
          stacked
            ? 'flex flex-col gap-1 py-2.5 pl-4 pr-3'
            : 'flex flex-col gap-1 py-2.5 pl-4 pr-3 sm:grid sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_auto_6.25rem] sm:items-center sm:gap-4 sm:py-2'
        }
      >
        <div className={`flex items-baseline justify-between gap-3 ${stacked ? '' : 'sm:contents'}`}>
          <span className={`truncate text-[0.875rem] ${weight}`}>{message.sender}</span>
          <span className={`shrink-0 text-[0.75rem] tabular-nums text-[var(--muted)] ${stacked ? '' : 'sm:hidden'}`}>
            {message.received}
          </span>
        </div>
        <span className={`truncate text-[0.875rem] ${message.unread ? 'font-semibold text-[var(--ink)]' : 'text-[var(--muted)]'}`}>
          {message.subject}
        </span>
        <span className="flex flex-wrap gap-1.5">
          <CategoryChip category={category} />
          {message.personLabel && (
            <CategoryChip category={{ label: message.personLabel, tone: personLabelTone }} />
          )}
        </span>
        {!stacked && (
          <span className="hidden text-right text-[0.75rem] tabular-nums text-[var(--muted)] sm:block">{message.received}</span>
        )}
      </div>
    </li>
  )
}

export default function InboxIllustration({
  inbox,
  stacked = false,
  maxGroups,
  className = '',
}: {
  inbox: InboxData
  /** Always use the narrow two-line row layout, e.g. inside a half-width column. */
  stacked?: boolean
  maxGroups?: number
  className?: string
}) {
  const groups = maxGroups ? inbox.groups.slice(0, maxGroups) : inbox.groups

  return (
    <figure className={className}>
      <div
        role="group"
        aria-label={`Illustration: the ${inbox.folderName} of ${inbox.mailboxName}, ${inbox.arrangedBy.toLowerCase()}`}
        className="lit lit-screen overflow-hidden rounded-[8px] border border-[var(--hairline)] bg-[var(--surface)]"
        style={outlookFace}
      >
        <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] bg-[var(--chrome)] px-4 py-2.5">
          <p className="truncate text-[0.8125rem] text-[var(--muted)]">
            {inbox.mailboxName} <span aria-hidden="true">›</span>{' '}
            <span className="font-semibold text-[var(--ink)]">{inbox.folderName}</span>
          </p>
          <p className="shrink-0 text-[0.75rem] text-[var(--muted)]">{inbox.arrangedBy}</p>
        </div>

        {!stacked && (
          <div
            aria-hidden="true"
            className="hidden grid-cols-[minmax(0,13rem)_minmax(0,1fr)_auto_6.25rem] gap-4 border-b border-[var(--hairline)] py-1.5 pl-4 pr-3 text-[0.75rem] text-[var(--muted)] sm:grid"
          >
            <span>From</span>
            <span>Subject</span>
            <span>Categories</span>
            <span className="text-right">Received</span>
          </div>
        )}

        {groups.map((group) => (
          <div key={group.category.label}>
            <div className="flex items-center gap-2 border-b border-[var(--hairline)] bg-[var(--chrome-soft)] px-4 py-1.5">
              <span aria-hidden="true" className="text-[0.625rem] text-[var(--muted)]">
                ▼
              </span>
              <span className="text-[0.75rem] font-semibold text-[var(--ink)]">Categories: {group.category.label}</span>
              <span className="text-[0.75rem] text-[var(--muted)]">
                {group.messages.length} {group.messages.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <ul>
              {group.messages.map((message) => (
                <Row
                  key={`${message.sender}-${message.subject}`}
                  message={message}
                  category={group.category}
                  stacked={stacked}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <figcaption className="v-small mt-3">{inbox.caption}</figcaption>
    </figure>
  )
}
