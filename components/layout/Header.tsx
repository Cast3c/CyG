"use client"

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { header } from '@/data/Index'
import { icons } from '@/lib/icons'
const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 ${scrolled ? 'bg-white/50 backdrop-blur-lg shadow-sm': 'bg-transparent'}`}>
        <div className="mx-auto px-6 py-3 flex items-center justify-between -blur-md ">

        {/* LOGO */}
        <Link href="/" className="relative w-12 h-12 shadow-xl rounded-full border-2 border-black/10">
          {header.logo && (
            <Image 
                src={header.logo.src}
                alt={header.logo.alt}
                fill
                sizes="(max-width: 768px) 100px, 120px"
                className="object-contain rounded-full shadow-xl"
            />
          )}
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-12 text-sm">
          {header.navLinks.map((link) => {
            const Icon = (link.icon && (icons[link.icon]))
            return (
                <Link 
                    key={link.key}
                    href={link.href}
                >
                  {Icon && <Icon className="md:hidden w-5 h-5" />}
                  <span className={`text-sm font-semibold  hover:text-red-500 ${
                    scrolled ? 'text-neutral-900 text-lg font-black' : 'text-neutral-500'
                  }`}>{link.label}</span>
                </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/57XXXXXXXXXX"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm"
          >
            
            WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#cobertura" onClick={() => setOpen(false)}>Cobertura</a>
          <a href="#testimonios" onClick={() => setOpen(false)}>Testimonios</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>

          <a
            href="https://wa.me/57XXXXXXXXXX"
            className="block bg-green-500 text-white text-center py-2 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

export default Header