import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { endpoints } from '../endpoints';
import { TaskDomain } from '../domain/task.domain';

export function useApiArchivedTasks() {
  const endpoint = endpoints.tasks.archivedTasks;

  function queryFn() {
    return api.get<TaskDomain[]>(endpoint).then(({ data }) => data);
  }

  return useQuery({
    queryFn,
    queryKey: ['archivedTasks'],
  });
}
