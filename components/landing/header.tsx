"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#casos", label: "Casos de Sucesso" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#sobre", label: "Sobre" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/logo.png"
              alt="V&A Systems"
              width={44}
              height={44}
              className="rounded-xl w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:scale-105 transition-transform"
            />
            <span className="text-lg sm:text-xl font-bold text-slate-200">
              V&A <span className="text-teal-400">Systems</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-teal-400 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - Glow Button */}
          <div className="hidden lg:flex items-center">
            <Link href="#contato" onClick={() => track("cta_click", { location: "header" })}>
              <Button 
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold 
                  shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]
                  transition-all duration-300 group animate-pulse-glow"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Diagnóstico Gratuito
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-16 md:top-20 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-16 md:top-20 transition-all duration-300 ease-out ${
          mobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl mx-4 rounded-2xl mt-2">
          <div className="p-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-slate-200 hover:text-teal-400 hover:bg-slate-800/50 transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-2">
              <Link href="#contato" onClick={() => { setMobileMenuOpen(false); track("cta_click", { location: "mobile_menu" }) }}>
                <Button 
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 py-6 text-base font-semibold 
                    shadow-[0_0_20px_rgba(45,212,191,0.3)] group"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Diagnóstico Gratuito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
