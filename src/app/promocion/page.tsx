"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/sections/Footer"
import { Target, MessageSquare, Zap, CheckCircle2, ArrowRight, Phone, Globe, Copy, Briefcase, Users, TrendingUp, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useState } from "react"

export default function PromocionPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Navbar />

      <div className="pt-32 pb-24 container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan mb-6 backdrop-blur-sm"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Uso Interno Exclusivo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Manual de Estrategia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">Comercial Neuraz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Guía paso a paso para transformar prospectos en socios estratégicos.
            No vendemos servicios, vendemos <span className="text-white font-bold">resultados</span>.
          </motion.p>
        </div>

        {/* Phase 1: Preparation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-neon-violet/20 flex items-center justify-center border border-neon-violet/50 text-neon-violet font-bold text-xl">1</div>
            <h2 className="text-3xl font-bold text-white">Preparación Mental</h2>
          </div>

          <div className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-6">
              Antes de entrar, recuerda: <strong className="text-white">No eres un vendedor de software.</strong> Eres un consultor de experiencia de cliente.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                <Target className="w-8 h-8 text-neon-green mb-4" />
                <h3 className="text-white font-bold mb-2">El Objetivo</h3>
                <p className="text-sm text-gray-400">Convertir clientes pasivos en jugadores activos y fieles.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                <Zap className="w-8 h-8 text-neon-cyan mb-4" />
                <h3 className="text-white font-bold mb-2">La Herramienta</h3>
                <p className="text-sm text-gray-400">Gamificación + IA + Automatización = Cero Fricción.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                <TrendingUp className="w-8 h-8 text-neon-violet mb-4" />
                <h3 className="text-white font-bold mb-2">El Resultado</h3>
                <p className="text-sm text-gray-400">Más ventas, base de datos propia y viralización.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Phase 2: The Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/50 text-neon-cyan font-bold text-xl">2</div>
            <h2 className="text-3xl font-bold text-white">El Abordaje (Visita Presencial)</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm relative group">
              <div className="absolute top-4 right-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("Hola, no vengo a venderte nada. Soy especialista en experiencia de cliente y noté algo en tu negocio que te está costando dinero. ¿Tienes 2 minutos para mostrártelo?", "script1")}
                  className="text-xs"
                >
                  {copied === "script1" ? <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied === "script1" ? "Copiado" : "Copiar Script"}
                </Button>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neon-cyan" />
                Rompehielos
              </h3>
              <p className="text-gray-300 italic text-lg leading-relaxed pr-8">
                "Hola, ¿cómo estás? Soy parte del equipo de Neuraz. Trabajamos ayudando a los negocios a mejorar la experiencia de sus clientes con sistemas interactivos y automatización. Te quería dejar una info corta para que, si te parece, se la acerques al encargado."
              </p>
              <div className="mt-4 p-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg text-sm text-neon-cyan">
                <strong>Por qué funciona:</strong> Genera curiosidad inmediata y se posiciona desde la ayuda, no la venta.
              </div>
            </div>

            <div className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-neon-cyan" />
                Solicitar al Encargado
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>Si te atiende un empleado: "Necesito hablar con quien toma las decisiones sobre cómo hacer crecer este lugar. Es sobre una oportunidad de modernización."</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                  <span>Si está el dueño: Preséntate con autoridad y ve al grano.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Phase 3: The Pitch */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center border border-neon-green/50 text-neon-green font-bold text-xl">3</div>
            <h2 className="text-3xl font-bold text-white">El Pitch (La Propuesta)</h2>
          </div>

          <div className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300 mb-6">
              Una vez que tienes su atención, explica el concepto <strong>Neuraz</strong> en 3 puntos clave:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white flex-shrink-0">1</div>
                <div>
                  <h4 className="text-white font-bold text-lg">El Problema</h4>
                  <p className="text-gray-400">"Hoy en día, la gente no quiere publicidad, quiere experiencias. Si tus clientes solo vienen, compran y se van, estás perdiendo el 80% del valor."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white flex-shrink-0">2</div>
                <div>
                  <h4 className="text-white font-bold text-lg">La Solución (Neuraz XP)</h4>
                  <p className="text-gray-400">"Creamos juegos interactivos y sistemas de lealtad digitales. Tus clientes escanean un QR, juegan en una ruleta o trivia, ganan premios y tú te quedas con sus datos para venderles de nuevo automáticamente."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white flex-shrink-0">3</div>
                <div>
                  <h4 className="text-white font-bold text-lg">La Automatización</h4>
                  <p className="text-gray-400">"Y lo mejor: no tienes que hacer nada. Nuestros chatbots con IA atienden las consultas y envían promociones personalizadas por WhatsApp."</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Phase 4: Industry Material */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-neon-violet/20 flex items-center justify-center border border-neon-violet/50 text-neon-violet font-bold text-xl">4</div>
            <h2 className="text-3xl font-bold text-white">Material por Rubro</h2>
          </div>

          <div className="bg-card-bg/50 border border-card-border p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300 mb-6">
              Información específica y casos de uso para diferentes industrias. Úsalo para personalizar tu propuesta.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://docs.google.com/document/d/1gO5tHBBNIS4y88BYzbIJ-s_kBj2F5MLR6k70AAAgk1I/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-neon-violet/50 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-neon-violet" />
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">Bares y Restaurantes</h3>
                <p className="text-sm text-gray-400">Estrategias para aumentar ticket promedio y fidelización.</p>
              </a>

              <a
                href="https://docs.google.com/document/d/1it5F_8aJYUgOIuMoxshzulwhTcL2ma73CQUzuNJ7paY/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-neon-cyan" />
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">Distribuidoras</h3>
                <p className="text-sm text-gray-400">Automatización de pedidos y gestión de clientes B2B.</p>
              </a>

              <a
                href="https://docs.google.com/document/d/1DLsSKoGZzbk7yduludD_qu8AydeH3mhcxj-9ggtsMfE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-neon-green/50 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-neon-green" />
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">Carnicerías</h3>
                <p className="text-sm text-gray-400">Digitalización de ofertas y captación de clientes locales.</p>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Phase 5: The Close */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/50 text-white font-bold text-xl">5</div>
            <h2 className="text-3xl font-bold text-white">El Cierre (Acción)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neon-green/10 to-transparent border border-neon-green/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Paso 1: Mostrar Demo</h3>
              <p className="text-gray-300 mb-6">
                No lo expliques, muéstralo. Saca tu celular y entra a la web.
              </p>
              <a href="/" target="_blank" className="w-full block">
                <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90">
                  <Globe className="w-4 h-4 mr-2" />
                  Abrir neuraz.io
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-br from-neon-cyan/10 to-transparent border border-neon-cyan/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Paso 2: Agendar Cita</h3>
              <p className="text-gray-300 mb-6">
                "Para implementarlo necesitamos ver tus necesidades específicas. Agendemos una demo técnica con el equipo de desarrollo."
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white bg-black/40 p-3 rounded-lg border border-white/10">
                  <Phone className="w-4 h-4 text-neon-cyan" />
                  <span className="font-mono text-lg">385 596 3036</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("3855963036", "phone")}
                    className="ml-auto h-8 w-8 p-0"
                  >
                    {copied === "phone" ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <Button variant="outline" className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                  Agendar Demo Gratuito
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="text-center text-gray-500 text-sm mt-12">
          <p>Neuraz Play - Documento Confidencial de Estrategia Comercial</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
