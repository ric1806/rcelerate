import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { DemoOffer } from '@/components/DemoOffer'
import { CustomSection } from '@/components/CustomSection'
import { StatsRow } from '@/components/StatsRow'
import { ProblemSection } from '@/components/ProblemSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { ProcessSection } from '@/components/ProcessSection'
import { WhyUsSection } from '@/components/WhyUsSection'
import { FinalCTA } from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Rcelerate — Páginas web profesionales y automatizaciones con IA en Colombia',
  description:
    'Creamos tu página web en 72 horas desde $420.000 COP. Automatizaciones con IA para cualquier negocio colombiano. Diseño a medida, SEO incluido. Barbosa, Santander.',
  alternates: {
    canonical: 'https://rcelerate.co',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DemoOffer />
      <CustomSection />
      <StatsRow />
      <ProblemSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyUsSection />
      <FinalCTA />
    </>
  )
}
