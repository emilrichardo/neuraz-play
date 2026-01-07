"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

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
          <img src="/neuraz-logo.png" alt="Neuraz Logo" className="h-7 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#filosofia" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Filosofía</a>
          <a href="#servicios" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Servicios</a>
          <a href="#casos" className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors">Casos</a>
          <a href="#contacto">
            <Button variant="cyber" size="sm" className="h-9">
              Agenda Demo
            </Button>
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
