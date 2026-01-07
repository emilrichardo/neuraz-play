"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Sin Descargas",
    description: "Todo funciona vía WebApp o QR instantáneo. Nadie quiere bajar otra app."
  },
  {
    title: "Integración Total",
    description: "Se conecta con tu sistema de caja (POS), redes sociales y CRMs. Datos sincronizados."
  },
  {
    title: "Operación Neuraz",
    description: "Tú te encargas de tu negocio, nosotros de la experiencia. Soporte y operación 100% incluida."
  }
]

export function ZeroFriction() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cero Fricción. <br />
              <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">Tecnología Invisible.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              La mejor tecnología es la que no se siente. Eliminamos todas las barreras para que tus clientes entren al juego en segundos.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl border border-neon-cyan/30 bg-black/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group"
          >
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,243,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-pulse" />

             {/* QR Code Simulation */}
             <div className="w-48 h-48 border-4 border-neon-cyan rounded-xl relative flex items-center justify-center p-2">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-neon-cyan -mt-1 -ml-1" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-neon-cyan -mt-1 -mr-1" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-neon-cyan -mb-1 -ml-1" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-neon-cyan -mb-1 -mr-1" />

                <div className="w-full h-full bg-neon-cyan/10 grid grid-cols-6 gap-1">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className={`bg-neon-cyan/40 rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-20'}`} />
                  ))}
                </div>

                {/* Scan Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.8)] animate-[scan_2s_linear_infinite]" />
             </div>

             <div className="absolute bottom-8 text-neon-cyan font-mono text-sm tracking-widest animate-pulse">
               SCANNING...
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
