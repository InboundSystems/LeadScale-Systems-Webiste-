import type { ReactNode } from 'react'
import type { CategoryDef } from '@/content/types'
import CategoryChip from './CategoryChip'

// Shared pieces of the interactive inbox panels (the homepage hero demo and
// The Front Office's working day). Presentational only, so both client
// components can use them. Outlook is evoked through layout and the system UI
// face; no Microsoft marks.

// One font on the flagship: the windows are set in Plus Jakarta Sans too.
export const outlookFace = { fontFamily: 'var(--font-sans), system-ui, sans-serif' }

/** The panel: 1px var(--frame) border, 8px radius, and the site's only shadow.
 *  A muted, non-interactive toolbar row, then the mailbox › folder line. */
export function InboxFrame({
  toolbar,
  mailboxName,
  folderName,
  right,
  children,
}: {
  toolbar: string[]
  mailboxName: string
  folderName: string
  /** Right-hand side of the mailbox line, e.g. "Arranged by: Categories". */
  right?: ReactNode
  children: ReactNode
}) {
  return (
    <div
      className="lit lit-screen overflow-hidden rounded-[8px] border border-[var(--frame)] bg-[var(--surface)]"
      style={outlookFace}
    >
      <div aria-hidden="true" className="flex items-center gap-2 border-b border-[var(--hairline)] px-4 py-1.5 text-[0.75rem] text-[var(--muted)]">
        {toolbar.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            {i > 0 && <span className="text-[var(--faint)]">·</span>}
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] bg-[var(--chrome)] px-4 py-2">
        <p className="truncate text-[0.8125rem] text-[var(--muted)]">
          {mailboxName} <span aria-hidden="true">›</span>{' '}
          <span className="font-semibold text-[var(--ink)]">{folderName}</span>
        </p>
        {right && <p className="shrink-0 text-[0.75rem] text-[var(--muted)]">{right}</p>}
      </div>
      {children}
    </div>
  )
}

/** The reading pane under the list: a title bar ("What the system did") with
 *  the selected email's category chip, then the explanation. */
export function ReadingPane({
  heading,
  category,
  children,
}: {
  heading: string
  category?: ReactNode
  children: ReactNode
}) {
  return (
    <div aria-live="polite" className="border-t border-[var(--hairline)] bg-[var(--chrome-soft)]">
      <div className="flex min-h-[2.25rem] items-center justify-between gap-3 border-b border-[var(--hairline)] px-4 py-1.5">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">{heading}</p>
        {category}
      </div>
      <div className="px-4 py-3">{children}</div>
    </div>
  )
}

/** Sender and subject line of the email shown in a reading pane. */
export function PaneSubject({
  sender,
  subject,
  personLabel,
}: {
  sender: string
  subject: string
  personLabel?: CategoryDef
}) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-[var(--ink)]">
      <span className="font-semibold">{sender}</span>
      <span className="text-[var(--muted)]">{subject}</span>
      {personLabel && <CategoryChip category={personLabel} />}
    </p>
  )
}
