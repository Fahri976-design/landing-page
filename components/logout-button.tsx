"use client"

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Here you can add logic to clear session, tokens, etc.
    // For now, just navigate back to login
    router.push("/login")
  }

  return (
    <Button onClick={handleLogout} variant="outline" className="w-full">
      Logout
    </Button>
  )
}
