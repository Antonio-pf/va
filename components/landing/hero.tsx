"use client"

import Link from "next/link"
import { ArrowRight, Trophy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(45,212,191,0.08),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection animation="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-800/60 border border-slate-700 backdrop-blur-sm mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-xs sm:text-sm text-slate-300">
                Mais de <span className="text-teal-400 font-semibold">50 horas</span> economizadas por mês para nossos clientes
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-[1.1] mb-6 text-balance">
              Pare de perder{" "}
              <span className="text-teal-400 relative inline-block">
                tempo
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47.5 2.5 154 1 199 5.5" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              com processos manuais.
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
              Sistemas que trabalham <span className="text-slate-100 font-medium">24h por você</span>, para que você foque no que realmente importa: 
              <span className="text-teal-400 font-semibold"> fazer seu negócio crescer.</span>
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contato">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-6 text-lg
                    shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_50px_rgba(45,212,191,0.6)]
                    transition-all duration-300 group"
                >
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#casos">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-teal-400 
                    hover:border-teal-500/50 px-8 py-6 text-lg transition-all duration-300 bg-transparent"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  Ver casos de sucesso
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-teal-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
