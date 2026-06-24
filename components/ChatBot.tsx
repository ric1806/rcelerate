'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

const GREETING: Message = {
  role: 'assistant',
  text: '¡Hola! Soy Rcel 👋 el asistente de Rcelerate. ¿En qué te puedo ayudar hoy? Puedo contarte sobre nuestras páginas web, precios o automatizaciones con IA.',
}

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [hint, setHint] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Muestra el globo de "¿Tienes dudas?" 3 s después de cargar, desaparece a los 8 s
  useEffect(() => {
    const show = setTimeout(() => setHint(true), 3000)
    const hide = setTimeout(() => setHint(false), 8000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  useEffect(() => {
    if (open) {
      setHint(false)
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages])

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
      {/* Panel del chat */}
      {open && (
        <div
          className="fixed bottom-20 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#222]"
          style={{ background: '#0e0e0f', maxHeight: '480px' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#ff4d00]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-[13px] font-semibold">Rcel — Asistente Rcelerate</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X size={16} />
            </button>
          </div>

          {/* Mensajes */}
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

          {/* Input */}
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
        </div>
      )}

      {/* Globo "¿Tienes dudas?" — aparece 3 s después, desaparece a los 8 s */}
      {hint && !open && (
        <div
          className="fixed bottom-[72px] right-4 z-50 flex items-center gap-2 bg-white text-[#111] text-[13px] font-medium px-4 py-2 rounded-2xl rounded-br-sm shadow-lg"
          style={{
            animation: 'fadeSlideIn 0.3s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          }}
        >
          <span>¿Tienes alguna duda? ¡Pregúntame!</span>
          <button
            onClick={() => setHint(false)}
            className="text-[#aaa] hover:text-[#555] ml-1"
            aria-label="Cerrar"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat"
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-red-600 shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors"
        style={{ boxShadow: '0 0 20px rgba(220,38,38,0.4)' }}
      >
        {open ? <X size={20} className="text-white" /> : <MessageCircle size={20} className="text-white" />}
      </button>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
