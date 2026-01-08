"use client"

import { useState, useRef, useMemo, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/Button"
import { Sparkles, Trophy, RotateCw, Grid3X3, MousePointer2, Brain, Star, Heart, Zap, Music, Camera, Gift, Crown } from "lucide-react"

const PRIZES = [
  { label: "Hamburguesa", color: "#ff9d00" }, // Orange
  { label: "Ticket Juego", color: "#00ff9d" }, // Neon Green
  { label: "Bebida Gratis", color: "#00f3ff" }, // Cyan
  { label: "Descuento 20%", color: "#b026ff" }, // Violet
  { label: "Chance Sorteo", color: "#ff2670" }, // Pink
  { label: "Hamburguesa", color: "#ff9d00" },
  { label: "Ticket Juego", color: "#00ff9d" },
  { label: "Bebida Gratis", color: "#00f3ff" },
]

export function GameDemo() {
  const [activeTab, setActiveTab] = useState<"roulette" | "board" | "memory">("roulette")

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,157,0.05),transparent_70%)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan mb-4 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Demos Interactivas
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Experimenta la <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">Gamificación</span>
          </motion.h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm mb-8">
            <button
              onClick={() => setActiveTab("roulette")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "roulette"
                ? "bg-neon-green text-black font-bold shadow-[0_0_15px_rgba(0,255,157,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <RotateCw className="w-4 h-4" />
              Ruleta
            </button>
            <button
              onClick={() => setActiveTab("board")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "board"
                ? "bg-neon-cyan text-black font-bold shadow-[0_0_15px_rgba(0,243,255,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              Tablero 1000
            </button>
            <button
              onClick={() => setActiveTab("memory")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "memory"
                ? "bg-neon-violet text-white font-bold shadow-[0_0_15px_rgba(176,38,255,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <Brain className="w-4 h-4" />
              Memoria
            </button>
          </div>
        </div>

        <div className="min-h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === "roulette" ? (
              <motion.div
                key="roulette"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <RouletteGame />
              </motion.div>
            ) : activeTab === "board" ? (
              <motion.div
                key="board"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <NumberBoardGame />
              </motion.div>
            ) : (
              <motion.div
                key="memory"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <MemoryGame />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function RouletteGame() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)
  const controls = useAnimation()
  const currentRotation = useRef(0)

  const spin = async () => {
    if (isSpinning) return

    setIsSpinning(true)
    setWinner(null)

    // Random rotation: at least 5 full spins + random offset
    const extraSpins = 5 + Math.random() * 5
    const degrees = extraSpins * 360
    const finalRotation = currentRotation.current + degrees

    await controls.start({
      rotate: finalRotation,
      transition: { duration: 4, ease: [0.15, 0, 0.15, 1] }
    })

    currentRotation.current = finalRotation
    setIsSpinning(false)

    // Calculate winner based on final rotation
    const actualRotation = finalRotation % 360
    const sectionSize = 360 / PRIZES.length
    // The pointer is at the top (0 degrees), but the wheel rotates clockwise.
    // So we need to find which section is at the top.
    const index = Math.floor((360 - (actualRotation % 360)) / sectionSize) % PRIZES.length
    const prize = PRIZES[index]
    setWinner(prize.label)

    // Celebration!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00ff9d", "#00f3ff", "#b026ff"]
    })
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 md:p-12 rounded-[2.5rem] bg-gray-900/50 border-4 border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        {/* Tablet Frame Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-[2.6rem] blur-xl opacity-50" />

        {/* The Wheel */}
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-30">
            <div className="w-8 h-8 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-gray-900 mt-1" />
            </div>
          </div>

          <motion.div
            animate={controls}
            className="w-full h-full rounded-full border-8 border-gray-800 shadow-[0_0_30px_rgba(0,255,157,0.2)] overflow-hidden relative"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {PRIZES.map((prize, i) => {
                const angle = 360 / PRIZES.length
                const startAngle = i * angle
                const endAngle = (i + 1) * angle

                // SVG Path for a pie slice
                const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180)
                const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180)
                const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180)
                const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180)

                return (
                  <g key={i}>
                    <path
                      d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                      fill={i % 2 === 0 ? "#111" : "#1a1a1a"}
                      stroke={prize.color}
                      strokeWidth="0.5"
                      className="transition-colors duration-300"
                    />
                    <text
                      x="75"
                      y="50"
                      fill="white"
                      fontSize="3"
                      fontWeight="bold"
                      transform={`rotate(${startAngle + angle / 2}, 50, 50)`}
                      className="select-none pointer-events-none opacity-80"
                      style={{ textShadow: `0 0 5px ${prize.color}` }}
                    >
                      {prize.label}
                    </text>
                  </g>
                )
              })}
              {/* Center Circle */}
              <circle cx="50" cy="50" r="10" fill="#111" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="5" fill="white" className="animate-pulse" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Controls & Result */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
        {winner ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 text-neon-green mb-2">
              <Trophy className="w-6 h-6" />
              <span className="font-bold uppercase tracking-wider">¡Felicidades!</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Ganaste: {winner}</h3>
            <p className="text-gray-400 text-sm">
              Este es solo un ejemplo de cómo podemos incentivar a tus clientes. Imagina esto en tu tienda o app.
            </p>
          </motion.div>
        ) : (
          <div className="mb-8 h-[168px] flex items-center justify-center lg:justify-start">
            <p className="text-gray-500 italic">
              {isSpinning ? "La suerte está echada..." : "Haz clic en el botón para girar la ruleta"}
            </p>
          </div>
        )}

        <Button
          variant="cyber"
          size="lg"
          onClick={spin}
          disabled={isSpinning}
          className="w-full md:w-auto min-w-[200px] h-16 text-xl group"
        >
          {isSpinning ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Girando...
            </span>
          ) : (
            "¡GIRAR AHORA!"
          )}
        </Button>

        <p className="mt-6 text-xs text-gray-500 uppercase tracking-[0.2em]">
          * Demo interactiva sin valor comercial
        </p>
      </div>
    </div>
  )
}

function NumberBoardGame() {
  const [selectedNumbers, setSelectedNumbers] = useState<Set<number>>(new Set())
  const [preSelectedNumbers, setPreSelectedNumbers] = useState<Set<number>>(new Set())
  const [winner, setWinner] = useState<number | null>(null)
  const [hasWon, setHasWon] = useState(false)

  // Initialize pre-selected numbers (simulating other users)
  useEffect(() => {
    const preSelected = new Set<number>()
    const totalNumbers = 1000
    const targetCount = Math.floor(totalNumbers * 0.35) // 35%

    while (preSelected.size < targetCount) {
      const num = Math.floor(Math.random() * totalNumbers) + 1
      preSelected.add(num)
    }
    setPreSelectedNumbers(preSelected)
  }, [])

  const handleNumberClick = (num: number) => {
    if (hasWon || selectedNumbers.has(num) || preSelectedNumbers.has(num)) return

    const newSelected = new Set(selectedNumbers)
    newSelected.add(num)
    setSelectedNumbers(newSelected)

    // Win on the 4th attempt (when size becomes 4)
    if (newSelected.size === 4) {
      setWinner(num)
      setHasWon(true)
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#00f3ff", "#00ff9d", "#ffffff"]
      })
    }
  }

  const reset = () => {
    setSelectedNumbers(new Set())
    setWinner(null)
    setHasWon(false)
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 mb-4">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <MousePointer2 className="w-6 h-6 text-neon-cyan" />
            Encuentra el número premiado
          </h3>
          <p className="text-gray-400">
            Hay un premio oculto en uno de los 1,000 números. ¡Prueba tu suerte!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
            <span className="text-gray-400 text-sm mr-2">Intentos:</span>
            <span className="text-neon-cyan font-mono font-bold">{selectedNumbers.size}/4</span>
          </div>
          <Button variant="outline" size="sm" onClick={reset} className="border-white/10">
            Reiniciar
          </Button>
        </div>
      </div>

      <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-900/80 rounded-3xl border-4 border-gray-800 overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.1)]">
        <div className="absolute inset-0 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="grid grid-cols-10 sm:grid-cols-20 md:grid-cols-25 lg:grid-cols-40 gap-1 md:gap-2">
            {Array.from({ length: 1000 }, (_, i) => i + 1).map((num) => {
              const isPreSelected = preSelectedNumbers.has(num)
              const isSelected = selectedNumbers.has(num)
              const isWinner = num === winner

              return (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num)}
                  disabled={hasWon || isSelected || isPreSelected}
                  className={`
                    aspect-square flex items-center justify-center text-[8px] md:text-[10px] font-bold rounded-sm transition-all duration-300
                    ${isPreSelected
                      ? "bg-gray-800/50 text-gray-700 cursor-not-allowed"
                      : isSelected
                        ? isWinner
                          ? "bg-neon-green text-black shadow-[0_0_15px_#00ff9d] scale-125 z-10 border border-white"
                          : "bg-gray-800 text-gray-600 opacity-40 border border-gray-700 scale-90"
                        : "bg-white/5 text-gray-400 hover:bg-neon-cyan/20 hover:text-neon-cyan hover:scale-110 hover:border-neon-cyan/30 border border-transparent"
                    }
                  `}
                >
                  {num}
                </button>
              )
            })}
          </div>
        </div>

        {hasWon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center z-20"
          >
            <motion.div
              initial={{ scale: 0.5, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="text-center p-8 rounded-3xl bg-gray-900 border border-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.3)]"
            >
              <Trophy className="w-16 h-16 text-neon-cyan mx-auto mb-4 animate-bounce" />
              <h4 className="text-4xl font-bold text-white mb-2">¡GANASTE!</h4>
              <p className="text-gray-400 mb-6">Encontraste el número premiado {winner}.</p>
              <Button variant="cyber" onClick={reset}>Jugar de nuevo</Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 243, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 243, 255, 0.4);
        }
      `}</style>
    </div>
  )
}

function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; icon: any; isFlipped: boolean; isMatched: boolean }[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isLocked, setIsLocked] = useState(false)
  const [hasWon, setHasWon] = useState(false)

  const ICONS = [Star, Heart, Zap, Music, Camera, Gift, Crown, Trophy]

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const duplicatedIcons = [...ICONS, ...ICONS]
    const shuffled = duplicatedIcons
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false,
      }))
    setCards(shuffled)
    setFlippedCards([])
    setIsLocked(false)
    setHasWon(false)
  }

  const handleCardClick = (id: number) => {
    if (isLocked || cards[id].isFlipped || cards[id].isMatched) return

    const newCards = [...cards]
    newCards[id].isFlipped = true
    setCards(newCards)

    const newFlipped = [...flippedCards, id]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setIsLocked(true)
      checkForMatch(newFlipped)
    }
  }

  const checkForMatch = ([firstId, secondId]: number[]) => {
    const isMatch = cards[firstId].icon === cards[secondId].icon

    if (isMatch) {
      const newCards = [...cards]
      newCards[firstId].isMatched = true
      newCards[secondId].isMatched = true
      setCards(newCards)
      setFlippedCards([])
      setIsLocked(false)

      if (newCards.every((card) => card.isMatched)) {
        setHasWon(true)
        confetti({
          particleCount: 200,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#b026ff", "#ff2670", "#ffffff"]
        })
      }
    } else {
      setTimeout(() => {
        const newCards = [...cards]
        newCards[firstId].isFlipped = false
        newCards[secondId].isFlipped = false
        setCards(newCards)
        setFlippedCards([])
        setIsLocked(false)
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 mb-4">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Brain className="w-6 h-6 text-neon-violet" />
            Memoria Visual
          </h3>
          <p className="text-gray-400">
            Encuentra todos los pares para ganar.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={initializeGame} className="border-white/10">
          Reiniciar
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full aspect-square md:aspect-auto md:h-[500px]">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                relative rounded-xl flex items-center justify-center text-4xl transition-all duration-300
                ${card.isFlipped || card.isMatched
                  ? "bg-neon-violet/20 border-2 border-neon-violet shadow-[0_0_15px_rgba(176,38,255,0.3)]"
                  : "bg-gray-800 border-2 border-gray-700 hover:border-neon-violet/50"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {card.isFlipped || card.isMatched ? (
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                  >
                    <Icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </motion.div>
                ) : (
                  <div className="w-full h-full bg-[url('/images/card-back.png')] opacity-10" />
                )}
              </div>
            </motion.button>
          )
        })}
      </div>

      {hasWon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center z-20 rounded-3xl"
        >
          <motion.div
            initial={{ scale: 0.5, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="text-center p-8 rounded-3xl bg-gray-900 border border-neon-violet shadow-[0_0_30px_rgba(176,38,255,0.3)]"
          >
            <Trophy className="w-16 h-16 text-neon-violet mx-auto mb-4 animate-bounce" />
            <h4 className="text-4xl font-bold text-white mb-2">¡EXCELENTE!</h4>
            <p className="text-gray-400 mb-6">Completaste el juego de memoria.</p>
            <Button variant="cyber" onClick={initializeGame}>Jugar de nuevo</Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
