import { WA } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="relative bg-[#080a0b] px-6 pt-12 pb-12 overflow-hidden">
      {/* Radial orange glow */}
      <div
        className="absolute -top-20 -left-10 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,77,0,0.11) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,77,0,0.05) 0%, transparent 70%)' }}
      />

      <p className="hero-line-1 text-[11px] text-[#444] mb-4 tracking-[0.2em] uppercase">
        Rcelerate · Servicios digitales · Colombia
      </p>

      <h1 className="hero-line-2 text-[38px] md:text-[50px] font-bold leading-[1.08] text-white mb-4 tracking-[-0.04em] max-w-[540px]">
        Tu negocio en internet,{' '}
        <span className="gradient-text">creciendo en automático.</span>
      </h1>

      <p className="hero-line-3 text-[15px] text-[#666] mb-7 leading-relaxed max-w-[420px]">
        Creamos tu página web y automatizamos tus procesos para que puedas enfocarte en lo que
        realmente importa: atender a tus clientes.
      </p>

      <div className="hero-line-4 flex gap-3 flex-wrap">
        <a
          href={WA.general}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff4d00] text-white px-6 py-3 rounded-md text-[13px] font-semibold hover:bg-[#e04400] transition-colors"
        >
          Quiero empezar →
        </a>
        <a
          href="#portafolio"
          className="border border-[#222] text-[#aaa] px-6 py-3 rounded-md text-[13px] hover:border-[#444] hover:text-white transition-colors"
        >
          Ver ejemplos
        </a>
      </div>

      <div className="hero-line-5 mt-6 flex gap-6 flex-wrap">
        {[
          'Ves el resultado antes de pagar',
          'Listo en 72 horas',
          'Para cualquier tipo de negocio',
        ].map((t) => (
          <span key={t} className="text-[12px] text-[#444]">
            <span className="text-[#ff4d00]">✓ </span>
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
