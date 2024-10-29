import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'sonner'

import FacebookPixel from '../components/shared/facebook-pixel'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smartconsig soluções financeiras',
  description: 'Há 5 anos atuando com credibilidade, segurança e qualidade.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${montserrat.className} antialiased`}>
        <main>{children}</main>
        <FacebookPixel pixelId="1597315194197904" />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
