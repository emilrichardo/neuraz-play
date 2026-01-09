"use client"

import { motion } from "framer-motion"
import { MonitorPlay, Gamepad2, Star, Gift, QrCode, Receipt, Trophy, Share2, Calendar, BarChart3 } from "lucide-react"

const strategies = [
  {
    icon: MonitorPlay,
    title: "1. Pantallas Táctiles Interactivas",
    features: [
      "Menús gamificados (elegís tu hamburguesa jugando)",
      "Juegos rápidos de espera",
      "Rankings en tiempo real",
      "Activaciones Happy Hour"
    ],
    benefit: "Ideal para aumentar permanencia y consumo."
  },
  {
    icon: Gamepad2,
    title: "2. Juegos Personalizados",
    features: [
      "Mini juegos temáticos (armar hamburguesa, trivia)",
      "Personajes y estética propia",
      "Premios virtuales canjeables",
      "Juegos cortos para jugar comiendo"
    ],
    benefit: "Refuerza identidad de marca + experiencia memorable."
  },
  {
    icon: Star,
    title: "3. Sistema de Puntos y Niveles",
    features: [
      "Puntos por consumo, juegos y visitas",
      "Niveles: Novato, Gamer, Pro, Legendario",
      "Beneficios exclusivos por nivel"
    ],
    benefit: "Convierte clientes ocasionales en recurrentes."
  },
  {
    icon: Gift,
    title: "4. Sorteos y Premios Automáticos",
    features: [
      "Sorteos diarios/semanales",
      "Participación por QR o consumo",
      "Premios: Hamburguesas, Merch, Combos"
    ],
    benefit: "Aumenta visitas repetidas y expectativa."
  },
  {
    icon: QrCode,
    title: "5. Participación vía QR",
    features: [
      "Escaneo desde mesa o caja",
      "Acceso inmediato sin apps",
      "Compatible con cualquier celular"
    ],
    benefit: "Cero fricción, ideal para todo público."
  },
  {
    icon: Receipt,
    title: "6. Gamificación del Ticket",
    features: [
      "Ticket desbloquea desafíos y puntos",
      "Tickets 'Dorados' aleatorios",
      "Juegos exclusivos post-compra"
    ],
    benefit: "Incentiva compras más grandes."
  },
  {
    icon: Trophy,
    title: "7. Rankings y Competencias",
    features: [
      "Ranking semanal de clientes",
      "Competencias por mesas",
      "Torneos en fechas clave"
    ],
    benefit: "Fomenta el juego social y la viralización."
  },
  {
    icon: Share2,
    title: "8. Integración Redes Sociales",
    features: [
      "Compartir logros automáticamente",
      "Premios por menciones",
      "Eventos online + presencial"
    ],
    benefit: "Marketing orgánico sin gastar en ads."
  },
  {
    icon: Calendar,
    title: "9. Eventos Gamificados",
    features: [
      "Noches temáticas (Retro, Esports)",
      "Torneos con inscripción QR",
      "Finales en pantalla gigante"
    ],
    benefit: "Aumenta tráfico en días flojos."
  },
  {
    icon: BarChart3,
    title: "10. Panel de Métricas",
    features: [
      "Clientes activos y retención",
      "Juegos más usados",
      "Impacto real en ventas"
    ],
    benefit: "Datos reales para decisiones comerciales."
  }
]

import { usePersonalization } from "@/context/PersonalizationContext"

export function Proposal() {
  const { content } = usePersonalization()

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-bold tracking-wider uppercase"
          >
            Propuestas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {content.proposal.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {content.proposal.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-6 p-6 rounded-xl border border-white/10 bg-card-bg/50 hover:border-yellow-500/50 hover:bg-card-bg/80 transition-all group"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {item.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-yellow-500 mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-medium text-yellow-500/80 border-t border-white/5 pt-3">
                  👉 {item.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
