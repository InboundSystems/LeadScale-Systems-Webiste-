// The owl's eye as a small motif: a ring with an inner pupil, drawn in SVG
// (not the logo). Used for the folder rail's current item, the section
// chips, the "What never changes" bullets and the "on watch" indicator on
// the story stages, always in light blue or the section colour. The colour
// can be any CSS value, including var(), so a chip can pass its own swatch.
// Decorative: the label beside it carries the meaning.
//
// watch: the eye can open. Closed it is a thin lid; open, the ring and
// pupil show with a soft glow. With `open` set, the stage decides; without
// it, the eye opens when its [data-reveal] ancestor scrolls into view
// (app/globals.css, "The eye that opens"). Open without JavaScript and
// under reduced motion.
export default function EyeDot({
  colour,
  size = 12,
  className = '',
  watch = false,
  open,
  delay,
}: {
  colour: string
  size?: number
  className?: string
  watch?: boolean
  open?: boolean
  /** Delay before it opens, in ms (watch only). */
  delay?: number
}) {
  if (!watch) {
    return (
      <svg aria-hidden="true" viewBox="0 0 12 12" width={size} height={size} className={`shrink-0 ${className}`}>
        <circle cx="6" cy="6" r="5.1" style={{ fill: 'none', stroke: colour, strokeWidth: 1.6 }} />
        <circle cx="6" cy="6" r="2.3" style={{ fill: colour }} />
      </svg>
    )
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="-3 -3 18 18"
      width={size * 1.5}
      height={size * 1.5}
      data-open={open === undefined ? undefined : String(open)}
      className={`eye-watch shrink-0 overflow-visible ${className}`}
      style={{ margin: -size * 0.25, ...(delay !== undefined ? { '--eye-delay': `${delay}ms` } : {}) } as React.CSSProperties}
    >
      <circle className="eye-glow" cx="6" cy="6" r="7.5" style={{ fill: colour, fillOpacity: 0.28, filter: 'blur(2px)' }} />
      <g className="eye-lid">
        <circle cx="6" cy="6" r="5.1" style={{ fill: 'none', stroke: colour, strokeWidth: 1.6 }} />
      </g>
      <g className="eye-lid">
        <circle className="eye-pupil" cx="6" cy="6" r="2.3" style={{ fill: colour, transition: 'opacity 400ms ease-out var(--eye-delay, 250ms)' }} />
      </g>
    </svg>
  )
}
