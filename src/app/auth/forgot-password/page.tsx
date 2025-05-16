import { ForgotPasswordForm } from "../../../components/auth/forgot-password-form"
import { AuthStatus } from "../../../components/auth/auth-status"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <AuthStatus />
      <div className="w-full max-w-md">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
