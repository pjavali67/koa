'use client'

import { LogIn } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useRouter } from 'next/navigation'

export function LoginButton() {
  const router = useRouter()

  return (
    <Button
      variant="koaread"
      size="icon"
      onClick={() => router.push('/login')}
      aria-label="Login"
      className='cover w-25 h-10'
    >
     
      <LogIn  /><span>Login</span> 
      
    </Button>
  )
}
