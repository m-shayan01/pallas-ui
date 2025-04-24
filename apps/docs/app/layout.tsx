import type { Metadata } from 'next'
import './globals.css'
import { Inter, Noto_Sans_JP, Raleway } from 'next/font/google'
import { Header } from '../components/header'
import { css } from '../styled-system/css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pallas UI Documentation',
  description: 'Documentation for Pallas UI component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body>
        <div
          className={css({
            bg: 'surface.container',
          })}
        >
          <Header />
          <main className={css({ flex: 1, bg: 'surface.container' })}>{children}</main>

          <footer
            className={css({
              bg: 'surface.layout',
              py: 'layout.internal.sm',
              mt: 'layout.section.sm',
              mb: 'layout.section.sm',
              textAlign: 'center',
              color: 'text.secondary',
            })}
          >
            © {new Date().getFullYear()} Pallas UI. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
