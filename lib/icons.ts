import { FaHouse, FaWarehouse, FaPeopleCarryBox, FaBoxOpen, FaMessage, FaWhatsapp, FaEnvelope, FaPhone, FaFile, FaClock, FaTruckRampBox, FaBox, FaBoxesPacking, FaShieldHalved, FaBolt, FaUsers, FaCircleCheck, FaQuoteLeft, FaMapPin, FaFacebook, FaInstagram, FaTiktok, FaCalendarCheck, FaBars  } from "react-icons/fa6";
import { GiColombia } from "react-icons/gi";

export const icons = {
    // NAV 
    home: FaHouse,
    services: FaPeopleCarryBox,
    about: FaBoxOpen,
    contact: FaMessage,
    menu: FaBars,

    // CTA
    whatsapp: FaWhatsapp,
    mail: FaEnvelope,
    phone: FaPhone,
    quote: FaFile,

    // HERO BADGES
    clock: FaClock,
    security: FaShieldHalved,
    fast: FaBolt,
    global: GiColombia,

    // SERVICES
    moving: FaBoxesPacking,
    cargo: FaTruckRampBox,
    package: FaBox,
    warehouse: FaWarehouse,

    // ABOUT
    calendar: FaCalendarCheck,
    users: FaUsers,
    check: FaCircleCheck,

    // TESTIMONIAL
    quoteIcon: FaQuoteLeft,

    // CONTACT
    location: FaMapPin,

    // SOCIAL
    facebook: FaFacebook,
    instagram: FaInstagram,
    tiktok: FaTiktok
} as const

export type IconName = keyof typeof icons