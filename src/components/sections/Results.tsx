"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Share2, Activity } from "lucide-react"

export function Results() {
  return (
    <section id="resultados" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Visualization (Dashboard) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl border border-card-border bg-card-bg p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 border-b border-card-border pb-4">
                <div className="font-mono text-xs text-gray-500">NEURAZ_DASHBOARD_V2.0</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-400 mb-1">VENTAS HOY</div>
                  <div className="text-2xl font-bold text-neon-green">$12,450</div>
                  <div className="text-xs text-neon-green flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +15% vs ayer
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-400 mb-1">JUGADORES ACTIVOS</div>
                  <div className="text-2xl font-bold text-neon-cyan">842</div>
                  <div className="text-xs text-neon-cyan flex items-center gap-1 mt-1">
                    <Activity className="w-3 h-3" /> En tiempo real
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-48 flex items-end justify-between gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-full bg-gradient-to-t from-neon-violet/20 to-neon-violet rounded-t-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Resultados que se ven.
              <br />
              <span className="text-neon-gradient">Métricas que importan.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              No vendemos humo. Vendemos datos. Nuestro panel de control te da el poder de tomar decisiones basadas en el comportamiento real de tus clientes.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-neon-green/10 text-neon-green">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">+35%</div>
                  <div className="text-sm text-gray-400">Aumento del Ticket Promedio</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Base de Datos Propia</div>
                </div>
              </div>

               <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-neon-violet/10 text-neon-violet">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">High</div>
                  <div className="text-sm text-gray-400">Viralización Orgánica</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
