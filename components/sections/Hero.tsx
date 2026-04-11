'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/data/Index"
import { icons } from "@/lib/icons"

const slides = [
  {src: "/mudanza.jpg", label: "Mudanzas"},
  {src: "/montacarga.jpg", label: "Carga especializada"},
  {src: "/encomiendas.jpg", label: "Encomiendas"},
  {src: "/bodega.jpg", label:"Bodega" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])


  return (
    <section className="w-full mt-18">
      <div className=" mx-auto">

        {/* HERO CARD */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[60vh] md:h-[70vh] lg:aspect-21/9">
          {hero.slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              priority = {index === 0}
            />
          ))}
          {/* Imagen fondo */}
          

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/60" />
          {/* CONTENIDO */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">

            {/* TOP [-webkit-text-stroke:4px_rgba(255,255,255,0.9)]*/}
            <div className="flex flex-col justify-between items-start">
              <h1 className="text-[30px] md:text-[60px] lg:text-[80px] font-black bg-linear-to-b from-white/90 via-white/60 to-white/30  bg-clip-text text-transparent opacity-90 pointer-events-none leading-[0.9] whitespace-pre-line">
                {hero.title}
              </h1>
              <div className="hidden md:flex mt-2 flex-col md:flex-row gap-2 text-white text-sm">
                {hero.badges?.map((badge, index) => {
                  const Icon = icons[badge.icon]
                  return (
                    <span key={index} className='flex items-center gap-1 px-3 py-1 bg-white/30 rounded-full'>
                      <Icon />
                      <span className="md:flex">{badge.label}</span>
                    </span>
                  )
                })}
              </div>
            </div>

            {/* CENTER TEXT */}
            <div>
              <p className="mt-6 text-white/90 max-w-sm text-sm">
                {hero.description}
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">

                {/* Input estilo SaaS */}
                <div className="flex mx-auto md:ml-0 bg-white/30 rounded-full overflow-hidden shadow-lg">
                  <input
                    type="text"
                    placeholder="Cotiza tu servicio en minutos"
                    className="px-4 py-2 text-sm outline-none w-48 md:w-64 bg-transparent 
                    text-white placeholder-white"
                  />
                  <button className="bg-red-600 text-white px-4 py-2 text-sm font-semibold">
                    {hero.cta.primary.label}
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={hero.cta.secondary?.href}
                  target="_blank"
                  className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold text-center"
                >
                  {hero.cta.secondary?.label}
                </a>
              </div>
            </div>

            {/* FLOATING CARD */}
            {/* <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-3 w-40 md:w-48">
              <p className="text-xs text-gray-500">Servicios</p>
              <p className="text-sm font-semibold text-gray-800">
                Mudanzas & Carga
              </p>
              <div className="mt-2 flex gap-1">
                <span className="w-15 h-10 bg-gray-200 rounded-lg overflow-hidden">
                  
                </span>
                <span className="w-15 h-10 bg-gray-200 rounded-lg overflow-hidden">
                  
                </span>
                <span className="w-15 h-10 bg-gray-200 rounded-lg overflow-hidden">
                  
                </span>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}