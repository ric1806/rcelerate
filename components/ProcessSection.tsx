'use client'

import { useInView } from '@/hooks/useInView'

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
    desc: 'Cambios incluidos. El resto del pago lo coordinamos — en fases o al final.',
  },
  {
    num: '04',
    title: 'Tu negocio, en internet',
    desc: 'Publicado y funcionando. En días.',
  },
]

export function ProcessSection() {
  const { ref, inView } = useInView(0.15)

  return (
    <section id="proceso" className="px-6 py-10 border-b border-[#f0f0f0]">
      <p className="text-[11px] text-[#ff4d00] tracking-[0.18em] uppercase mb-1.5 font-semibold">
        PROCESO
      </p>
      <h2 className="text-[22px] font-bold text-[#111] mb-1 tracking-[-0.03em]">
        Más simple de lo que crees
      </h2>
      <p className="text-[13px] text-[#888] mb-8 leading-snug">
        Sin reuniones eternas ni formularios complicados.
      </p>

      {/* Desktop: horizontal timeline */}
      <div ref={ref as React.RefObject<HTMLDivElement>} className="hidden md:block relative">
        {/* Connector line */}
        <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-[#f0f0f0] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ff4d00]/40 via-[#ff4d00]/60 to-[#ff4d00]/40"
            style={{
              transformOrigin: 'left',
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1s 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="flex flex-col items-center text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${0.4 + i * 0.12}s ease, transform 0.6s ${0.4 + i * 0.12}s ease`,
              }}
            >
              {/* Number badge */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-[#ff4d00]/25 flex items-center justify-center mb-4 shadow-sm">
                <span className="text-[12px] font-bold text-[#ff4d00]">{s.num}</span>
              </div>
              <h4 className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</h4>
              <p className="text-[12px] text-[#888] leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-8">
        <div className="absolute left-3.5 top-2 bottom-2 w-px bg-[#f0f0f0]" />
        <div className="space-y-7">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="absolute -left-[21px] w-7 h-7 rounded-full bg-white border-2 border-[#ff4d00]/30 flex items-center justify-center">
                <span className="text-[10px] font-bold text-[#ff4d00]">{s.num}</span>
              </div>
              <h4 className="text-[13px] font-semibold text-[#111] mb-0.5">{s.title}</h4>
              <p className="text-[12px] text-[#888] leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
