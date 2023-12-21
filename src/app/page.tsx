"use client"

import { useTheme } from '@/context/ThemeContext'
import ThemeButton from '@/utils/ThemeButton'

export default function Home() {
  const { theme } = useTheme();
  console.log(theme)

  return (
    <main className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <ThemeButton />
    </main>
  )
}
