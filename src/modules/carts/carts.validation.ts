// cart validation

import { z } from 'zod';

export const cartSchema = z.object({
  productId: z.string(),
  productName: z.string(),
  price: z.number().nonnegative(),
  buyerName: z.string(),
  buyerEmail: z.string().email(),
  phone: z.string(),
  address: z.string(),
  productImage: z.string().url(),
  quantity: z.number().int().positive(),
  totalPrice: z.number().nonnegative()
});