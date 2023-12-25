"use client"

import { Switch } from "@nextui-org/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { RxMoon, RxSun } from "react-icons/rx"

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      defaultSelected={resolvedTheme === "dark"}
      onValueChange={(isDark) => setTheme(isDark ? "dark" : "light")}
      size="lg"
      color="secondary"
      startContent={<RxSun />}
      endContent={<RxMoon />}
    />
  )
}
