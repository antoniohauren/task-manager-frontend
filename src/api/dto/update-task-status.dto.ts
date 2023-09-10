import { z } from 'zod';

export const UpdateTaskStatusDtoSchema = z.object({
  status: z.enum(['TODO', 'DOING', 'DONE']),
});

export type UpdateTaskStatusDto = z.infer<typeof UpdateTaskStatusDtoSchema>;
