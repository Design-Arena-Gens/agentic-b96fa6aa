import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Path Creation Tool',
  description: 'Create and manage learning paths',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
