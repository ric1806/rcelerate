import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Tratamiento de Datos',
  description:
    'Conoce cómo Rcelerate recolecta, usa y protege tus datos personales conforme a la Ley 1581 de 2012 de Colombia.',
  robots: { index: false, follow: true },
}

export default function PrivacidadPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-[24px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Política de Tratamiento de Datos Personales
      </h1>
      <p className="text-[12px] text-[#999] mb-8">Última actualización: junio de 2026</p>

      <dl className="text-[13px] text-[#555] mb-8 space-y-1">
        <div><dt className="inline font-medium text-[#111]">Responsable: </dt><dd className="inline">Rcelerate</dd></div>
        <div><dt className="inline font-medium text-[#111]">Domicilio: </dt><dd className="inline">Barbosa, Santander, Colombia</dd></div>
        <div><dt className="inline font-medium text-[#111]">Sitio web: </dt><dd className="inline">https://rcelerate.co</dd></div>
        <div><dt className="inline font-medium text-[#111]">Contacto: </dt><dd className="inline">ricardomflorez18@gmail.com</dd></div>
      </dl>

      <Section title="1. ¿Qué datos recolectamos?">
        <ul className="list-disc pl-5 space-y-1">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono / WhatsApp</li>
          <li>Información del negocio (tipo, ciudad, necesidades)</li>
          <li>Datos de navegación (cookies de analítica)</li>
        </ul>
      </Section>

      <Section title="2. ¿Para qué usamos tus datos?">
        <ul className="list-disc pl-5 space-y-1">
          <li>Responder solicitudes de cotización o consulta</li>
          <li>Enviar propuestas comerciales</li>
          <li>Gestionar la relación contractual con clientes</li>
          <li>Mejorar nuestros servicios</li>
          <li>Enviar comunicaciones sobre nuestros servicios (con consentimiento previo)</li>
        </ul>
      </Section>

      <Section title="3. Derechos del titular (Art. 8, Ley 1581 de 2012)">
        <p>Tienes derecho a:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Conocer, actualizar y rectificar tus datos</li>
          <li>Solicitar prueba de la autorización otorgada</li>
          <li>Ser informado sobre el uso de tus datos</li>
          <li>Presentar quejas ante la SIC (www.sic.gov.co)</li>
          <li>Revocar la autorización y solicitar la supresión de tus datos</li>
        </ul>
      </Section>

      <Section title="4. ¿Compartimos tus datos?">
        <p>
          No vendemos ni cedemos datos personales a terceros, salvo obligación legal o para
          prestar el servicio contratado (ej: plataformas de hosting o herramientas de trabajo).
        </p>
      </Section>

      <Section title="5. ¿Por cuánto tiempo los conservamos?">
        <p>
          Mientras dure la relación comercial y hasta 5 años después, salvo que solicites su
          eliminación antes.
        </p>
      </Section>

      <Section title="6. Seguridad">
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger tu información
          contra acceso no autorizado.
        </p>
      </Section>

      <Section title="7. Contacto para ejercer derechos">
        <p>
          Escríbenos a{' '}
          <a href="mailto:ricardomflorez18@gmail.com" className="text-[#ff4d00] underline">
            ricardomflorez18@gmail.com
          </a>{' '}
          indicando tu solicitud. Responderemos en un plazo máximo de 15 días hábiles.
        </p>
      </Section>

      <Section title="8. Modificaciones">
        <p>
          Podemos actualizar esta política. La versión vigente siempre estará disponible en{' '}
          <a href="/privacidad" className="text-[#ff4d00] underline">
            rcelerate.co/privacidad
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
