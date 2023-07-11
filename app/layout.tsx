import '../styles/globals.css'
import '../styles/reset.css'

import Header from '../components/Header'
import Prompt from '../components/Prompt'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IONUT-Z Ai Generator',
  description: 'Created by Neague Eduard.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <html lang = "en">
        <body className={inter.className}>
            <Header/>
            <Prompt/>
            {children}
        </body>
      </html>
    )
}
