import { z } from "zod";

export const MovieSchema = z.object({
    title: z.string()
    .min(2,'The title name must be at least 2 characters long')
    .max(50, 'The title can be maximum 50 characters long'),
    numberInStock:z.coerce.number<number>().min(0).max(10),
    dailyRentalRate:z.coerce.number<number>().min(0).max(20),
    genreId: z.string(),
});

export type MovieFormData = z.infer<typeof MovieSchema>;