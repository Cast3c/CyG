import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/Header"
import { icons } from "@/lib/icons"

export const metadata = {
  title: "Encomiendas en Colombia | CyG Transportes",
  description:
    "Servicio de encomiendas puerta a puerta en Bogotá y toda Colombia. Entregas rápidas, seguras y con seguimiento en tiempo real.",
  alternates: {
    canonical: "https://cygtransportes.com/servicios/encomiendas",
  },
}

const beneficios = [
  {
    icon: "services",
    title: "Entrega puerta a puerta",
    desc: "Recogemos y entregamos directamente en la ubicación indicada."
  },
  {
    icon: "clock",
    title: "Envíos rápidos",
    desc: "Entregas en 24 a 48 horas según destino."
  },
  {
    icon: "global",
    title: "Cobertura nacional",
    desc: "Llegamos a múltiples ciudades en Colombia."
  },
]

const proceso = [
  "Solicita tu envío por WhatsApp",
  "Recogemos tu paquete",
  "Transporte seguro",
  "Seguimiento del envío",
  "Entrega en destino",
]

const faqs = [
  {
    q: "¿Cuánto tarda una encomienda?",
    a: "Normalmente entre 24 y 48 horas dependiendo de la ciudad destino."
  },
  {
    q: "¿Puedo enviar paquetes delicados?",
    a: "Sí, ofrecemos embalaje especializado para proteger tus envíos."
  },
  {
    q: "¿Tienen seguimiento del envío?",
    a: "Sí, puedes consultar el estado de tu encomienda en todo momento."
  }
]

const EncomiendasPage = () => {
  return (
    <>
      <Header />

      <main className="mx-auto py-2 px-4 mt-24">

        {/* HERO */}
        <section className="relative rounded-3xl overflow-hidden h-[60vh]">
          <Image
            src="/images/services/encomiendas/encomiendas-televisor.jpeg"
            alt="Servicio de encomiendas"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 text-white">
              <h1 className="text-3xl md:text-6xl font-bold">
                Envíos rápidos y seguros
              </h1>

              <p className="mt-4 max-w-xl text-lg text-neutral-200">
                Transportamos tus paquetes con rapidez, seguridad y seguimiento en tiempo real.
              </p>

              <Link
                href="https://wa.me/573132129686"
                target="_blank"
                className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Enviar ahora por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="max-w-7xl mx-auto px-4 py-20">

          {/* INTRO */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Servicio de encomiendas confiable
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed">
                En CyG Transportes ofrecemos soluciones rápidas para el envío de paquetes y mercancía ligera.
                Garantizamos entregas seguras, eficientes y con seguimiento durante todo el proceso.
              </p>
            </div>

            <div className="w-80 h-80 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/services/encomiendas/encomiendas-fragil.jpg"
                alt="Envío de paquetes"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BENEFICIOS */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {beneficios.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons]

              return (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  {Icon && <Icon className="w-6 h-6 text-red-600 mb-3" />}
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* PROCESO */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              ¿Cómo funciona?
            </h2>

            <ol className="space-y-4">
              {proceso.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
                    {i + 1}
                  </span>
                  <p className="text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Preguntas frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="text-slate-600 text-sm mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="mt-20 bg-red-600 text-white p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold">
              ¿Necesitas enviar algo hoy?
            </h2>

            <p className="mt-2 text-red-100">
              Escríbenos y coordinamos tu envío de inmediato.
            </p>

            <Link
              href="https://wa.me/573132129686"
              target="_blank"
              className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold"
            >
              Enviar por WhatsApp
            </Link>
          </div>

        </section>
      </main>
    </>
  )
}

export default EncomiendasPage