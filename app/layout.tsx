import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'SmritiCare - AI Memory & Safety Companion for Alzheimer\'s Patients',
  description: 'SmritiCare helps Alzheimer\'s patients and their guardians with AI-powered memory companionship, GPS tracking, smart scheduling, and QR Medical ID.',
}

export const viewport: Viewport = {
  themeColor: '#4B8CE8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
