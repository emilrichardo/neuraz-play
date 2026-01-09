"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { getContent, SiteContent } from "@/data/personalizationContent"

// Define interfaces
export interface SubRubro {
  id: number
  label: string
}

export interface Rubro {
  id: number
  label: string
  description: string
  subrubros?: SubRubro[]
}

// Define available industries (Rubros) with Subrubros
export const RUBROS: Rubro[] = [
  {
    id: 1,
    label: "Gastronomía",
    description: "Restaurantes, Bares, Cafeterías",
    subrubros: [
      { id: 101, label: "Restaurante" },
      { id: 102, label: "Bar / Pub" },
      { id: 103, label: "Cafetería" },
      { id: 104, label: "Fast Food" }
    ]
  },
  {
    id: 2,
    label: "Retail",
    description: "Tiendas de Ropa, Calzado, Accesorios",
    subrubros: [
      { id: 201, label: "Indumentaria" },
      { id: 202, label: "Calzado" },
      { id: 203, label: "Accesorios" },
      { id: 204, label: "Hogar y Deco" }
    ]
  },
  {
    id: 3,
    label: "Servicios",
    description: "Consultoría, Agencias, Profesionales",
    subrubros: [
      { id: 301, label: "Consultoría" },
      { id: 302, label: "Agencia de Marketing" },
      { id: 303, label: "Inmobiliaria" },
      { id: 304, label: "Seguros" }
    ]
  },
  {
    id: 4,
    label: "Automotriz",
    description: "Concesionarias, Talleres, Repuestos",
    subrubros: [
      { id: 401, label: "Concesionaria" },
      { id: 402, label: "Taller Mecánico" },
      { id: 403, label: "Repuestos" },
      { id: 404, label: "Lavadero" }
    ]
  },
  {
    id: 5,
    label: "Salud & Belleza",
    description: "Clínicas, Estética, Gimnasios",
    subrubros: [
      { id: 501, label: "Clínica / Consultorio" },
      { id: 502, label: "Centro de Estética" },
      { id: 503, label: "Gimnasio" },
      { id: 504, label: "Peluquería / Barbería" }
    ]
  },
  {
    id: 6,
    label: "Entretenimiento",
    description: "Cines, Teatros, Eventos",
    subrubros: [
      { id: 601, label: "Cine / Teatro" },
      { id: 602, label: "Salón de Eventos" },
      { id: 603, label: "Parque de Diversiones" }
    ]
  },
  {
    id: 7,
    label: "Alimentos",
    description: "Carnicerías, Verdulerías, Almacenes",
    subrubros: [
      { id: 701, label: "Carnicería" },
      { id: 702, label: "Verdulería" },
      { id: 703, label: "Almacén / Supermercado" },
      { id: 704, label: "Panadería" }
    ]
  },
  {
    id: 8,
    label: "Comercio Mayorista",
    description: "Distribuidoras, Importadores",
    subrubros: [
      { id: 801, label: "Distribuidora" },
      { id: 802, label: "Importados" },
      { id: 803, label: "Tecnología" }
    ]
  }
]

// Client Presets
const CLIENT_PRESETS: Record<string, { rubro: number, subrubro: number, empresa: string, enfoque: "gamificacion" | "fidelizacion" }> = {
  dq: {
    rubro: 1,
    subrubro: 104,
    empresa: "Doble Queso",
    enfoque: "gamificacion"
  },
  cd:{
    rubro: 7,
    subrubro: 701,
    empresa: "El Duende",
    enfoque: "fidelizacion"
  }
}

interface PersonalizationContextType {
  rubro: number | null
  subrubro: number | null
  empresa: string
  enfoque: "gamificacion" | "fidelizacion"
  content: SiteContent
  setRubro: (id: number | null) => void
  setSubrubro: (id: number | null) => void
  setEmpresa: (name: string) => void
  setEnfoque: (mode: "gamificacion" | "fidelizacion") => void
  copyLink: () => void
  clearPersonalization: () => void
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined)

export function PersonalizationProvider({ children }: { children: ReactNode }) {
  const [rubro, setRubroState] = useState<number | null>(null)
  const [subrubro, setSubrubroState] = useState<number | null>(null)
  const [empresa, setEmpresaState] = useState<string>("")
  const [enfoque, setEnfoqueState] = useState<"gamificacion" | "fidelizacion">("gamificacion")
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Derived content state
  const content = getContent(rubro, subrubro, empresa, enfoque)

  // Initialize from URL or LocalStorage
  useEffect(() => {
    const urlRubro = searchParams.get("rubro")
    const urlSubrubro = searchParams.get("subrubro")
    const urlEmpresa = searchParams.get("empresa")
    const urlEnfoque = searchParams.get("enfoque")

    const clientCode = searchParams.get("c")

    if (clientCode && CLIENT_PRESETS[clientCode]) {
      const preset = CLIENT_PRESETS[clientCode]
      setRubroState(preset.rubro)
      setSubrubroState(preset.subrubro)
      setEmpresaState(preset.empresa)
      setEnfoqueState(preset.enfoque)
    } else {
      if (urlRubro) {
        setRubroState(Number(urlRubro))
      } else {
        const storedRubro = localStorage.getItem("neuraz_rubro")
        if (storedRubro) setRubroState(Number(storedRubro))
      }

      if (urlSubrubro) {
        setSubrubroState(Number(urlSubrubro))
      } else {
        const storedSubrubro = localStorage.getItem("neuraz_subrubro")
        if (storedSubrubro) setSubrubroState(Number(storedSubrubro))
      }

      if (urlEmpresa) {
        setEmpresaState(urlEmpresa)
      } else {
        const storedEmpresa = localStorage.getItem("neuraz_empresa")
        if (storedEmpresa) setEmpresaState(storedEmpresa)
      }

      if (urlEnfoque === "fidelizacion" || urlEnfoque === "gamificacion") {
        setEnfoqueState(urlEnfoque)
      } else {
        const storedEnfoque = localStorage.getItem("neuraz_enfoque")
        if (storedEnfoque === "fidelizacion" || storedEnfoque === "gamificacion") {
          setEnfoqueState(storedEnfoque)
        }
      }
    }
  }, [searchParams])

  // Update LocalStorage and URL when state changes
  const updateState = (newRubro: number | null, newSubrubro: number | null, newEmpresa: string, newEnfoque: "gamificacion" | "fidelizacion") => {
    setRubroState(newRubro)
    setSubrubroState(newSubrubro)
    setEmpresaState(newEmpresa)
    setEnfoqueState(newEnfoque)

    // Update LocalStorage
    if (newRubro) localStorage.setItem("neuraz_rubro", String(newRubro))
    else localStorage.removeItem("neuraz_rubro")

    if (newSubrubro) localStorage.setItem("neuraz_subrubro", String(newSubrubro))
    else localStorage.removeItem("neuraz_subrubro")

    if (newEmpresa) localStorage.setItem("neuraz_empresa", newEmpresa)
    else localStorage.removeItem("neuraz_empresa")

    localStorage.setItem("neuraz_enfoque", newEnfoque)

    // Update URL without reloading
    const params = new URLSearchParams(searchParams.toString())
    if (newRubro) params.set("rubro", String(newRubro))
    else params.delete("rubro")

    if (newSubrubro) params.set("subrubro", String(newSubrubro))
    else params.delete("subrubro")

    if (newEmpresa) params.set("empresa", newEmpresa)
    else params.delete("empresa")

    params.set("enfoque", newEnfoque)

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const setRubro = (id: number | null) => {
    // If rubro changes, reset subrubro
    updateState(id, null, empresa, enfoque)
  }

  const setSubrubro = (id: number | null) => updateState(rubro, id, empresa, enfoque)
  const setEmpresa = (name: string) => updateState(rubro, subrubro, name, enfoque)
  const setEnfoque = (mode: "gamificacion" | "fidelizacion") => updateState(rubro, subrubro, empresa, mode)

  const clearPersonalization = () => {
    setRubroState(null)
    setSubrubroState(null)
    setEmpresaState("")
    setEnfoqueState("gamificacion")
    localStorage.removeItem("neuraz_rubro")
    localStorage.removeItem("neuraz_subrubro")
    localStorage.removeItem("neuraz_empresa")
    localStorage.removeItem("neuraz_enfoque")
    router.replace(pathname, { scroll: false })
  }

  const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
      .then(() => alert("Enlace copiado al portapapeles!"))
      .catch(err => console.error("Error al copiar:", err))
  }

  return (
    <PersonalizationContext.Provider value={{ rubro, subrubro, empresa, enfoque, content, setRubro, setSubrubro, setEmpresa, setEnfoque, copyLink, clearPersonalization }}>
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
