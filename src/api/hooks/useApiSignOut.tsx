import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { endpoints } from '../endpoints';

export function useApiSignOut() {
  const endpoint = endpoints.auth.signOut;

  function mutationFn() {
    return api.post(endpoint);
  }

  return useMutation({
    mutationFn,
  });
}
