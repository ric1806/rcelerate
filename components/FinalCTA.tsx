import { WA, SCHEDULE_CTA } from '@/lib/constants'

export function FinalCTA() {
  return (
    <section className="relative bg-[#080a0b] px-6 py-14 text-center overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,77,0,0.14) 0%, transparent 65%)',
        }}
      />

      <p className="relative text-[11px] text-[#444] tracking-[0.2em] uppercase mb-3">
        ÚLTIMO PASO
      </p>
      <h2 className="relative text-[26px] md:text-[32px] font-bold text-white mb-2 tracking-[-0.04em] leading-snug">
        La oferta de lanzamiento vence el 30 de junio.
      </h2>
      <p className="relative text-[13px] text-[#555] mb-7 leading-relaxed max-w-sm mx-auto">
        Después de esa fecha los precios vuelven a su valor normal. La consulta es gratis.
      </p>

      <a
        href={WA.general}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block bg-[#ff4d00] text-white text-[14px] font-bold px-8 py-3.5 rounded-md hover:bg-[#e04400] transition-colors"
      >
        Hablar por WhatsApp →
      </a>

      <p className="relative text-[11px] text-[#333] mt-4">
        Sin compromisos · Respondemos en menos de 1 hora · {SCHEDULE_CTA}
      </p>
    </section>
  )
}
