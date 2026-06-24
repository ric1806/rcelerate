import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Información legal sobre Rcelerate y sus servicios digitales.',
  robots: { index: false, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-[24px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Aviso Legal
      </h1>
      <p className="text-[12px] text-[#999] mb-8">Última actualización: junio de 2026</p>

      <Section title="Responsable del sitio">
        <dl className="space-y-1">
          <div><dt className="inline font-medium text-[#111]">Nombre comercial: </dt><dd className="inline">Rcelerate</dd></div>
          <div><dt className="inline font-medium text-[#111]">Actividad: </dt><dd className="inline">Servicios de desarrollo web y automatización digital</dd></div>
          <div><dt className="inline font-medium text-[#111]">Domicilio: </dt><dd className="inline">Barbosa, Santander, Colombia</dd></div>
          <div><dt className="inline font-medium text-[#111]">Sitio web: </dt><dd className="inline">https://rcelerate.co</dd></div>
          <div>
            <dt className="inline font-medium text-[#111]">Correo: </dt>
            <dd className="inline">
              <a href="mailto:ricardomflorez18@gmail.com" className="text-[#ff4d00] underline">
                ricardomflorez18@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="inline font-medium text-[#111]">WhatsApp: </dt>
            <dd className="inline">
              <a href="https://wa.me/573212520391" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] underline">
                +57 321 252 0391
              </a>
            </dd>
          </div>
        </dl>
      </Section>

      <Section title="Propiedad intelectual">
        <p>
          Todos los contenidos de este sitio (textos, diseños, código, logotipos) son propiedad de
          Rcelerate o cuentan con la licencia correspondiente. Queda prohibida su reproducción sin
          autorización escrita.
        </p>
      </Section>

      <Section title="Limitación de responsabilidad">
        <p>
          La información publicada en este sitio es orientativa. Rcelerate no garantiza la exactitud
          absoluta de los contenidos y se reserva el derecho a modificarlos sin previo aviso.
        </p>
      </Section>

      <Section title="Legislación aplicable">
        <p>Este sitio se rige por la legislación colombiana vigente.</p>
      </Section>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-[15px] font-semibold text-[#111] mb-2 tracking-[-0.01em]">{title}</h2>
      <div className="text-[13px] text-[#555] leading-relaxed">{children}</div>
    </section>
  )
}
