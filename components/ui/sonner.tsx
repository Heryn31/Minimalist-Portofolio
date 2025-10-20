"use client"

import { Toaster } from "sonner"
import { useTheme } from "next-themes"

export function ToasterColored() {
  const { theme } = useTheme()

  return (
    <Toaster
      theme={theme === "dark" ? "dark" : "light"}
      position="bottom-center"
      richColors
      closeButton
    />
  )
}

