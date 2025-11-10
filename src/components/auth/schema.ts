import { z } from "zod";

export const AuthSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password has tobe at least 8 characters long"),
});

export type AuthFormData = z.infer<typeof AuthSchema>;
