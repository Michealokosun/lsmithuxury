import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-muted p-6 md:p-1">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  );
}
