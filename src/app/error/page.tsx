"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An unexpected error occurred"
  let errorDescription = "Please try again later or contact support if the problem persists."

  // Handle specific error types
  if (error === "Configuration") {
    errorMessage = "Server configuration error"
    errorDescription = "There is a problem with the server configuration."
  } else if (error === "AccessDenied") {
    errorMessage = "Access denied"
    errorDescription = "You do not have permission to sign in."
  } else if (error === "Verification") {
    errorMessage = "Verification error"
    errorDescription = "The verification token is invalid or has expired."
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-destructive mb-2">
              <AlertCircle className="h-5 w-5" />
              <CardTitle>Authentication Error</CardTitle>
            </div>
            <CardDescription>{errorMessage}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">{errorDescription}</p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/login">Back to Login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
