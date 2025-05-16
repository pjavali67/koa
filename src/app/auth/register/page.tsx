import { RegisterForm } from "../../../components/auth/register-form"
import { AuthStatus } from "../../../components/auth/auth-status"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <AuthStatus />
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}
