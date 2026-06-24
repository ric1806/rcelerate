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
  weight: ['400', '500', '600'],
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
    'diseño web Colombia',
    'automatizaciones IA Colombia',
    'landing page Colombia',
    'página web para negocio',
    'crear página web barata Colombia',
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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rcelerate — Páginas web y automatizaciones para tu negocio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rcelerate — Tu negocio en internet en 72 horas',
    description:
      'Páginas web profesionales y automatizaciones con IA para negocios colombianos.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'REEMPLAZAR_CON_TU_GOOGLE_SITE_VERIFICATION',
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
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
