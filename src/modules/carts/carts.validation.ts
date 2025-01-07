// cart validation

import { z } from 'zod';

export const cartSchema = z.object({
  productId: z.string(),
  productName: z.string(),
  price: z.number(),
  buyerName: z.string(),
  buyerEmail: z.string().email(),
  phone: z.string(),
  address: z.string(),
  productImage: z.string().url(),
  quantity: z.number(),
  totalPrice: z.number()
});