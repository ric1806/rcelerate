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

      <Section title="1. Partes y objeto">
        <p>
          El presente documento regula la relación contractual entre <strong>Rcelerate</strong>{' '}
          (en adelante "el Prestador"), con domicilio en Barbosa, Santander, Colombia, y cualquier
          persona natural o jurídica (en adelante "el Cliente") que contrate sus servicios de
          creación de páginas web, automatizaciones con inteligencia artificial y planes de
          mantenimiento digital.
        </p>
        <p className="mt-2">
          Al iniciar una solicitud de demo, firmar una propuesta o realizar cualquier pago, el
          Cliente declara haber leído, entendido y aceptado estos términos en su totalidad.
        </p>
      </Section>

      <Section title="2. Catálogo de servicios y precios">
        <p className="font-medium text-[#111] mb-1">Páginas web (pago único)</p>
        <table className="w-full text-[12px] mb-4 border-collapse">
          <thead>
            <tr className="border-b border-[#eee]">
              <th className="text-left py-1 pr-3 font-medium text-[#111]">Plan</th>
              <th className="text-left py-1 pr-3 font-medium text-[#111]">Precio</th>
              <th className="text-left py-1 font-medium text-[#111]">Cambios incluidos</th>
            </tr>
          </thead>
          <tbody className="text-[#555]">
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">La página básica</td>
              <td className="py-1 pr-3">$420.000 COP</td>
              <td className="py-1">1 ronda</td>
            </tr>
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">La página completa</td>
              <td className="py-1 pr-3">$780.000 COP</td>
              <td className="py-1">2 rondas</td>
            </tr>
            <tr>
              <td className="py-1 pr-3">La página premium</td>
              <td className="py-1 pr-3">$1.320.000 COP</td>
              <td className="py-1">Ilimitados (durante proyecto)</td>
            </tr>
          </tbody>
        </table>

        <p className="font-medium text-[#111] mb-1">Automatizaciones con IA (pago único)</p>
        <table className="w-full text-[12px] mb-4 border-collapse">
          <thead>
            <tr className="border-b border-[#eee]">
              <th className="text-left py-1 pr-3 font-medium text-[#111]">Plan</th>
              <th className="text-left py-1 font-medium text-[#111]">Precio</th>
            </tr>
          </thead>
          <tbody className="text-[#555]">
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Flujo básico</td>
              <td className="py-1">$420.000 COP</td>
            </tr>
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Automatización media</td>
              <td className="py-1">$975.000 COP</td>
            </tr>
            <tr>
              <td className="py-1 pr-3">Sistema completo con IA</td>
              <td className="py-1">$1.800.000 COP</td>
            </tr>
          </tbody>
        </table>

        <p className="font-medium text-[#111] mb-1">
          Mantenimiento mensual / anual (30% descuento anual)
        </p>
        <table className="w-full text-[12px] border-collapse">
          <thead>
            <tr className="border-b border-[#eee]">
              <th className="text-left py-1 pr-3 font-medium text-[#111]">Plan</th>
              <th className="text-left py-1 pr-3 font-medium text-[#111]">Mensual</th>
              <th className="text-left py-1 font-medium text-[#111]">Anual</th>
            </tr>
          </thead>
          <tbody className="text-[#555]">
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Web Básica</td>
              <td className="py-1 pr-3">$50.000</td>
              <td className="py-1">$420.000</td>
            </tr>
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Web Completa</td>
              <td className="py-1 pr-3">$120.000</td>
              <td className="py-1">$1.008.000</td>
            </tr>
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Web Premium</td>
              <td className="py-1 pr-3">$250.000</td>
              <td className="py-1">$2.100.000</td>
            </tr>
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Automatización Básica</td>
              <td className="py-1 pr-3">$60.000</td>
              <td className="py-1">$504.000</td>
            </tr>
            <tr className="border-b border-[#f5f5f5]">
              <td className="py-1 pr-3">Automatización Media</td>
              <td className="py-1 pr-3">$150.000</td>
              <td className="py-1">$1.260.000</td>
            </tr>
            <tr>
              <td className="py-1 pr-3">Sistema Completo IA</td>
              <td className="py-1 pr-3">$300.000</td>
              <td className="py-1">$2.520.000</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-[12px] text-[#888]">
          Todos los precios están expresados en Pesos Colombianos (COP) e incluyen IVA cuando
          aplique conforme a la normativa vigente.
        </p>
      </Section>

      <Section title="3. Política del borrador / demo gratuita">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Rcelerate ofrece un borrador o demo funcional del proyecto <strong>sin costo</strong>{' '}
            y sin requerir ningún pago anticipado.
          </li>
          <li>
            Si el Cliente no aprueba el borrador, no está obligado a pagar ninguna suma por ese
            trabajo.
          </li>
          <li>
            <strong>
              Al solicitar el borrador, el Cliente otorga a Rcelerate el derecho irrevocable y
              gratuito de publicar dicho borrador en su portafolio público, sitio web, redes
              sociales y materiales de marketing, sin limitación de tiempo ni territorio.
            </strong>{' '}
            Si el Cliente desea confidencialidad sobre el borrador, debe comunicarlo por escrito
            antes de la elaboración.
          </li>
          <li>
            El uso del Instagram u otras redes sociales del Cliente para elaborar el borrador se
            realiza únicamente con información públicamente disponible. El Cliente acepta este
            uso al solicitar el servicio.
          </li>
        </ul>
      </Section>

      <Section title="4. Proceso de contratación">
        <ol className="list-decimal pl-5 space-y-1">
          <li>El Cliente solicita información vía WhatsApp (+57 321 252 0391) o correo electrónico.</li>
          <li>Rcelerate envía una propuesta con alcance exacto, precio, tiempos y condiciones.</li>
          <li>El Cliente aprueba la propuesta de forma expresa (mensaje de WhatsApp o correo).</li>
          <li>Rcelerate elabora el borrador sin costo previo.</li>
          <li>
            Si el Cliente aprueba el borrador, realiza el <strong>50% del valor total</strong> como
            anticipo por transferencia bancaria.
          </li>
          <li>Rcelerate ejecuta los ajustes acordados según el plan contratado.</li>
          <li>
            Al completar la entrega final, el Cliente paga el <strong>50% restante</strong> y
            recibe todos los accesos y archivos.
          </li>
        </ol>
        <p className="mt-2">
          Ningún trabajo adicional no contemplado en la propuesta aprobada estará incluido
          sin un acuerdo escrito previo.
        </p>
      </Section>

      <Section title="5. Formas de pago">
        <ul className="list-disc pl-5 space-y-1">
          <li>Medio aceptado: transferencia bancaria en pesos colombianos (COP).</li>
          <li>
            Estructura estándar: 50% anticipo al aprobar borrador / 50% al hacer entrega final.
          </li>
          <li>
            El plan anual de mantenimiento requiere pago único anticipado del total.
          </li>
          <li>
            No se aceptan pagos parciales distintos a los acordados. El incumplimiento de pago
            suspende la entrega hasta regularización.
          </li>
        </ul>
      </Section>

      <Section title="6. Tiempos de entrega">
        <p>Contados en días hábiles desde la confirmación del anticipo:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>La página básica: 2–3 días hábiles</li>
          <li>La página completa: 3–5 días hábiles</li>
          <li>La página premium: 5–7 días hábiles</li>
          <li>Flujo básico de automatización: 2–3 días hábiles</li>
          <li>Automatización media: 5–7 días hábiles</li>
          <li>Sistema completo con IA: 10–15 días hábiles</li>
        </ul>
        <p className="mt-2">
          Los tiempos pueden extenderse si el Cliente demora más de 48 horas en suministrar
          información, materiales o aprobaciones requeridas. Rcelerate comunicará cualquier
          retraso con anticipación.
        </p>
      </Section>

      <Section title="7. Alcance de revisiones por plan">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Plan básico:</strong> 1 ronda de cambios. Cambios adicionales se cotizan
            a $80.000 COP por ronda.
          </li>
          <li>
            <strong>Plan completo:</strong> 2 rondas de cambios. Cambios adicionales a $80.000
            COP por ronda.
          </li>
          <li>
            <strong>Plan premium:</strong> Cambios ilimitados durante la fase de desarrollo
            (antes de la entrega final). Cambios post-entrega están cubiertos solo durante el
            primer mes de soporte incluido.
          </li>
        </ul>
        <p className="mt-2">
          Una "ronda de cambios" corresponde a una lista consolidada de ajustes enviada en un
          solo mensaje. Solicitudes separadas cuentan como rondas independientes.
        </p>
      </Section>

      <Section title="8. Propiedad intelectual">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Una vez realizado el <strong>pago completo (100%)</strong>, el Cliente adquiere la
            propiedad del diseño y código entregado.
          </li>
          <li>
            Rcelerate se reserva el derecho de incluir el trabajo entregado en su portafolio,
            salvo acuerdo de confidencialidad firmado previamente.
          </li>
          <li>
            Las plantillas, componentes y librerías base utilizados (Next.js, Tailwind CSS, etc.)
            están sujetos a sus propias licencias de código abierto y no son propiedad exclusiva
            del Cliente.
          </li>
          <li>
            El Cliente garantiza tener los derechos sobre logos, imágenes y textos que suministre.
            Rcelerate no asume responsabilidad por infracción de derechos de autor causada por
            materiales entregados por el Cliente.
          </li>
        </ul>
      </Section>

      <Section title="9. Planes de mantenimiento — condiciones">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            El mantenimiento mensual cubre: actualizaciones de seguridad, copias de seguridad
            automáticas, monitoreo de disponibilidad (uptime) y soporte técnico preventivo.
          </li>
          <li>
            El mantenimiento de automatizaciones cubre: monitoreo de flujos, ajustes de APIs,
            renovación de tokens y reportes de rendimiento.
          </li>
          <li>
            <strong>El incumplimiento de cualquier pago mensual</strong> resulta en la suspensión
            inmediata del soporte y mantenimiento hasta que el pago sea regularizado.
          </li>
          <li>
            El plan anual requiere pago único anticipado y no es reembolsable una vez iniciado
            el primer mes de servicio.
          </li>
          <li>
            Rcelerate no se hace responsable de fallos causados por modificaciones realizadas
            por el Cliente o terceros sobre los archivos, código o configuraciones del sistema
            entregado.
          </li>
        </ul>
      </Section>

      <Section title="10. Costos operativos de terceros (automatizaciones)">
        <p>
          Los sistemas de automatización con IA pueden requerir suscripciones a plataformas de
          terceros como Make, n8n, OpenAI, Anthropic, entre otras. Estos costos operativos
          recurrentes son <strong>responsabilidad exclusiva del Cliente</strong> y no están
          incluidos en ningún plan de Rcelerate, salvo indicación expresa por escrito en la
          propuesta comercial.
        </p>
      </Section>

      <Section title="11. Limitación de responsabilidad">
        <p>Rcelerate no se responsabiliza por:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Interrupciones, caídas o pérdida de datos en plataformas de terceros (Vercel,
            Google, Meta, Make, n8n, OpenAI, etc.).
          </li>
          <li>
            Pérdida de posicionamiento en buscadores por cambios en algoritmos de Google u otros
            motores de búsqueda.
          </li>
          <li>
            Daños directos, indirectos o lucro cesante derivados del uso o no disponibilidad
            del sitio web o sistema automatizado entregado.
          </li>
          <li>
            Modificaciones realizadas por el Cliente o terceros sobre el código, base de datos
            o configuraciones entregadas, que alteren el funcionamiento del sistema.
          </li>
          <li>
            Resultados comerciales específicos (ventas, leads, conversiones) derivados del uso
            del sitio web o las automatizaciones.
          </li>
        </ul>
        <p className="mt-2">
          La responsabilidad máxima de Rcelerate ante cualquier reclamación no superará el valor
          total pagado por el servicio contratado.
        </p>
      </Section>

      <Section title="12. Confidencialidad y datos del negocio">
        <p>
          Rcelerate trata con reserva la información comercial del Cliente (productos, precios,
          estrategias) compartida durante el desarrollo del proyecto. No la divulga a terceros
          sin autorización. Esta obligación no aplica a información que ya sea pública.
        </p>
      </Section>

      <Section title="13. Cancelación y desistimiento">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            El Cliente puede cancelar el proyecto en cualquier momento antes de pagar el
            anticipo sin ningún costo.
          </li>
          <li>
            Si el proyecto se cancela después de pagar el anticipo y Rcelerate ya inició el
            trabajo, el anticipo no es reembolsable.
          </li>
          <li>
            Si Rcelerate cancela el proyecto por causas imputables a su parte antes de la
            entrega, se reembolsará el 100% del anticipo pagado.
          </li>
        </ul>
      </Section>

      <Section title="14. Ley aplicable y resolución de disputas">
        <p>
          Estos términos se rigen por la legislación de la República de Colombia. Ante cualquier
          controversia, las partes intentarán resolverla de buena fe. De no lograrlo, la disputa
          se someterá a los jueces competentes de Colombia conforme al domicilio del Prestador
          (Barbosa, Santander).
        </p>
      </Section>

      <Section title="15. Modificaciones a estos términos">
        <p>
          Rcelerate puede actualizar estos términos en cualquier momento. La versión vigente
          estará siempre publicada en{' '}
          <a href="/terminos" className="text-[#ff4d00] underline">
            rcelerate.co/terminos
          </a>
          . Los contratos ya firmados se rigen por los términos vigentes al momento de su
          aceptación.
        </p>
      </Section>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-[15px] font-semibold text-[#111] mb-2 tracking-[-0.01em]">{title}</h2>
      <div className="text-[13px] text-[#555] leading-relaxed space-y-1">{children}</div>
    </section>
  )
}
