import { useMutation, useQueryClient } from '@tanstack/react-query';
import { endpoints } from '../endpoints';
import { UpdateTaskStatusDto } from '../dto/update-task-status.dto';
import api from '../api';

export function useApiUpdateTaskStatus(id: string) {
  const qc = useQueryClient();

  const endpoint = endpoints.tasks.updateStatus + id;

  function mutationFn(data: UpdateTaskStatusDto) {
    return api.patch(endpoint, data);
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
      qc.refetchQueries({
        queryKey: ['tasks'],
      });
    },
  });
}
