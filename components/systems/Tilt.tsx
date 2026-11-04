'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

// The hover tilt on lit screens (the Monday notepad, the inboxes, the morning
// summary, the compose window). At rest a screen sits straight. With a fine
// pointer over it, it leans gently towards the pointer (at most 6 degrees,
// in perspective) and a soft light sheen follows; on leave it springs back.
// Transform and opacity only, driven by motion values (no re-render per
// frame). Fine pointers only (no touch), and nothing at all under
// prefers-reduced-motion: then the children render as they are.
const MAX = 6
const SPRING = { stiffness: 220, damping: 22, mass: 0.6 }

function useCanTilt() {
  const [can, setCan] = useState(false)
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setCan(fine.matches && !reduced.matches)
    update()
    fine.addEventListener('change', update)
    reduced.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      reduced.removeEventListener('change', update)
    }
  }, [])
  return can
}

export default function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const can = useCanTilt()
  const ref = useRef<HTMLDivElement>(null)
  // Pointer position over the screen, 0..1 on each axis (0.5 = centre).
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const hover = useMotionValue(0)
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX, MAX]), SPRING)
  const rotateX = useSpring(useTransform(py, [0, 1], [MAX, -MAX]), SPRING)
  const sheen = useSpring(hover, { stiffness: 160, damping: 24 })
  const sx = useTransform(px, (v) => `${(v * 100).toFixed(1)}%`)
  const sy = useTransform(py, (v) => `${(v * 100).toFixed(1)}%`)
  const background = useMotionTemplate`radial-gradient(circle at ${sx} ${sy}, rgb(255 255 255 / 0.32), rgb(255 255 255 / 0) 55%)`

  if (!can) return <div className={className}>{children}</div>

  return (
    <div className={className} style={{ perspective: 1100 }}>
      <motion.div
        ref={ref}
        className="relative"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onPointerMove={(e) => {
          if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return
          const r = ref.current?.getBoundingClientRect()
          if (!r) return
          px.set((e.clientX - r.left) / r.width)
          py.set((e.clientY - r.top) / r.height)
          hover.set(1)
        }}
        onPointerLeave={() => {
          px.set(0.5)
          py.set(0.5)
          hover.set(0)
        }}
      >
        {children}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[10px] mix-blend-soft-light"
          style={{ background, opacity: sheen }}
        />
      </motion.div>
    </div>
  )
}
