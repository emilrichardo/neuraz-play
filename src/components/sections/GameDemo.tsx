"use client"

import { useState, useRef, useMemo, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/Button"
import { Sparkles, Trophy, RotateCw, Grid3X3, MousePointer2, Brain, Star, Heart, Zap, Music, Camera, Gift, Crown, HelpCircle, Box, Check, X, Package, Dices, Timer, Play, Square, Users, Swords, Beer } from "lucide-react"

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
  const [activeTab, setActiveTab] = useState<"roulette" | "board" | "memory" | "trivia" | "mystery" | "dice" | "timing" | "battle">("roulette")

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Image */}
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40 pointer-events-none select-none">
        <Image
          src="/images/game-demo-preview.jpg"
          alt="Game Demo Atmosphere"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

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
              onClick={() => setActiveTab("timing")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "timing"
                ? "bg-yellow-400 text-black font-bold shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <Timer className="w-4 h-4" />
              Tiempo
            </button>
            <button
              onClick={() => setActiveTab("battle")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "battle"
                ? "bg-blue-500 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <Swords className="w-4 h-4" />
              Batalla
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
              Memoria
            </button>
            <button
              onClick={() => setActiveTab("trivia")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "trivia"
                ? "bg-neon-orange text-black font-bold shadow-[0_0_15px_rgba(255,157,0,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Trivia
            </button>
            <button
              onClick={() => setActiveTab("mystery")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "mystery"
                ? "bg-neon-pink text-white font-bold shadow-[0_0_15px_rgba(255,38,112,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <Package className="w-4 h-4" />
              Caja Misteriosa
            </button>
            <button
              onClick={() => setActiveTab("dice")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                activeTab === "dice"
                ? "bg-red-500 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                : "text-gray-400 hover:text-white"
              }`}
            >
              <Dices className="w-4 h-4" />
              Dado
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
            ) : activeTab === "memory" ? (
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
            ) : activeTab === "trivia" ? (
              <motion.div
                key="trivia"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <TriviaGame />
              </motion.div>
            ) : activeTab === "mystery" ? (
              <motion.div
                key="mystery"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <MysteryBoxGame />
              </motion.div>
            ) : activeTab === "dice" ? (
              <motion.div
                key="dice"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <DiceGame />
              </motion.div>
            ) : activeTab === "timing" ? (
              <motion.div
                key="timing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <TimingGame />
              </motion.div>
            ) : (
              <motion.div
                key="battle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <TableBattleGame />
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

function TriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const QUESTIONS = [
    {
      question: "¿Cuál es el componente principal de la gamificación?",
      options: ["Diversión", "Mecánicas de juego", "Premios en efectivo"],
      correct: 1
    },
    {
      question: "¿Qué tecnología potencia nuestros agentes?",
      options: ["Inteligencia Artificial", "Blockchain", "Realidad Virtual"],
      correct: 0
    },
    {
      question: "¿Cuál es el objetivo de 'Zero Friction'?",
      options: ["Más pasos", "Eliminar barreras", "Diseño complejo"],
      correct: 1
    },
    {
      question: "¿Qué métrica mejora con la gamificación?",
      options: ["Abandono", "Engagement", "Costos"],
      correct: 1
    },
    {
      question: "¿Qué tipo de premios ofrece Neuraz?",
      options: ["Solo físicos", "Solo digitales", "Híbridos y personalizados"],
      correct: 2
    }
  ]

  const handleAnswer = (index: number) => {
    if (isAnswered) return
    setSelectedOption(index)
    setIsAnswered(true)

    if (index === QUESTIONS[currentQuestion].correct) {
      setScore(score + 1)
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { y: 0.7 },
        colors: ["#ff9d00", "#ffffff"]
      })
    }

    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
        setIsAnswered(false)
      } else {
        setShowResult(true)
        if (score >= 3) {
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ["#ff9d00", "#00ff9d", "#00f3ff"]
          })
        }
      }
    }, 1500)
  }

  const reset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 mb-4">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-neon-orange" />
            Trivia Challenge
          </h3>
          <p className="text-gray-400">
            Responde correctamente para ganar premios.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={reset} className="border-white/10">
          Reiniciar
        </Button>
      </div>

      {!showResult ? (
        <div className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
            <motion.div
              className="h-full bg-neon-orange"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>

          <div className="mb-8 mt-4">
            <span className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2 block">
              Pregunta {currentQuestion + 1} de {QUESTIONS.length}
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white">
              {QUESTIONS[currentQuestion].question}
            </h4>
          </div>

          <div className="space-y-3">
            {QUESTIONS[currentQuestion].options.map((option, index) => {
              const isSelected = selectedOption === index
              const isCorrect = index === QUESTIONS[currentQuestion].correct

              let buttonStyle = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              if (isAnswered) {
                if (isCorrect) {
                  buttonStyle = "bg-neon-green/20 border-neon-green text-white"
                } else if (isSelected) {
                  buttonStyle = "bg-red-500/20 border-red-500 text-white"
                } else {
                  buttonStyle = "bg-white/5 border-white/10 opacity-50"
                }
              } else if (isSelected) {
                buttonStyle = "bg-neon-orange/20 border-neon-orange text-white"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group ${buttonStyle}`}
                >
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    {option}
                  </span>
                  {isAnswered && isCorrect && <Check className="w-5 h-5 text-neon-green" />}
                  {isAnswered && isSelected && !isCorrect && <X className="w-5 h-5 text-red-500" />}
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-gray-900/50 border border-neon-orange/30 rounded-2xl p-8 text-center backdrop-blur-sm"
        >
          <Trophy className="w-16 h-16 text-neon-orange mx-auto mb-4" />
          <h4 className="text-3xl font-bold text-white mb-2">
            {score >= 3 ? "¡Ganaste!" : "¡Buen intento!"}
          </h4>
          <p className="text-gray-400 mb-6">
            Acertaste {score} de {QUESTIONS.length} preguntas.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="cyber" onClick={reset}>Jugar de nuevo</Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

function MysteryBoxGame() {
  const [boxes, setBoxes] = useState(Array(3).fill(null).map((_, i) => ({ id: i, isOpen: false })))
  const [selectedBox, setSelectedBox] = useState<number | null>(null)
  const [prize, setPrize] = useState<string | null>(null)

  const PRIZES = ["Descuento 50%", "2x1 en Productos", "Envío Gratis", "Bonus 1000 Pts"]

  const handleBoxClick = (id: number) => {
    if (selectedBox !== null) return

    setSelectedBox(id)

    // Simulate opening delay
    setTimeout(() => {
      const newBoxes = [...boxes]
      newBoxes[id].isOpen = true
      setBoxes(newBoxes)

      const randomPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)]
      setPrize(randomPrize)

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff2670", "#b026ff", "#ffffff"]
      })
    }, 1000)
  }

  const reset = () => {
    setBoxes(boxes.map(b => ({ ...b, isOpen: false })))
    setSelectedBox(null)
    setPrize(null)
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 mb-4">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Package className="w-6 h-6 text-neon-pink" />
            Caja Misteriosa
          </h3>
          <p className="text-gray-400">
            Elige una caja y descubre tu premio sorpresa.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={reset} className="border-white/10">
          Reiniciar
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-12">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            className="relative"
            whileHover={selectedBox === null ? { scale: 1.05, rotate: [0, -2, 2, 0] } : {}}
            onClick={() => handleBoxClick(box.id)}
          >
            <motion.div
              className={`
                w-40 h-40 md:w-56 md:h-56 rounded-2xl cursor-pointer relative flex items-center justify-center
                ${box.isOpen
                  ? "bg-gray-900/50 border-2 border-neon-pink shadow-[0_0_30px_rgba(255,38,112,0.2)]"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-xl"
                }
              `}
              animate={
                selectedBox === box.id && !box.isOpen
                  ? {
                      x: [0, -5, 5, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }
                  : {}
              }
            >
              {box.isOpen ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center p-2"
                >
                  <Gift className="w-12 h-12 text-neon-pink mx-auto mb-2" />
                  <p className="text-white font-bold text-sm md:text-base">{prize}</p>
                </motion.div>
              ) : (
                <div className="text-center">
                  <Box className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 ${selectedBox === box.id ? "text-neon-pink" : "text-gray-600"}`} />
                  <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Caja {box.id + 1}</p>
                </div>
              )}

              {/* Glow effect */}
              {!box.isOpen && selectedBox === null && (
                <div className="absolute inset-0 bg-neon-pink/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {prize && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-6 bg-white/5 border border-neon-pink/30 rounded-xl backdrop-blur-sm"
        >
          <p className="text-gray-300 mb-1">¡Felicidades! Has ganado:</p>
          <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-purple-500">
            {prize}
          </h4>
        </motion.div>
      )}
    </div>
  )
}

function DiceGame() {
  const [isRolling, setIsRolling] = useState(false)
  const [result, setResult] = useState<number | null>(null)
  const [prize, setPrize] = useState<string | null>(null)

  const PRIZES = {
    1: "Inténtalo de nuevo",
    2: "Descuento 10%",
    3: "Bebida Gratis",
    4: "Inténtalo de nuevo",
    5: "Descuento 20%",
    6: "¡PREMIO MAYOR!"
  }

  const rollDice = () => {
    if (isRolling) return
    setIsRolling(true)
    setResult(null)
    setPrize(null)

    // Animation duration
    setTimeout(() => {
      const newResult = Math.floor(Math.random() * 6) + 1
      setResult(newResult)
      setPrize(PRIZES[newResult as keyof typeof PRIZES])
      setIsRolling(false)

      if (newResult === 6 || newResult === 3 || newResult === 5) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ef4444", "#ffffff"]
        })
      }
    }, 2000)
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Dices className="w-6 h-6 text-red-500" />
          Dado del Destino
        </h3>
        <p className="text-gray-400">
          Lanza el dado y descubre tu suerte. ¡El 6 tiene premio mayor!
        </p>
      </div>

      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center perspective-1000">
        <motion.div
          className={`
            w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.3)]
            ${isRolling ? "animate-spin-3d" : ""}
          `}
          animate={isRolling ? {
            rotateX: [0, 360, 720, 1080],
            rotateY: [0, 360, 720, 1080],
            scale: [1, 1.2, 0.8, 1],
          } : {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {result ? (
            <div className="grid grid-cols-3 gap-2 p-4 w-full h-full">
              {/* Dice Dots Logic */}
              {[...Array(9)].map((_, i) => {
                // Map dots for each number 1-6
                const showDot =
                  (result === 1 && i === 4) ||
                  (result === 2 && (i === 0 || i === 8)) ||
                  (result === 3 && (i === 0 || i === 4 || i === 8)) ||
                  (result === 4 && (i === 0 || i === 2 || i === 6 || i === 8)) ||
                  (result === 5 && (i === 0 || i === 2 || i === 4 || i === 6 || i === 8)) ||
                  (result === 6 && (i === 0 || i === 2 || i === 3 || i === 5 || i === 6 || i === 8))

                return (
                  <div key={i} className="flex items-center justify-center">
                    {showDot && <div className="w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full shadow-sm" />}
                  </div>
                )
              })}
            </div>
          ) : (
            <Dices className="w-16 h-16 md:w-20 md:h-20 text-red-500 opacity-50" />
          )}
        </motion.div>
      </div>

      <div className="text-center h-24">
        {prize && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-3xl font-bold text-white mb-1">{result}</h4>
            <p className="text-xl text-red-400 font-bold">{prize}</p>
          </motion.div>
        )}
      </div>

      <Button
        variant="cyber"
        size="lg"
        onClick={rollDice}
        disabled={isRolling}
        className="w-full md:w-auto min-w-[200px] h-16 text-xl"
      >
        {isRolling ? "Lanzando..." : "¡LANZAR DADO!"}
      </Button>
    </div>
  )
}

function TimingGame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState<"perfect" | "good" | "bad" | null>(null)
  const requestRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const TARGET_TIME = 5000 // 5 seconds

  const gameLoop = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp
    const progress = timestamp - startTimeRef.current
    setTime(progress)
    requestRef.current = requestAnimationFrame(gameLoop)
  }

  const handleStart = () => {
    setIsPlaying(true)
    setResult(null)
    startTimeRef.current = null
    requestRef.current = requestAnimationFrame(gameLoop)
  }

  const handleStop = () => {
    if (requestRef.current) cancelAnimationFrame(requestRef.current)
    setIsPlaying(false)

    const diff = Math.abs(time - TARGET_TIME)

    if (diff < 50) { // < 0.05s difference
      setResult("perfect")
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#facc15", "#ffffff"]
      })
    } else if (diff < 200) { // < 0.2s difference
      setResult("good")
    } else {
      setResult("bad")
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Timer className="w-6 h-6 text-yellow-400" />
          Tiempo Perfecto
        </h3>
        <p className="text-gray-400">
          Detén el cronómetro exactamente en 5.000 segundos.
        </p>
      </div>

      <div className="relative p-8 md:p-12 bg-gray-900 border-4 border-gray-800 rounded-3xl shadow-[0_0_50px_rgba(250,204,21,0.1)]">
        <div className="font-mono text-6xl md:text-8xl font-bold text-white tabular-nums tracking-wider">
          {(time / 1000).toFixed(3)}
        </div>
        <div className="text-center mt-2 text-gray-500 font-mono text-sm">
          TARGET: {(TARGET_TIME / 1000).toFixed(3)}
        </div>
      </div>

      <div className="h-20 flex items-center justify-center">
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-2xl font-bold px-6 py-2 rounded-full border ${
              result === "perfect"
                ? "bg-yellow-400/20 border-yellow-400 text-yellow-400"
                : result === "good"
                  ? "bg-blue-400/20 border-blue-400 text-blue-400"
                  : "bg-red-400/20 border-red-400 text-red-400"
            }`}
          >
            {result === "perfect" ? "¡PERFECTO! 🏆" : result === "good" ? "¡MUY BIEN! 👍" : "INTENTA DE NUEVO ❌"}
          </motion.div>
        )}
      </div>

      <Button
        variant={isPlaying ? "default" : "cyber"}
        size="lg"
        onClick={isPlaying ? handleStop : handleStart}
        className={`w-48 h-48 rounded-full text-2xl font-bold shadow-[0_0_30px_rgba(0,0,0,0.5)] border-4 ${
          isPlaying ? "bg-red-500 hover:bg-red-600 border-red-500 text-white" : "border-neon-cyan"
        }`}
      >
        {isPlaying ? (
          <div className="flex flex-col items-center gap-2">
            <Square className="w-8 h-8 fill-current" />
            STOP
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Play className="w-8 h-8 fill-current" />
            START
          </div>
        )}
      </Button>
    </div>
  )
}

function TableBattleGame() {
  const [tables, setTables] = useState([
    { id: 1, name: "Mesa VIP", xp: 1250, color: "bg-neon-green", icon: Crown },
    { id: 2, name: "Los Gamers", xp: 980, color: "bg-neon-cyan", icon: Dices },
    { id: 3, name: "Cumpleaños", xp: 1500, color: "bg-neon-pink", icon: Gift },
    { id: 4, name: "Amigos", xp: 800, color: "bg-yellow-400", icon: Beer },
  ])

  const addXp = (id: number, amount: number) => {
    setTables(prev => {
      const newTables = prev.map(t => {
        if (t.id === id) {
          return { ...t, xp: t.xp + amount }
        }
        return t
      })
      return newTables.sort((a, b) => b.xp - a.xp)
    })

    confetti({
      particleCount: 50,
      spread: 40,
      origin: { y: 0.7 },
      colors: ["#ffffff", "#facc15"]
    })
  }

  const maxXp = Math.max(...tables.map(t => t.xp), 2000)

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Swords className="w-6 h-6 text-blue-500" />
          Batalla de Mesas
        </h3>
        <p className="text-gray-400">
          ¡Compite por XP consumiendo y jugando! Ranking en tiempo real.
        </p>
      </div>

      <div className="w-full bg-gray-900/80 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-2xl">
        <div className="flex justify-between items-center mb-6 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-widest border-b border-gray-800 pb-2">
          <span>Ranking</span>
          <span>XP Total</span>
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {tables.map((table, index) => {
              const Icon = table.icon
              return (
                <motion.div
                  key={table.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-2 relative z-10">
                    <div className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-black
                      ${index === 0 ? "bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" :
                        index === 1 ? "bg-gray-300" :
                        index === 2 ? "bg-amber-700" : "bg-gray-700 text-white"}
                    `}>
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-1">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-gray-400" />
                          <span className="font-bold text-white text-sm md:text-lg">{table.name}</span>
                        </div>
                        <span className="font-mono text-neon-cyan font-bold">{table.xp} XP</span>
                      </div>

                      <div className="h-3 md:h-4 bg-gray-800 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full ${table.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(table.xp / maxXp) * 100}%` }}
                          transition={{ type: "spring", stiffness: 50 }}
                        />
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="hidden md:flex border-white/10 hover:bg-white/5"
                      onClick={() => addXp(table.id, 100)}
                    >
                      +100 XP
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex gap-4 md:hidden">
        <Button size="sm" onClick={() => addXp(tables[0].id, 100)}>Boost Líder</Button>
        <Button size="sm" variant="outline" onClick={() => addXp(tables[tables.length - 1].id, 200)}>Boost Último</Button>
      </div>
    </div>
  )
}
