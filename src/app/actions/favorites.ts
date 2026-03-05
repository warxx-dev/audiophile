'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Product, Media } from '@/src/payload-types'

export interface FavoriteProduct {
  id: number
  name: string
  price: number
  category: Product['category']
  image: string | null
}

/**
 * Serializa un producto a los campos mínimos necesarios para favoritos.
 */
function serializeForFavorite(product: Product): FavoriteProduct {
  const image = typeof product.image === 'object' ? ((product.image as Media).url ?? null) : null

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    image,
  }
}

/**
 * Valida que un producto existe y devuelve los datos necesarios
 * para agregarlo a favoritos en el cliente.
 *
 * Retorna null si el producto no existe.
 */
export async function addFavorite(
  productId: number,
): Promise<{ success: boolean; product: FavoriteProduct | null; error?: string }> {
  const payload = await getPayload({ config: configPromise })

  try {
    const product = await payload.findByID({
      collection: 'products',
      id: productId,
      depth: 1,
    })

    return {
      success: true,
      product: serializeForFavorite(product),
    }
  } catch {
    return {
      success: false,
      product: null,
      error: 'Producto no encontrado',
    }
  }
}

/**
 * Valida que un producto existe y alterna su estado de favorito.
 * Devuelve los datos necesarios para el store del cliente.
 */
export async function toggleFavorite(
  productId: number,
): Promise<{ success: boolean; product: FavoriteProduct | null; error?: string }> {
  return addFavorite(productId)
}

/**
 * Valida múltiples productos por sus IDs y devuelve los que existen.
 * Útil para sincronizar favoritos del localStorage con el estado real del CMS.
 */
export async function validateFavorites(
  productIds: number[],
): Promise<{ validProducts: FavoriteProduct[] }> {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    where: {
      id: { in: productIds },
    },
    depth: 1,
    limit: productIds.length,
  })

  return {
    validProducts: result.docs.map(serializeForFavorite),
  }
}
