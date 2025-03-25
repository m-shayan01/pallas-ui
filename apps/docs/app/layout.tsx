import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { css } from '../styled-system/css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <div className={css({ minH: '100vh', display: 'flex', flexDir: 'column' })}>
          <header className={css({ 
            borderBottom: '1px solid', 
            borderColor: 'gray.200',
            py: '4',
            px: '6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            _dark: { borderColor: 'gray.800' }
          })}>
            <Link href="/" className={css({ fontWeight: 'bold', fontSize: 'xl' })}>
              Pallas UI
            </Link>
            
            <nav className={css({ display: 'flex', gap: '6' })}>
              <Link href="/docs/introduction" className={css({ _hover: { color: 'primary.600' } })}>
                Documentation
              </Link>
              <Link href="/docs/components/accordion" className={css({ _hover: { color: 'primary.600' } })}>
                Components
              </Link>
              <a 
                href="https://github.com/PallasUI/pallas-ui" 
                target="_blank"
                rel="noopener noreferrer"
                className={css({ _hover: { color: 'primary.600' } })}
              >
                GitHub
              </a>
            </nav>
          </header>
          
          <main className={css({ flex: 1 })}>
            {children}
          </main>
          
          <footer className={css({ 
            borderTop: '1px solid', 
            borderColor: 'gray.200',
            py: '6',
            px: '6',
            textAlign: 'center',
            color: 'gray.600',
            _dark: { borderColor: 'gray.800' }
          })}>
            © {new Date().getFullYear()} Pallas UI. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}