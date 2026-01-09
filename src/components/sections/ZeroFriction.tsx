"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ZeroFriction() {
  return (
    <section id="zero-friction" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-neon-green">Zero Friction</span> Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Eliminamos las barreras entre tu negocio y tus clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-neon-green mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Onboarding Instantáneo</h3>
                        <p className="text-gray-400">Sin formularios largos ni esperas. Tus clientes empiezan en segundos.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-neon-green mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Integración Perfecta</h3>
                        <p className="text-gray-400">Se conecta con tus herramientas actuales sin interrumpir tu flujo de trabajo.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-neon-green mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Soporte Automatizado</h3>
                        <p className="text-gray-400">Respuestas inmediatas a las dudas más comunes, 24/7.</p>
                    </div>
                </div>
            </div>
             <div className="relative h-[400px] rounded-2xl bg-card border border-card-border overflow-hidden flex items-center justify-center">
                <p className="text-gray-500">Visualización de Flujo Sin Fricción</p>
            </div>
        </div>
      </div>
    </section>
  )
}
