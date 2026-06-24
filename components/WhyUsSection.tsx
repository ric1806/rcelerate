'use client'

import { useInView } from '@/hooks/useInView'

const reasons = [
  {
    icon: '⚡',
    title: 'Rápido de verdad',
    desc: 'Tu página lista en 72 horas. No en semanas ni meses.',
  },
  {
    icon: '👁️',
    title: 'Ves el diseño antes de pagar',
    desc: 'Primero hacemos un borrador. Si te gusta, acordamos el pago inicial.',
  },
  {
    icon: '📱',
    title: 'Funciona en celular y computador',
    desc: 'Se ve perfecta en cualquier dispositivo, siempre.',
  },
  {
    icon: '🤝',
    title: 'No desaparecemos después',
    desc: 'Estamos disponibles para ajustes y soporte post-entrega.',
  },
]

export function WhyUsSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section className="px-6 py-10 border-b border-[#f0f0f0]">
      <p className="text-[11px] text-[#ff4d00] tracking-[0.18em] uppercase mb-1.5 font-semibold">
        POR QUÉ ELEGIRNOS
      </p>
      <h2 className="text-[22px] font-bold text-[#111] mb-1 tracking-[-0.03em]">
        Lo que nos diferencia
      </h2>
      <p className="text-[13px] text-[#888] mb-7 leading-snug">
        No somos la opción más barata. Somos la opción que cumple lo que promete.
      </p>

      <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-2 gap-3">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="card-lift rounded-xl p-4 border border-[#f0f0f0] bg-white"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(18px)',
              transition: `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${i * 0.1}s ease`,
            }}
          >
            <div className="w-9 h-9 rounded-lg bg-[#fff3ef] flex items-center justify-center text-base mb-3">
              {r.icon}
            </div>
            <h4 className="text-[13px] font-semibold text-[#111] mb-1">{r.title}</h4>
            <p className="text-[12px] text-[#777] leading-snug">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Garantía */}
      <div className="relative mt-5 rounded-2xl overflow-hidden border border-[#f0f0f0] bg-[#fafafa] px-5 py-6 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(255,77,0,0.05) 0%, transparent 70%)',
          }}
        />
        <h3 className="relative text-[15px] font-bold text-[#111] mb-1.5">Sin riesgo para ti</h3>
        <p className="relative text-[12px] text-[#888] leading-relaxed max-w-sm mx-auto">
          Primero hacemos el borrador. Si te convence, pagas un porcentaje inicial. El resto del
          pago lo acordamos contigo — durante el desarrollo o al final del proyecto.
        </p>
      </div>
    </section>
  )
}
