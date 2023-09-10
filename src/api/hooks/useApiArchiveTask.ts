import { useMutation, useQueryClient } from '@tanstack/react-query';
import { endpoints } from '../endpoints';
import api from '../api';

export function useApiArchiveTask(id: string) {
  const qc = useQueryClient();

  const endpoint = endpoints.tasks.archive + id;

  function mutationFn() {
    return api.patch(endpoint);
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
