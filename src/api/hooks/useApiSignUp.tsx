import { useMutation } from '@tanstack/react-query';
import { publicApi } from '../api';
import { endpoints } from '../endpoints';
import { User } from '../../stores/userStore';
import { SignUpDto } from '../dto/sign-up.dto';

export function useApiSignUp() {
  const endpoint = endpoints.signUp;

  function mutationFn(data: SignUpDto) {
    return publicApi.post<User>(endpoint, data);
  }

  return useMutation({
    mutationFn,
  });
}
