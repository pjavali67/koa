import { LoginForm } from "../../../components/auth/login-form"
import { AuthStatus } from "../../../components/auth/auth-status"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <AuthStatus />
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
