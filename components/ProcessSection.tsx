const steps = [
  {
    num: '01',
    title: 'Hablamos gratis',
    desc: '20 minutos por WhatsApp. Sin tecnicismos.',
  },
  {
    num: '02',
    title: 'Ves el resultado primero',
    desc: 'En 24h tienes un borrador real. Si te gusta, acordamos el pago inicial.',
  },
  {
    num: '03',
    title: 'Lo ajustamos juntos',
    desc: 'Cambios incluidos. El resto del pago lo coordinamos contigo — en fases o al final.',
  },
  {
    num: '04',
    title: 'Tu negocio, en internet',
    desc: 'Publicado y funcionando. En días.',
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="px-6 py-8 border-b border-[#f5f5f5]">
      <p className="text-[11px] text-[#ff4d00] tracking-widest uppercase mb-1 font-medium">
        PROCESO
      </p>
      <h2 className="text-[19px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Más simple de lo que crees
      </h2>
      <p className="text-[13px] text-[#888] mb-5 leading-snug">
        Sin reuniones eternas ni formularios complicados.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {steps.map((s) => (
          <div key={s.num} className="bg-[#fafafa] rounded-lg p-3.5">
            <p className="text-[11px] text-[#ff4d00] font-semibold mb-1">{s.num}</p>
            <h4 className="text-[12px] font-medium text-[#111] mb-0.5">{s.title}</h4>
            <p className="text-[11px] text-[#888] leading-snug">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
