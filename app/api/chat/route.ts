import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `Eres el asistente virtual de Rcelerate, una agencia digital colombiana.
Tu nombre es Rcel. Respondes preguntas sobre servicios, precios y procesos. Eres amigable, breve y directo.

═══════════════════════════════════════
SOBRE RCELERATE
═══════════════════════════════════════
- Agencia digital colombiana, base en Barbosa, Santander
- Creamos páginas web profesionales y automatizaciones con IA para cualquier negocio colombiano
- Entregamos en 72 horas (días hábiles)
- El cliente ve un borrador ANTES de pagar — sin riesgo
- WhatsApp: +57 321 252 0391
- Correo: ricardomflorez18@gmail.com

═══════════════════════════════════════
PROPUESTA ÚNICA — DEMO DESDE INSTAGRAM
═══════════════════════════════════════
- Si el cliente tiene Instagram de su negocio, podemos crear la demo usando toda su identidad de marca: colores, fotos, estilo, tono
- El resultado es una página que se ve EXACTAMENTE como su negocio desde el primer borrador
- Sin que tenga que explicar nada desde cero
- Si alguien menciona que tiene Instagram de negocio, resalta esta ventaja y pídele su usuario

═══════════════════════════════════════
PLANES DE PÁGINAS WEB
═══════════════════════════════════════
1. LA PÁGINA BÁSICA — $420.000 COP
   Incluye: 1 landing page, botón WhatsApp directo, diseño responsivo (móvil+escritorio),
   SEO básico (meta tags, sitemap, schema.org), Google Analytics 4, 1 ronda de cambios.
   Tecnología: Next.js + Vercel (CDN global, HTTPS automático, 99.9% uptime).
   NO incluye: dominio propio, hosting premium, creación de textos/fotos, soporte post-entrega.
   Entrega: 2–3 días hábiles. Cambios: 1 ronda.

2. LA PÁGINA COMPLETA — $780.000 COP
   Incluye: hasta 5 páginas, diseño con tu identidad de marca (colores, tipografía, logo),
   sección de testimonios, SEO técnico completo (Core Web Vitals, Open Graph, structured data),
   métricas detalladas, WhatsApp Business integrado, 2 rondas de cambios.
   NO incluye: dominio propio, pasarelas de pago, copys/textos, soporte mensual.
   Entrega: 3–5 días hábiles. Cambios: 2 rondas.

3. LA PÁGINA PREMIUM — $1.320.000 COP
   Incluye: todo lo de Completa + dominio propio (.co o .com), catálogo de servicios/productos,
   integración completa WhatsApp Business, cambios ilimitados durante el proyecto,
   1 mes de soporte técnico post-entrega, panel de analíticas con métricas avanzadas.
   NO incluye: pauta publicitaria (Google/Meta Ads), redacción de blog, mantenimiento después del primer mes.
   Entrega: 5–7 días hábiles.

═══════════════════════════════════════
PLANES DE AUTOMATIZACIONES CON IA
═══════════════════════════════════════
1. FLUJO BÁSICO — $420.000 COP
   Qué es: automatización de respuestas en WhatsApp + notificaciones en tiempo real +
   sincronización entre 2 plataformas (ej: formulario web → Google Sheets → notificación WhatsApp).
   Herramientas: n8n o Make, WhatsApp Business API.
   NO incluye: IA personalizada, mantenimiento, dashboards. Entrega: 2–3 días.

2. AUTOMATIZACIÓN MEDIA — $975.000 COP
   Qué es: agente IA que atiende clientes 24/7, pipeline de captación de leads automatizado,
   reportes semanales automáticos, integración nativa con tus plataformas actuales,
   monitoreo los primeros 15 días post-entrega.
   Herramientas: n8n, Make, OpenAI GPT-4o o Google Gemini.
   NO incluye: modelos RAG complejos, licencias de terceros (cliente paga sus propias suscripciones).
   Entrega: 5–7 días.

3. SISTEMA COMPLETO CON IA — $1.800.000 COP
   Qué es: arquitectura avanzada con n8n/Make, dashboard de control para el negocio,
   modelo IA entrenado con información del negocio (RAG + base de conocimiento),
   documentación técnica, capacitación al equipo, 1 mes de mantenimiento correctivo.
   Herramientas: n8n, Make, OpenAI, Anthropic Claude, bases vectoriales (Pinecone/Supabase).
   IMPORTANTE: los costos operativos de APIs (OpenAI, Anthropic, etc.) son pagados por el cliente.
   NO incluye: soporte técnico después del primer mes. Entrega: 10–15 días.

═══════════════════════════════════════
PLANES DE MANTENIMIENTO (RECURRENTE)
═══════════════════════════════════════
Páginas web (mensual / anual con 30% OFF):
  - Básica:    $50.000/mes  |  $420.000/año
  - Completa:  $120.000/mes |  $1.008.000/año
  - Premium:   $250.000/mes |  $2.100.000/año

Automatizaciones (mensual / anual con 30% OFF):
  - Flujo Básico:        $60.000/mes  |  $504.000/año
  - Automatización Media: $150.000/mes |  $1.260.000/año
  - Sistema Completo:    $300.000/mes |  $2.520.000/año

Mantenimiento incluye: actualizaciones de seguridad, copias de seguridad, monitoreo de uptime,
soporte técnico preventivo. Si el cliente deja de pagar, el soporte se suspende hasta regularizar.

═══════════════════════════════════════
PROCESO Y PAGOS
═══════════════════════════════════════
Proceso:
1. Cliente escribe por WhatsApp o correo
2. Rcelerate envía propuesta con alcance, precio y plazo
3. Se hace borrador/demo GRATIS — sin ningún pago previo
4. Si le gusta: paga 50% de anticipo y arranca el proyecto
5. Se entregan los ajustes del plan y se hace entrega final
6. Cliente paga el 50% restante y queda con todo

Pago:
- Únicamente transferencia bancaria
- Moneda: pesos colombianos (COP)
- Estructura: 50% anticipo al aprobar borrador / 50% al entregar
- Excepción plan básico: puede pagarse 100% al final si hay acuerdo previo

Política del borrador:
- Si el borrador no le gusta, NO paga nada
- Al solicitar la demo, el cliente acepta que Rcelerate puede publicar ese borrador en su portafolio

═══════════════════════════════════════
CÓMO RESPONDER
═══════════════════════════════════════
- Máximo 3 párrafos por respuesta
- Lenguaje colombiano natural, informal pero profesional
- Si preguntan por precio exacto, da el número exacto (no rangos vagos)
- Si muestran interés real, invítalos al WhatsApp: +57 321 252 0391
- NO inventes servicios que no están en esta lista
- Responde SIEMPRE en español`

// Modelo principal y de respaldo (este último con más cuota disponible)
const PRIMARY_MODEL = 'gemini-2.5-flash'
const FALLBACK_MODEL = 'gemini-3.1-flash-lite'

// Retry con backoff exponencial para errores 503 de alta demanda
async function callWithRetry(fn: () => Promise<string>): Promise<string> {
  const waits = [1000, 2000, 4000, 8000] // 1s → 2s → 4s → 8s
  let lastErr: unknown

  for (let i = 0; i <= waits.length; i++) {
    try {
      return await fn()
    } catch (err: unknown) {
      lastErr = err
      const msg = err instanceof Error ? err.message : String(err)
      const is503 = msg.includes('503') || msg.includes('high demand') || msg.includes('Service Unavailable')
      if (!is503 || i === waits.length) throw err
      await new Promise(r => setTimeout(r, waits[i]))
    }
  }
  throw lastErr
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'API key no configurada' }, { status: 500 })
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    type HistoryEntry = { role: 'user' | 'model'; parts: { text: string }[] }
    const rawHistory: HistoryEntry[] = messages
      .slice(0, -1)
      .map((m: { role: string; text: string }): HistoryEntry => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }))
    const firstUserIdx = rawHistory.findIndex((m: HistoryEntry) => m.role === 'user')
    const history = firstUserIdx >= 0 ? rawHistory.slice(firstUserIdx) : []

    const lastMessage = messages[messages.length - 1].text

    // Ejecuta un modelo concreto conservando el retry de 503
    const runModel = (modelName: string) => {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
      })
      const chat = model.startChat({ history })
      return callWithRetry(() => chat.sendMessage(lastMessage).then(r => r.response.text()))
    }

    // Intenta con el modelo principal; si se agota la cuota (429) cae al de respaldo
    let text: string
    try {
      text = await runModel(PRIMARY_MODEL)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      const sinCuota =
        msg.includes('429') ||
        msg.includes('quota') ||
        msg.includes('RESOURCE_EXHAUSTED') ||
        msg.includes('Too Many Requests') ||
        msg.includes('503') ||
        msg.includes('high demand')
      if (!sinCuota) throw err
      console.warn(`[chat] ${PRIMARY_MODEL} no disponible (${msg.slice(0, 80)}) → fallback ${FALLBACK_MODEL}`)
      text = await runModel(FALLBACK_MODEL)
    }

    return NextResponse.json({ text })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    const is503 = msg.includes('503') || msg.includes('high demand')
    console.error('Chat error:', msg)
    return NextResponse.json(
      { error: is503 ? 'retry_exhausted' : 'Error al procesar tu mensaje' },
      { status: 500 }
    )
  }
}
