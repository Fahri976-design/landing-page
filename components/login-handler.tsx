"use client"

import { LoginForm } from "@/components/login-from"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginHandler({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      // Di sini Anda bisa tambahkan logika autentikasi nyata, seperti API call
      // Untuk sekarang, langsung navigasi ke dashboard
      router.push("/dashboard")
    }
  }

  return (
    <div className={className} {...props}>
      <LoginForm />
      {/* Wrapper ini tidak mengubah LoginForm asli, tapi Anda perlu modifikasi form di LoginForm untuk onSubmit jika ingin pakai handler ini */}
      {/* Alternatif: Gunakan ref atau context untuk handle submit dari parent */}
      {/* Untuk integrasi tanpa ubah, ganti <LoginForm /> di page.tsx atau login/page.tsx dengan <LoginHandler> dan sesuaikan */}
    </div>
  )
}
