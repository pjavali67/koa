"use client"

import { useState, useEffect } from "react"

interface AuthStatus {
  isAuthenticated: boolean
  isLoading: boolean
  user: { id: string; name: string; email: string } | null
}

export function useAuthStatus(): AuthStatus {
  const [status, setStatus] = useState<AuthStatus>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
  })

  useEffect(() => {
    async function checkAuthStatus() {
      try {
        const response = await fetch("/api/auth/session")
        const data = await response.json()

        setStatus({
          isAuthenticated: data.authenticated,
          isLoading: false,
          user: data.user,
        })
      } catch (error) {
        console.error("Error checking auth status:", error)
        setStatus({
          isAuthenticated: false,
          isLoading: false,
          user: null,
        })
      }
    }

    checkAuthStatus()
  }, [])

  return status
}
