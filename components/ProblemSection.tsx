import { WA } from '@/lib/constants'

export function ProblemSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 py-8">
      <p className="text-[11px] text-[#444] tracking-widest uppercase mb-1.5">LA REALIDAD</p>
      <h2 className="text-[18px] font-semibold text-white mb-2.5 tracking-[-0.02em] leading-snug">
        Hoy, si un cliente no te encuentra en Google, le compra a otro.
      </h2>
      <p className="text-[13px] text-[#777] leading-relaxed mb-4">
        El 87% de los colombianos busca en internet antes de comprar. Si tu negocio no aparece,
        simplemente no existes para ellos. Y mientras esperas, tu competencia sí está en línea.
      </p>
      <a
        href={WA.general}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ff4d00] text-white text-[13px] font-medium px-5 py-2.5 rounded-md hover:bg-[#e04400] transition-colors"
      >
        Quiero aparecer en Google →
      </a>
    </section>
  )
}
