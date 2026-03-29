"use client"

import { Target, Lightbulb, Shield, Handshake, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"

const values = [
  {
    icon: Target,
    title: "Soluções sob medida",
    description: "Cada projeto é desenhado para resolver as dores específicas do seu negócio.",
  },
  {
    icon: Lightbulb,
    title: "Tecnologia de ponta",
    description: "As mesmas tecnologias das maiores empresas, adaptadas para PMEs.",
  },
  {
    icon: Shield,
    title: "Segurança em primeiro lugar",
    description: "Seus dados protegidos com as melhores práticas do mercado.",
  },
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    description: "Não sumimos após a entrega. Evoluímos junto com você.",
  },
]

const credentials = [
  "2+ sistemas em produção",
  "Clientes 100% satisfeitos",
  "Suporte humanizado",
  "Código limpo e escalável",
]

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(45,212,191,0.08),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="fade-right">
              <span className="inline-block text-teal-400 font-medium mb-4 text-sm uppercase tracking-wider">
                Por que a V&A Systems?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 text-balance">
                Construímos sistemas que{" "}
                <span className="text-teal-400">realmente funcionam</span> para PMEs
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Sabemos que pequenas e médias empresas não precisam de sistemas complexos 
                e caros. Precisam de ferramentas práticas, intuitivas e que resolvam 
                problemas reais do dia a dia.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                É exatamente isso que entregamos: <strong className="text-slate-200">sistemas simples por fora, 
                poderosos por dentro</strong>.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    <span className="text-sm text-slate-200">{credential}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="group p-5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-teal-500/30 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all">
                      <value.icon className="h-5 w-5 text-teal-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Visual */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 sm:p-10">
                {/* Logo Display */}
                <div className="flex items-center justify-center py-8 sm:py-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-500/30 blur-[60px] rounded-full scale-150" />
                    <Image
                      src="/logo.png"
                      alt="V&A Systems"
                      width={200}
                      height={200}
                      className="relative z-10 rounded-2xl w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-contain"
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">V&A Systems</h3>
                  <p className="text-teal-400">Tecnologia que simplifica</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/30 transition-colors">
                    <span className="block text-3xl sm:text-4xl font-bold text-teal-400 mb-1">2+</span>
                    <span className="text-sm text-slate-400">Sistemas Ativos</span>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/30 transition-colors">
                    <span className="block text-3xl sm:text-4xl font-bold text-teal-400 mb-1">100%</span>
                    <span className="text-sm text-slate-400">Satisfação</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20">
                    <Award className="h-4 w-4 text-teal-400" />
                    <span className="text-sm text-teal-400 font-medium">Especialistas em PMEs</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400/15 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
