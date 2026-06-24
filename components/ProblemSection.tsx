'use client'

import { WA } from '@/lib/constants'
import { GrowthChart } from '@/components/GrowthChart'

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
        <GrowthChart />
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
