import { z } from 'zod';

export const SignInDtoSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export type SignInDto = z.infer<typeof SignInDtoSchema>;
