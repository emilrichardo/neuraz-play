"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Brain, Zap } from "lucide-react"

import { usePersonalization } from "@/context/PersonalizationContext"

export function Philosophy() {
  const { content } = usePersonalization()

  return (
    <section id="filosofia" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span
                className="text-neon-violet drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                dangerouslySetInnerHTML={{ __html: content.philosophy.title }}
              />
            </h2>
            <p
              className="text-gray-400 text-lg mb-6"
              dangerouslySetInnerHTML={{ __html: content.philosophy.description }}
            />

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-white">Creamos plataformas inteligentes capaces de:</h3>
              <ul className="space-y-2 text-gray-400">
                {content.philosophy.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neon-violet/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative overflow-hidden h-full rounded-2xl border border-card-border shadow-2xl group">
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={content.philosophy.image || "/images/philosophy-experience.jpg"}
                  alt="Experiencia Neuraz"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              <div className="relative z-10 p-8 pt-42 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-violet/20 rounded-lg text-neon-violet border border-neon-violet/30 backdrop-blur-sm">
                    <Brain className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">IA Integrada</h3>
                    <p className="text-gray-300 text-sm leading-relaxed drop-shadow-sm">
                      La IA no es un extra: es parte del sistema. Análisis de comportamiento, personalización en tiempo real y toma de decisiones automática.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-cyan/20 rounded-lg text-neon-cyan border border-neon-cyan/30 backdrop-blur-sm">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Automatización Total</h3>
                    <p className="text-gray-300 text-sm leading-relaxed drop-shadow-sm">
                      Flujos automáticos de ventas, atención y fidelización. Respuestas inteligentes vía chatbots y asistentes virtuales.
                    </p>
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
