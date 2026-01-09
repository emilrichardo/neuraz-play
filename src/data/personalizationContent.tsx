import { RUBROS } from "@/context/PersonalizationContext"

export interface SectionContent {
  title: string
  subtitle?: string
  description: string
  cta?: string
  items?: string[]
  image?: string
}

export interface SiteContent {
  hero: SectionContent & { badge: string }
  philosophy: SectionContent & { features: string[] }
  motors: SectionContent
  serviceShowcase: SectionContent
  proposal: SectionContent
  gameDemo: SectionContent
  useCases: SectionContent
  zeroFriction: SectionContent
  process: SectionContent
  chatbot: SectionContent
  results: SectionContent
}

const DEFAULT_CONTENT: SiteContent = {
  hero: {
    badge: "Sistema Operativo de Experiencias",
    title: "Convertimos <br/>clientes en <span class='text-neon-gradient'>jugadores.</span>",
    subtitle: "Y jugadores en<br/> <span class='text-neon-gradient'>clientes fieles.</span>",
    description: "Transformación digital experiencial. Fusionamos Gamificación, Inteligencia Artificial y Pantallas Interactivas para crear sistemas que venden solos.",
    cta: "Gamificar mi negocio",
    image: "/images/hero-bg.png"
  },
  philosophy: {
    title: "Construimos experiencias",
    description: "En Neuraz diseñamos y desarrollamos sistemas digitales a medida que combinan tecnología, automatización, gamificación e inteligencia artificial para transformar la forma en que las marcas interactúan con sus clientes.",
    features: [
      "Interactuar con personas",
      "Tomar decisiones automáticas",
      "Responder en tiempo real",
      "Integrarse con cualquier sistema existente",
      "Escalar y adaptarse a cada negocio"
    ],
    image: "/images/philosophy-experience.jpg"
  },
  motors: {
    title: "Nuestros Motores",
    description: "La tecnología detrás de la magia."
  },
  serviceShowcase: {
    title: "Interfaces que",
    description: "No solo diseñamos interfaces; creamos ecosistemas interactivos. Desde pantallas táctiles en puntos de venta hasta aplicaciones móviles gamificadas, cada píxel está pensado para maximizar el engagement y la conversión."
  },
  proposal: {
    title: "Propuesta de Valor",
    description: "Por qué elegir Neuraz."
  },
  gameDemo: {
    title: "Prueba nuestros juegos",
    description: "Experiencias interactivas que enganchan."
  },
  useCases: {
    title: "Casos de Uso",
    description: "Ejemplos reales de aplicación."
  },
  zeroFriction: {
    title: "Cero Fricción",
    description: "Sin barreras de entrada."
  },
  process: {
    title: "Nuestro Proceso",
    description: "Cómo trabajamos."
  },
  chatbot: {
    title: "Asistentes Inteligentes",
    description: "Atención 24/7 con IA."
  },
  results: {
    title: "Resultados",
    description: "Métricas que importan."
  }
}

export function getContent(rubroId: number | null, subrubroId: number | null, empresa: string, enfoque: "gamificacion" | "fidelizacion" = "gamificacion"): SiteContent {
  if (!rubroId) {
    // Default content adapted to enfoque
    const defaultContent = JSON.parse(JSON.stringify(DEFAULT_CONTENT)) as SiteContent
    if (enfoque === "fidelizacion") {
      defaultContent.hero.title = "Convertimos clientes en embajadores de marca"
      defaultContent.hero.subtitle = "Y compras en relaciones duraderas."
      defaultContent.hero.description = "Transformación digital centrada en el cliente. Fusionamos Programas de Lealtad, Inteligencia Artificial y Pantallas Interactivas para crear sistemas que fidelizan automáticamente."
      defaultContent.hero.cta = "Fidelizar mi negocio"
      defaultContent.hero.badge = "Sistema de Fidelización Inteligente"

      defaultContent.philosophy.title = "Construimos relaciones"
      defaultContent.philosophy.description = "En Neuraz diseñamos y desarrollamos ecosistemas de lealtad a medida que combinan tecnología, automatización y beneficios personalizados para transformar la forma en que las marcas cuidan a sus clientes."

      defaultContent.motors.title = "Nuestros Pilares"
      defaultContent.motors.description = "La base de una relación sólida."

      defaultContent.gameDemo.title = "Prueba nuestra experiencia"
      defaultContent.gameDemo.description = "Interacciones que generan valor."
    }
    return defaultContent
  }

  const content = JSON.parse(JSON.stringify(DEFAULT_CONTENT)) as SiteContent
  const empresaName = empresa || "tu negocio"

  // Base modifications based on Enfoque (Global)
  if (enfoque === "fidelizacion") {
    content.hero.badge = "Sistema de Fidelización Inteligente"
    content.hero.cta = "Fidelizar mis clientes"
    content.motors.title = "Nuestros Pilares"
    content.gameDemo.title = "Experiencia de Usuario"
  }

  // Gastronomía
  if (rubroId === 1) {
    if (enfoque === "gamificacion") {
      content.hero.title = `Convertimos comensales en fans de ${empresa || "tu restaurante"}`
      content.hero.description = "Menús interactivos, reservas con IA y juegos para esperar la comida. Hacemos que ir a comer sea una experiencia inolvidable."
      content.hero.cta = "Gamificar mi menú"
      // content.hero.image = "/images/gastronomy-hero.jpg" // Example of dynamic image

      content.philosophy.description = `En Neuraz creamos sistemas para que ${empresaName} no solo sirva comida, sino que sirva experiencias. Desde que el cliente reserva hasta que paga y deja su reseña.`
      content.philosophy.features = [
        "Gestionar reservas automáticamente",
        "Recomendar platos con IA",
        "Entretener durante la espera",
        "Fidelizar clientes frecuentes",
        "Aumentar el ticket promedio"
      ]
    } else {
      // Fidelización
      content.hero.title = `Fideliza a los comensales de ${empresa || "tu restaurante"}`
      content.hero.description = "Programas de puntos digitales, encuestas de satisfacción automáticas y beneficios exclusivos para tus mejores clientes."
      content.hero.cta = "Crear Club de Beneficios"

      content.philosophy.description = `Ayudamos a ${empresaName} a conocer y premiar a sus clientes más leales. Transformamos cada visita en una oportunidad de conexión.`
      content.philosophy.features = [
        "Digitalizar base de datos de clientes",
        "Automatizar saludos de cumpleaños",
        "Encuestas de satisfacción post-visita",
        "Beneficios por frecuencia de visita",
        "Reservas prioritarias para VIPs"
      ]
    }

    if (subrubroId === 102) { // Bar
      if (enfoque === "gamificacion") {
        content.hero.title = `La noche de ${empresa || "tu bar"} empieza en el celular`
        content.hero.description = "Juegos para ganar tragos, Happy Hour inteligente y música colaborativa."
      } else {
        content.hero.title = `El Club VIP de ${empresa || "tu bar"}`
        content.hero.description = "Acceso exclusivo, reserva de mesas VIP y beneficios acumulables en cada noche."
      }
    }
  }

  // Retail
  if (rubroId === 2) {
    if (enfoque === "gamificacion") {
      content.hero.title = `Convierte visitantes en compradores fieles`
      content.hero.description = "Espejos mágicos, probadores virtuales y programas de lealtad que premian cada compra. El retail del futuro es hoy."

      content.philosophy.description = `Ayudamos a ${empresaName} a conectar el mundo físico con el digital. Que cada visita a la tienda sea una aventura.`
      content.philosophy.features = [
        "Personalizar ofertas en tiempo real",
        "Gamificar el proceso de compra",
        "Gestionar stock inteligentemente",
        "Crear probadores virtuales",
        "Automatizar atención al cliente"
      ]
    } else {
      content.hero.title = `Premia la lealtad en ${empresa || "tu tienda"}`
      content.hero.description = "Identificación de clientes al entrar, historial de compras unificado y recomendaciones personalizadas por IA."

      content.philosophy.description = `Potenciamos a ${empresaName} con datos. Conoce qué compran tus clientes y ofréceles exactamente lo que buscan.`
      content.philosophy.features = [
        "Historial de compras omnicanal",
        "Segmentación automática de clientes",
        "Campañas de email marketing personalizadas",
        "Alertas de stock para clientes interesados",
        "Atención personalizada en tienda"
      ]
    }
  }

  // Alimentos (Carnicería, etc)
  if (rubroId === 7) {
    content.hero.title = `Más que alimentos, calidad y confianza para ${empresa || "tu comercio"}`
    content.hero.description = "Pedidos por WhatsApp automatizados, trazabilidad con QR y recetas sugeridas por IA."

    if (subrubroId === 701) { // Carnicería
      if (enfoque === "gamificacion") {
        content.hero.title = `La mejor carne, la mejor experiencia en ${empresa || "tu carnicería"}`
        content.hero.description = "Sugerencias de cortes por IA, recetas personalizadas y pedidos sin espera."
        content.hero.cta = "Modernizar mi carnicería"
      } else {
        content.hero.title = `Clientes de confianza en ${empresa || "tu carnicería"}`
        content.hero.description = "Pedidos recurrentes simplificados, cuenta corriente digital y ofertas semanales por WhatsApp."
        content.hero.cta = "Optimizar mis pedidos"
      }
    }
  }

  // Comercio Mayorista
  if (rubroId === 8) {
    content.hero.title = `Optimiza la distribución de ${empresa || "tu mayorista"}`
    content.hero.description = "Catálogos inteligentes, pedidos B2B automatizados y seguimiento de logística en tiempo real."
    content.hero.cta = "Optimizar logística"
  }

  return content
}
