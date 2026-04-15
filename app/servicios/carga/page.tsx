import Image from "next/image"
import Link from "next/link"
import { icons } from "@/lib/icons"
import Header from "@/components/layout/Header"

export const metadata = {
  title: "Transporte de Carga Especializada en Colombia | CyG Transportes",
  description:
    "Servicio de transporte de carga pesada, frágil y especializada en Bogotá y toda Colombia. Equipos adecuados, seguridad y cumplimiento garantizado.",
  alternates: {
    canonical: "https://cygtransportes.com/servicios/carga",
  },
}

const beneficios = [
  {
    icon: "security",
    title: "Máxima seguridad",
    desc: "Protocolos especializados para carga delicada o de alto valor."
  },
  {
    icon: "cargo",
    title: "Equipos adecuados",
    desc: "Vehículos y herramientas para todo tipo de carga especializada."
  },
  {
    icon: "users",
    title: "Personal capacitado",
    desc: "Equipo con experiencia en manipulación de carga compleja."
  },
]

const proceso = [
  "Análisis del tipo de carga",
  "Plan logístico personalizado",
  "Preparación y aseguramiento",
  "Transporte especializado",
  "Entrega controlada",
]

const faqs = [
  {
    q: "¿Qué tipo de carga transportan?",
    a: "Transportamos maquinaria, equipos industriales, carga frágil, mercancía pesada y más."
  },
  {
    q: "¿La carga va asegurada?",
    a: "Sí, aplicamos protocolos de seguridad y opciones de cobertura según el servicio."
  },
  {
    q: "¿Hacen transporte nacional?",
    a: "Sí, cubrimos rutas en toda Colombia."
  }
]

const CargaPage = () => {
  return (
    <>
      <Header />
      <main className="mx-auto py-2 px-4 mt-24">

        {/* HERO */}
        <section className="relative rounded-3xl overflow-hidden h-[60vh]">
          <Image
            src="/images/services/carga/planta-electrica.jpg"
            alt="Transporte de carga especializada"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 text-white">
              <h1 className="text-3xl md:text-6xl font-bold">
                Carga especializada sin riesgos
              </h1>
              <p className="mt-4 max-w-xl text-lg text-neutral-200">
                Transportamos maquinaria, equipos y carga delicada con total seguridad y precisión.
              </p>

              <Link
                href="https://wa.me/573132129686"
                target="_blank"
                className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Cotizar por WhatsApp
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
                Transporte especializado para tu carga
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                En CyG Transportes ofrecemos soluciones logísticas para carga que requiere
                condiciones especiales. Nos adaptamos a las necesidades de cada cliente,
                garantizando seguridad, eficiencia y cumplimiento.
              </p>
            </div>

            <div className="w-100 h-100 rounded-full overflow-hidden">
              <Image
                src="/images/services/carga/elementos-radioactivos.jpg"
                alt="Carga especializada"
                width={250}
                height={250}
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
              ¿Necesitas transportar carga especializada?
            </h2>
            <p className="mt-2 text-red-100">
              Contáctanos y recibe asesoría inmediata.
            </p>

            <Link
              href="https://wa.me/573001234567"
              target="_blank"
              className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold"
            >
              Hablar por WhatsApp
            </Link>
          </div>

        </section>
      </main>
    </>
  )
}

export default CargaPage