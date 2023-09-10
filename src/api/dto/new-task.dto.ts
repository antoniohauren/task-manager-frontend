import { z } from 'zod';

export const NewTaskDtoSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().optional(),
});

export type NewTaskDto = z.infer<typeof NewTaskDtoSchema>;
