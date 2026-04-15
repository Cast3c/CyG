import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyG Transportes | Mudanzas, Carga y Encomiendas en Bogotá y Colombia",
  description:
    "Servicio de mudanzas, carga especializada y encomiendas en Bogotá, Medellín y toda Colombia. Rastreo en vivo, equipo profesional, 98% satisfacción. Cotiza gratis.",
  
  keywords: [
    "mudanzas bogotá",
    "transporte de carga",
    "encomiendas colombia",
    "mudanzas medellin",
    "servicio logístico"
  ],

  alternates: {
    canonical: "https://cygtransportes.com",
  },

  openGraph: {
    title: "CyG - Transporte de Confianza en Colombia",
    description:
      "Mudanzas, carga y encomiendas con rastreo en vivo. Entrega segura, rápida, sin complicaciones.",
    url: "https://cygtransportes.com", // 👈 recomendable agregarlo
    images: [
      {
        url: "https://cygtransportes.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CyG Transportes - Mudanzas y Carga",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CyG Transportes",
    description: "Mudanzas y carga en Colombia con rastreo en vivo",
    images: ["https://cygtransportes.com/images/og-image.jpg"],
  },
  other: {
    "schema:LocalBusiness": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CyG Transportes",
      "description": "Servicio de mudanzas y carga en Colombia",
      "url": "https://cygtransportes.com",
      "telephone": "+573132129686",
      "email": "contacto@cygtransportes.com",
      "areaServed": ["Bogotá", "Medellín", "Cali", "Colombia"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "247"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "addressCountry": "CO"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100051715186257",
        "https://www.instagram.com/cyg_logistica/"
      ]
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
