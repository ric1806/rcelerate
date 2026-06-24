import { ImageResponse } from 'next/og'

export const alt = 'Rcelerate — Páginas web y automatizaciones para tu negocio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Acento naranja */}
        <div
          style={{
            background: '#ff4d00',
            borderRadius: '6px',
            padding: '6px 20px',
            fontSize: '14px',
            color: '#fff',
            fontWeight: 600,
            letterSpacing: '0.08em',
            marginBottom: '32px',
            textTransform: 'uppercase',
          }}
        >
          RCELERATE.CO
        </div>

        <div
          style={{
            fontSize: '60px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          Tu negocio en internet, en 72 horas.
        </div>

        <div
          style={{
            fontSize: '26px',
            color: '#888888',
            lineHeight: 1.4,
            maxWidth: '700px',
          }}
        >
          Páginas web y automatizaciones con IA desde $420.000 COP · Colombia
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#ff4d00',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
