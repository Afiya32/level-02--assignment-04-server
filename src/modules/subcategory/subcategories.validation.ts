import { z } from "zod";

export const subcategorySchema = z.object({
  name: z.string().nonempty("Subcategory name is required"),
  category: z.string().nonempty("Category is required"), // Expecting ObjectId as a string
  description: z.string().optional(),
});
