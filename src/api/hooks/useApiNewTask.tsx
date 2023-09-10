import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { NewTaskDto } from '../dto/new-task.dto';
import { endpoints } from '../endpoints';

export function useApiNewTask() {
  const endpoint = endpoints.tasks.newTask;

  function mutationFn(data: NewTaskDto) {
    return api.post(endpoint, data);
  }

  return useMutation({
    mutationFn,
  });
}
