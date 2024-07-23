import { z } from "zod";

export const UserFormValidation = z.object({
    username: z.string()
                .min(2, {message: "Username must be at least 2 characters."})
                .max(50, {message: "Username must not be more than 50 characters."}),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    
  })