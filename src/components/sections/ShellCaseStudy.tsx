"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2, X, Trophy, Star, Gift, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/Button"

const IMAGES = [
  "/images/shell/image1.png",
  "/images/shell/image2.png",
  "/images/shell/image4.png",
  "/images/shell/image5.png",
]

export function ShellCaseStudy() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
  }

  return (
    <section id="casos" className="py-24 relative overflow-hidden bg-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,0,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,213,0,0.1),transparent_60%)]" />

      <div className="container px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              Caso de Éxito
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shell Puntos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                incentiva el consumo
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              y premia la lealtad a través de un sistema gamificado de puntos y chances.
            </p>

            <div className="space-y-6 text-gray-400">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">SHELL Puntos</h3>
                <p>
                  Es una plataforma web desarrollada para la gestión de campañas de fidelización y sorteos.
                  Permite a los usuarios participar en eventos cargando tickets de compra (vía escaneo QR de AFIP o carga manual)
                  o canjeando cupones, para acumular puntos o chances y acceder a premios.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="https://test-shellcabildo.neuraz.io/login" target="_blank" rel="noopener noreferrer">
                <Button variant="cyber" size="lg" className="w-full md:w-auto group">
                  Probar el Sistema
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-[2rem] overflow-hidden border-8 border-gray-900 shadow-2xl shadow-red-900/20 aspect-[9/16] w-full max-w-sm mx-auto bg-gray-900">
              <video
                ref={videoRef}
                src="/videos/shell.mp4"
                poster="/images/shell/video-poster.png"
                className="w-full h-full object-cover"
                loop
                muted={!isPlaying}
                playsInline
                onClick={togglePlay}
              />

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-colors hover:bg-black/30"
                  onClick={togglePlay}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </motion.div>
                </div>
              )}

              {/* Video Controls Overlay (visible on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <button onClick={togglePlay} className="text-white hover:text-red-400 transition-colors">
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <div className="text-xs text-gray-300 font-mono">SHELL LOYALTY SYSTEM</div>
              </div>
            </div>

            {/* Decorative Elements around video */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Gift className="w-6 h-6 text-yellow-500" />
              Galería de la Experiencia
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevImage} className="rounded-full border-white/10 hover:bg-white/10">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextImage} className="rounded-full border-white/10 hover:bg-white/10">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[200px] md:h-[300px]">
            {/* Main Featured Image */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => setIsGalleryOpen(true)}
            >
              <Image
                src={IMAGES[currentImageIndex]}
                alt="Shell Puntos Interface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
            </div>

            {/* Side Thumbnails */}
            <div className="grid grid-rows-2 gap-4">
              {[1, 2].map((offset) => {
                const index = (currentImageIndex + offset) % IMAGES.length
                return (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer group"
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={IMAGES[index]}
                      alt="Shell Puntos Detail"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Full Screen Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-6xl aspect-video">
              <Image
                src={IMAGES[currentImageIndex]}
                alt="Shell Puntos Fullscreen"
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
