'use client'

import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({
  prefix,
  target,
  suffix,
  decimals,
  label,
  trigger,
  delay,
}: {
  prefix: string
  target: number
  suffix: string
  decimals: number
  label: string
  trigger: boolean
  delay: string
}) {
  const val = useCountUp(target, 1400, trigger, decimals)
  const display = decimals > 0 ? val.toFixed(decimals) : val.toString()

  return (
    <div
      className="anim visible px-6 py-6 text-center"
      style={{ transitionDelay: delay }}
    >
      <p className={`text-[28px] font-bold text-white tracking-[-0.04em] mb-1 ${trigger ? 'stat-pop' : 'opacity-0'}`}>
        {prefix}{display}{suffix}
      </p>
      <p className="text-[11px] text-[#444] leading-snug">{label}</p>
    </div>
  )
}

const stats = [
  { prefix: '',  target: 87.7, suffix: '%', decimals: 1, label: 'negocios colombianos sin presencia web' },
  { prefix: '+', target: 12,   suffix: 'h', decimals: 0, label: 'semanales ahorradas con automatización' },
  { prefix: '',  target: 72,   suffix: 'h', decimals: 0, label: 'y tu negocio está en internet' },
]

export function StatsRow() {
  const { ref, inView } = useInView(0.3)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#0a0a0a] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]"
    >
      {stats.map((s, i) => (
        <StatItem
          key={s.label}
          {...s}
          trigger={inView}
          delay={`${i * 0.12}s`}
        />
      ))}
    </div>
  )
}
