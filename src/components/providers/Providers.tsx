"use client"

import { Suspense } from "react"
import { PersonalizationProvider } from "@/context/PersonalizationContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <PersonalizationProvider>
        {children}
      </PersonalizationProvider>
    </Suspense>
  )
}
