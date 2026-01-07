"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Share2, Activity } from "lucide-react"

const metrics = [
  {
    label: "Aumento del Ticket Promedio",
    value: "+35%",
    icon: TrendingUp,
    color: "text-neon-green"
  },
  {
    label: "Base de Datos Propia",
    value: "100%",
    icon: Users,
    color: "text-neon-cyan"
  },
  {
    label: "Viralización Orgánica",
    value: "High",
    icon: Share2,
    color: "text-neon-violet"
  }
]

export function Results() {
  return (
    <section className="py-24 bg-card-bg relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-xl border border-card-border bg-black/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-green/20 rounded-full blur-[50px] pointer-events-none" />

              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="text-sm font-mono text-gray-400">NEURAZ_DASHBOARD_V2.0</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">VENTAS HOY</div>
                  <div className="text-2xl font-bold text-neon-green">$12,450</div>
                  <div className="text-xs text-neon-green flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +15% vs ayer
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">JUGADORES ACTIVOS</div>
                  <div className="text-2xl font-bold text-neon-cyan">842</div>
                  <div className="text-xs text-neon-cyan flex items-center mt-1">
                    <Activity className="w-3 h-3 mr-1 animate-pulse" /> En tiempo real
                  </div>
                </div>
              </div>

              <div className="h-40 bg-white/5 rounded-lg border border-white/10 flex items-end p-4 gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_90%,rgba(255,255,255,0.05)_100%)] bg-[length:100%_20px]" />
                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-neon-violet/20 to-neon-violet rounded-t-sm hover:from-neon-violet/50 hover:to-neon-violet transition-colors"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Resultados que se ven. <br />
              <span className="text-neon-green drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">Métricas que importan.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              No vendemos humo. Vendemos datos. Nuestro panel de control te da el poder de tomar decisiones basadas en el comportamiento real de tus clientes.
            </p>

            <div className="grid gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-neon-green/30 transition-colors group">
                  <div className={`p-3 rounded-full bg-white/5 ${metric.color} group-hover:scale-110 transition-transform`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
