import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Preview Card Main',
  description: 'Create a blog preview card main with Tailwind CSS by Killian Kavanagh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
