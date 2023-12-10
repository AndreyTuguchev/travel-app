import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export const metadata: Metadata = {
  title: 'Travel App',
  description: 'Travel UI/UX App from Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload"  href="/pattern-bg.png" as="image" />
        <link rel="preload"  href="/camp.svg" as="image" />
        <link rel="preload"  href="/hilink-logo.svg" as="image" />
      </head>
      <body >
        <Navbar />
        <main className='relative'>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
