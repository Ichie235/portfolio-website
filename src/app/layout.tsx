import type { Metadata } from 'next'
import { Anek_Latin } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const anek = Anek_Latin({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chinemerem portfolio',
  description: 'Chinemerem Ichie Richard portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`dark w-screen h-screen ${anek.className}`}>
            {children}
        </body>
      </ThemeProvider>
      </html>
  )
}
