import Image from 'next/image'
import { WA, EMAIL, INSTAGRAM_URL, SCHEDULE, COPYRIGHT } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-[#f0f0f0] px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {/* Columna 1 — Marca */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/rcelerate_logo_negro.jpg"
            alt="Rcelerate"
            width={110}
            height={28}
            className="h-7 w-auto object-contain mb-2"
          />
          <p className="text-[12px] text-[#888] leading-relaxed">
            Páginas web y automatizaciones con IA para cualquier negocio en Colombia.
          </p>
        </div>

        {/* Columna 2 — Servicios */}
        <div>
          <h4 className="text-[12px] font-semibold text-[#111] mb-2">Servicios</h4>
          <ul className="space-y-1.5">
            {[
              'Landing page',
              'Web profesional',
              'Web completa',
              'Automatización básica',
              'Automatización con IA',
              'Servicio personalizado',
            ].map((s) => (
              <li key={s}>
                <a href="/#servicios" className="text-[11px] text-[#888] hover:text-[#555] transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Contacto */}
        <div>
          <h4 className="text-[12px] font-semibold text-[#111] mb-2">Contacto</h4>
          <ul className="space-y-1.5">
            <li>
              <a
                href={WA.general}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#888] hover:text-[#555] transition-colors"
              >
                +57 321 252 0391
              </a>
            </li>
            <li className="text-[11px] text-[#888]">{EMAIL}</li>
            <li className="text-[11px] text-[#888]">Colombia</li>
            <li className="text-[11px] text-[#888]">{SCHEDULE}</li>
          </ul>
        </div>

        {/* Columna 4 — Legal */}
        <div>
          <h4 className="text-[12px] font-semibold text-[#111] mb-2">Legal</h4>
          <ul className="space-y-1.5">
            {[
              { href: '/privacidad', label: 'Política de privacidad' },
              { href: '/terminos', label: 'Términos y condiciones' },
              { href: '/cookies', label: 'Política de cookies' },
              { href: '/aviso-legal', label: 'Aviso legal' },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[11px] text-[#888] hover:text-[#555] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-[#f0f0f0] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-[#bbb]">{COPYRIGHT}</p>

        {/* Redes */}
        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#bbb] hover:text-[#555] transition-colors"
          >
            Instagram
          </a>
          {/* LinkedIn: agregar URL cuando esté creado */}
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#bbb] hover:text-[#555] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Logo SIC: agregar cuando se descargue de sic.gov.co/sello-de-confianza */}
      </div>
    </footer>
  )
}
