'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { WA } from '@/lib/constants'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Ejemplos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-8 z-40 flex items-center justify-between px-6 py-3 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-[#e8e8e8] shadow-sm'
          : 'bg-white border-[#f0f0f0]'
      }`}
    >
      <a href="/" className="flex items-center">
        <Image
          src="/rcelerate_logo_negro.jpg"
          alt="Rcelerate"
          width={120}
          height={32}
          className="h-8 w-auto object-contain"
          priority
        />
      </a>

      {/* Links desktop */}
      <div className="hidden md:flex items-center gap-5">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[12px] text-[#666] hover:text-[#111] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA desktop */}
      <a
        href={WA.general}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center bg-[#ff4d00] text-white text-[12px] font-medium px-4 py-2 rounded-md hover:bg-[#e04400] transition-colors"
      >
        Hablar por WhatsApp
      </a>

      {/* Hamburger mobile */}
      <button
        className="md:hidden p-1 text-[#111]"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#f0f0f0] shadow-sm md:hidden">
          <div className="flex flex-col px-6 py-3 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[13px] text-[#555] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[#ff4d00] text-white text-[13px] font-medium px-4 py-2 rounded-md text-center"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
