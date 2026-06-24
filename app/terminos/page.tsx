import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de los servicios de diseño web y automatización de Rcelerate. Colombia.',
  robots: { index: false, follow: true },
}

export default function TerminosPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-[24px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Términos y Condiciones
      </h1>
      <p className="text-[12px] text-[#999] mb-8">
        Rcelerate — rcelerate.co · Última actualización: junio de 2026
      </p>

      <Section title="1. Objeto">
        <p>
          Rcelerate presta servicios de creación de páginas web y automatizaciones con inteligencia
          artificial para negocios.
        </p>
      </Section>

      <Section title="2. Proceso de contratación">
        <ol className="list-decimal pl-5 space-y-1">
          <li>El cliente solicita una consulta gratuita vía WhatsApp o formulario</li>
          <li>Rcelerate envía una propuesta con alcance, precio y tiempo de entrega</li>
          <li>El cliente aprueba la propuesta por escrito (WhatsApp o correo)</li>
          <li>Rcelerate entrega un primer borrador sin costo de pago anticipado</li>
          <li>Si el cliente aprueba el borrador, se realiza el pago acordado</li>
          <li>Se entregan los ajustes pactados y se hace entrega final</li>
        </ol>
      </Section>

      <Section title="3. Precios y forma de pago">
        <ul className="list-disc pl-5 space-y-1">
          <li>Los precios publicados en el sitio incluyen todos los conceptos del servicio</li>
          <li>Los precios están expresados en Pesos Colombianos (COP)</li>
          <li>Los medios de pago aceptados se confirman al momento de la cotización</li>
          <li>No se realizan cobros sorpresa ni cargos adicionales no acordados previamente</li>
        </ul>
      </Section>

      <Section title="4. Tiempos de entrega">
        <p>Los tiempos indicados son estimados desde la aprobación del proyecto:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Landing Page: 2–3 días hábiles</li>
          <li>Web Profesional: 3–5 días hábiles</li>
          <li>Web Completa: 5–7 días hábiles</li>
          <li>Automatización básica: 2–3 días hábiles</li>
          <li>Automatización media: 5–7 días hábiles</li>
          <li>Automatización avanzada: 10–15 días hábiles</li>
        </ul>
      </Section>

      <Section title="5. Garantía de satisfacción">
        <p>
          El cliente puede ver el diseño inicial antes de realizar cualquier pago. Si el primer
          borrador no cumple las expectativas acordadas, no hay cobro.
        </p>
      </Section>

      <Section title="6. Revisiones incluidas">
        <p>
          Cada plan incluye un número de rondas de revisión especificado en la propuesta.
          Revisiones adicionales se cotizan por separado.
        </p>
      </Section>

      <Section title="7. Propiedad intelectual">
        <p>
          Una vez realizado el pago completo, el cliente es propietario del diseño y código
          entregado. Rcelerate se reserva el derecho de usar el trabajo en su portafolio, salvo
          acuerdo de confidencialidad.
        </p>
      </Section>

      <Section title="8. Limitación de responsabilidad">
        <p>Rcelerate no se responsabiliza por:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Caídas de servidores o plataformas de terceros (Vercel, Google, etc.)</li>
          <li>Pérdida de posicionamiento por cambios en algoritmos de buscadores</li>
          <li>Daños indirectos derivados del uso del sitio web entregado</li>
        </ul>
      </Section>

      <Section title="9. Ley aplicable">
        <p>
          Estos términos se rigen por la legislación colombiana. Cualquier disputa será resuelta
          ante los jueces competentes de Colombia.
        </p>
      </Section>

      <Section title="10. Modificaciones">
        <p>
          Rcelerate puede actualizar estos términos. La versión vigente siempre estará en{' '}
          <a href="/terminos" className="text-[#ff4d00] underline">
            rcelerate.co/terminos
          </a>
          .
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
