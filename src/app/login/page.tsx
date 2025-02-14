import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-muted p-6 md:p-1">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
