import { z } from "zod";

export const GenreSchema = z.object({
  name: z
    .string()
    .min(2, "The genre name must be at least 5 characters long")
    .max(20, "The genre name can be maximum 20 characters long"),
});

export type GenreFormData = z.infer<typeof GenreSchema>;