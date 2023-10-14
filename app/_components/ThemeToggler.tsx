"use client"

import AppButton from "./Buttons"
import { FaMoon, FaSun } from "react-icons/fa"
import { useState } from "react"

export default function ThemeToggler({
  className,
  size,
}: {
  className?: string
  size?: number
}) {
  const [theme, setTheme] = useState("dark")
  return (
    <AppButton
      className={`${className}`}
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? <FaMoon size={size} /> : <FaSun size={size} />}
    </AppButton>
  )
}
