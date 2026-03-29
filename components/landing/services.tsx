"use client"

import { Globe, Clock, BarChart3 } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const solutions = [
  {
    icon: Globe,
    title: "Seu negócio aberto 24h, 7 dias por semana",
    description: "Sistemas web que permitem que seus clientes agendem a qualquer hora, de qualquer lugar, sem precisar te ligar.",
  },
  {
    icon: Clock,
    title: "Agendamento automático em segundos",
    description: "Seus clientes marcam sozinhos, recebem confirmação automática e lembretes. Você só aparece para trabalhar.",
  },
  {
    icon: BarChart3,
    title: "Visão completa em tempo real",
    description: "Dashboards inteligentes que mostram exatamente quanto você faturou, quantos clientes atendeu e onde pode melhorar.",
  },
]

export function Services() {
  return (
    <section id="solucoes" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.05),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-20">
          <span className="inline-block text-teal-400 font-medium mb-4 text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 text-balance">
            Chega de trabalhar para o sistema.{" "}
            <br className="hidden md:block" />
            Deixe o sistema trabalhar para{" "}
            <span className="text-teal-400">você.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Automatizamos os processos que roubam seu tempo, para você focar no que realmente importa.
          </p>
        </AnimatedSection>

        {/* Cards Grid - Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
            >
              <div 
                className="group relative h-full p-8 rounded-2xl 
                  bg-slate-900/50 backdrop-blur-xl
                  border border-slate-800 hover:border-teal-500/50
                  transition-all duration-500 ease-out
                  hover:scale-[1.03] hover:-translate-y-2
                  hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-teal-500/30 to-transparent blur-sm" />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center
                    group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300">
                    <solution.icon className="w-7 h-7 text-teal-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-slate-100 mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="relative text-slate-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
