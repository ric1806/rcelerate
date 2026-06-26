'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2, Bot, ExternalLink, ArrowLeft } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

const GREETING: Message = {
  role: 'assistant',
  text: '¡Hola! Soy Rcel 👋 tu asistente de IA disponible 24/7. ¿En qué te puedo ayudar hoy? Puedo contarte sobre nuestras páginas web, precios o automatizaciones con IA.',
}

const PORTFOLIO_EXAMPLES = [
  { name: 'KYMARQ', desc: 'Arquitectura & diseño premium', url: 'https://kymarq.com', icon: '🏛️' },
  { name: 'Bufete López Correal', desc: 'Bufete de abogados · Colombia', url: 'https://lopez-correal-asociados.vercel.app/', icon: '⚖️' },
  { name: 'Kreems Churros & Helado', desc: 'Negocio de alimentos · Demo', url: 'https://kreemschurroshelado.vercel.app', icon: '🍦' },
  { name: 'OtraVibra', desc: 'Entretenimiento y música · Demo', url: 'https://otravibraco.vercel.app', icon: '🎵' },
]

export function ChatBot() {
  const [widgetOpen, setWidgetOpen] = useState(true)
  const [view, setView] = useState<'home' | 'chat'>('home')
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (widgetOpen && view === 'chat') {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [widgetOpen, view, messages])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      const reply = data.error === 'retry_exhausted'
        ? 'El servicio está con mucha demanda ahora mismo. Intenta de nuevo en unos segundos 🙏'
        : (data.text ?? 'Error al responder.')
      setMessages([...next, { role: 'assistant', text: reply }])
    } catch {
      setMessages([...next, { role: 'assistant', text: 'Hubo un problema de conexión. Intenta de nuevo.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {widgetOpen && (
        <div
          className="fixed bottom-24 right-4 z-[60] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#222]"
          style={{ background: '#0e0e0f', maxHeight: '480px' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#ff4d00] to-[#ff6a2a]">
            <div className="flex items-center gap-2.5">
              {view === 'chat' && (
                <button
                  onClick={() => setView('home')}
                  className="text-white/80 hover:text-white transition-colors mr-0.5"
                  aria-label="Volver"
                >
                  <ArrowLeft size={16} />
                </button>
              )}
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center ring-1 ring-white/25">
                  <Bot size={19} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#ff4d00]" />
              </div>
              <div className="leading-tight">
                <p className="text-white text-[14px] font-bold tracking-tight">Rcel</p>
                <p className="text-white/85 text-[10.5px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  Tu asistente de IA · 24/7
                </p>
              </div>
            </div>
            <button
              onClick={() => setWidgetOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>
          </div>

          {view === 'home' ? (
            /* Pantalla de inicio — ejemplos del portafolio */
            <div className="flex-1 overflow-y-auto px-4 py-4" style={{ minHeight: 0 }}>
              <p className="text-[#555] text-[10px] uppercase tracking-widest font-semibold mb-3">
                Trabajos recientes
              </p>
              <div className="space-y-1.5 mb-4">
                {PORTFOLIO_EXAMPLES.map((ex) => (
                  <a
                    key={ex.name}
                    href={ex.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#161616] hover:bg-[#1e1e1e] transition-colors rounded-xl px-3 py-2.5 group"
                  >
                    <span className="text-base leading-none">{ex.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[12px] font-semibold leading-none mb-0.5 truncate">{ex.name}</p>
                      <p className="text-[#555] text-[10.5px] truncate">{ex.desc}</p>
                    </div>
                    <ExternalLink size={11} className="text-[#444] group-hover:text-[#ff4d00] transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              <button
                onClick={() => setView('chat')}
                className="w-full bg-[#ff4d00] hover:bg-[#e04400] transition-colors text-white text-[13px] font-semibold rounded-xl py-2.5"
              >
                💬 Chatear con Rcel
              </button>
            </div>
          ) : (
            /* Pantalla de chat */
            <>
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ minHeight: 0 }}>
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`rounded-xl px-3 py-2 text-[13px] leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                        m.role === 'user'
                          ? 'bg-[#ff4d00] text-white rounded-br-sm'
                          : 'bg-[#1a1a1a] text-[#ccc] rounded-bl-sm'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-[#1a1a1a] text-[#888] rounded-xl rounded-bl-sm px-3 py-2 text-[13px] flex items-center gap-2">
                      <Loader2 size={12} className="text-[#ff4d00] animate-spin flex-shrink-0" />
                      Procesando<span className="animate-pulse">...</span>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border-t border-[#222] bg-[#111]">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-transparent text-[13px] text-white placeholder-[#444] outline-none"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="text-[#ff4d00] hover:text-[#ff6a2a] disabled:opacity-30 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Botón flotante — siempre visible */}
      <div className="fixed bottom-4 right-4 z-[60]">
        <button
          onClick={() => setWidgetOpen((v) => !v)}
          aria-label={widgetOpen ? 'Cerrar chat' : 'Abrir chat'}
          className="w-14 h-14 rounded-full bg-[#ff4d00] shadow-lg flex items-center justify-center hover:bg-[#e04400] transition-colors"
          style={{ boxShadow: '0 0 20px rgba(255,77,0,0.4)' }}
        >
          {widgetOpen
            ? <X size={24} className="text-white" />
            : <MessageCircle size={24} className="text-white" />
          }
        </button>
      </div>
    </>
  )
}
