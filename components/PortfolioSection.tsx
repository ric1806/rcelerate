const cases = [
  {
    icon: '⚖️',
    name: 'Bufete López Correal & Asociados',
    desc: 'Página web para bufete de abogados con 36 años de trayectoria en Colombia. SEO técnico completo, diseño formal de alto nivel, CTA directo a WhatsApp.',
    tags: ['Abogados', 'Colombia'],
    time: 'Lista en 72 horas',
    url: 'https://lopez-correal-asociados.vercel.app/',
  },
  {
    icon: '🎓',
    name: 'Proyecto institucional universitario',
    desc: 'Plataforma web institucional universitaria con estructura formal, contenido organizado y diseño responsivo.',
    tags: ['Educación', 'Colombia'],
    time: null,
    url: 'https://isac-blog-uis-2026.vercel.app/',
  },
]

export function PortfolioSection() {
  return (
    <section id="portafolio" className="px-6 py-8 border-b border-[#f5f5f5]">
      <p className="text-[11px] text-[#ff4d00] tracking-widest uppercase mb-1 font-medium">
        PORTAFOLIO
      </p>
      <h2 className="text-[19px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Trabajos recientes
      </h2>
      <p className="text-[13px] text-[#888] mb-5 leading-snug">
        Proyectos reales, entregados a tiempo y con resultados.
      </p>
      <div>
        {cases.map((c) => (
          <div
            key={c.name}
            className="flex gap-4 py-4 border-b border-[#f8f8f8] last:border-0 items-start"
          >
            <div className="w-11 h-11 bg-[#f5f5f5] rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              {c.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-[13px] font-medium text-[#111] mb-0.5">{c.name}</h4>
              <p className="text-[12px] text-[#777] leading-snug mb-1.5">{c.desc}</p>
              <div className="flex gap-1.5 flex-wrap items-center">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-[#f5f5f5] text-[#777] px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
                {c.time && (
                  <span className="text-[10px] text-[#ff4d00] font-medium">{c.time}</span>
                )}
              </div>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[11px] text-[#ff4d00] font-medium hover:underline"
              >
                Ver proyecto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
