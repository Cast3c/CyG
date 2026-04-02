# CYG Transportes Website

Sitio web corporativo de presentación de servicios logísticos y de transporte para CYG Transportes, desarrollado con Next.js (App Router).

## 🔍 Visión general del proyecto

- Tipo: landing page / sitio corporativo
- Sector: logística y transporte de carga, mudanzas, encomiendas y bodegas
- Idioma de la UI: Español
- Contenido basado en definiciones de datos en `data/Index.ts`
- Secciones:
  - `Header` (menú con anclas + CTA WhatsApp)
  - `Hero` (slider + mensajes de valor + CTA)
  - `Services` (mudanzas, carga especializada, encomiendas)
  - `Testimonials` (opiniones de clientes)
  - `About` (acerca de CYG, experiencia + métricas)
  - `Contact` (WhatsApp, correo)
  - `Footer` (datos de empresa + redes)

## 🧩 Tecnologías usadas

- Next.js 14+ (App Router)
- React
- TypeScript
- CSS (provablemente Tailwind CSS o estilos propios en `globals.css`, según estructura del proyecto)
- Archivos de datos: `data/Index.ts`
- Tipos: `types/Index.ts`

## 🚀 Ejecutar en local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000` en el navegador.

## 🛠️ Estructura del código

- `app/page.tsx`: ensambla secciones del home
- `components/layout/Header.tsx`: navegación
- `components/sections/*`: componentes visuales para cada bloque de la página
- `data/Index.ts`: contenido editable (textos, imágenes, enlaces, CTA, testimoniales)
- `lib/icons.ts`: sistema de íconos (posible mapeo de iconos dinámicos)
- `public/images/`: imágenes del sitio

## ✨ Personalización

Para actualizar la información del sitio (texto, imágenes, enlaces, WhatsApp, etc.), editar en `data/Index.ts`:
- `header`
- `hero`
- `services`
- `about`
- `testimonials`
- `contact`
- `footer`

## 🧪 Producción

Construir:

```bash
npm run build
npm start
```

O con Vercel (recomendado): despliegue automático desde el repositorio.

## 📄 Notas

- Los valores de contacto actuales están en el archivo de datos (`wa.me/573001234567`, `contacto@cygtransportes.com`).
- Para añadir nuevas secciones, crear un componente en `components/sections` y importarlo en `app/page.tsx`.
- Este proyecto ya tiene una base adecuada para transformarlo en PWA con mejoras de SEO y i18n si se desea.

---

> Desarrollado como sitio demo corporativo de CYG Transportes.

