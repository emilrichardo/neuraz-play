"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 border-white/10 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md   border-b py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo reduced by ~30% from h-10 to h-7 */}
          <a href="/" className="block">
            <img src="/neuraz-logo.png" alt="Neuraz Logo" className="h-7 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#filosofia" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Filosofía</a>
          <a href="/#servicios" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Servicios</a>
          <a href="/#casos" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Casos</a>
          <a href="/#about-us" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Nosotros</a>
          <a href="/#contacto">
            <Button variant="cyber" size="sm" className="h-9">
              Agenda Demo
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 md:hidden flex flex-col gap-6 shadow-2xl"
        >
          <nav className="flex flex-col gap-6 items-center">
            <a href="/#filosofia" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Filosofía</a>
            <a href="/#servicios" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Servicios</a>
            <a href="/#casos" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Casos</a>
            <a href="/#about-us" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Nosotros</a>
            <a href="/#contacto" onClick={toggleMenu}>
              <Button variant="cyber" size="lg" className="w-full">
                Agenda Demo
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
