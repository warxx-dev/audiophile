import { z } from 'zod'

export const checkoutSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters' })
    .max(200, { message: 'Address must be less than 200 characters' }),
  country: z
    .string()
    .min(2, { message: 'Country must be at least 2 characters' })
    .max(100, { message: 'Country must be less than 100 characters' }),
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>
