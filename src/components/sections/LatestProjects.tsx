"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Layers } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { BehanceProject } from "@/lib/behance"

interface LatestProjectsProps {
  projects: BehanceProject[]
}

export function LatestProjects({ projects }: LatestProjectsProps) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan mb-4 backdrop-blur-sm"
            >
              <Layers className="w-4 h-4 mr-2" />
              PORTAFOLIO RECIENTE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Creamos Experiencias <br />
              <span className="text-neon-cyan">Memorables</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="/proyectos">
              <Button variant="outline" className="group border-white/20 text-white hover:bg-white/10">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative block bg-card-bg/50 rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <Layers className="w-12 h-12" />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 text-white font-medium border border-white/30 rounded-full px-4 py-2 bg-black/50 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver en Behance <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm text-gray-500">
                  {new Date(project.pubDate).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
