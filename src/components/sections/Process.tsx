"use client"

import { motion } from "framer-motion"
import { Ear, PenTool, Code2, Bot, Network, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Ear,
    title: "Escuchamos",
    description: "Entendemos tu idea y objetivos."
  },
  {
    icon: PenTool,
    title: "Diseñamos",
    description: "Creamos la experiencia visual y lógica."
  },
  {
    icon: Code2,
    title: "Desarrollamos",
    description: "Construimos el sistema a medida."
  },
  {
    icon: Bot,
    title: "Automatizamos",
    description: "Implementamos flujos inteligentes."
  },
  {
    icon: Network,
    title: "Integramos",
    description: "Conectamos IA y sistemas externos."
  },
  {
    icon: BarChart3,
    title: "Medimos",
    description: "Optimizamos con datos reales."
  }
]

export function Process() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent -translate-y-1/2 hidden md:block" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            De la idea a la realidad en 6 pasos
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center mb-4 text-neon-green group-hover:scale-110 group-hover:border-neon-green/50 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)] transition-all duration-300 z-10 relative">
                <step.icon className="w-8 h-8" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon-violet flex items-center justify-center text-xs font-bold text-white border border-black">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
