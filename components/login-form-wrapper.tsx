"use client"

import React, { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/login-from"

export function LoginFormWrapper(props: React.ComponentProps<"div">) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const formElement = containerRef.current?.querySelector("form") as HTMLFormElement
    if (!formElement) return

    const handleSubmit = (e: Event) => {
      e.preventDefault()
      if (formElement.checkValidity()) {
        router.push("/dashboard")
      }
      // If not valid, do nothing, let the browser show validation messages
    }

    formElement.addEventListener("submit", handleSubmit)

    return () => {
      formElement.removeEventListener("submit", handleSubmit)
    }
  }, [router])

  return (
    <div {...props} ref={containerRef}>
      <LoginForm />
    </div>
  )
}
