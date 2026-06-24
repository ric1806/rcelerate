'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function GrowthChart() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  // Smooth bezier curve rising from bottom-left to top-right
  const linePath = 'M 14 76 C 28 70, 42 62, 60 52 S 85 38, 104 26 S 126 14, 142 6'
  const areaPath = `${linePath} L 142 80 L 14 80 Z`

  return (
    <svg
      ref={ref}
      viewBox="0 0 162 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[260px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gcAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
        </linearGradient>
        <filter id="gcGlow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle grid */}
      {[20, 38, 56, 74].map((y) => (
        <line key={y} x1="14" y1={y} x2="152" y2={y} stroke="#1e1e1e" strokeWidth="0.75" />
      ))}
      {/* Baseline */}
      <line x1="14" y1="80" x2="152" y2="80" stroke="#2a2a2a" strokeWidth="1" />

      {/* Area fill */}
      <motion.path
        d={areaPath}
        fill="url(#gcAreaGrad)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
      />

      {/* Main rising line — drawn with pathLength */}
      <motion.path
        d={linePath}
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], opacity: { duration: 0.1 } }}
      />

      {/* Arrow head at peak */}
      <motion.polyline
        points="134,9 142,2 150,9"
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={inView ? { opacity: 1, pathLength: 1 } : {}}
        transition={{ duration: 0.35, delay: 1.85, ease: 'easeOut' }}
      />

      {/* Glowing peak dot */}
      <motion.circle
        cx="142"
        cy="6"
        r="4.5"
        fill="#ff4d00"
        filter="url(#gcGlow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.9, type: 'spring', stiffness: 180, damping: 12 }}
        style={{ originX: '142px', originY: '6px' }}
      />

      {/* Track dots */}
      {([[60, 52], [85, 38], [104, 26], [126, 14]] as [number, number][]).map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#ff4d00"
          fillOpacity="0.55"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.28, type: 'spring', stiffness: 200 }}
          style={{ originX: `${cx}px`, originY: `${cy}px` }}
        />
      ))}
    </svg>
  )
}
