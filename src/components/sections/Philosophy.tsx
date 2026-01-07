"use client"

import { motion } from "framer-motion"
import { Brain, Zap } from "lucide-react"

export function Philosophy() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              El problema no es tu producto. <br />
              <span className="text-neon-violet drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]">Es la experiencia.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              La fidelización tradicional aburre. Tarjetas de cartón, puntos que nadie usa... eso es el pasado.
              Hoy, los clientes vuelven porque se divierten, porque compiten, porque sienten que ganan algo más que una compra.
            </p>
            <p className="text-gray-400 text-lg border-l-4 border-neon-green pl-4">
              "No pedimos fidelidad, la ganamos jugando."
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
            <div className="relative bg-card-bg/80 border border-card-border p-8 rounded-2xl backdrop-blur-md shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-neon-violet/10 rounded-lg text-neon-violet border border-neon-violet/20">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">IA que Potencia, no Reemplaza</h3>
                  <p className="text-gray-400">
                    Nuestra IA no elimina el trato humano. Lo hace escalable. Analiza datos en tiempo real para personalizar cada interacción, asegurando que cada cliente se sienta único.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan border border-neon-cyan/20">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automatización sin Fricción</h3>
                  <p className="text-gray-400">
                    Desde el saludo hasta la recompensa, todo fluye. Sin apps que descargar, sin registros eternos. Solo pura experiencia.
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
