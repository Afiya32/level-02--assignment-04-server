// validation
import { z } from "zod";

const userSignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const userLoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

export const userValidation = {
  userSignupSchema,
  userLoginSchema
};
