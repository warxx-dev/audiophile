## Audiophile – Audio Gear

An e-commerce application inspired by Audiophile for selling premium audio gear (headphones, speakers, and earphones).
Built with Next.js 15 and Payload CMS 3 providing the admin panel and APIs.

It features a navigable catalog, persistent cart and favorites, a full checkout flow with validation, all wrapped in a modern, responsive UI.

## Project Overview

- Public Frontend in Next.js (App Router) for listing, filtering, and deeply detailed product pages.
- Backend & CMS powered by Payload CMS to manage users, media, and products.
- State Persistence for cart and favorites using Zustand + localStorage.
- Checkout Flow showcasing an order summary and preparing for Stripe payments.

## Key Features

- **Product Catalog:**
  - Fully responsive grid rendering.
  - Detail page with rich descriptions, price, image gallery, features, and an "In The Box" breakdown.
  - Dynamic "Related Products" section on detail cards.

- **Advanced Filters:**
  - Filter by price leveraging a custom slider.
  - Filter by categorized products (headphones, speakers, earphones).
  - Explicit option to highlight "New" products.

- **Smart Cart:**
  - Slide-out/popover cart available globally from the header alongside an item counter.
  - Options to add items directly from product cards or favorite lists.
  - Update quantities, trash items individually, and clear the complete cart.
  - Autocalculated subtotal handling and shipping rules.

- **Favorites:**
  - Private wishlist capabilities to toggle favorite assets.
  - Dedicated customized favorites page showing product cards.
  - Fast-action buttons to transfer favorites straight into the cart.
  - Persists gracefully within local browser storage.

- **Validated Checkout:**
  - Integrated Zod schema powering React Hook Form logic ensuring (name, email, address, country) sanity.
  - Summary section breaking down line items, cart subtotal, rigid shipping fees, and an aggregate total.
  - Continues naturally towards generic external payment gates (e.g. Stripe checkout).

- **Admin Panel (Payload):**
  - Smooth user administration (`Users` collection).
  - Advanced media bucket management (`Media` collection) using external blob storage.
  - Robust product modeling (`Products` collection) wrapping arrays, image relations, rich text and toggles easily manageable via GUI.

## Demonstrated Skills

- **Frontend with React / Next.js:**
  - Using Next.js 15 (App Router paradigm) separating elegantly Server vs Client components.
  - Composing solid aesthetic layouts (home, catalog, detailed views, checkout, favorites).
  - Constructing granular, accessible Radix UI parts gracefully via Tailwind 4 snippets.

- **State & UX:**
  - Fluid global state architectures with Zustand preventing prop-drilling contexts.
  - `persist` middleware automatically serializing required stores.
  - Immediate user feedback flows using tailored toasts (sonner).

- **Validation & Forms:**
  - Managing forms strictly typing variables via React Hook Form.
  - Declarative constraints enforced through Zod schemas.

- **Backend & CMS with Payload:**
  - Designing rigid, strongly typed collections (Users, Media, Products).
  - Powering the local core leveraging robust official SQLite database adapters.
  - Offloading media seamlessly using the `@payloadcms/storage-vercel-blob` plugin workflow.

- **Testing & Quality:**
  - E2E automated test specs using Playwright.
  - Component and API integration using Vitest + Testing Library principles.
  - Strict formatting pipelines matching ESLint and Prettier configs.

## Technologies Used

- **Frontend:**
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS 4
  - Radix UI primitives (checkbox, dialog, navigation-menu, popover, select, slider)
  - Lucide React (feather icons suite)

- **State & Forms:**
  - Zustand (w/ persist middleware)
  - React Hook Form
  - Zod (schema validations)

- **Backend / CMS:**
  - Payload CMS 3
  - @payloadcms/db-sqlite
  - @payloadcms/richtext-lexical
  - @payloadcms/storage-vercel-blob

- **Payments & External:**
  - Stripe SDK (server instances & frontend injections)
  - Vercel Blob integrations

- **Testing & Tooling:**
  - Playwright
  - Vitest
  - @testing-library/react
  - ESLint, Prettier

## Running Locally

1. Install all required dependencies:
   ```bash
   pnpm install
   ```
2. Duplicate the environment variables config:
   ```bash
   cp .env.example .env
   ```
   *Make sure you provide the proper constants like `PAYLOAD_SECRET`, `DATABASE_URI`, `DATABASE_TOKEN`, `BLOB_READ_WRITE_TOKEN`, plus any requisite Stripe IDs.*
3. Boot the local development server:
   ```bash
   pnpm dev
   ```
4. Access the main frontend layout visiting `http://localhost:3000`.
5. Enter the generic payload administration via `/admin` interface to initialize the default administrative user and feed products inside your local snapshot.

## Useful Scripts

- `pnpm dev` – Fires up the generic development engine.
- `pnpm build` – Bundles the full Next/Payload production build tree.
- `pnpm start` – Fires up the standalone previously compiled production server.
- `pnpm test` – Runs both Integration pipelines and heavy E2E tests strictly.
- `pnpm test:int` – Focus heavily limiting runs onto Vitest assertions.
- `pnpm test:e2e` – Focus closely evaluating broad Playwright scenarios.
