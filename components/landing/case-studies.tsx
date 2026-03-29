"use client"

import { Clock, Ban, CheckCircle2, Quote } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const stats = [
  { icon: Clock, value: "20h", label: "Economizadas", sublabel: "por semana" },
  { icon: Ban, value: "0%", label: "Overbooking", sublabel: "zero erros" },
  { icon: CheckCircle2, value: "100%", label: "Controle", sublabel: "total" },
]

export function CaseStudies() {
  return (
    <section id="casos" className="py-24 md:py-32 relative bg-slate-900/50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-block text-teal-400 font-medium mb-4 text-sm uppercase tracking-wider">
              Casos de Sucesso
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 text-balance">
              Resultados reais de empresas <span className="text-teal-400">como a sua</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Veja como nossos sistemas já estão transformando a rotina de PMEs.
            </p>
          </div>
        </AnimatedSection>

        {/* Case Study: Sistema Hoteleiro */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-teal-500/20 text-teal-400">
                  Sistema Hoteleiro
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Em Produção
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                {stats.map((stat, index) => (
                  <AnimatedSection key={index} animation="scale" delay={200 + index * 100}>
                    <div className="text-center p-4 md:p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/30 transition-colors">
                      <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-teal-400 mx-auto mb-3" />
                      <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-teal-400">{stat.value}</span>
                      <span className="block text-sm md:text-base text-slate-300 font-medium mt-1">{stat.label}</span>
                      <span className="block text-xs text-slate-500">{stat.sublabel}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Testimonial */}
              <AnimatedSection animation="fade-up" delay={500}>
                <div className="relative p-6 md:p-8 rounded-2xl bg-slate-800/30 border border-slate-700">
                  <Quote className="absolute top-4 left-4 md:top-6 md:left-6 h-10 w-10 md:h-12 md:w-12 text-teal-500/20" />
                  <p className="relative text-lg md:text-xl text-slate-200 italic leading-relaxed mb-6 pl-8 md:pl-10">
                    {`"Acabou a era dos cadernos e da confusão. Hoje sei exatamente quantos quartos tenho disponíveis e quanto vou faturar no mês. O sistema se pagou no primeiro mês de uso."`}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <span className="text-lg font-bold text-slate-950">CM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 text-lg">Carlos Mendes</p>
                      <p className="text-slate-400">Gerente - Pousada Recanto</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
