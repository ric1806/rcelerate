import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { LaunchBar } from '@/components/LaunchBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rcelerate — Páginas web y automatizaciones con IA en Colombia',
    template: '%s · Rcelerate',
  },
  description:
    'Creamos tu página web profesional en 72 horas desde $420.000 COP. Automatizaciones con IA para cualquier negocio en Colombia. Diseño a medida, SEO incluido.',
  metadataBase: new URL('https://rcelerate.co'),
  keywords: [
    'páginas web Colombia',
    'diseño web profesional Colombia',
    'automatizaciones IA Colombia',
    'agencia digital Colombia',
    'landing page profesional Colombia',
    'página web para negocio Colombia',
    'crear página web Barbosa Santander',
    'Rcelerate',
  ],
  authors: [{ name: 'Rcelerate', url: 'https://rcelerate.co' }],
  creator: 'Rcelerate',
  publisher: 'Rcelerate',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://rcelerate.co',
    siteName: 'Rcelerate',
    title: 'Rcelerate — Tu negocio en internet en 72 horas',
    description:
      'Páginas web profesionales y automatizaciones con IA para negocios colombianos. Desde $420.000 COP.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rcelerate — Tu negocio en internet en 72 horas',
    description:
      'Páginas web profesionales y automatizaciones con IA para negocios colombianos.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://rcelerate.co',
  },
  manifest: '/site.webmanifest',
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://rcelerate.co',
  name: 'Rcelerate',
  url: 'https://rcelerate.co',
  logo: {
    '@type': 'ImageObject',
    url: 'https://rcelerate.co/rcelerate_icono_512.jpg',
    width: 512,
    height: 512,
  },
  image: 'https://rcelerate.co/og-image.jpg',
  description:
    'Agencia digital especializada en creación de páginas web profesionales y automatizaciones con inteligencia artificial para negocios colombianos.',
  foundingDate: '2026',
  areaServed: { '@type': 'Country', name: 'Colombia' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barbosa',
    addressRegion: 'Santander',
    addressCountry: 'CO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+573212520391',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  },
  sameAs: ['https://www.instagram.com/rcelerate'],
  knowsAbout: [
    'Diseño web',
    'Desarrollo web',
    'Páginas web para negocios',
    'Landing pages',
    'Automatización con inteligencia artificial',
    'SEO',
    'Colombia',
  ],
  priceRange: '$$',
  currenciesAccepted: 'COP',
}

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rcelerate',
  url: 'https://rcelerate.co',
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta hacer una página web profesional en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En Rcelerate, las páginas web profesionales para negocios colombianos comienzan desde $420.000 COP con nuestra oferta de lanzamiento. Incluyen diseño personalizado, SEO, botón de WhatsApp y se entregan en 72 horas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda en estar lista mi página web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entregamos la primera versión de tu página web en 72 horas (3 días hábiles). Primero hacemos un borrador para que lo apruebes, y si te gusta acordamos el pago inicial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo ver el diseño antes de pagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. En Rcelerate te mostramos un borrador real de tu página antes de que pagues. Si el diseño te convence, acordamos el pago inicial. Sin riesgo para ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye una página web profesional de Rcelerate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diseño personalizado con tu identidad de marca, optimización SEO para aparecer en Google, botón directo a WhatsApp, versión perfecta en celular y computador, y analytics para ver cuántas personas visitan tu sitio.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LaunchBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? 'G-XXXXXXXXXX'} />
    </html>
  )
}
