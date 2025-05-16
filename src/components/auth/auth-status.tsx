"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStatus } from "../../hooks/use-auth-status"

interface AuthStatusProps {
  requiredAuth?: boolean
  redirectTo?: string
}

export function AuthStatus({ requiredAuth = false, redirectTo = "/login" }: AuthStatusProps) {
  const { isAuthenticated, isLoading } = useAuthStatus()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    if (requiredAuth && !isAuthenticated) {
      router.push(redirectTo)
    } else if (!requiredAuth && isAuthenticated) {
      router.push("/dashboard")
    }
  }, [isAuthenticated, isLoading, requiredAuth, redirectTo, router])

  return null
}
