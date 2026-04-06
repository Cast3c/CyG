import Image from "next/image"
import { contact } from "@/data/Index"
import { icons } from "@/lib/icons"

const Contact = () => {
  return (
    <section id="contacto" className="mt-24 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-2xl font-light text-start text-neutral-600 leading-[0.9]">
              {contact.title}
            </h1>
            <div className="flex-1 h-px bg-linear-to-r from-red-700 to-transparent" />
          </div>
          <h2 className="mt-12 font-bold text-2xl md:text-5xl lg:text-7xl text-end">
            {contact.description}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-2 ">
            <label className="block text-sm font-semibold text-slate-700">
              Nombre
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />

            <label className="block text-sm font-semibold text-slate-700">
              Correo
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
            />

            <label className="block text-sm font-semibold text-slate-700">
              Mensaje
            </label>
            <textarea
              className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              placeholder="Escribe tu mensaje"
            />

            <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition">
              Enviar mensaje
            </button>
          </div>

          <div className="flex flex-col  py-4 ">
            <div className="flex flex-col justify-between rounded-xl overflow-hidden bg-linear-to-br from-red-700 via-red-600 to-red-500 border border-red-800 p-6 min-h-75">
              <h3 className="text-lg font-semibold text-slate-100 mb-4">
                Atención personalizada
              </h3>
              <p className="text-slate-50 leading-relaxed">
                Para cotizaciones rápidas y seguimiento de envíos, escríbenos
                por WhatsApp o correo. Nuestro equipo responderá en menos de 24
                horas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                {contact.methods.map((method) => {
                  const Icon = icons[method.icon as keyof typeof icons];
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 border bg-slate-100 border-slate-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
                    >
                      {Icon ? (
                        <Icon className="text-green-600 w-5 h-5" />
                      ) : (
                        <span className="w-5 h-5" />
                      )}
                      <span className="font-medium text-slate-700">
                        {method.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact