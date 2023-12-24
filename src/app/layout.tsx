import type { Metadata } from 'next'
import { Anek_Latin } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'
import Navbar from '@/components/Navbar'

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
      <body className={`
        relative w-screen h-screen overflow-x-hidden bg-white bg-noise text-black dark:bg-black dark:text-white transition-colors duration-100
        ${anek.className}
        scrollbar-thin scrollbar-thumb-rounded-sm scrollbar-thumb-black dark:scrollbar-thumb-white
      `}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
      </html>
  )
}
