import { z } from "zod";

export const duaSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  category: z.string(),
});
