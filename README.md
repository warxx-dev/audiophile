## Audiophile – Tienda de audio

Aplicación e‑commerce inspirada en Audiophile para la venta de productos de audio premium (audífonos, parlantes y earphones), construida con Next.js 15 y Payload CMS 3 como panel de administración y API.

La app ofrece un catálogo navegable, sistema de carrito y favoritos persistentes, flujo de checkout con validación y una interfaz moderna y responsive.

## Resumen del proyecto

- Frontend público en Next.js (App Router) para listar, filtrar y detallar productos.
- Backend y panel de administración con Payload CMS para gestionar usuarios, media y productos.
- Persistencia de carrito y favoritos en el navegador usando Zustand + localStorage.
- Flujo de compra con resumen del pedido y preparación para pago vía Stripe.

## Funcionalidades principales

- **Catálogo de productos**
  - Listado de productos con diseño responsive.
  - Página de detalle con descripción, precio, galería de imágenes, características (features) y contenido de la caja (inTheBox).
  - Sección de productos relacionados en la vista de detalle.

- **Filtros y exploración**
  - Filtro por rango de precio mediante slider.
  - Filtro por categoría (headphones, speakers, earphones).
  - Opción para mostrar solo productos marcados como "new".

- **Carrito de compras**
  - Carrito desplegable desde el header con contador de ítems.
  - Añadir productos desde la ficha de producto y desde favoritos.
  - Actualizar cantidades, eliminar productos y vaciar el carrito.
  - Cálculo automático de subtotal y total.

- **Favoritos**
  - Añadir y quitar productos de la lista de favoritos.
  - Página dedicada de favoritos con tarjetas de producto.
  - Posibilidad de mover productos de favoritos al carrito.
  - Persistencia en localStorage (se mantiene entre sesiones).

- **Checkout**
  - Formulario de checkout con validación usando Zod (nombre, email, dirección, país).
  - Resumen del pedido con productos, subtotal, envío fijo y total.
  - Botón para continuar con el flujo de pago (Stripe).

- **Panel de administración (Payload)**
  - Gestión de usuarios (colección `Users`).
  - Gestión de media (colección `Media`) con subida de imágenes.
  - Gestión de productos (colección `Products`) con campos para nombre, precio, categoría, si es nuevo, descripción, imagen principal, galería, features e items incluidos en la caja.

## Habilidades demostradas

- **Frontend con React/Next.js**
  - Uso de Next.js 15 (App Router) y componentes server/client.
  - Composición de layouts y secciones (home, productos, detalle, checkout, favoritos).
  - Componentes reutilizables de UI (botones, inputs, popovers, sliders, etc.).

- **Gestión de estado y UX**
  - Manejo de estado global con Zustand para carrito y favoritos.
  - Persistencia en localStorage mediante middlewares de Zustand.
  - Feedback al usuario mediante toasts (sonner) y estados visuales.

- **Validación y formularios**
  - Formularios con React Hook Form.
  - Validación declarativa con Zod (schema de checkout).

- **Backend y CMS con Payload**
  - Definición de colecciones tipadas en Payload (Users, Media, Products).
  - Configuración de base de datos SQLite con el adapter oficial.
  - Integración de almacenamiento de media con Vercel Blob.

- **Testing y calidad**
  - Pruebas end‑to‑end con Playwright.
  - Pruebas de integración con Vitest + Testing Library.
  - Configuración de ESLint y Prettier.

## Tecnologías utilizadas

- **Frontend**
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS 4
  - Shadcn (checkbox, dialog, navigation-menu, popover, select, slider…)
  - Lucide React (iconos)

- **Estado y formularios**
  - Zustand (+ `persist` middleware)
  - React Hook Form
  - Zod (validación de esquemas)

- **Backend / CMS**
  - Payload CMS 3
  - @payloadcms/db-sqlite
  - @payloadcms/richtext-lexical
  - @payloadcms/storage-vercel-blob

- **Pagos y servicios externos**
  - Stripe (SDK de cliente y servidor)
  - Vercel Blob para almacenamiento de imágenes

- **Testing y tooling**
  - Playwright (@playwright/test)
  - Vitest
  - @testing-library/react
  - ESLint, Prettier

## Puesta en marcha (desarrollo)

1. Instalar dependencias:
   ```bash
   pnpm install
   ```
2. Crear el archivo de variables de entorno (si existe `.env.example`):
   ```bash
   cp .env.example .env
   ```
   y completar las variables necesarias (por ejemplo `PAYLOAD_SECRET`, `DATABASE_URI`, `DATABASE_TOKEN`, `BLOB_READ_WRITE_TOKEN`, claves de Stripe, etc.).
3. Levantar el entorno de desarrollo:
   ```bash
   pnpm dev
   ```
4. Abrir el frontend en `http://localhost:3000`.
5. Acceder al panel de administración de Payload en la ruta `/admin` para crear el usuario admin inicial y empezar a cargar productos.

## Scripts útiles

- `pnpm dev` – Ejecuta el entorno de desarrollo.
- `pnpm build` – Genera el build de producción.
- `pnpm start` – Levanta la app en modo producción.
- `pnpm test` – Ejecuta pruebas de integración y E2E.
- `pnpm test:int` – Solo pruebas de integración (Vitest).
- `pnpm test:e2e` – Solo pruebas end‑to‑end (Playwright).
