"use client"

import { Button } from "../../components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/login", {
        method: "POST",
      })
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleLogout}>
      <LogOut className="h-4 w-4 mr-2" />
     Login 
    </Button>
  )
}
