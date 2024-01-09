import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { SITE_METADATA } from '~/consts'
import './globals.css'
import { Providers } from './providers'

const font = Quicksand({ subsets: ['latin'] })
export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  )
}
