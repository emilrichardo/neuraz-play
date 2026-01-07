"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background z-10 pointer-events-none" />

      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-green/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-neon-green/30 bg-neon-green/10 px-3 py-1 text-sm text-neon-green mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-neon-green mr-2 animate-pulse" />
          Sistema Operativo de Experiencias
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl"
        >
          Convertimos clientes en <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">jugadores</span>.
          <br />
          Y jugadores en <span className="text-white">clientes fieles</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          Transformación digital experiencial. Fusionamos Gamificación, Inteligencia Artificial y Pantallas Interactivas para crear sistemas que venden solos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="cyber" size="lg" className="group">
            Gamificar mi negocio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="group border-white/20 text-white hover:bg-white/10 hover:text-white">
            <Play className="mr-2 h-4 w-4" />
            Ver demo en vivo
          </Button>
        </motion.div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-50 pointer-events-none">
        <div className="flex items-center gap-2 text-neon-green font-mono text-xs">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-ping" />
          SYSTEM: ONLINE
        </div>
        <div className="h-px w-32 bg-neon-green/50 mt-2" />
        <div className="text-[10px] text-neon-green/70 mt-1 font-mono">
          CPU: 34% // MEM: 12GB
        </div>
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden md:block opacity-30 pointer-events-none">
        <div className="flex flex-col gap-2">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="w-1 h-8 bg-neon-cyan/50 rounded-full" style={{ opacity: 0.2 * (i + 1) }} />
           ))}
        </div>
      </div>
    </section>
  )
}
