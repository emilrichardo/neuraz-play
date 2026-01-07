import { Hero } from "@/components/sections/Hero"
import { Philosophy } from "@/components/sections/Philosophy"
import { Motors } from "@/components/sections/Motors"
import { UseCases } from "@/components/sections/UseCases"
import { ZeroFriction } from "@/components/sections/ZeroFriction"
import { Results } from "@/components/sections/Results"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Hero />
      <Philosophy />
      <Motors />
      <UseCases />
      <ZeroFriction />
      <Results />
      <Footer />
    </main>
  )
}
