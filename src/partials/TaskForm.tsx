import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewTaskDto, NewTaskDtoSchema } from '../api/dto/new-task.dto';
import Input from '../components/Input';
import Button from '../components/Button';
import { useApiNewTask } from '../api/hooks/useApiNewTask';
import { useNavigate } from 'react-router-dom';

export default function TaskForm() {
  const form = useForm<NewTaskDto>({
    resolver: zodResolver(NewTaskDtoSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const { mutate } = useApiNewTask();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<NewTaskDto> = (data) =>
    mutate(data, {
      onSuccess: () => {
        navigate('/');
      },
    });

  return (
    <form className="w-[300px]" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Title"
            placeholder="Title"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Description"
            placeholder="Description"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Button>Add Task</Button>
    </form>
  );
}
