import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      // Square thumbnail for cart / previews
      {
        name: 'thumbnail',
        width: 150,
        height: 150,
        position: 'centre',
        withoutEnlargement: true,
      },
      // Mobile — up to 654px wide, height preserves aspect ratio
      {
        name: 'mobile',
        width: 654,
        height: undefined,
        withoutEnlargement: true,
      },
      // Tablet — up to 1024px wide
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        withoutEnlargement: true,
      },
      // Desktop — up to 1440px wide
      {
        name: 'desktop',
        width: 1440,
        height: undefined,
        withoutEnlargement: true,
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}
