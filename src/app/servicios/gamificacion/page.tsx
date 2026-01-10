"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Trophy, Target, Gamepad2, Users, Star, Crown } from "lucide-react"
import Image from "next/image"
import { Motors } from "@/components/sections/Motors"

export default function GamificationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gamification-hero.png"
            alt="Gamification Hero"
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
            <div className="inline-flex items-center rounded-full border border-neon-green/30 bg-neon-green/10 px-3 py-1 text-sm text-neon-green mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-neon-green mr-2 animate-pulse" />
              ENGAGEMENT NIVEL DIOS
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Convierte Usuarios en <br />
              <span className="text-neon-violet drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">Jugadores Leales</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Aplicamos mecánicas de juego en entornos de negocio para disparar la retención,
              la participación y las ventas. Haz que tu marca sea adictiva.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cyber" size="lg" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black">
                Empezar a Jugar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Ver Mecánicas
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
              Motores de <span className="text-neon-cyan">Juego</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sistemas probados psicológicamente para motivar comportamientos.
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
                className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-neon-green/50"
              >
                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10 group-hover:border-neon-green/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
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

      {/* Stats/Impact Section */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-neon-green mb-2">+300%</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Retención de Usuarios</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-neon-cyan mb-2">5x</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Interacción Diaria</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-neon-violet mb-2">+40%</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Ticket Promedio</div>
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
    title: "Programas de Lealtad",
    description: "Sistemas de puntos, niveles y recompensas que hacen que los clientes vuelvan una y otra vez.",
    icon: <Crown className="w-8 h-8 text-neon-violet" />,
  },
  {
    title: "Juegos Promocionales",
    description: "Ruletas, Raspaditas y Memory Games digitales para campañas de marketing viral.",
    icon: <Gamepad2 className="w-8 h-8 text-neon-cyan" />,
  },
  {
    title: "Rankings y Competencias",
    description: "Tablas de líderes en tiempo real para motivar a equipos de ventas o comunidades de usuarios.",
    icon: <Trophy className="w-8 h-8 text-neon-green" />,
  },
]
