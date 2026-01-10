"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Laptop, Rocket, Zap, CheckCircle2, Clock, ShieldCheck, HelpCircle, ChevronDown, BarChart3, Users, Target } from "lucide-react"
import Image from "next/image"
import { Motors } from "@/components/sections/Motors"
import { LatestProjects } from "@/components/sections/LatestProjects"
import Link from "next/link"
import { BehanceProject } from "@/lib/behance"
import { useState } from "react"

interface WebDevContentProps {
  latestProjects: BehanceProject[]
}

export function WebDevContent({ latestProjects }: WebDevContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-background/90 to-background z-10" />
          <div className="absolute top-0 right-0 w-3/4 h-full bg-neon-cyan/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-3/4 h-full bg-neon-green/5 blur-[120px] rounded-full" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-neon-cyan mr-2 animate-pulse" />
                SOLUCIONES EMPRESARIALES
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Tu Negocio Merece <br />
                <span className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,157,0.5)]">Dominar su Mercado</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                En un mundo digital saturado, tener una web no es suficiente. Construimos herramientas de venta 24/7 que automatizan procesos, captan clientes y posicionan tu marca como líder indiscutible.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/#contacto">
                  <Button variant="cyber" size="lg">
                    Agendar Consultoría
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/proyectos">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    Ver Casos de Éxito
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-cyan/20">
                <Image
                  src="/web-dev-hero-v2.png"
                  alt="Futuristic Web Development Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-green/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Benefits Grid */}
      <section className="py-24 relative bg-white/5 border-y border-white/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Por Qué <span className="text-neon-violet">Elegirnos?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              No somos freelancers, somos tu socio tecnológico estratégico.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-neon-green/50 transition-all duration-300"
              >
                <div className="mb-6 p-4 rounded-full bg-neon-green/10 w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Soluciones <span className="text-neon-cyan">Integrales</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Cubrimos todo el espectro digital para que tú solo te preocupes por crecer.
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

      {/* Process Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neon-violet/5 to-black" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro <span className="text-neon-violet">Proceso</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Metodología ágil y transparente. Sin sorpresas, solo resultados.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-green hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:w-auto p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.5)] z-10 hidden md:block" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <LatestProjects projects={latestProjects} />

      {/* Tech Stack Marquee or Grid */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="container px-4 md:px-6 text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-500 uppercase tracking-widest">
            Tecnología de Vanguardia
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
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
                    <h3 className="text-xl font-bold mb-2">Velocidad que Vende</h3>
                    <p className="text-gray-400">
                      Sitios ultra-rápidos que retienen a los usuarios. Cada segundo cuenta para la conversión.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Laptop className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diseño que Impacta</h3>
                    <p className="text-gray-400">
                      Estética moderna y funcional. Creamos interfaces que tus clientes querrán usar una y otra vez.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Rocket className="w-6 h-6 text-neon-violet" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Crecimiento Escalable</h3>
                    <p className="text-gray-400">
                      Tu negocio crece, tu web también. Infraestructura sólida lista para recibir miles de visitas.
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

      {/* FAQ Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-neon-green">Frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-xl overflow-hidden bg-black/40"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180 text-neon-green" : "text-gray-400"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-green/5" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ¿Listo para <span className="text-neon-green">Escalar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Deja de perder clientes con una web obsoleta. Hablemos hoy mismo sobre cómo transformar tu presencia digital.
          </p>
          <Link href="/#contacto">
            <Button variant="cyber" size="lg" className="text-lg px-8 py-6">
              Iniciar Transformación
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      <Motors />
      <Footer />
    </main>
  )
}

const benefits = [
  {
    title: "ROI Garantizado",
    description: "No diseñamos por diseñar. Cada píxel está pensado para convertir visitas en ventas. Enfocamos el desarrollo en tus KPIs de negocio.",
    icon: <BarChart3 className="w-8 h-8 text-neon-green" />,
  },
  {
    title: "Velocidad Extrema",
    description: "El 53% de los usuarios abandona si la web tarda más de 3s. Nuestras webs cargan en milisegundos, mejorando tu SEO y retención.",
    icon: <Zap className="w-8 h-8 text-neon-cyan" />,
  },
  {
    title: "Soporte Premium",
    description: "No te dejamos solo tras el lanzamiento. Ofrecemos mantenimiento, actualizaciones y consultoría continua para asegurar tu éxito.",
    icon: <ShieldCheck className="w-8 h-8 text-neon-violet" />,
  },
]

const services = [
  {
    title: "Webs Corporativas",
    description: "Transmite autoridad y confianza. Diseños premium que reflejan la calidad de tu empresa y atraen a clientes de alto valor.",
    icon: <Laptop className="w-8 h-8 text-neon-cyan" />,
  },
  {
    title: "E-Commerce Avanzado",
    description: "Tiendas que venden solas. Integración de pagos, gestión de stock y embudos de venta optimizados para maximizar el ticket medio.",
    icon: <Globe className="w-8 h-8 text-neon-green" />,
  },
  {
    title: "Landing Pages de Alta Conversión",
    description: "Páginas específicas para campañas de marketing. Optimizadas para captar leads y ventas directas con tasas de conversión superiores.",
    icon: <Target className="w-8 h-8 text-neon-violet" />,
  },
]

const processSteps = [
  {
    title: "Descubrimiento & Estrategia",
    description: "Analizamos tu negocio, competencia y objetivos. Definimos la arquitectura y la estrategia digital para garantizar el éxito.",
  },
  {
    title: "Diseño UX/UI",
    description: "Creamos prototipos interactivos. Diseñamos una experiencia visual impactante alineada con tu identidad de marca.",
  },
  {
    title: "Desarrollo & Optimización",
    description: "Codificamos con las últimas tecnologías (Next.js, React). Optimizamos velocidad, SEO y seguridad al máximo nivel.",
  },
  {
    title: "Lanzamiento & Crecimiento",
    description: "Desplegamos tu web en servidores de alto rendimiento. Te capacitamos y seguimos optimizando base a datos reales.",
  },
]

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el desarrollo?",
    answer: "Depende de la complejidad. Una Landing Page puede estar lista en 1 semana, mientras que una web corporativa completa toma entre 3 y 5 semanas. Siempre definimos un cronograma claro al inicio.",
  },
  {
    question: "¿La web será autoadministrable?",
    answer: "¡Sí! Integramos paneles de administración intuitivos para que puedas cambiar textos, imágenes y productos sin depender de un programador.",
  },
  {
    question: "¿Incluyen el hosting y dominio?",
    answer: "Te asesoramos en la compra del dominio y configuramos el hosting en servidores de alta velocidad (Vercel/AWS) para garantizar el mejor rendimiento.",
  },
  {
    question: "¿Hacen optimización SEO?",
    answer: "Absolutamente. Todas nuestras webs nacen optimizadas para Google: estructura semántica, metaetiquetas, velocidad de carga y sitemaps incluidos.",
  },
]
