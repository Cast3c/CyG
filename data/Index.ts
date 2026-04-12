import {
  HeaderData,
  HeroData,
  ServicesData,
  AboutData,
  TestimonialData,
  ContactData,
  FooterData,
} from '../types/Index'

// ========= HEADER =========
export const header: HeaderData = {
  logo: {
    src: '/images/logos/cygLogo.png',
    alt: 'CyG transportes logo'
  },
  navLinks: [
    { key: "home", label: "Inicio", href: "#home", icon: "home" },
    { key: "services", label: "Servicios", href: "#servicios", icon: "services" },
    { key: "about", label: "Nosotros", href: "#about", icon: "about" },
    { key: "contact", label: "Contacto", href: "#contacto", icon: "contact" },
  ],
  cta: {
    primary: {
      label: "WhatsApp",
      href: "https://wa.me/573132129686",
      icon: "whatsapp"
    },
  },
}

// ========= HERO =========
export const hero: HeroData = {
  title: "MUDANZAS Y CARGA\nSIN COMPLICACIONES",//"TRANSPORTE \nDE CARGA",
  tagline: "Entregamos mientras tú avanzas",//"Soluciones logísticas confiables",
  description: "Traslada tu vida o negocio en Bogotá en horas, no días. Seguimiento en tiempo real, equipo experto y 98% de satisfacción garantizada.",
    //"Mudanzas, carga y encomiendas en Bogotá y toda Colombia. Servicio rápido, seguro y sin complicaciones.",
  slides: [
    {
      src: "/images/hero/bodega.jpg",
      alt: "Bodega",
      title: "BODEGA",
    },
    {
      src: "/images/hero/encomiendas.jpg",
      alt: "Encomiendas",
      title: "ENCOMIENDAS", 
    },
    {
      src: "/images/hero/montacarga.jpg",
      alt: "Carga especializada",
      title: "CARGA",
    },
    {
      src: "/images/hero/mudanza.jpg",
      alt: "Mudanzas",
      title: "MUDANZAS",
    },
    
    
  ],

  badges: [
    // { icon: "clock", label: "Disponible 24/7" },
    { icon: "global", label: "Cobertura nacional" },
    { icon: "security", label: "Transporte seguro" },
    { icon: "fast", label: "Entrega rapida" }
  ],
  
  cta: {
    primary: {
      label: "Cotizar",
      href: "#contacto",
    },
    secondary: {
      label: "Whatsapp",
      href: "https://wa.me/573132129686",
    },
  },
}

// ========= SERVICES =========
export const services: ServicesData = {
  title: "Nuestros servicios",
  subtitle: "Soluciones de transporte adaptadas a tus necesidades",
  items: [
    {
      id: "mudanzas",
      title: "Mudanzas",
      description:
        "Mudarse no tiene que ser estrés! Nosotros embalamos, cargamos y desembalamos. Protegemos tus muebles con tecnología de amortiguación y entregas el mismo día en Bogotá.", //"Trasladamos tus pertenencias de forma segura y eficiente.",
      image: {
        src: "/images/services/mudanza.jpg",
        alt: "Servicio de mudanzas"
      },
      icon: "moving"
    },
    {
      id: "carga",
      title: "Carga especializada",
      description:
        "Desde líneas blancas hasta maquinaria sensible. Con polizas de aseguramiento y seguimiento GPS. Tu carga, nuestro compromiso.",//"Transporte de mercancía pesada o delicada con equipo adecuado.",
      image:  {
        src: "/images/services/carga_especial.jpeg",
        alt: "Servicio de carga especializada"
      },
      icon: "cargo"
    },
    {
      id: "encomiendas",
      title: "Encomiendas",
      description:
        "De tu puerta a la puerta destino en 24-48 horas. Rastreo en vivo, embalaje profesional y entrega confirmada. Zero preocupación.",//"Entrega rápida de paquetes a nivel local y nacional.",
      image: {
        src: "/images/services/encomienda.jpeg",
        alt: "Servicio de encomiendas"
      },
      icon: "package"
    },
  ],
}

// ========= ABOUT =========
export const about: AboutData = {
  title: "Somos CyG",
  description:
    "Desde 2019, personas que entienden que trasladar tu negocio o tu vida no es solo mover cosas. Es cuidar lo que importa. Con +5000 entregas en Bogotá y el resto del pais, hemos ganado confianza haciendo bien lo básico: puntuales, cuidadosos, transparentes en precios.",//"En CYG Transportes contamos con años de experiencia brindando soluciones logísticas confiables en Bogotá y todo el país.",
  image: {
    src: "/images/about/equipoMed.png",
    alt: "Equipo de CyG transportes"
  },
  stats: [
    { label: "Clientes confiados", value: "+5000", icon: "users" },
    { label: "Entregas a tiempo", value: "99.2%", icon: "clock" },
    { label: "Satisfaccion", value: "4.9/5", icon: "star" },
  ],
}

// ========= TESTIMONIALS =========
export const testimonials: TestimonialData = {
  title: "Lo que dicen nuestros clientes",
  items: [
    {
      name: "Rocio Delgado",
      role: "Contratista",
      company: "Gobernacion de Santander",
      avatar: "/images/testimonials/AndreaRoa.jpg",
      quote: "Muy agradecida todo salio muy bien con el transporte y entrega de los implementos en cada municipio",
      icon: "quoteIcon"
    },
    {
      name: "Alimentos del Cerro",
      role: "Gerente Logístico",
      company: "Empresa",
      avatar: "/images/logos/delCerro.png",
      quote: "Contratamos CyG para mudanza de bodega (2 toneladas). Cero daños, entrega 24h antes de lo planeado. Hoy los usamos para todo. Son confiables.",
      icon: "quoteIcon"
    },
    {
      name: "Mayra Parada",
      role: "Ama de casa",
      company: "",
      avatar: "/images/testimonials/ShingShang.jpg",
      quote: "Me cambiaba de apartamento y con 1 niño de brazos estaba estresada. CyG llegó puntual a las 7am, embalaron todo con cuidado y a las 3pm estábamos instalados.",
      icon: "quoteIcon"
    },
    {
      name: "colcircuitos",
      role: "Empresa",
      company: "Colcircuitos",
      avatar: "/images/logos/colcircuitos.png",
      quote: "Enviábamos con 3 couriers diferentes. Inconsistentes y caros. Con CyG acoplamos un paquete predeterminado: $50k local, $120k nacional, rastreo incluido. Ahorro mensual: $800k. Confiable.",
      icon: "quoteIcon"
    },
    {
      name: "Wilfredo Holguin",
      role: "Empresario",
      company: "",
      avatar: "/images/testimonials/AndersonSmith.png",
      quote: "Confío en ellos para mis envíos siempre.",
      icon: "quoteIcon"
    }
  ],
}

// ========= CONTACT =========
export const contact: ContactData = {
  title: "Cotiza en 3 minutos",
  description:
    "Sin formularios largos. Solo cuéntanos qué necesitas y en 10 minutos tienes precio fijo, sin sorpresas. WhatsApp o email, como prefieras.",
  methods: [
    {
      label: "WhatsApp",
      href: "https://wa.me/573132129686",
      icon: "whatsapp"
    },    
    {
      label: "Correo",
      href: "mailto:contacto@cygtransportes.com",
      icon: "mail"
    }
  ],
}

// ========= FOOTER =========
export const footer: FooterData = {
  name: "CYG Transportes",
  tagline: "Soluciones logísticas en Bogotá y Colombia",
  quote: "Comprometidos con cada entrega.",
  copyright:
    `© ${new Date().getFullYear()} CYG Transportes · Bogotá, Colombia`,
  social: {
    whatsapp: "https://wa.me/573132129686",
    email: "mailto:contacto@cygtransportes.com",
    facebook: "https://www.facebook.com/profile.php?id=100051715186257",
    instagram: "https://www.instagram.com/cyg_logistica/",
  },
}