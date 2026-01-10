"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

import { usePersonalization } from "@/context/PersonalizationContext"

export function ServiceShowcase() {
  const { content } = usePersonalization()

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {content.serviceShowcase.title} <br />
              <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">Cobran Vida</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {content.serviceShowcase.description}
            </p>

            <div className="mb-8">
              <a href="/servicios/desarrollo-web">
                <Button variant="cyber" className="group">
                  Ver Soluciones Web
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                <div className="text-2xl font-bold text-neon-green mb-1">Multi-Device</div>
                <div className="text-sm text-gray-500">Sincronización total entre pantallas y móviles.</div>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                <div className="text-2xl font-bold text-neon-violet mb-1">Real-Time</div>
                <div className="text-sm text-gray-500">Interacciones instantáneas sin fricción.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-neon-cyan/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/service-showcase.jpg"
                alt="Neuraz Service Experience"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-neon-cyan tracking-widest uppercase">Live Interface Demo</div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse delay-75" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse delay-150" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
