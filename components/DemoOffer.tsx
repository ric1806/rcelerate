import { WA } from '@/lib/constants'

export function DemoOffer() {
  return (
    <section className="px-6 py-5 bg-[#fff6f1] border-y border-[#ffd9c8]">
      <div className="max-w-[480px]">
        <p className="text-[10px] text-[#ff4d00] tracking-widest uppercase font-semibold mb-1.5">
          GRATIS · SIN COMPROMISO
        </p>
        <h2 className="text-[17px] font-semibold text-[#111] leading-snug mb-1.5 tracking-[-0.02em]">
          ¿No sabes exactamente qué necesita tu negocio en internet?
        </h2>
        <p className="text-[13px] text-[#666] leading-relaxed mb-4">
          Cuéntame de tu negocio y te mando una idea de diseño gratis — sin costo, sin obligación.
          Solo para que veas cómo quedaría antes de decidir.
        </p>
        <a
          href={WA.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#ff4d00] text-white px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-[#e04400] transition-colors"
        >
          Quiero mi propuesta gratis →
        </a>
        <p className="text-[11px] text-[#aaa] mt-2">
          Te respondo por WhatsApp en menos de 24 horas
        </p>
      </div>
    </section>
  )
}
