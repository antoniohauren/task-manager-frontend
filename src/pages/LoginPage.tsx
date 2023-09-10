import LoginForm from '../partials/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Login</h1>

      <LoginForm />
    </div>
  );
}
