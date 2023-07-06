import { ReactNode } from 'react'

import './globals.css'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: "Xand's Portfolio",
  description: 'My portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} bg-zinc-100 font-sans text-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
