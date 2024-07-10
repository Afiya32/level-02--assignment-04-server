//product validation
import { z } from 'zod';

export const productSchema = z.object({
  name: z.string(),
  brand: z.string(),
  quantity: z.number().nonnegative(),
  price: z.number().nonnegative(),
  rating: z.number().min(0).max(5),
  description: z.string(),
  image: z.string().url(),
});