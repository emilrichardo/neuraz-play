"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ZeroFriction() {
  return (
    <section id="zero-friction" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cero Fricción.
              <br />
              <span className="text-neon-gradient">Tecnología Invisible.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              La mejor tecnología es la que no se siente. Eliminamos todas las barreras para que tus clientes entren al juego en segundos.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sin Descargas</h3>
                  <p className="text-gray-400">Todo funciona vía WebApp o QR instantáneo. Nadie quiere bajar otra app.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Integración Total</h3>
                  <p className="text-gray-400">Conectamos con POS, Redes Sociales, WhatsApp, Bases de datos y CRMs. Todo sincronizado vía API.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Operación Neuraz</h3>
                  <p className="text-gray-400">Tú te encargas de tu negocio, nosotros de la experiencia. Soporte, operación y actualizaciones incluidas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-card-border bg-card-bg/50 p-8 h-[500px] flex items-center justify-center overflow-hidden group">
              {/* Grid Background Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

              {/* Scanning Element */}
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="relative w-48 h-48 border-2 border-neon-cyan rounded-lg p-2 shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                  <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-neon-cyan/20 rounded-sm"
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                          backgroundColor: ["rgba(0,243,255,0.2)", "rgba(0,243,255,0.6)", "rgba(0,243,255,0.2)"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  {/* Scan Line */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-neon-cyan shadow-[0_0_20px_#00f3ff]"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="font-mono text-neon-cyan tracking-[0.2em] text-sm animate-pulse">
                  SCANNING...
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
