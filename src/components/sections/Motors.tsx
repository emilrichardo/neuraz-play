"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Gamepad2, Monitor, Cpu, Code } from "lucide-react"

const motors = [
  {
    icon: Gamepad2,
    title: "Gamificación & Loyalty 3.0",
    description: "Juegos personalizados con identidad de marca, interacciones en pantallas táctiles y experiencias desde QR. Rankings, desafíos, niveles y recompensas para convertir clientes en participantes activos.",
    color: "text-neon-green",
    borderColor: "hover:border-neon-green/50",
    shadow: "hover:shadow-[0_0_30px_rgba(0,255,157,0.2)]",
    link: "/servicios/gamificacion"
  },
  {
    icon: Monitor,
    title: "Hardware & Pantallas",
    description: "Alquiler de pantallas táctiles con software incluido. Menús gamificados, actualizaciones remotas y métricas en tiempo real. El cliente no se preocupa por nada: nosotros lo operamos todo.",
    color: "text-neon-cyan",
    borderColor: "hover:border-neon-cyan/50",
    shadow: "hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]",
    link: "/servicios/gamificacion" // Linking to gamification as it relates to hardware/screens for now
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial & Data",
    description: "Respuestas automáticas inteligentes, análisis de comportamiento y personalización en tiempo real. La IA decide qué premio dar y optimiza la experiencia continuamente.",
    color: "text-neon-violet",
    borderColor: "hover:border-neon-violet/50",
    shadow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.2)]",
    link: "/servicios/chatbots-ia"
  },
  {
    icon: Code,
    title: "Desarrollo Web & Apps",
    description: "Sitios web de alto impacto, aplicaciones móviles y plataformas a medida. Diseño UX/UI centrado en la conversión y tecnología de vanguardia.",
    color: "text-blue-400",
    borderColor: "hover:border-blue-400/50",
    shadow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]",
    link: "/servicios/desarrollo-web"
  }
]

import { usePersonalization } from "@/context/PersonalizationContext"

export function Motors() {
  const { content } = usePersonalization()

  return (
    <section id="servicios" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: content.motors.title }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
            dangerouslySetInnerHTML={{ __html: content.motors.description }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {motors.map((motor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={motor.link} className="block h-full">
                <Card className={`h-full bg-card-bg/20  transition-all duration-300 border-gray-200/20 ${motor.borderColor} ${motor.shadow} group relative overflow-hidden`}>
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${motor.color} group-hover:scale-110 transition-transform duration-300`}>
                      <motor.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl flex items-center justify-between">
                      {motor.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400">→</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-400">
                      {motor.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
