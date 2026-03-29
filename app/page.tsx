import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { ROICalculator } from "@/components/landing/roi-calculator"
import { CaseStudies } from "@/components/landing/case-studies"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header fixo com navegacao */}
      <Header />
      
      {/* Hero - Headline + Badge + CTAs */}
      <Hero />
      
      {/* Solucoes - 3 Cards Glassmorphism */}
      <Services />
      
      {/* Calculadora de ROI - Interativa com Sliders */}
      <ROICalculator />
      
      {/* Casos de Sucesso - Metricas + Depoimento */}
      <CaseStudies />
      
      {/* Sobre nos - Valores + Logo */}
      <About />
      
      {/* CTA Final - Formulario Simples */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
