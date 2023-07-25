import '../styles/globals.css'
import '../styles/reset.css'

import Header from '../components/Header'
import ClientProvider from '../components/ClientProvider'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RUNWILD',
  description: 'Created by Neague Eduard.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <html lang = "en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        </head>
        <body className= "font-[Poppins] bg-[#111111]">
            <ClientProvider>
              <div>
                  <p className = "w-full text-xs text-center md:text-sm font-bold text-runwild-light-pink flex flex-col bg-runwild-dark-purple rounded-md p-3 justify-center items-center">Quick note:
                      <span className = "font-normal text-white"> If the application does not load any images or does not seem to work in general, then that means this app is sadly no longer supported.</span> 
                      <span className = "font-normal text-white"> You can check out a demo of the app on my website: <Link href = "https://eduardneague.netlify.app" className = "font-bold" target = "_blank">eduardneague.netlify.app/projects/runwild</Link></span> 
                  </p>
              </div>
              <Header/>
              {children}
          </ClientProvider>
        </body>
      </html>
    )
}
