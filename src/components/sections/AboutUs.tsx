"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Globe } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-violet/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-green/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre <span className="text-neon-gradient">Nosotros</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                Somos <span className="text-white font-semibold">Romina</span> y <span className="text-white font-semibold">Emil</span>, y formamos parte de <span className="text-neon-cyan">Neuraz</span> - Sistemas de automatización inteligente.
              </p>
              <p>
                Con más de 15 años de experiencia trabajando para diferentes empresas y organizaciones, hoy nos dedicamos a facilitar las herramientas tecnológicas y educar sobre el uso responsable e inteligente de las mismas.
              </p>
              <div className="pt-4">
                <a
                  href="https://neuraz.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-green hover:text-neon-green/80 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  neuraz.io
                </a>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Romina */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-card-border bg-card-bg">
                <Image
                  src="/images/team/romina.jpg"
                  alt="Romina Lescano"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">Romina Lescano</h3>
                  <p className="text-neon-violet text-sm font-medium mb-2">Licenciada en Sistemas</p>
                  <p className="text-gray-400 text-xs mb-3">Desarrolladora Web</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/romina-lescano/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-violet transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative sm:mt-12"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-card-border bg-card-bg">
                <Image
                  src="/images/team/emil.png"
                  alt="Emil González"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">Emil González</h3>
                  <p className="text-neon-cyan text-sm font-medium mb-2">Diseñador y Desarrollador</p>
                  <p className="text-gray-400 text-xs mb-3">Web Developer</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/emilgonzalez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.behance.net/emilgonzalez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <BehanceIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 11H22" />
      <path d="M19 8H22" />
      <path d="M14.5 16H9.5C8.39543 16 7.5 15.1046 7.5 14C7.5 12.8954 8.39543 12 9.5 12H14.5C15.6046 12 16.5 12.8954 16.5 14C16.5 15.1046 15.6046 16 14.5 16Z" />
      <path d="M14 8.5C14 9.88071 12.8807 11 11.5 11H9.5V6H11.5C12.8807 6 14 7.11929 14 8.5Z" />
      <path d="M2 14H5" />
      <path d="M2 8H5" />
      <path d="M2 11H5" />
    </svg>
  )
}
