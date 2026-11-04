// The hero H1 with one word marked: a single light-blue stroke under it, drawn
// in inline SVG as a slightly uneven highlighter line (not a squiggle). It
// draws in once, left to right, over 600ms on load, in CSS, so it needs no
// JavaScript; under prefers-reduced-motion it is simply there
// (app/globals.css, "Marker stroke"). The stroke sits behind the lower part
// of the word (#60A5FA, light blue).
export default function MarkedHeading({
  text,
  marked,
  className = '',
}: {
  text: string
  marked: string
  className?: string
}) {
  const at = text.indexOf(marked)
  if (at < 0) return <h1 className={className}>{text}</h1>
  return (
    <h1 className={className}>
      {text.slice(0, at)}
      <span className="relative isolate inline-block whitespace-nowrap">
        <svg
          aria-hidden="true"
          viewBox="0 0 300 24"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -left-[0.04em] -right-[0.06em] bottom-[0.02em] -z-10 h-[0.34em] w-[calc(100%+0.1em)] overflow-visible"
        >
          <path
            className="marker-stroke"
            pathLength={1}
            d="M3 15.5 C 48 12.5, 92 16.5, 140 13.8 S 236 12.2, 297 14.6"
            fill="none"
            stroke="var(--note-light)"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {marked}
      </span>
      {text.slice(at + marked.length)}
    </h1>
  )
}
