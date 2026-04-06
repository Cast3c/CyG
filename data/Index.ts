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
      href: "https://wa.me/573001234567",
      icon: "whatsapp"
    },
  },
}

// ========= HERO =========
export const hero: HeroData = {
  title: "TRANSPORTE \nDE CARGA",
  tagline: "Soluciones logísticas confiables",
  description:
    "Mudanzas, carga y encomiendas en Bogotá y toda Colombia. Servicio rápido, seguro y sin complicaciones.",
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
        "Trasladamos tus pertenencias de forma segura y eficiente.",
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
        "Transporte de mercancía pesada o delicada con equipo adecuado.",
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
        "Entrega rápida de paquetes a nivel local y nacional.",
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
  title: "Sobre Nosotros",
  description:
    "En CYG Transportes contamos con años de experiencia brindando soluciones logísticas confiables en Bogotá y todo el país.",
  image: {
    src: "/images/about/equipoMed.png",
    alt: "Equipo de CyG transportes"
  },
  stats: [
    { label: "Años de experiencia", value: "+5", icon: "calendar" },
    { label: "Servicios realizados", value: "+200", icon: "check" },
    { label: "Clientes satisfechos", value: "98%", icon: "users" },
  ],
}

// ========= TESTIMONIALS =========
export const testimonials: TestimonialData = {
  title: "Lo que dicen nuestros clientes",
  items: [
    {
      name: "Rocio Delgado",
      role: "Cliente",
      company: "",
      avatar: "/images/testimonials/AndreaRoa.jpg",
      quote: "Muy agradecida todo salio muy bien con la mudanza.",
      icon: "quoteIcon"
    },
    {
      name: "Alimentos del Cerro",
      role: "Empresa",
      company: "Del cerro",
      avatar: "/images/logos/delCerro.png",
      quote: "Excelente servicio, muy puntuales y cuidadosos.",
      icon: "quoteIcon"
    },
    {
      name: "Mayra Parada",
      role: "Ama de casa",
      company: "",
      avatar: "/images/testimonials/ShingShang.jpg",
      quote: "Muchas gracias todo salio perfecto.",
      icon: "quoteIcon"
    },
    {
      name: "colcircuitos",
      role: "Empresa",
      company: "Colcircuitos",
      avatar: "/images/logos/colcircuitos.png",
      quote: "Excelente, muy buenos en lo que hacen.",
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
  title: "Contáctanos",
  description:
    "Solicita tu cotización o recibe asesoría personalizada.",
  methods: [
    {
      label: "WhatsApp",
      href: "https://wa.me/573001234567",
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
    whatsapp: "https://wa.me/573001234567",
    email: "mailto:contacto@cygtransportes.com",
    facebook: "https://www.facebook.com/profile.php?id=100051715186257",
    instagram: "https://www.instagram.com/cyg_logistica/",
  },
}