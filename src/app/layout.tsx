import type { Metadata } from 'next'
import { Anek_Latin } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const anek = Anek_Latin({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chinemerem Ichie | Portfolio',
  description: 'Chinemerem Ichie Richard portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/chinemerem-logo-dark.png" type="image/x-icon" />
      </head>
      <body className={`
        relative w-screen min-h-screen max-h-full overflow-x-hidden bg-white bg-noise text-black dark:bg-black dark:text-white transition-colors duration-100 scroll-smooth
        ${anek.className}
        scrollbar-thin scrollbar-thumb-rounded-sm scrollbar-thumb-black dark:scrollbar-thumb-white
      `}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
      </html>
  )
}
