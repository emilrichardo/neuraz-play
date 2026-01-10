import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/sections/Footer"
import { getBehanceProjects } from "@/lib/behance"
import { ArrowUpRight, Layers } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Proyectos | Neuraz Play",
  description: "Explora nuestro portafolio de proyectos de diseño, desarrollo y experiencias digitales.",
}

export default async function ProjectsPage() {
  const projects = await getBehanceProjects()

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-cyan selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,243,255,0.1),transparent_70%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan mb-6 backdrop-blur-sm">
              <Layers className="w-4 h-4 mr-2" />
              PORTAFOLIO
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Nuestros <span className="text-neon-cyan">Proyectos</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl">
              Una selección de nuestros trabajos más recientes en diseño UX/UI, desarrollo web y experiencias digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No se pudieron cargar los proyectos en este momento.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
