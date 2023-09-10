import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { endpoints } from '../endpoints';
import { TaskListDomain } from '../domain/task.domain';

export function useApiTasks() {
  const endpoint = endpoints.tasks.tasks;

  function queryFn() {
    return api.get<TaskListDomain>(endpoint).then(({ data }) => data);
  }

  return useQuery({
    queryFn,
    queryKey: ['tasks'],
  });
}
