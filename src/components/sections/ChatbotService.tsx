"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Bot, Brain, Network, Globe, TrendingUp, Sparkles, MessageSquare, Smartphone, QrCode, Monitor, Share2, ArrowRight } from "lucide-react"

import { usePersonalization } from "@/context/PersonalizationContext"

export function ChatbotService() {
  const { content } = usePersonalization()

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400 mb-4 backdrop-blur-sm"
          >
            <Bot className="w-4 h-4 mr-2" />
            Servicio Complementario
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {content.chatbot.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            {content.chatbot.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a href="/servicios/chatbots-ia">
              <Button variant="cyber" className="group">
                Explorar Soluciones de IA
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-colors group"
          >
            <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Chatbots que entienden</h3>
            <p className="text-gray-400 mb-4">
              No usamos respuestas rígidas. Nuestra IA entiende preguntas reales, responde con contexto y se adapta a cada cliente.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full" /> Conversación natural</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full" /> Derivación inteligente</li>
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm hover:border-neon-cyan/50 transition-colors group"
          >
            <div className="p-3 bg-neon-cyan/10 rounded-xl w-fit mb-6 group-hover:bg-neon-cyan/20 transition-colors">
              <Network className="w-8 h-8 text-neon-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Conectado al Negocio</h3>
            <p className="text-gray-400 mb-4">
              Integrados a todo el ecosistema Neuraz XP. Todo en tiempo real.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> Consultas de puntos y premios</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> Estado de juegos y rankings</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon-cyan rounded-full" /> Promociones personalizadas</li>
            </ul>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm hover:border-neon-violet/50 transition-colors group"
          >
            <div className="p-3 bg-neon-violet/10 rounded-xl w-fit mb-6 group-hover:bg-neon-violet/20 transition-colors">
              <Share2 className="w-8 h-8 text-neon-violet" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Multicanal sin esfuerzo</h3>
            <p className="text-gray-400 mb-4">
              Un solo sistema, múltiples canales. Implementamos automatización en:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2"><MessageSquare className="w-3 h-3" /> WhatsApp</div>
              <div className="flex items-center gap-2"><Globe className="w-3 h-3" /> Web</div>
              <div className="flex items-center gap-2"><QrCode className="w-3 h-3" /> QR</div>
              <div className="flex items-center gap-2"><Monitor className="w-3 h-3" /> Pantallas</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl flex items-center gap-6"
          >
            <div className="p-4 bg-green-500/10 rounded-full">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Menos carga operativa</h4>
              <p className="text-gray-400 text-sm">
                Reduce consultas repetitivas, mejora tiempos de respuesta y permite escalar sin aumentar costos. Tu equipo se enfoca en lo importante.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl flex items-center gap-6"
          >
            <div className="p-4 bg-purple-500/10 rounded-full">
              <Sparkles className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">IA que aprende</h4>
              <p className="text-gray-400 text-sm">
                Cada conversación genera datos. La IA analiza, mejora y optimiza respuestas automáticamente. Cuanto más se usa, mejor funciona.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-medium text-white max-w-4xl mx-auto leading-relaxed">
            "Automatizamos la atención para que la experiencia del cliente sea tan fluida como el juego."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
