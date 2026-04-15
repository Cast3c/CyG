"use client"

import Image from "next/image"
import { about } from "@/data/Index"
import { icons } from "@/lib/icons" // asumiendo que ya tienes esto

const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-100 rounded-4xl">
      <div className="max-w-7xl mx-auto px-4">
        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXTO */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-light text-neutral-600 leading-[0.9]">
                {about.title}
              </h2>
              <div className="flex-1 h-px bg-linear-to-r from-red-700 to-transparent" />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg text-neutral-700">{about.description}</p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {about.stats.map((stat, i) => {
                const Icon = stat.icon && icons[stat.icon];
                return (
                  <div key={i} className="p-px bg-neutral-300 rounded-xl">
                    <div className="bg-white rounded-xl p-4 flex flex-col items-center text-center gap-2">
                      {/* ICON */}
                      <div className="text-red-600 text-xl">
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>

                      {/* VALUE */}
                      <p className="text-2xl font-bold">{stat.value}</p>

                      {/* LABEL */}
                      <p className="text-xs text-neutral-500">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative w-full h-100 md:h-125">
            <Image
              src="/images/about/equipoMed.png"
              alt="Equipo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
            />

            {/* overlay sutil */}
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About