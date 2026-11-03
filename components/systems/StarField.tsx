// The hero's night sky: a very faint, sparse star field. Small dots (about
// 1px) at low opacity, generated once from a fixed seed so the server and the
// browser draw the same sky. Static, never animated (so nothing changes under
// reduced motion). Decorative and aria-hidden.
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function stars(seed: number, count: number, maxOpacity: number) {
  const rand = mulberry32(seed)
  return Array.from({ length: count }, () => ({
    x: +(rand() * 1440).toFixed(1),
    y: +(rand() * 760).toFixed(1),
    r: +(0.5 + rand() * 0.45).toFixed(2),
    o: +(0.08 + rand() * (maxOpacity - 0.08)).toFixed(2),
  }))
}

/** The hero uses the defaults; other sections pass their own seed and a
 *  much sparser, fainter sky. */
export default function StarField({
  seed = 20261107,
  count = 70,
  maxOpacity = 0.42,
  className = '',
}: {
  seed?: number
  count?: number
  maxOpacity?: number
  className?: string
}) {
  const STARS = stars(seed, count, maxOpacity)
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
    >
      {STARS.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity={s.o} />
      ))}
    </svg>
  )
}
