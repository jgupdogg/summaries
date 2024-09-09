'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      onChange={toggleDarkMode}
      size={24} 
      moonColor="#ffffff"
      sunColor="#000000"
    />
  )
}