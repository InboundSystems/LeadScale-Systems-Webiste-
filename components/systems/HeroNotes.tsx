import type { InboxDemo } from '@/content/types'

// Handwritten notes on The Front Office's inbox: a short list under the
// window, in Caveat and saffron darkened to #8A5E1F (5.01 on the sky tint of
// the Systems section). Each is about one thing in the window above it.
export function HeroNotesList({ notes, label }: { notes: InboxDemo['notes']; label: string }) {
  return (
    <ul aria-label={label} className="mt-4 flex flex-col gap-0.5">
      {notes.map((note) => (
        <li key={note.target} className="v-hand text-[1.375rem] leading-tight text-[#8a5e1f]">
          <span aria-hidden="true">↳ </span>
          {note.text}
        </li>
      ))}
    </ul>
  )
}
