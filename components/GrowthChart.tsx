'use client'

import { motion } from 'framer-motion'

// Line ends at (138, 26) — the base of the arrowhead
const LINE = 'M 16 74 C 40 66, 65 54, 90 42 S 120 30, 138 26'

// Solid filled triangle pointing straight UP
// tip=(138,7)  base-left=(127,26)  base-right=(149,26)
const ARROW = '127,26 138,7 149,26'

const D = 3.2

export function GrowthChart() {
  return (
    <svg
      viewBox="0 0 165 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[220px]"
      aria-hidden="true"
    >
      {/* Subtle grid */}
      {[16, 34, 52, 70].map((y) => (
        <line key={y} x1="14" y1={y} x2="153" y2={y} stroke="#1e1e1e" strokeWidth="0.7" />
      ))}
      <line x1="14" y1="78" x2="153" y2="78" stroke="#2a2a2a" strokeWidth="1" />

      {/* Rising line — draws itself then fades */}
      <motion.path
        d={LINE}
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{
          pathLength: [0,   1,    1,    1],
          opacity:    [1,   1,    1,    0],
        }}
        transition={{
          duration: D,
          times:    [0, 0.55, 0.82, 1],
          repeat:   Infinity,
          ease:     'easeInOut',
        }}
      />

      {/* Filled solid triangle — clearly reads as arrowhead */}
      <motion.polygon
        points={ARROW}
        fill="#ff4d00"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: D,
          times:    [0, 0.52, 0.59, 0.82, 1],
          repeat:   Infinity,
        }}
        style={{ filter: 'drop-shadow(0 0 6px rgba(255,77,0,0.65))' }}
      />
    </svg>
  )
}
