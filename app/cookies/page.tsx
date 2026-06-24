import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en rcelerate.co.',
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-[24px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Política de Cookies
      </h1>
      <p className="text-[12px] text-[#999] mb-8">Última actualización: junio de 2026</p>

      <Section title="¿Qué son las cookies?">
        <p>
          Archivos pequeños que se guardan en tu navegador cuando visitas un sitio web. Permiten
          que el sitio recuerde tus preferencias y mejore tu experiencia de navegación.
        </p>
      </Section>

      <Section title="Cookies que usamos">
        <p className="font-medium text-[#111] mb-2">Cookies esenciales (siempre activas)</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-[12px] border-collapse">
            <thead>
              <tr className="bg-[#fafafa]">
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Cookie</th>
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Propósito</th>
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border border-[#f0f0f0] font-mono">cookie_consent</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">Guarda tu preferencia de cookies</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">1 año</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-medium text-[#111] mb-2">Cookies de analítica (requieren consentimiento)</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] border-collapse">
            <thead>
              <tr className="bg-[#fafafa]">
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Cookie</th>
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Proveedor</th>
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Propósito</th>
                <th className="text-left px-3 py-2 border border-[#f0f0f0]">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border border-[#f0f0f0] font-mono">_ga</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">Google Analytics 4</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">Analiza el tráfico del sitio</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">2 años</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border border-[#f0f0f0] font-mono">_ga_XXXX</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">Google Analytics 4</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">Identifica sesiones</td>
                <td className="px-3 py-2 border border-[#f0f0f0]">2 años</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="¿Cómo gestionar las cookies?">
        <p>
          Puedes aceptar o rechazar cookies no esenciales desde el banner que aparece en tu primera
          visita. También puedes eliminar cookies desde la configuración de tu navegador en
          cualquier momento.
        </p>
      </Section>

      <Section title="Más información">
        <p>
          Para dudas sobre el uso de cookies:{' '}
          <a href="mailto:ricardomflorez18@gmail.com" className="text-[#ff4d00] underline">
            ricardomflorez18@gmail.com
          </a>
        </p>
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
