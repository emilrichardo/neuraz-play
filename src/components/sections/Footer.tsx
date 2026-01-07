"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = `Hola Neuraz! 👋\n\nMi nombre es *${formData.name}* de la empresa *${formData.company}*.\n\n📝 Mensaje: ${formData.message}`
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://web.whatsapp.com/send?phone=543855963036&text=${encodedText}`

    // Fallback for mobile if web.whatsapp.com doesn't work well
    const mobileWhatsappUrl = `https://wa.me/543855963036?text=${encodedText}`

    // Check if it's a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    window.open(isMobile ? mobileWhatsappUrl : whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <footer id="contacto" className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tu competencia vende productos. <br />
              <span className="text-neon-green drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">Tú venderás experiencias.</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-lg mb-8">
              ¿Listo para el siguiente nivel? Agenda una demo y descubre cómo Neuraz puede transformar tu negocio.
            </p>

            <div className="flex gap-4">
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-400">
                 📍 Santiago del Estero, Argentina
               </div>
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-400">
                 📧 contacto@neuraz.com
               </div>
            </div>
          </div>

          <div className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-full blur-[50px] pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-6">Agenda una demo estratégica</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder:text-gray-600"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Empresa"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder:text-gray-600"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿Qué desafío quieres resolver?"
                rows={4}
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors resize-none placeholder:text-gray-600"
              />
              <Button type="submit" variant="cyber" className="w-full h-14 text-lg">
                Solicitar Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/neuraz-logo.png" alt="Neuraz Logo" className="h-7 w-auto" />
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-neon-green transition-colors hover:scale-110 transform"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-neon-green transition-colors hover:scale-110 transform"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-neon-green transition-colors hover:scale-110 transform"><Twitter className="w-5 h-5" /></a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2026 Neuraz. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
