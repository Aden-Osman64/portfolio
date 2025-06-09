import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aden Osman | Software Developer',
  description: 'Portfolio website of Aden Osman, a software developer showcasing projects and skills.',
  icons: {
    icon: '/favicon.png', // or '/favicon.png' if you're using a PNG file
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
      </head>
      <body className={`${inter.className} bg-white dark:bg-dark text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
} 