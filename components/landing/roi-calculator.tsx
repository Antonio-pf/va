"use client"

import { useState } from "react"
import { Calculator, Clock, DollarSign, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { AnimatedSection } from "./animated-section"
import Link from "next/link"

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState([15])
  const [hourlyRate, setHourlyRate] = useState([80])
  
  const hours = hoursPerWeek[0]
  const rate = hourlyRate[0]
  
  const weeklySavings = hours * 0.7
  const monthlySavings = weeklySavings * 4
  const yearlySavings = monthlySavings * 12
  const moneySavedMonthly = monthlySavings * rate
  const moneySavedYearly = yearlySavings * rate

  return (
    <section id="calculadora" className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.1),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-teal-400 font-medium mb-4 text-sm uppercase tracking-wider">
              Calculadora de ROI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 text-balance">
              Quanto <span className="text-teal-400">tempo e dinheiro</span> você pode economizar?
            </h2>
            <p className="text-slate-400 text-lg">
              Descubra o impacto real da automação no seu negócio.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Calculator Input - Left Column */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">Calcule sua economia</h3>
                  <p className="text-sm text-slate-500">Ajuste os valores conforme sua realidade</p>
                </div>
              </div>

              <div className="space-y-10">
                {/* Hours per week slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-medium text-slate-300">
                      Horas gastas com tarefas manuais por semana
                    </label>
                    <span className="text-2xl font-bold text-teal-400">{hours}h</span>
                  </div>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    min={0}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>0h</span>
                    <span>40h</span>
                  </div>
                </div>

                {/* Hourly Rate slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-medium text-slate-300">
                      Valor da sua hora de trabalho
                    </label>
                    <span className="text-2xl font-bold text-teal-400">R$ {rate}</span>
                  </div>
                  <Slider
                    value={hourlyRate}
                    onValueChange={setHourlyRate}
                    min={20}
                    max={200}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>R$ 20</span>
                    <span>R$ 200</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <p className="text-sm text-teal-400 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 flex-shrink-0" />
                    <span>Nossos sistemas reduzem em média <strong>70%</strong> das tarefas manuais</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Results - Right Column (Receipt Style) */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="space-y-4">
              {/* Time Saved Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                    <Clock className="h-7 w-7 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Tempo economizado por mês</p>
                    <p className="text-4xl sm:text-5xl font-bold text-slate-100">
                      {monthlySavings.toFixed(0)} <span className="text-2xl text-slate-400">horas</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-800">
                  <span className="text-slate-500">Por semana: {weeklySavings.toFixed(0)}h</span>
                  <span className="text-teal-400 font-medium">Por ano: {yearlySavings.toFixed(0)}h</span>
                </div>
              </div>

              {/* Money Saved Card - Highlighted */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/20 via-slate-900/60 to-slate-900/60 backdrop-blur-xl border border-teal-500/30 hover:border-teal-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Economia mensal estimada</p>
                    <p className="text-4xl sm:text-5xl font-bold text-teal-400">
                      R$ {moneySavedMonthly.toLocaleString("pt-BR")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pt-4 border-t border-teal-500/20">
                  <span className="text-slate-400">Economia anual</span>
                  <span className="text-teal-400 font-bold text-xl">
                    R$ {moneySavedYearly.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="#contato">
                <Button 
                  size="lg" 
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 py-7 text-lg font-semibold 
                    shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]
                    transition-all duration-300 group mt-2"
                >
                  Quero começar a economizar
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
