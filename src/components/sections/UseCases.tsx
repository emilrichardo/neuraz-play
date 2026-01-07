"use client"

import { motion } from "framer-motion"
import { Utensils, ShoppingBag, Ticket } from "lucide-react"

const cases = [
  {
    title: "Caso Gastronomía",
    subtitle: "El Menú es el Juego",
    description: "Hamburgueserías y bares que aumentan el ticket promedio usando 'Tickets Dorados' aleatorios y rankings de mesas.",
    icon: Utensils,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Caso Retail",
    subtitle: "Compras que suben de Nivel",
    description: "Probadores inteligentes y QRs que desbloquean descuentos al escanear productos. La tienda se convierte en un mapa del tesoro.",
    icon: ShoppingBag,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Caso Eventos",
    subtitle: "Viralización en Tiempo Real",
    description: "Torneos rápidos en pantallas gigantes para captar bases de datos masivas. La marca es el centro de la fiesta.",
    icon: Ticket,
    gradient: "from-pink-500/20 to-rose-500/20"
  }
]

export function UseCases() {
  return (
    <section id="casos" className="py-24 bg-black/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Adaptabilidad Total
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Transformamos cualquier industria
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-bg hover:border-neon-green/50 transition-colors"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} blur-xl`} />

              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-neon-green/20 group-hover:text-neon-green transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <h4 className="text-neon-green font-mono text-sm mb-4 uppercase tracking-wider">{item.subtitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
