import { z } from 'zod';

export const SignInDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInDto = z.infer<typeof SignInDtoSchema>;
