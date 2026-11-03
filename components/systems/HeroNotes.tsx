import type { InboxDemo } from '@/content/types'

// Annotation labels on The Front Office's inbox: a short list under the
// window, each with a thin indigo leader line, in small medium-weight Plus
// Jakarta Sans, indigo #4F46E5 (6.29 on white). Each is about one thing in
// the window above it.
export function HeroNotesList({ notes, label }: { notes: InboxDemo['notes']; label: string }) {
  return (
    <ul aria-label={label} className="mt-4 flex flex-col gap-1.5">
      {notes.map((note) => (
        <li key={note.target} className="flex items-center gap-2.5 text-[0.8125rem] font-medium leading-snug text-[var(--indigo)]">
          <span aria-hidden="true" className="h-px w-5 shrink-0 bg-[var(--indigo)]" />
          {note.text}
        </li>
      ))}
    </ul>
  )
}
