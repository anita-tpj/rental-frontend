import { z } from "zod";

export const UserSchema = z.object({
    userName: z.string().min(1, "User name is required").max(50, "Maximum 20 characters is allowed"),
    email: z.email(),
    password: z.string().min(8, "Password has tobe at least 8 characters long"),
    isAdmin: z.boolean()
});

export type UserFormData = z.infer<typeof UserSchema>;