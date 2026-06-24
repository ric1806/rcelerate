'use client'

import { motion } from 'framer-motion'

/*
  Verificación de dirección:
  - PATH usa bezier S con CP2=(134,22) → endpoint=(134,18)
  - Tangente en el endpoint: (134-134, 18-22) = (0, -4) → apunta recto ARRIBA ↑
  - TRIANGLE base en y=18 (= endpoint del path) y tip en y=2 → también apunta ARRIBA ↑
  - Dirección coincide ✓
*/

// Curva suave que en su tramo final sube recto (vertical) hacia el triángulo
const LINE = 'M 12 74 C 50 66, 92 50, 118 36 S 134 22, 134 18'

// Triángulo sólido apuntando hacia arriba: base en y=18 (donde termina LINE), punta en y=2
// 24px de ancho × 16px de alto — proporciones de flecha clásica
const ARROW = '122,18 134,2 146,18'

const D = 3.2 // duración del bucle en segundos

export function GrowthChart() {
  return (
    <svg
      viewBox="0 0 160 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[220px]"
      aria-hidden="true"
    >
      {/* Grid sutil */}
      {[20, 38, 56, 74].map((y) => (
        <line key={y} x1="10" y1={y} x2="154" y2={y} stroke="#1e1e1e" strokeWidth="0.7" />
      ))}
      {/* Baseline */}
      <line x1="10" y1="78" x2="154" y2="78" stroke="#2a2a2a" strokeWidth="1" />

      {/* Línea que se dibuja sola y luego desaparece — bucle infinito */}
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

      {/* Triángulo sólido — aparece cuando la línea llega arriba */}
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
