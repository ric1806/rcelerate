'use client'

import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setShow(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'essential')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] text-white px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
      <p className="text-[12px] text-[#aaa] leading-relaxed">
        Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{' '}
        <a href="/cookies" className="text-[#ff4d00] underline hover:text-[#ff6633]">
          política de cookies
        </a>
        .
      </p>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="text-[12px] text-[#666] underline cursor-pointer hover:text-[#999] transition-colors"
        >
          Solo esenciales
        </button>
        <button
          onClick={accept}
          className="bg-[#ff4d00] text-white text-[12px] font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-[#e04400] transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
