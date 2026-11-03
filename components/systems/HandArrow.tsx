// A hand-drawn arrow, as SVG path data inside a parent <svg>: a loose curve
// from (x1, y1) to (x2, y2) with a slight bow, and an open two-stroke head at
// the end. Used by the handwritten notes (HeroNotes, AnnotatedSummary).
export default function HandArrow({
  x1,
  y1,
  x2,
  y2,
  colour,
  bow = 14,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  colour: string
  /** How far the curve bows away from a straight line, in px. */
  bow?: number
}) {
  const dx = x2 - x1
  const dy = y2 - y1
  // Control points a third and two thirds along, pushed off the line by
  // `bow` (alternating sides), so the stroke looks drawn rather than ruled.
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const c1x = x1 + dx / 3 + nx * bow
  const c1y = y1 + dy / 3 + ny * bow
  const c2x = x1 + (2 * dx) / 3 - nx * bow * 0.4
  const c2y = y1 + (2 * dy) / 3 - ny * bow * 0.4
  // Head: two short strokes at ±28° from the incoming direction.
  const angle = Math.atan2(y2 - c2y, x2 - c2x)
  const head = 9
  const a1 = angle + Math.PI - 0.49
  const a2 = angle + Math.PI + 0.49
  return (
    <g stroke={colour} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M${x1} ${y1} C${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`} />
      <path
        d={`M${x2 + Math.cos(a1) * head} ${y2 + Math.sin(a1) * head} L${x2} ${y2} L${x2 + Math.cos(a2) * head} ${
          y2 + Math.sin(a2) * head
        }`}
      />
    </g>
  )
}
