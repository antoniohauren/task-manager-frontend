import SignUpForm from '../partials/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>

      <SignUpForm />
    </div>
  );
}
