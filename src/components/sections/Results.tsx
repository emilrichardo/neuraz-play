"use client"

import { motion } from "framer-motion"

export function Results() {
  return (
    <section id="resultados" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-neon-green">Resultados</span> y Métricas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Medimos el impacto de cada interacción para garantizar el retorno de inversión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-card-border text-center">
                <h3 className="text-4xl font-bold text-white mb-2">+40%</h3>
                <p className="text-gray-400">Conversión</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-card-border text-center">
                <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-400">Disponibilidad</p>
            </div>
             <div className="p-6 rounded-2xl bg-card border border-card-border text-center">
                <h3 className="text-4xl font-bold text-white mb-2">0.1s</h3>
                <p className="text-gray-400">Latencia</p>
            </div>
        </div>
      </div>
    </section>
  )
}
