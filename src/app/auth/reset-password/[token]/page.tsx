"use client"

import { ResetPasswordForm } from "../../../../components/auth/reset-password-form"
import { AuthStatus } from "../../../../components/auth/auth-status"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface ResetPasswordPageProps {
  params: {
    token: string
  }
}

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = params
  const router = useRouter()
  const [isValidating, setIsValidating] = useState(true)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    async function validateToken() {
      try {
        const response = await fetch(`/api/auth/validate-reset-token?token=${token}`)
        const data = await response.json()
        setIsValid(data.valid)
      } catch (error) {
        setIsValid(false)
      } finally {
        setIsValidating(false)
      }
    }

    validateToken()
  }, [token])

  useEffect(() => {
    if (!isValidating && !isValid) {
      router.push("/auth/forgot-password?error=Invalid or expired token")
    }
  }, [isValidating, isValid, router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <AuthStatus />
      {isValidating ? (
        <div>Validating token...</div>
      ) : isValid ? (
        <div className="w-full max-w-md">
          <ResetPasswordForm token={token} />
        </div>
      ) : null}
    </div>
  )
}
