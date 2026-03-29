"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Instagram, ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const footerLinks = {
  solutions: [
    { label: "Sistemas Web", href: "#solucoes" },
    { label: "Automação", href: "#solucoes" },
    { label: "Integração de Sistemas", href: "#solucoes" },
    { label: "Suporte Contínuo", href: "#solucoes" },
  ],
  caseStudies: [
    { label: "Sistema de Pilates", href: "#casos" },
    { label: "Sistema Hoteleiro", href: "#casos" },
    { label: "Calcule sua Economia", href: "#calculadora" },
  ],
  company: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
    { label: "Diagnóstico Gratuito", href: "#contato" },
  ],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[100px]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <AnimatedSection animation="fade-up">
          <div className="py-12 sm:py-16 border-b border-slate-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
                  Pronto para economizar tempo?
                </h3>
                <p className="text-slate-400">
                  Solicite seu diagnóstico gratuito e descubra como podemos ajudar.
                </p>
              </div>
              <Link href="#contato">
                <Button 
                  size="lg" 
                  className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-6 text-lg font-semibold 
                    shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]
                    transition-all duration-300 group shrink-0"
                >
                  Começar agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <AnimatedSection animation="fade-up" className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="V&A Systems"
                width={44}
                height={44}
                className="rounded-xl w-10 h-10 sm:w-11 sm:h-11"
              />
              <span className="text-xl font-bold text-slate-100">
                V&A <span className="text-teal-400">Systems</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Sistemas que trabalham 24h por você. Ajudamos PMEs a automatizarem 
              processos e economizarem tempo com tecnologia de ponta.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:contato@vasystems.com.br" className="flex items-center gap-3 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="h-4 w-4" />
                contato@vasystems.com.br
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-800/80 hover:border-teal-500/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Solutions */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div>
              <h3 className="font-semibold text-slate-100 mb-4">Soluções</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Case Studies */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div>
              <h3 className="font-semibold text-slate-100 mb-4">Casos de Sucesso</h3>
              <ul className="space-y-3">
                {footerLinks.caseStudies.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Company */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div>
              <h3 className="font-semibold text-slate-100 mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            {new Date().getFullYear()} V&A Systems. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
