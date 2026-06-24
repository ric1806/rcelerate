'use client'

import { motion } from 'framer-motion'

// ── Construcción geométrica ────────────────────────────────────────────────
// Dirección 45°: unit vec = (0.707, -0.707) en SVG (x↑ derecha, y↑ abajo)
//
// PASO 1  tip = (140, 18)
// PASO 2  base_center = tip − dir×16 = (129, 29)
// PASO 3  perp 90°CW = (0.707, 0.707)  →  cola_A=(135,35)  cola_B=(123,23)
// PASO 4  CP2 línea = (115, 43)  →  (129-115, 29-43) = (14,-14) → 45° exacto ✓
// ──────────────────────────────────────────────────────────────────────────

const LINE  = 'M 12 74 C 40 72, 115 43, 129 29'
const ARROW = '123,23 140,18 135,35'

const D = 3.2

export function GrowthChart() {
  return (
    <svg
      viewBox="0 0 160 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[220px]"
      aria-hidden="true"
    >
      {/* Grid */}
      {[20, 38, 56, 74].map((y) => (
        <line key={y} x1="10" y1={y} x2="154" y2={y} stroke="#1e1e1e" strokeWidth="0.7" />
      ))}
      <line x1="10" y1="78" x2="154" y2="78" stroke="#2a2a2a" strokeWidth="1" />

      {/* Línea animada */}
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
          duration: D,
          times:    [0, 0.55, 0.82, 1],
          repeat:   Infinity,
          ease:     'easeInOut',
        }}
      />

      {/* Triángulo a 45° — tip=(140,18)  colas=(123,23) y (135,35) */}
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
