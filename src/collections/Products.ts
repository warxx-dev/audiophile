import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Earphones',
          value: 'earphones',
        },
        {
          label: 'Speakers',
          value: 'speakers',
        },
        {
          label: 'Headphones',
          value: 'headphones',
        },
      ],
      required: true,
    },
    {
      name: 'new',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'textarea',
      required: true,
    },
    {
      name: 'inTheBox',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
