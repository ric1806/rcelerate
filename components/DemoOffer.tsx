import { WA } from '@/lib/constants'

export function DemoOffer() {
  return (
    <section className="px-6 py-6 bg-white border-b border-[#f0f0f0]">
      <div className="relative rounded-2xl overflow-hidden border border-[#ff4d00]/20 bg-[#0d0e10] px-6 py-7">
        {/* Glow behind */}
        <div
          className="absolute -right-10 -top-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,77,0,0.12) 0%, transparent 70%)' }}
        />

        <p className="relative text-[10px] text-[#ff4d00] tracking-[0.2em] uppercase font-bold mb-2">
          GRATIS · SIN COMPROMISO
        </p>
        <h2 className="relative text-[20px] font-bold text-white leading-snug mb-2 tracking-[-0.03em] max-w-[380px]">
          ¿No sabes exactamente qué necesita tu negocio en internet?
        </h2>
        <p className="relative text-[13px] text-[#666] leading-relaxed mb-5 max-w-[360px]">
          Cuéntame de tu negocio y te mando una idea de diseño gratis — sin costo, sin obligación.
          Solo para que veas cómo quedaría antes de decidir.
        </p>
        <a
          href={WA.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 bg-[#ff4d00] text-white px-6 py-3 rounded-md text-[13px] font-bold hover:bg-[#e04400] transition-colors"
        >
          Quiero mi propuesta gratis →
        </a>
        <p className="relative text-[11px] text-[#444] mt-2.5">
          Te respondo por WhatsApp en menos de 24 horas
        </p>
      </div>
    </section>
  )
}
