import { z } from "zod";

export const CustomerSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(20, "Maximum 20 characters is allowed"),
  phone: z
    .string()
    .regex(/^\d+$/, "Digits only allowed")
    .min(10, "Minimum 10 digits is allowed")
    .max(12, "Maximum 12 digits is allowed"),
  isGold: z.boolean(),
});

export type CustomerFormData = z.infer<typeof CustomerSchema>;