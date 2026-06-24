const reasons = [
  {
    icon: '⚡',
    title: 'Rápido de verdad',
    desc: 'Tu página lista en 72 horas. No en semanas ni meses.',
  },
  {
    icon: '👁️',
    title: 'Ves el diseño antes de pagar',
    desc: 'Primero hacemos un borrador. Si te gusta, acordamos el pago inicial. El resto lo coordinamos contigo.',
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
  return (
    <section className="px-6 py-8 border-b border-[#f5f5f5]">
      <p className="text-[11px] text-[#ff4d00] tracking-widest uppercase mb-1 font-medium">
        POR QUÉ ELEGIRNOS
      </p>
      <h2 className="text-[19px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Lo que nos diferencia
      </h2>
      <p className="text-[13px] text-[#888] mb-5 leading-snug">
        No somos la opción más barata. Somos la opción que cumple lo que promete.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {reasons.map((r) => (
          <div key={r.title} className="bg-[#fafafa] rounded-lg p-3.5 transition-transform duration-200 hover:-translate-y-0.5">
            <p className="text-xl mb-1.5">{r.icon}</p>
            <h4 className="text-[13px] font-medium text-[#111] mb-0.5">{r.title}</h4>
            <p className="text-[12px] text-[#777] leading-snug">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Garantía */}
      <div className="bg-[#fff8f5] border border-[#ffddd2] rounded-xl px-5 py-5 text-center mt-4">
        <h3 className="text-[15px] font-semibold text-[#111] mb-1.5">Sin riesgo para ti</h3>
        <p className="text-[12px] text-[#888] leading-relaxed">
          Primero hacemos el borrador. Si te convence, pagas un porcentaje inicial. El resto del pago lo acordamos contigo — durante el desarrollo o al final del proyecto.
        </p>
      </div>
    </section>
  )
}
