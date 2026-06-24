const profesionales = [
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

const demos = [
  {
    icon: '🍦',
    name: 'Kreems Churros & Helado',
    desc: 'Demo para negocio de churros y helados. Menú visual, colores llamativos y CTA directo.',
    tags: ['Alimentos', 'Demo'],
    url: 'https://kreemschurroshelado.vercel.app',
  },
  {
    icon: '🎵',
    name: 'OtraVibra',
    desc: 'Demo para marca de entretenimiento y música. Diseño moderno con identidad visual fuerte.',
    tags: ['Entretenimiento', 'Demo'],
    url: 'https://otravibraco.vercel.app',
  },
  {
    icon: '⚽',
    name: 'AD Sports 14',
    desc: 'Demo para tienda o academia deportiva. Layout dinámico enfocado en productos y servicios.',
    tags: ['Deportes', 'Demo'],
    url: 'https://adsports14.vercel.app',
  },
  {
    icon: '💍',
    name: 'Joyería Garrido',
    desc: 'Demo para joyería. Diseño elegante con catálogo de productos y contacto directo.',
    tags: ['Joyería', 'Demo'],
    url: 'https://joyeria-garrido.vercel.app',
  },
]

function ProCard({ c }: { c: typeof profesionales[0] }) {
  return (
    <div className="flex gap-4 py-4 border-b border-[#f8f8f8] last:border-0 items-start">
      <div className="w-11 h-11 bg-[#f5f5f5] rounded-lg flex items-center justify-center text-xl flex-shrink-0">
        {c.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-[13px] font-medium text-[#111] mb-0.5">{c.name}</h4>
        <p className="text-[12px] text-[#777] leading-snug mb-1.5">{c.desc}</p>
        <div className="flex gap-1.5 flex-wrap items-center">
          {c.tags.map((t) => (
            <span key={t} className="text-[10px] bg-[#f5f5f5] text-[#777] px-2 py-0.5 rounded-full">
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
  )
}

function DemoCard({ c }: { c: typeof demos[0] }) {
  return (
    <div className="bg-[#fafafa] border border-[#efefef] rounded-xl p-3.5">
      <div className="w-9 h-9 bg-white border border-[#efefef] rounded-lg flex items-center justify-center text-lg mb-2.5">
        {c.icon}
      </div>
      <h4 className="text-[12px] font-semibold text-[#111] mb-1 leading-snug">{c.name}</h4>
      <p className="text-[11px] text-[#888] leading-snug mb-2.5">{c.desc}</p>
      <div className="flex gap-1 flex-wrap mb-2.5">
        {c.tags.map((t) => (
          <span key={t} className="text-[9px] bg-white border border-[#e8e8e8] text-[#888] px-1.5 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <a
        href={c.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[11px] text-[#ff4d00] font-medium hover:underline"
      >
        Ver demo →
      </a>
    </div>
  )
}

export function PortfolioSection() {
  return (
    <section id="portafolio" className="px-6 py-8 border-b border-[#f5f5f5]">
      <p className="text-[11px] text-[#ff4d00] tracking-widest uppercase mb-1 font-medium">
        PORTAFOLIO
      </p>
      <h2 className="text-[19px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Trabajos recientes
      </h2>
      <p className="text-[13px] text-[#888] mb-6 leading-snug">
        Proyectos reales entregados a tiempo — y demos gratuitas para que veas el estilo antes de decidir.
      </p>

      {/* Proyectos profesionales */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold text-[#111] tracking-wider uppercase">
            Proyectos profesionales
          </span>
          <div className="flex-1 h-px bg-[#efefef]" />
        </div>
        <div>
          {profesionales.map((c) => (
            <ProCard key={c.name} c={c} />
          ))}
        </div>
      </div>

      {/* Demos gratuitas */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold text-[#111] tracking-wider uppercase">
            Demos gratuitas
          </span>
          <div className="flex-1 h-px bg-[#efefef]" />
          <span className="text-[9px] text-[#ff4d00] font-medium bg-[#fff0eb] px-2 py-0.5 rounded-full">
            Pide la tuya
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {demos.map((c) => (
            <DemoCard key={c.name} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
