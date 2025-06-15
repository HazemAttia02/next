import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alex Johnson - Full Stack Developer',
  description: 'Portfolio website showcasing full-stack development projects and skills',
  keywords: 'web developer, full stack, React, Next.js, TypeScript, portfolio',
  authors: [{ name: 'Alex Johnson' }],
  openGraph: {
    title: 'Alex Johnson - Full Stack Developer',
    description: 'Portfolio website showcasing full-stack development projects and skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}