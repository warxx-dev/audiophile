'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { AboutSection } from '@/components/about-section'
import { ProductCard } from '@/components/product-card'
import { useSearchParams } from 'next/navigation'
import { useProductsStore } from '@/lib/store/products-store'
import type { Media } from '@/src/payload-types'
import { LayoutGrid, LayoutList } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FiltersPanel from '@/components/ProductsPage/filters-panel'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const { products, fetchProducts, isLoading } = useProductsStore()

  const [priceRange, setPriceRange] = useState([0, 5000])
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')

  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    return categoryParam ? [categoryParam] : []
  })

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false
    }

    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }

    if (showNewOnly && !product.new) {
      return false
    }

    return true
  })

  return (
    <>
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Filters Panel */}
            <FiltersPanel
              priceRange={priceRange}
              selectedCategories={selectedCategories}
              setPriceRange={setPriceRange}
              setSelectedCategories={setSelectedCategories}
              setShowNewOnly={setShowNewOnly}
              showNewOnly={showNewOnly}
            />

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Header con título y botones de vista */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  {categoryParam && (
                    <>
                      <h2 className="text-3xl font-bold uppercase text-black">{categoryParam}</h2>
                      <p className="mt-2 text-zinc-600">
                        {filteredProducts.length} product
                        {filteredProducts.length !== 1 ? 's' : ''} found
                      </p>
                    </>
                  )}
                </div>
                {/* Botones de vista */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`rounded-lg p-2 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-orange-600 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                    title="List view"
                  >
                    <LayoutList className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`rounded-lg p-2 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-orange-600 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                    title="Grid view"
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {/* Vista de productos */}
              {isLoading ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white"
                    >
                      <div className="h-70 animate-pulse bg-zinc-100" />
                      <div className="flex flex-col gap-3 p-6">
                        <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-100" />
                        <div className="h-4 w-full animate-pulse rounded bg-zinc-100" />
                        <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-100" />
                        <div className="mt-2 h-10 w-full animate-pulse rounded bg-zinc-100" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                viewMode === 'list' ? (
                  <div className="space-y-32">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
                      >
                        {/* Product Image */}
                        <div className="relative h-70 overflow-hidden bg-zinc-100">
                          <Image
                            src={
                              typeof product.image === 'object'
                                ? ((product.image as Media).url ?? '')
                                : ''
                            }
                            alt={product.name}
                            fill
                            className="object-contain p-8 transition-transform group-hover:scale-105"
                          />
                          {product.new && (
                            <span className="absolute left-4 top-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold uppercase text-white">
                              New
                            </span>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="mb-2 text-lg font-bold uppercase text-black">
                            {product.name}
                          </h3>
                          <p className="mb-4 line-clamp-2 flex-1 text-sm text-zinc-600">
                            {product.description}
                          </p>
                          <p className="mb-4 text-lg font-bold text-black">
                            ${product.price.toLocaleString()}
                          </p>
                          <Link href={`/products/${product.id}`} className="w-full">
                            <Button
                              size="lg"
                              className="w-full text-sm font-bold uppercase tracking-wider"
                            >
                              See Product
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center py-20">
                  <p className="text-xl text-zinc-600">No products found matching your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
    </>
  )
}
