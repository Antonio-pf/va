"use client"

import { useState } from "react"
import { Send, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "./animated-section"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário")
      }

      setSubmitted(true)
    } catch (err) {
      setError("Ocorreu um erro ao enviar. Tente novamente.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contato" className="py-24 md:py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.15),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-right">
              <span className="inline-block text-teal-400 font-medium mb-4 text-sm uppercase tracking-wider">
                Comece agora
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 text-balance">
                Descubra onde sua empresa está{" "}
                <span className="text-teal-400">perdendo tempo</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Receba um diagnóstico gratuito e personalizado do seu negócio. 
                Vamos identificar os processos que podem ser automatizados e 
                quanto você pode economizar.
              </p>

              {/* Trust Signals */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300">Diagnóstico 100% gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300">Sem compromisso de contratação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300">Resposta em até 24 horas</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Floating Form Card */}
            <AnimatedSection animation="fade-left" delay={100}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/30 to-transparent rounded-3xl blur-xl opacity-50" />
                
                <div className="relative p-8 sm:p-10 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                  {!submitted ? (
                    <>
                      <h3 className="text-xl font-semibold text-slate-100 mb-2">Solicite seu diagnóstico</h3>
                      <p className="text-sm text-slate-400 mb-6">
                        Preencha abaixo e entraremos em contato.
                      </p>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            Seu nome
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Como podemos te chamar?"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 h-12 focus:border-teal-500 focus:ring-teal-500/20"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Seu melhor email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@empresa.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 h-12 focus:border-teal-500 focus:ring-teal-500/20"
                            required
                          />
                        </div>

                        {error && (
                          <p className="text-red-400 text-sm text-center">{error}</p>
                        )}

                        <Button 
                          type="submit" 
                          size="lg" 
                          disabled={isLoading}
                          className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 py-6 text-lg font-semibold 
                            shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]
                            transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isLoading ? "Enviando..." : "Quero meu diagnóstico gratuito"}
                          {!isLoading && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                        </Button>
                      </form>

                      <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-2">
                        <Shield className="h-3.5 w-3.5" />
                        Não enviamos spam. Seus dados estão seguros.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-teal-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-3">Recebemos seu pedido!</h3>
                      <p className="text-slate-400">
                        Vamos analisar e entrar em contato em até 24 horas.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
