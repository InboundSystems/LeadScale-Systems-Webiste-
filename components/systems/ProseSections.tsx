import type { PrivacySection } from '@/content/types'
import IntendedPurpose from './IntendedPurpose'
import { SplitBlock } from './ui'

// Ruled heading-and-body sections, as on a policy document. Shared by
// /data-handling and /privacy. A ProseSection is a PrivacySection with the
// optional fields unset, so both pages pass straight through.
export default function ProseSections({ sections }: { sections: PrivacySection[] }) {
  return (
    <>
      {sections.map((section) => (
        <SplitBlock key={section.heading} heading={section.heading}>
          {section.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="max-w-[65ch] list-disc pl-5 marker:text-[var(--accent-light)]">
              {section.bullets.map((b) => (
                <li key={b} className="py-1 pl-1 text-[var(--ink)]">
                  {b}
                </li>
              ))}
            </ul>
          )}
          {section.includesIntendedPurpose && <IntendedPurpose className="my-2" />}
          {section.after?.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
        </SplitBlock>
      ))}
    </>
  )
}
