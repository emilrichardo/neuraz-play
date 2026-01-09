"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

import { usePersonalization } from "@/context/PersonalizationContext"

export function Hero() {
  const { content } = usePersonalization()

  return (
    <section className=" min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background Image */}
      <div className="absolute h-1/2 md:h-full inset-0 z-0 ">
        <Image
          src="/images/hero-bg.png"
          alt="Neuraz Play Hero Background"
          fill
          className="object-cover object-right w-screen h-full   "
          priority
        />

      </div>

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-neon-green/30 bg-neon-green/10 px-3 py-1 text-sm text-neon-green mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-neon-green mr-2 animate-pulse" />
          {content.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 max-w-3xl"
        >
          {content.hero.title}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">
            {content.hero.subtitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contacto">
          <Button variant="cyber" size="lg" className="group">
            {content.hero.cta || "Gamificar mi negocio"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          </a>
        </motion.div>
      </div>

      {/* HUD Elements - Adjusted for left alignment */}
      <div className="absolute bottom-10 right-10 hidden md:block opacity-50 pointer-events-none z-20">
        <div className="flex items-center gap-2 text-neon-green font-mono text-xs justify-end">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-ping" />
          SYSTEM: ONLINE
        </div>
        <div className="h-px w-32 bg-neon-green/50 mt-2 ml-auto" />
        <div className="text-[10px] text-neon-green/70 mt-1 font-mono text-right">
          CPU: 34% // MEM: 12GB
        </div>
      </div>
    </section>
  )
}
