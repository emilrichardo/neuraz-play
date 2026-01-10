"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Brain, MessageSquare, Share2, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import { Motors } from "@/components/sections/Motors"

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-violet selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/chatbot-hero.png"
            alt="Chatbot & AI Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full border border-neon-violet/30 bg-neon-violet/10 px-3 py-1 text-sm text-neon-violet mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-neon-violet mr-2 animate-pulse" />
              INTELIGENCIA ARTIFICIAL APLICADA
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Automatización que <br />
              <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">Entiende y Responde</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Transformamos la atención al cliente con Agentes de IA que conversan,
              aprenden y resuelven. Disponibilidad 24/7 sin perder el toque humano.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cyber" size="lg" className="border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white">
                Ver Demo en Vivo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Casos de Éxito
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Poder <span className="text-neon-green">Conversacional</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Más que chatbots, creamos asistentes virtuales integrados a tu negocio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-neon-violet/50"
              >
                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10 group-hover:border-neon-violet/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-violet transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-neon-violet/20 blur-3xl rounded-full opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                      Hola, quiero saber el estado de mi pedido #12345.
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-neon-violet flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-neon-violet/20 border border-neon-violet/30 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%]">
                      ¡Hola! Tu pedido #12345 está en camino 🚚. Llegará mañana antes de las 18:00hs. ¿Necesitas algo más?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Integración <span className="text-neon-cyan">Total</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Nuestros agentes no viven aislados. Se conectan con tu CRM, ERP y bases de datos para dar respuestas precisas en tiempo real.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <Share2 className="w-5 h-5 text-neon-green" />
                  <span>Omnicanal: WhatsApp, Web, Instagram, Facebook.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Brain className="w-5 h-5 text-neon-violet" />
                  <span>Aprendizaje continuo basado en interacciones reales.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Zap className="w-5 h-5 text-neon-cyan" />
                  <span>Setup rápido y sin fricción técnica.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Motors />
      <Footer />
    </main>
  )
}

const services = [
  {
    title: "WhatsApp Business API",
    description: "Automatiza ventas y soporte en el canal más usado del mundo. Catálogos, pagos y notificaciones proactivas.",
    icon: <MessageSquare className="w-8 h-8 text-neon-green" />,
  },
  {
    title: "Agentes RAG",
    description: "IA que lee tus documentos y manuales para responder preguntas técnicas con precisión absoluta.",
    icon: <Brain className="w-8 h-8 text-neon-violet" />,
  },
  {
    title: "Lead Scoring",
    description: "Califica prospectos automáticamente mientras conversan y deriva solo los mejores a tu equipo de ventas.",
    icon: <Sparkles className="w-8 h-8 text-neon-cyan" />,
  },
]
