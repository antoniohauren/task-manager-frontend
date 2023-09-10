import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SignUpDto, SignUpDtoSchema } from '../api/dto/sign-up.dto';
import { useApiSignUp } from '../api/hooks/useApiSignUp';
import Button from '../components/Button';
import Input from '../components/Input';
import { useUserStore } from '../stores/userStore';

export default function SignInForm() {
  const setUser = useUserStore(({ setUser }) => setUser);

  const { mutate } = useApiSignUp();
  const navigate = useNavigate();

  const form = useForm<SignUpDto>({
    resolver: zodResolver(SignUpDtoSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpDto> = (data) =>
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
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Name"
            placeholder="Name"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

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
            placeholder="Password"
            label="Password"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Button>Register</Button>
    </form>
  );
}
