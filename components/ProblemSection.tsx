'use client'

import { useRef, useEffect, useState } from 'react'
import { WA } from '@/lib/constants'

function RisingChart() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = svgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dashLen = 230

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[240px]"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[22, 42, 62].map((y) => (
        <line key={y} x1="14" y1={y} x2="148" y2={y} stroke="#1c1c1c" strokeWidth="1" />
      ))}
      {/* Baseline */}
      <line x1="14" y1="80" x2="148" y2="80" stroke="#2a2a2a" strokeWidth="1" />

      {/* Filled area under the line */}
      <path
        d="M14,78 L36,66 L58,54 L80,42 L102,28 L122,16 L140,7 L140,80 L14,80 Z"
        fill="url(#chartGradient)"
        opacity={animated ? 0.25 : 0}
        style={{ transition: animated ? 'opacity 0.8s 1.4s ease' : 'none' }}
      />

      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rising line */}
      <polyline
        points="14,78 36,66 58,54 80,42 102,28 122,16 140,7"
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashLen}
        strokeDashoffset={animated ? 0 : dashLen}
        style={{
          transition: animated ? `stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1)` : 'none',
        }}
      />

      {/* Arrow head at peak */}
      <polyline
        points="132,9 140,2 148,9"
        stroke="#ff4d00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={animated ? 1 : 0}
        style={{ transition: animated ? 'opacity 0.3s 1.75s ease' : 'none' }}
      />

      {/* Track dots */}
      {([[36, 66], [58, 54], [80, 42], [102, 28], [122, 16]] as [number, number][]).map(
        ([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="2.5"
            fill="#ff4d00"
            fillOpacity="0.5"
            opacity={animated ? 1 : 0}
            style={{
              transition: animated ? `opacity 0.3s ${0.4 + i * 0.22}s ease` : 'none',
            }}
          />
        )
      )}

      {/* Peak glow dot */}
      <circle
        cx="140"
        cy="7"
        r={animated ? '4' : '0'}
        fill="#ff4d00"
        style={{
          transition: animated ? 'r 0.4s 1.7s cubic-bezier(0.34,1.56,0.64,1)' : 'none',
          filter: 'drop-shadow(0 0 5px rgba(255,77,0,0.7))',
        }}
      />
    </svg>
  )
}

export function ProblemSection() {
  return (
    <section className="bg-[#080a0b] px-6 py-10">
      <p className="text-[11px] text-[#333] tracking-[0.2em] uppercase mb-2">LA REALIDAD</p>
      <h2 className="text-[22px] md:text-[26px] font-bold text-white mb-3 tracking-[-0.03em] leading-snug max-w-[400px]">
        Hoy, si un cliente no te encuentra en Google, le compra a otro.
      </h2>
      <p className="text-[13px] text-[#555] leading-relaxed mb-7 max-w-[380px]">
        El 87% de los colombianos busca en internet antes de comprar. Si tu negocio no aparece,
        simplemente no existes para ellos. Y mientras esperas, tu competencia sí está en línea.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
        <RisingChart />
        <a
          href={WA.general}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff4d00] text-white text-[13px] font-semibold px-6 py-3 rounded-md hover:bg-[#e04400] transition-colors"
        >
          Quiero aparecer en Google →
        </a>
      </div>
    </section>
  )
}
