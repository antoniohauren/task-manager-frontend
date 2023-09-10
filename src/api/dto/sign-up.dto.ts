import { z } from 'zod';

export const SignUpDtoSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export type SignUpDto = z.infer<typeof SignUpDtoSchema>;
