'use server'

import { getPayload } from 'payload'
import type { Where } from 'payload'
import configPromise from '@payload-config'
import type { Product } from '@/src/payload-types'

/**
 * Obtiene todos los productos del CMS.
 * Opcionalmente filtra por categoría.
 */
export async function getProducts(options?: {
  category?: 'earphones' | 'speakers' | 'headphones'
  limit?: number
  page?: number
  sort?: string
  newOnly?: boolean
}) {
  const payload = await getPayload({ config: configPromise })

  const conditions: Where[] = []

  if (options?.category) {
    conditions.push({ category: { equals: options.category } })
  }

  if (options?.newOnly) {
    conditions.push({ new: { equals: true } })
  }

  const where: Where = conditions.length > 0 ? { and: conditions } : {}

  const result = await payload.find({
    collection: 'products',
    where,
    limit: options?.limit ?? 100,
    page: options?.page ?? 1,
    sort: options?.sort ?? '-createdAt',
    depth: 1, // Incluir relación de imagen
  })

  return result
}

/**
 * Obtiene un producto por su ID.
 */
export async function getProductById(id: number): Promise<Product | null> {
  const payload = await getPayload({ config: configPromise })

  try {
    const product = await payload.findByID({
      collection: 'products',
      id,
      depth: 1,
    })

    return product
  } catch {
    return null
  }
}

/**
 * Obtiene un producto por su nombre (búsqueda parcial).
 */
export async function getProductByName(name: string): Promise<Product | null> {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    where: {
      name: { contains: name },
    },
    limit: 1,
    depth: 1,
  })

  return result.docs[0] ?? null
}

/**
 * Busca productos por texto en nombre o descripción.
 */
export async function searchProducts(query: string) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    where: {
      or: [{ name: { contains: query } }, { description: { contains: query } }],
    },
    depth: 1,
  })

  return result
}
