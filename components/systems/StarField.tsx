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

const rand = mulberry32(20261107)
const STARS = Array.from({ length: 70 }, () => ({
  x: +(rand() * 1440).toFixed(1),
  y: +(rand() * 760).toFixed(1),
  r: +(0.5 + rand() * 0.45).toFixed(2),
  o: +(0.12 + rand() * 0.3).toFixed(2),
}))

export default function StarField({ className = '' }: { className?: string }) {
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
