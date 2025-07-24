import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

const montserrat = Montserrat({ subsets: ['latin'] })

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Smart Consig',
  description: 'Há 5 anos atuando com credibilidade, segurança e qualidade.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KX2X2J86');
            `,
          }}
        />

        <script src="node_modules/eruda/eruda.js"></script>
        <script>eruda.init();</script>
      </head>
      <body className={`${montserrat.className} ${openSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KX2X2J86"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}