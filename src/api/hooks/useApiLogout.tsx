import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { endpoints } from '../endpoints';

export function useApiLogout() {
  const endpoint = endpoints.signOut;

  function mutationFn() {
    return api.post(endpoint);
  }

  return useMutation({
    mutationFn,
  });
}
