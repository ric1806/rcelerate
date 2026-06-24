import { WA } from '@/lib/constants'

const features = [
  'Página web a medida',
  'Automatización personalizada',
  'Diagnóstico gratuito de tu negocio',
  'Propuesta sin costo ni compromiso',
  'Diseño con tu identidad visual',
  'Soporte post-entrega incluido',
]

export function CustomSection() {
  return (
    <section id="contacto" className="bg-[#111] px-6 py-8">
      <div className="border border-[#222] rounded-xl p-6">
        <span className="text-[10px] bg-[#ff4d00] text-white px-3 py-1 rounded-full inline-block mb-3 font-semibold tracking-wide uppercase">
          SERVICIO PERSONALIZADO
        </span>
        <h2 className="text-[18px] font-semibold text-white mb-1.5 tracking-[-0.02em] leading-snug">
          ¿No sabes exactamente qué necesitas? Nosotros te orientamos gratis.
        </h2>
        <p className="text-[13px] text-[#777] leading-relaxed mb-4">
          Cuéntanos tu negocio y te decimos qué tiene más sentido construir, sin jerga técnica y sin
          presión de venta.
        </p>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[12px] text-[#555]">Desde</span>
          <span className="text-[26px] font-semibold text-[#ff4d00] tracking-[-0.03em]">
            $200.000{' '}
            <span className="text-[13px] font-normal text-[#555]">COP</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {features.map((f) => (
            <p key={f} className="text-[12px] text-[#999]">
              <span className="text-[#ff4d00]">· </span>
              {f}
            </p>
          ))}
        </div>
        <a
          href={WA.personalizado}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#ff4d00] text-white text-[13px] font-medium px-5 py-3 rounded-md text-center hover:bg-[#e04400] transition-colors"
        >
          Cuéntame qué necesito → WhatsApp
        </a>
      </div>
    </section>
  )
}
