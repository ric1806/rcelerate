'use client'

import { motion } from 'framer-motion'

// Smooth bezier curve: bottom-left → top-right
const LINE = 'M 16 74 C 38 66, 60 54, 84 42 S 114 26, 138 12'
// Arrowhead centered at peak (138, 12), pointing up
const ARROW = 'M 129 22 L 138 11 L 147 22'

const DURATION = 3.4

export function GrowthChart() {
  return (
    <svg
      viewBox="0 0 160 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[220px]"
      aria-hidden="true"
    >
      {/* Subtle grid */}
      {[18, 36, 54, 72].map((y) => (
        <line key={y} x1="14" y1={y} x2="152" y2={y} stroke="#1e1e1e" strokeWidth="0.7" />
      ))}
      {/* Baseline */}
      <line x1="14" y1="80" x2="152" y2="80" stroke="#2a2a2a" strokeWidth="1" />

      {/* Rising line — draws itself then fades, loops forever */}
      <motion.path
        d={LINE}
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{
          pathLength: [0,    1,    1,    1],
          opacity:    [1,    1,    1,    0],
        }}
        transition={{
          duration: DURATION,
          times:    [0, 0.55, 0.80, 1],
          repeat:   Infinity,
          ease:     'easeInOut',
        }}
      />

      {/* Arrowhead — aparece cuando la línea llega al tope */}
      <motion.path
        d={ARROW}
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: DURATION,
          times:    [0, 0.52, 0.58, 0.80, 1],
          repeat:   Infinity,
        }}
      />

      {/* Punto brillante en el pico */}
      <motion.circle
        cx="138"
        cy="12"
        r="4"
        fill="#ff4d00"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale:   [0,    0,    1.3,  1,    0],
          opacity: [0,    0,    1,    1,    0],
        }}
        transition={{
          duration: DURATION,
          times:    [0, 0.52, 0.60, 0.80, 1],
          repeat:   Infinity,
        }}
        style={{
          transformBox: 'fill-box',
          transformOrigin: 'center',
          filter: 'drop-shadow(0 0 5px rgba(255,77,0,0.8))',
        }}
      />
    </svg>
  )
}
