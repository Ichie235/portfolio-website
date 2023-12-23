import type { Metadata } from 'next'
import { Anek_Latin } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`w-screen h-screen bg-white text-black dark:bg-black dark:text-white ${anek.className}`}>
        <Provider>
          {children}
        </Provider>
      </body>
      </html>
  )
}
