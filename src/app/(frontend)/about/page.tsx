import { Check, Code2, Database, Layout, Smartphone, Wallet, Zap, Server } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-8">
      {/* Header Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-bold uppercase tracking-wide text-black md:text-5xl">
            Audiophile – Audio Gear
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            An e-commerce application inspired by Audiophile for selling premium audio gear. Built
            with <span className="font-bold text-black">Next.js 15</span> and{' '}
            <span className="font-bold text-black">Payload CMS 3</span> providing the admin panel
            and REST/GraphQL APIs. It features a navigable catalog, persistent cart and favorites, a
            full checkout flow with validation, all wrapped in a modern, responsive UI.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
            Original design provided by{' '}
            <a
              href="https://www.frontendmentor.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-600 hover:underline"
            >
              Frontend Mentor
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Key Points Section */}
      <section className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm lg:p-10">
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wider text-black">
            Project Overview
          </h2>
          <ul className="space-y-6">
            <ListItem icon={<Layout className="text-orange-600" />}>
              <strong>Public Frontend</strong> in Next.js (App Router) for listing, filtering, and
              product details.
            </ListItem>
            <ListItem icon={<Database className="text-orange-600" />}>
              <strong>Backend & CMS</strong> powered by Payload CMS to manage users, media, and
              products.
            </ListItem>
            <ListItem icon={<Smartphone className="text-orange-600" />}>
              <strong>State Persistence</strong> for cart and favorites using Zustand +
              localStorage.
            </ListItem>
            <ListItem icon={<Wallet className="text-orange-600" />}>
              <strong>Checkout Flow</strong> showcasing an order summary and preparing for Stripe
              payments.
            </ListItem>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm lg:p-10">
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wider text-black">
            Key Features
          </h2>
          <ul className="space-y-4 text-zinc-700">
            <li>
              <Check className="mr-2 inline h-5 w-5 text-orange-600" />{' '}
              <strong>Product Catalog:</strong> Fully responsive grid and deeply detailed product
              pages.
            </li>
            <li>
              <Check className="mr-2 inline h-5 w-5 text-orange-600" />{' '}
              <strong>Advanced Filters:</strong> Filter by price (slider), category, and new
              arrivals.
            </li>
            <li>
              <Check className="mr-2 inline h-5 w-5 text-orange-600" />{' '}
              <strong>Smart Cart:</strong> Slide-out cart to add items, calculate subtotals, and
              totals.
            </li>
            <li>
              <Check className="mr-2 inline h-5 w-5 text-orange-600" /> <strong>Favorites:</strong>{' '}
              Private wishlist that persists across browser sessions.
            </li>
            <li>
              <Check className="mr-2 inline h-5 w-5 text-orange-600" />{' '}
              <strong>Validated Checkout:</strong> Zod integration ensures accurate shipping and
              billing data.
            </li>
            <li>
              <Check className="mr-2 inline h-5 w-5 text-orange-600" />{' '}
              <strong>Admin Panel:</strong> Clean, powerful graphical interface for site moderators.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-black">
            Demonstrated Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Frontend / Next.js"
            icon={<Layout className="h-8 w-8 text-orange-600" />}
            skills={[
              'Next.js 15 (App Router)',
              'Server & Client Components',
              'Complex UI Layout Compositions',
              'Radix UI / Accessibility Patterns',
            ]}
          />
          <SkillCard
            title="State & UX"
            icon={<Zap className="h-8 w-8 text-orange-600" />}
            skills={[
              'Global State with Zustand',
              'localStorage persistence',
              'Toast Notifications (Sonner)',
              'Optimized Reactive Flows',
            ]}
          />
          <SkillCard
            title="Validation & Forms"
            icon={<Check className="h-8 w-8 text-orange-600" />}
            skills={[
              'React Hook Form Integration',
              'Declarative Validation with Zod',
              'UX Error Handling',
              'Strict Schema Checking',
            ]}
          />
          <SkillCard
            title="Backend / Payload"
            icon={<Server className="h-8 w-8 text-orange-600" />}
            skills={[
              'Payload CMS 3 Configuration',
              'Strongly Typed Collections',
              'SQLite Database Adapter',
              'Vercel Blob Storage Integration',
            ]}
          />
          <SkillCard
            title="Testing & Tooling"
            icon={<Code2 className="h-8 w-8 text-orange-600" />}
            skills={[
              'E2E Testing with Playwright',
              'Integration tests / Vitest',
              'React Testing Library',
              'Linting & Formatting (ESLint)',
            ]}
          />
        </div>
      </section>

      {/* Tech Stack Area */}
      <section className="rounded-2xl bg-black p-8 text-white lg:p-12">
        <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-wider text-white">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <TechItem label="Next.js 15" />
          <TechItem label="React 19" />
          <TechItem label="TypeScript" />
          <TechItem label="Tailwind CSS 4" />
          <TechItem label="Payload CMS 3" />
          <TechItem label="SQLite" />
          <TechItem label="Zustand" />
          <TechItem label="Zod & RHF" />
          <TechItem label="Radix UI" />
          <TechItem label="Stripe SDK" />
          <TechItem label="Playwright & Vitest" />
          <TechItem label="Vercel Blob" />
        </div>
      </section>
    </main>
  )
}

function ListItem({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
        {icon}
      </div>
      <p className="text-zinc-700 leading-relaxed">{children}</p>
    </li>
  )
}

function SkillCard({
  title,
  icon,
  skills,
}: {
  title: string
  icon: React.ReactNode
  skills: string[]
}) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <div className="rounded-lg bg-orange-50 p-3">{icon}</div>
        <h3 className="text-xl font-bold text-black">{title}</h3>
      </div>
      <ul className="space-y-2 text-zinc-600">
        {skills.map((skill, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-zinc-300" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-center text-sm font-medium text-zinc-300 transition-colors hover:border-orange-600 hover:text-orange-500">
      {label}
    </div>
  )
}
