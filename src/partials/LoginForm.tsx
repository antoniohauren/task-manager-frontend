import Button from '../components/Button';
import Input from '../components/Input';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-2">
      <Input label="E-mail" />
      <Input label="Password" />
      <Button>Login</Button>
    </form>
  );
}
