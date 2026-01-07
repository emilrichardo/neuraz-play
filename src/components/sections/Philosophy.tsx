"use client"

import { motion } from "framer-motion"
import { Brain, Zap } from "lucide-react"

export function Philosophy() {
  return (
    <section id="filosofia" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">

              <span className="text-neon-violet drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]">Construimos experiencias</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              En Neuraz diseñamos y desarrollamos sistemas digitales a medida que combinan tecnología, automatización, gamificación e inteligencia artificial para transformar la forma en que las marcas interactúan con sus clientes.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-white">Creamos plataformas inteligentes capaces de:</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Interactuar con personas</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Tomar decisiones automáticas</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Responder en tiempo real</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Integrarse con cualquier sistema existente</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Escalar y adaptarse a cada negocio</li>
              </ul>
            </div>

            <p className="text-gray-400 text-lg border-l-4 border-neon-green pl-4 italic">
              "Si se puede imaginar, lo podemos desarrollar."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neon-violet/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative bg-card-bg/80 border border-card-border p-8 rounded-2xl backdrop-blur-md shadow-2xl space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-violet/10 rounded-lg text-neon-violet border border-neon-violet/20">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">IA Integrada</h3>
                  <p className="text-gray-400">
                    La IA no es un extra: es parte del sistema. Análisis de comportamiento, personalización en tiempo real y toma de decisiones automática.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan border border-neon-cyan/20">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automatización Total</h3>
                  <p className="text-gray-400">
                    Flujos automáticos de ventas, atención y fidelización. Respuestas inteligentes vía chatbots y asistentes virtuales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
