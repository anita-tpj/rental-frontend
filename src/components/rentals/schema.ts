import { z } from "zod";

export const RentalSchema = z.object({
  customerId: z.string().min(24),
  movieId: z.string().min(24)
});

export type RentalFormData = z.infer<typeof RentalSchema>;