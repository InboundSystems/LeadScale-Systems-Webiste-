// The owl's eye as a small motif: a ring with an inner pupil, drawn in SVG
// (not the logo). Used for the folder rail's current item, the section
// chips and the "What never changes" bullets, always in the section colour.
// The colour can be any CSS value, including var(), so a chip can pass its
// own current swatch. Decorative: the label beside it carries the meaning.
export default function EyeDot({ colour, size = 12, className = '' }: { colour: string; size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" width={size} height={size} className={`shrink-0 ${className}`}>
      <circle cx="6" cy="6" r="5.1" style={{ fill: 'none', stroke: colour, strokeWidth: 1.6 }} />
      <circle cx="6" cy="6" r="2.3" style={{ fill: colour }} />
    </svg>
  )
}
