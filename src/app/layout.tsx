import { ReactNode } from 'react'

import './globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
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
        className={`${roboto.variable} bg-zinc-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
