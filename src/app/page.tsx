import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Philosophy } from "@/components/sections/Philosophy"
import { Motors } from "@/components/sections/Motors"
import { GameDemo } from "@/components/sections/GameDemo"
import { ChatbotService } from "@/components/sections/ChatbotService"
import { ServiceShowcase } from "@/components/sections/ServiceShowcase"
import { Proposal } from "@/components/sections/Proposal"
import { UseCases } from "@/components/sections/UseCases"
import { ShellCaseStudy } from "@/components/sections/ShellCaseStudy"
import { ZeroFriction } from "@/components/sections/ZeroFriction"
import { Process } from "@/components/sections/Process"
import { Results } from "@/components/sections/Results"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Hero />
        <Philosophy />
        <Motors />
        <ServiceShowcase />
        <Proposal />
        <GameDemo />
        <ShellCaseStudy />
        <UseCases />
        <ZeroFriction />
        <Process />
        <ChatbotService />
        <Results />
        <Footer />
      </div>
    </main>
  )
}
