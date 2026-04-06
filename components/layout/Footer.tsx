"use client"

import Link from "next/link"
import { footer } from "@/data/Index"
import { icons } from "@/lib/icons"

const Footer = () => {
  return (
    <footer className="mt-24 bg-neutral-900 text-neutral-300">

      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              {footer.name}
            </h3>

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              {footer.tagline}
            </p>

            <p className="mt-4 text-sm italic text-neutral-500">
              {footer.quote}
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Navegación
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT / CTA */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Contacto
            </h4>

            <div className="space-y-3 text-sm">

              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/573132129686"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              >
                {icons.whatsapp && <icons.whatsapp className="w-4 h-4" />}
                WhatsApp
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${footer.social.email}`}
                className="flex items-center gap-2 hover:text-white transition"
              >
                {icons.mail && <icons.mail className="w-4 h-4" />}
                Correo
              </a>

              {/* FACEBOOK */}
              {footer.social.facebook && (
                <a
                  href={footer.social.facebook}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  {icons.facebook && <icons.facebook className="w-4 h-4" />}
                  Facebook
                </a>
              )}

              {/* INSTAGRAM */}
              {footer.social.instagram && (
                <a
                  href={footer.social.instagram}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  {icons.instagram && <icons.instagram className="w-4 h-4" />}
                  Instagram
                </a>
              )}

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px bg-gradient-to-r from-neutral-700 to-transparent" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">

          <p>
            © {new Date().getFullYear()} {footer.name}. Todos los derechos reservados.
          </p>

          <p>
            {footer.tagline}
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer