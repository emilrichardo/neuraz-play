"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

// Define available industries (Rubros)
export const RUBROS = [
  { id: 1, label: "Gastronomía", description: "Restaurantes, Bares, Cafeterías" },
  { id: 2, label: "Retail", description: "Tiendas de Ropa, Calzado, Accesorios" },
  { id: 3, label: "Servicios", description: "Consultoría, Agencias, Profesionales" },
  { id: 4, label: "Automotriz", description: "Concesionarias, Talleres, Repuestos" },
  { id: 5, label: "Salud & Belleza", description: "Clínicas, Estética, Gimnasios" },
  { id: 6, label: "Entretenimiento", description: "Cines, Teatros, Eventos" },
]

interface PersonalizationContextType {
  rubro: number | null
  empresa: string
  setRubro: (id: number | null) => void
  setEmpresa: (name: string) => void
  copyLink: () => void
  clearPersonalization: () => void
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined)

export function PersonalizationProvider({ children }: { children: ReactNode }) {
  const [rubro, setRubroState] = useState<number | null>(null)
  const [empresa, setEmpresaState] = useState<string>("")
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Initialize from URL or LocalStorage
  useEffect(() => {
    const urlRubro = searchParams.get("rubro")
    const urlEmpresa = searchParams.get("empresa")

    if (urlRubro) {
      setRubroState(Number(urlRubro))
    } else {
      const storedRubro = localStorage.getItem("neuraz_rubro")
      if (storedRubro) setRubroState(Number(storedRubro))
    }

    if (urlEmpresa) {
      setEmpresaState(urlEmpresa)
    } else {
      const storedEmpresa = localStorage.getItem("neuraz_empresa")
      if (storedEmpresa) setEmpresaState(storedEmpresa)
    }
  }, [searchParams])

  // Update LocalStorage and URL when state changes
  const updateState = (newRubro: number | null, newEmpresa: string) => {
    setRubroState(newRubro)
    setEmpresaState(newEmpresa)

    // Update LocalStorage
    if (newRubro) localStorage.setItem("neuraz_rubro", String(newRubro))
    else localStorage.removeItem("neuraz_rubro")

    if (newEmpresa) localStorage.setItem("neuraz_empresa", newEmpresa)
    else localStorage.removeItem("neuraz_empresa")

    // Update URL without reloading
    const params = new URLSearchParams(searchParams.toString())
    if (newRubro) params.set("rubro", String(newRubro))
    else params.delete("rubro")

    if (newEmpresa) params.set("empresa", newEmpresa)
    else params.delete("empresa")

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const setRubro = (id: number | null) => updateState(id, empresa)
  const setEmpresa = (name: string) => updateState(rubro, name)

  const clearPersonalization = () => {
    setRubroState(null)
    setEmpresaState("")
    localStorage.removeItem("neuraz_rubro")
    localStorage.removeItem("neuraz_empresa")
    router.replace(pathname, { scroll: false })
  }

  const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
      .then(() => alert("Enlace copiado al portapapeles!")) // Simple feedback, could be a toast
      .catch(err => console.error("Error al copiar:", err))
  }

  return (
    <PersonalizationContext.Provider value={{ rubro, empresa, setRubro, setEmpresa, copyLink, clearPersonalization }}>
      {children}
    </PersonalizationContext.Provider>
  )
}

export function usePersonalization() {
  const context = useContext(PersonalizationContext)
  if (context === undefined) {
    throw new Error("usePersonalization must be used within a PersonalizationProvider")
  }
  return context
}
