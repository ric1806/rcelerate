import { WA, SCHEDULE_CTA } from '@/lib/constants'

export function FinalCTA() {
  return (
    <section className="bg-[#111] px-6 py-10 text-center">
      <h2 className="text-[21px] font-semibold text-white mb-1.5 tracking-[-0.02em] leading-snug">
        La oferta de lanzamiento vence el 30 de junio.
      </h2>
      <p className="text-[13px] text-[#888] mb-5 leading-relaxed max-w-sm mx-auto">
        Después de esa fecha los precios vuelven a su valor normal. La consulta es gratis.
      </p>
      <a
        href={WA.general}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ff4d00] text-white text-[14px] font-medium px-8 py-3.5 rounded-md hover:bg-[#e04400] transition-colors"
      >
        Hablar por WhatsApp →
      </a>
      <p className="text-[11px] text-[#444] mt-3">
        Sin compromisos · Respondemos en menos de 1 hora · {SCHEDULE_CTA}
      </p>
    </section>
  )
}
