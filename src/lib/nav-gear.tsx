'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Settings } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useRouter } from 'next/navigation'
import { LogoutButton } from '../components/auth/logout-button'
export function GearDropdown() {
  const router = useRouter()

  const handleLogout = () => {
    // implement your logout logic here
    console.log("Logging out...")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => router.push('/profiletable')}>
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/dashboard')}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogoutButton/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
