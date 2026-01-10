"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Laptop, Rocket, Zap } from "lucide-react"
import Image from "next/image"
import { Motors } from "@/components/sections/Motors"

export default function WebDevPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/web-dev-hero.png"
            alt="Web Development Hero"
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
            <div className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-neon-cyan mr-2 animate-pulse" />
              DESARROLLO WEB NEXT-GEN
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Construimos el <span className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,157,0.5)]">Futuro Digital</span> <br />
              de tu Negocio
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Desarrollamos experiencias web inmersivas, veloces y escalables.
              No solo escribimos código, arquitecturamos soluciones digitales que
              transforman visitantes en clientes leales.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cyber" size="lg">
                Iniciar Proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Ver Portafolio
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
              Nuestras <span className="text-neon-violet">Capacidades</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dominamos el stack tecnológico moderno para entregar resultados excepcionales.
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
                className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-neon-cyan/50"
              >
                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
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

      {/* Tech Stack Marquee or Grid */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="container px-4 md:px-6 text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-500 uppercase tracking-widest">
            Powered by Modern Tech
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for tech logos - using text for now */}
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Supabase', 'PostgreSQL', 'Framer Motion'].map((tech) => (
              <span key={tech} className="text-xl md:text-2xl font-bold text-white/80 hover:text-neon-green transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process/Approach */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Más allá del <span className="text-neon-green">Código</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Zap className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance Obsessed</h3>
                    <p className="text-gray-400">
                      Optimizamos cada byte. Tiempos de carga instantáneos y Core Web Vitals en verde para mejor SEO y retención.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Laptop className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mobile First & Responsive</h3>
                    <p className="text-gray-400">
                      Diseñamos pensando en pantallas pequeñas primero, asegurando una experiencia fluida en cualquier dispositivo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Rocket className="w-6 h-6 text-neon-violet" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scalable Architecture</h3>
                    <p className="text-gray-400">
                      Construimos bases sólidas que crecen con tu negocio. Sin deuda técnica, listos para escalar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-neon-green/20 blur-3xl rounded-full opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm">
                <pre className="text-sm md:text-base text-neon-cyan font-mono overflow-x-auto">
                  <code>{`
// The Neuraz Standard
const webProject = {
  performance: "100/100",
  accessibility: "A11y Compliant",
  security: "Enterprise Grade",
  design: "Award Winning",

  deploy: () => {
    return "Market Dominance";
  }
};
                  `}</code>
                </pre>
              </div>
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
    title: "Frontend Development",
    description: "Interfaces reactivas y dinámicas con React y Next.js. Animaciones fluidas que cautivan a tus usuarios.",
    icon: <Code className="w-8 h-8 text-neon-cyan" />,
  },
  {
    title: "Backend & API",
    description: "Sistemas robustos y seguros. Arquitecturas serverless y microservicios que procesan datos a la velocidad de la luz.",
    icon: <Database className="w-8 h-8 text-neon-green" />,
  },
  {
    title: "E-Commerce",
    description: "Tiendas online de alto rendimiento. Integraciones de pago, carritos abandonados y optimización de conversión.",
    icon: <Globe className="w-8 h-8 text-neon-violet" />,
  },
]
