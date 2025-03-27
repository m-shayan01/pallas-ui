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
            bg: 'surface.layout',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            mt: 'layout.section.sm',
            mb: 'layout.section.sm',
          })}>
            <div className={css({
              paddingInline: 'padding.inline.lg',
              paddingBlock: 'padding.block.lg',
              
            })}>
              <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}>
                <Link href="/" className={css({
                  fontWeight: 'bold',
                  fontSize: 'xl',
                  color: 'text',
                })}>
                  <span>Pallas UI</span>
                </Link>
                <nav className={css({
                  display: 'flex',
                  gap: 'gap.component.md',
                })}>
                  <Link 
                    href="/docs/introduction" 
                    className={css({
                      color: 'text.secondary',
                      fontWeight: 'medium',
                      _hover: { color: 'primary.hover' },
                    })}
                  >
                    Documentation
                  </Link>
                  <Link 
                    href="/docs/components/button" 
                    className={css({
                      color: 'text.secondary',
                      fontWeight: 'medium',
                      _hover: { color: 'primary.hover' },
                    })}
                  >
                    Components
                  </Link>
                  <Link 
                    href="https://github.com/PallasUI/pallas-ui" 
                    target="_blank" 
                    rel="noreferrer"
                    className={css({
                      color: 'text.secondary',
                      fontWeight: 'medium',
                      _hover: { color: 'primary.hover' },
                    })}
                  >
                    {/* <div className={css({ width: '5', height: '5' })}>
                      <svg viewBox="0 0 24 24" aria-labelledby="githubIcon">
                        <title id="githubIcon">GitHub</title>
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </div> */}
                    GitHub
                  </Link>
                </nav>
              </div>
              
            </div>
          </header>
          
          <main className={css({ flex: 1 })}>
            {children}
          </main>
          
          <footer className={css({ 
            bg: 'surface.layout',
            py: 'layout.internal.sm',
            mt: 'layout.section.sm',
            mb: 'layout.section.sm',
            textAlign: 'center',
            color: 'text.secondary',
          })}>
            © {new Date().getFullYear()} Pallas UI. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}