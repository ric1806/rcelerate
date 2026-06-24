'use client'

import { useState } from 'react'
import { WA } from '@/lib/constants'

const webPlans = [
  {
    name: 'La página básica',
    badge: null,
    sub: null,
    oldPrice: '$600.000',
    newPrice: '$420.000',
    discount: '-30%',
    wa: WA.landing,
    delivery: '2–3 días',
    note: 'Tiendas, talleres, consultorios, más',
    features: [
      { text: 'Una página que muestra tu negocio completo', note: null },
      { text: 'Botón directo a WhatsApp', note: null },
      { text: 'Se ve perfecta en celular y computador', note: null },
      { text: 'Aparece en Google', note: 'análisis SEO incluido' },
      { text: 'Ves cuántas personas visitan tu página', note: null },
      { text: 'Una ronda de cambios incluida', note: null },
    ],
  },
  {
    name: 'La página completa',
    badge: 'la más elegida',
    sub: null,
    oldPrice: '$1.200.000',
    newPrice: '$780.000',
    discount: '-35%',
    wa: WA.profesional,
    delivery: '3–5 días',
    note: 'Restaurantes, clínicas, bufetes, más',
    features: [
      { text: 'Hasta 5 páginas', note: 'inicio, servicios, portafolio, contacto…' },
      { text: 'Diseño personalizado con tu marca y colores', note: null },
      { text: 'Sección de reseñas o testimonios de clientes', note: null },
      { text: 'Aparece primero en Google', note: 'SEO técnico completo' },
      { text: 'Ves cuántas personas visitan y qué buscan', note: null },
      { text: 'Dos rondas de cambios incluidas', note: null },
    ],
    hot: true,
  },
  {
    name: 'La página premium',
    badge: null,
    sub: null,
    oldPrice: '$2.200.000',
    newPrice: '$1.320.000',
    discount: '-40%',
    wa: WA.completa,
    delivery: '5–7 días',
    note: 'Empresas, inmobiliarias, academias',
    features: [
      { text: 'Todo lo del plan completo', note: null },
      { text: 'Tu propio dominio', note: 'ej: tunegocio.co' },
      { text: 'Catálogo de productos o servicios con fotos', note: null },
      { text: 'WhatsApp Business integrado directo', note: null },
      { text: 'Un mes de soporte y ajustes incluido', note: null },
      { text: 'Cambios ilimitados hasta quedar perfecto', note: null },
    ],
  },
]

const autoPlans = [
  {
    name: 'Flujo básico',
    badge: null,
    oldPrice: '$600.000',
    newPrice: '$420.000',
    discount: '-30%',
    wa: WA.autoBasica,
    delivery: '48–72h',
    features: [
      'Respuesta automática vía WhatsApp',
      'Notificaciones y alertas en tiempo real',
      'Sincronización entre 2 plataformas (CRM, email, sheets…)',
      'Configuración e implementación incluida',
    ],
  },
  {
    name: 'Automatización media',
    badge: 'Mayor impacto',
    oldPrice: '$1.500.000',
    newPrice: '$975.000',
    discount: '-35%',
    wa: WA.autoMedia,
    delivery: '5–7 días',
    hot: true,
    features: [
      'Agente IA para atención al cliente 24/7',
      'Pipeline de captación de leads automatizado',
      'Reportes y métricas semanales automáticos',
      'Integración nativa con tu stack actual',
      'Monitoreo y soporte post-implementación',
    ],
  },
  {
    name: 'Sistema completo con IA',
    badge: null,
    oldPrice: '$3.000.000',
    newPrice: '$1.800.000',
    discount: '-40%',
    wa: WA.autoAvanzada,
    delivery: '10–15 días',
    features: [
      'Arquitectura de flujos interconectados (n8n / Make)',
      'Dashboard de control y métricas en tiempo real',
      'Modelo de IA entrenado con datos propios (RAG)',
      'Documentación técnica y transferencia de conocimiento',
      'Mantenimiento correctivo primer mes incluido',
    ],
  },
]

export function ServicesSection() {
  const [tab, setTab] = useState<'web' | 'auto'>('web')

  return (
    <section id="servicios" className="px-6 py-8 border-b border-[#f5f5f5]">
      <p className="text-[11px] text-[#ff4d00] tracking-widest uppercase mb-1 font-medium">
        OFERTA DE LANZAMIENTO · VENCE EL 30 DE JUNIO
      </p>
      <h2 className="text-[19px] font-semibold text-[#111] mb-1 tracking-[-0.02em]">
        Servicios con descuento por apertura
      </h2>
      <p className="text-[13px] text-[#888] mb-4 leading-snug">
        Precios de lanzamiento para los primeros clientes. Después del 30 de junio vuelven a su
        valor normal.
      </p>

      {/* Offer banner */}
      <div className="bg-[#fff8f5] border border-[#ffddd2] rounded-lg px-4 py-3 mb-5 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-[13px] font-medium text-[#111] mb-0.5">
            🔥 Descuentos activos hasta el 30 de junio
          </p>
          <p className="text-[11px] text-[#999]">Solo para los primeros clientes de Rcelerate</p>
        </div>
        <span className="bg-[#ff4d00] text-white rounded-md px-3 py-1 text-[11px] font-semibold flex-shrink-0">
          Hasta 40% OFF
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border border-[#f0f0f0] rounded-lg overflow-hidden w-fit mb-5">
        <button
          onClick={() => setTab('web')}
          className={`text-[12px] font-medium px-4 py-2 transition-colors cursor-pointer ${
            tab === 'web' ? 'bg-[#ff4d00] text-white' : 'bg-[#fafafa] text-[#999]'
          }`}
        >
          Páginas web
        </button>
        <button
          onClick={() => setTab('auto')}
          className={`text-[12px] font-medium px-4 py-2 transition-colors cursor-pointer ${
            tab === 'auto' ? 'bg-[#5555cc] text-white' : 'bg-[#fafafa] text-[#999]'
          }`}
        >
          Automatizaciones IA
        </button>
      </div>

      {/* Web plans */}
      {tab === 'web' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {webPlans.map((p) => (
            <div
              key={p.name}
              className={`border rounded-xl p-4 transition-transform duration-200 hover:-translate-y-0.5 ${
                p.hot
                  ? 'border-[1.5px] border-[#ff4d00] shadow-md'
                  : 'border-[#f0f0f0]'
              }`}
            >
              {p.badge && (
                <span className="text-[10px] bg-[#fff3ef] text-[#ff4d00] px-2.5 py-0.5 rounded-full inline-block mb-1 font-medium">
                  {p.badge}
                </span>
              )}
              <h3 className="text-[13px] font-semibold text-[#111] mb-0.5">{p.name}</h3>
              <p className="text-[11px] text-[#ccc] line-through mb-0.5">{p.oldPrice} COP</p>
              <div className="mb-3">
                <span className="text-[19px] font-semibold text-[#111] tracking-[-0.02em]">
                  {p.newPrice}{' '}
                  <span className="text-[11px] font-normal text-[#aaa]">COP</span>
                </span>
                <span className="inline-block bg-[#ff4d00] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded ml-1.5 align-middle">
                  {p.discount}
                </span>
              </div>
              <ul className="space-y-0">
                {p.features.map((f) => (
                  <li
                    key={f.text}
                    className="flex gap-2 text-[11px] text-[#444] py-1.5 border-b border-[#f8f8f8] last:border-0 leading-snug"
                  >
                    <span className="text-[#ff4d00] text-[13px] flex-shrink-0 mt-px">✓</span>
                    <span>
                      {f.text}
                      {f.note && (
                        <span className="text-[10px] text-[#bbb] ml-1">({f.note})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-1.5 bg-[#f5f5f5] rounded-md px-2.5 py-1.5 text-[11px] text-[#555] font-medium mt-3">
                <span className="text-[#ff4d00]">⚡</span> Lista en {p.delivery}
              </div>
              {p.note && (
                <p className="text-[10px] text-[#ff4d00] bg-[#fff8f5] rounded px-2 py-1 mt-2 inline-block">
                  {p.note}
                </p>
              )}
              <a
                href={p.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 w-full bg-[#ff4d00] text-white text-[12px] font-medium py-2.5 rounded-md text-center hover:bg-[#e04400] transition-colors"
              >
                Quiero este plan →
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Auto plans */}
      {tab === 'auto' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {autoPlans.map((p) => (
            <div
              key={p.name}
              className={`border rounded-xl p-4 bg-[#fafafe] transition-transform duration-200 hover:-translate-y-0.5 ${
                p.hot
                  ? 'border-[1.5px] border-[#5555cc] shadow-md'
                  : 'border-[#eeeeff]'
              }`}
            >
              {p.badge && (
                <span className="text-[10px] bg-[#5555cc] text-white px-2.5 py-0.5 rounded-full inline-block mb-1 font-medium">
                  {p.badge}
                </span>
              )}
              <h3 className="text-[13px] font-semibold text-[#111] mb-0.5">{p.name}</h3>
              <p className="text-[11px] text-[#ccc] line-through mb-0.5">{p.oldPrice} COP</p>
              <div className="mb-3">
                <span className="text-[19px] font-semibold text-[#111] tracking-[-0.02em]">
                  {p.newPrice}{' '}
                  <span className="text-[11px] font-normal text-[#aaa]">COP</span>
                </span>
                <span className="inline-block bg-[#5555cc] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded ml-1.5 align-middle">
                  {p.discount}
                </span>
              </div>
              <ul className="space-y-0">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-[11px] text-[#444] py-1.5 border-b border-[#f0f0ff] last:border-0 leading-snug"
                  >
                    <span className="text-[#5555cc] text-[13px] flex-shrink-0 mt-px">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-1.5 bg-[#eeeeff] rounded-md px-2.5 py-1.5 text-[11px] text-[#5555cc] font-medium mt-3">
                <span>⚡</span> Lista en {p.delivery}
              </div>
              <a
                href={p.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 w-full bg-[#5555cc] text-white text-[12px] font-medium py-2.5 rounded-md text-center hover:bg-[#4444bb] transition-colors"
              >
                Quiero esta automatización →
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
