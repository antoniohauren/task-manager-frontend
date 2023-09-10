import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SignInDto, SignInDtoSchema } from '../api/dto/sign-in.dto';
import Button from '../components/Button';
import Input from '../components/Input';
import { useApiSignIn } from '../api/hooks/useApiSignIn';
import { useUserStore } from '../stores/userStore';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const setUser = useUserStore(({ setUser }) => setUser);

  const { mutate } = useApiSignIn();
  const navigate = useNavigate();

  const form = useForm<SignInDto>({
    resolver: zodResolver(SignInDtoSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignInDto> = (data) =>
    mutate(data, {
      onSuccess: (response) => {
        setUser(response.data);
        navigate('/');
      },
    });

  return (
    <form
      className="flex flex-col gap-2 w-[300px]"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="E-mail"
            placeholder="E-mail"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            placeholder="Senha"
            label="Senha"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Button>Login</Button>
    </form>
  );
}
