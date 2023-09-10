import { useMutation } from '@tanstack/react-query';
import { publicApi } from '../api';
import { SignInDto } from '../dto/sign-in.dto';
import { endpoints } from '../endpoints';
import { User } from '../../stores/userStore';

export function useApiSignIn() {
  const endpoint = endpoints.signIn;

  function mutationFn(data: SignInDto) {
    return publicApi.post<User>(endpoint, data);
  }

  return useMutation({
    mutationFn,
  });
}
