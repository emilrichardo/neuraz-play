"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const services = [
    { title: "Desarrollo Web", href: "/servicios/desarrollo-web" },
    { title: "Chatbots & IA", href: "/servicios/chatbots-ia" },
    { title: "Gamificación", href: "/servicios/gamificacion" },
  ]

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
          <Link href="/" className="block">
            <img src="/neuraz-logo.png" alt="Neuraz Logo" className="h-7 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-neon-green transition-colors py-2">
              Servicios
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56"
                >
                  <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#casos" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Casos</Link>
          <Link href="/proyectos" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Proyectos</Link>
          <Link href="/#about-us" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Nosotros</Link>
          <Link href="/#contacto">
            <Button variant="cyber" size="sm" className="h-9">
              Agenda Demo
            </Button>
          </Link>
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
          className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 md:hidden flex flex-col gap-6 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto"
        >
          <nav className="flex flex-col gap-6 items-center">
            <div className="w-full flex flex-col items-center gap-4">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Servicios</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={toggleMenu}
                  className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="w-full h-px bg-white/10 my-2" />

            <Link href="/#casos" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Casos</Link>
            <Link href="/proyectos" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Proyectos</Link>
            <Link href="/#about-us" onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-neon-green transition-colors">Nosotros</Link>
            <Link href="/#contacto" onClick={toggleMenu}>
              <Button variant="cyber" size="lg" className="w-full">
                Agenda Demo
              </Button>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
