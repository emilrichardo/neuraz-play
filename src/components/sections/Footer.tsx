"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Instagram, Linkedin, Twitter, Settings, Link as LinkIcon, Trash2, Check } from "lucide-react"
import { usePersonalization, RUBROS } from "@/context/PersonalizationContext"

export function Footer() {
  const { rubro, subrubro, empresa, enfoque, setRubro, setSubrubro, setEmpresa, setEnfoque, copyLink, clearPersonalization } = usePersonalization()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: ""
  })
  const [showPersonalization, setShowPersonalization] = useState(false)

  const selectedRubro = RUBROS.find(r => r.id === rubro)
  const selectedSubrubro = selectedRubro?.subrubros?.find(s => s.id === subrubro)

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
              {empresa ? `Hola ${empresa}, ` : "Tu competencia vende productos. "} <br />
              <span className="text-neon-green drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">
                {empresa ? "Juntos venderemos experiencias." : "Tú venderás experiencias."}
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-lg mb-8">
              {rubro
                ? `Soluciones específicas para ${selectedRubro?.label}${selectedSubrubro ? ` (${selectedSubrubro.label})` : ""}. Agenda una demo y descubre cómo Neuraz puede transformar tu negocio.`
                : "¿Listo para el siguiente nivel? Agenda una demo y descubre cómo Neuraz puede transformar tu negocio."
              }
            </p>

            <div className="flex gap-4 mb-8">
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-400">
                 📍 Santiago del Estero, Argentina
               </div>
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-400">
                 📧 contacto@neuraz.com
               </div>
            </div>

            {/* Personalization Controls */}
            <div className="border-t border-white/10 pt-8">
              <button
                onClick={() => setShowPersonalization(!showPersonalization)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-4"
              >
                <Settings className="w-4 h-4" />
                Personalizar Experiencia
              </button>

              {showPersonalization && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 max-w-md animate-in fade-in slide-in-from-top-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-2">
                       <label className="block text-xs text-gray-400 mb-2">Enfoque Principal</label>
                       <div className="flex bg-black/50 p-1 rounded-lg border border-white/10">
                         <button
                           onClick={() => setEnfoque("gamificacion")}
                           className={`flex-1 py-1.5 text-xs rounded-md transition-all ${enfoque === "gamificacion" ? "bg-neon-green text-black font-bold" : "text-gray-400 hover:text-white"}`}
                         >
                           Gamificación
                         </button>
                         <button
                           onClick={() => setEnfoque("fidelizacion")}
                           className={`flex-1 py-1.5 text-xs rounded-md transition-all ${enfoque === "fidelizacion" ? "bg-neon-cyan text-black font-bold" : "text-gray-400 hover:text-white"}`}
                         >
                           Fidelización
                         </button>
                       </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Rubro</label>
                      <select
                        value={rubro || ""}
                        onChange={(e) => setRubro(e.target.value ? Number(e.target.value) : null)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-green"
                      >
                        <option value="">Seleccionar...</option>
                        {RUBROS.map(r => (
                          <option key={r.id} value={r.id}>{r.label}</option>
                        ))}
                      </select>
                    </div>

                    {selectedRubro?.subrubros && (
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Subrubro</label>
                        <select
                          value={subrubro || ""}
                          onChange={(e) => setSubrubro(e.target.value ? Number(e.target.value) : null)}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-green"
                        >
                          <option value="">Seleccionar...</option>
                          {selectedRubro.subrubros.map(s => (
                            <option key={s.id} value={s.id}>{s.label}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div className={selectedRubro?.subrubros ? "col-span-1 sm:col-span-2" : ""}>
                      <label className="block text-xs text-gray-400 mb-1">Empresa</label>
                      <input
                        type="text"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        placeholder="Nombre empresa"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-green"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearPersonalization}
                      className="text-xs h-8 border-white/10 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Limpiar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyLink}
                      className="text-xs h-8 border-white/10 hover:bg-neon-green/10 hover:text-neon-green hover:border-neon-green/50"
                    >
                      <LinkIcon className="w-3 h-3 mr-1" />
                      Copiar Enlace
                    </Button>
                  </div>
                </div>
              )}
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

          <div className="text-gray-500 text-sm">
            © 2026 Neuraz. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
