import { IconName } from '@/lib/icons'

// ========= UTILS =========
export type Slide = {
    src: string
    alt: string
    title: string
}

export type Cta = {
    label: string
    href: string
    icon?: IconName
}

export type Badge = {
    icon: IconName
    label: string
}


// ========= NAVIGATION =========
export type Navlink = {
    key: string
    label: string
    href: string
    icon?: IconName
}

export type HeaderData = {
    logo: {
        src: string
        alt: string
    } 
    navLinks: Navlink[]
    cta: {
        primary: Cta
        secondary?: Cta
    }
}

// ========= HERO =========

export type HeroData = {
    title: string
    tagline: string
    slides: Slide[]
    description: string
    badges?: Badge[]
    cta: {
        primary: Cta
        secondary?: Cta
    }
}

// ========= SERVICES =========
export type Service = {
  id: string
  title: string
  description: string
  icon?: IconName
  image: {
    src: string
    alt: string
  }
}

export type ServicesData = {
  title: string
  subtitle: string
  items: Service[]
}

// ========= ABOUT =========

export type AboutData = {
    title: string
    description: string
    image: {
        src: string
        alt: string
    }
    stats: {
        label: string
        value: string
        icon?: IconName
    }[]
}

// ========= TESTIMONIALS =========
export type Testimonial = {
   name: string
   role: string
   company: string
   avatar: string
   quote: string
   icon: IconName
   img?: {
    src: string
    alt: string
   }
}

export type TestimonialData = {
    title: string
    items: Testimonial[]
}
   
// ========= CONTACT =========
export type ContactMethod = {
    label: string
    href: string
    icon?: IconName
}

export type ContactData = {
    title: string
    description: string
    methods: ContactMethod[]
}

// ========= FOOTER =========
export type FooterData = {
    name: string
    tagline: string
    quote: string
    copyright: string
    social: {
        github?: string
        linkedin?: string
        whatsapp?: string
        email?:string
    }
}
