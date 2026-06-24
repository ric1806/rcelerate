import { WA } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="px-6 pt-10 pb-8">
      <p className="text-[11px] text-[#999] mb-3.5">
        Rcelerate / Servicios digitales / Colombia
      </p>
      <h1 className="text-[29px] md:text-[32px] font-semibold leading-snug text-[#111] mb-3 tracking-[-0.03em] max-w-[500px]">
        Tu negocio en internet, creciendo en automático.
      </h1>
      <p className="text-[14px] text-[#555] mb-6 leading-relaxed max-w-[420px]">
        Creamos tu página web y automatizamos tus procesos para que puedas enfocarte en lo que
        realmente importa: atender a tus clientes.
      </p>
      <div className="flex gap-3 flex-wrap">
        <a
          href={WA.general}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff4d00] text-white px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-[#e04400] transition-colors"
        >
          Quiero empezar →
        </a>
        <a
          href="#portafolio"
          className="bg-white text-[#111] border border-[#ddd] px-5 py-2.5 rounded-md text-[13px] hover:border-[#bbb] transition-colors"
        >
          Ver ejemplos
        </a>
      </div>
      <div className="mt-4 flex gap-5 flex-wrap">
        {[
          'Ves el resultado antes de pagar',
          'Listo en 72 horas',
          'Para cualquier tipo de negocio',
        ].map((t) => (
          <span key={t} className="text-[12px] text-[#999]">
            <span className="text-[#ff4d00]">✓ </span>
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
