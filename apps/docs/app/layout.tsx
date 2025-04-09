import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { SearchDialog } from '../components/docs/search'
import { css } from '../styled-system/css'

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
          <header
            className={css({
              bg: 'surface.layout',
              position: 'sticky',
              top: 0,
              zIndex: 10,
            })}
          >
            <div
              className={css({
                paddingInline: 'padding.inline.lg',
                paddingBlock: 'padding.block.lg',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative', // Add position relative
                  flexWrap: { base: 'wrap', md: 'nowrap' },
                  gap: { base: 'gap.component.md', md: '0' },
                })}
              >
                <Link
                  href="/"
                  className={css({
                    fontWeight: 'bold',
                    fontSize: 'xl',
                    color: 'text',
                    zIndex: 2, // Add z-index
                  })}
                >
                  <span>Pallas UI</span>
                </Link>

                <div
                  className={css({
                    order: { base: 3, md: 2 },
                    width: { base: '100%', md: 'auto' },
                    position: { md: 'absolute' }, // Position absolute on medium screens and up
                    left: { md: '50%' }, // Center horizontally
                    transform: { md: 'translateX(-50%)' }, // Adjust for the element's width
                    zIndex: 1, // Lower z-index than logo and nav
                    maxWidth: { md: '400px' },
                  })}
                >
                  <SearchDialog />
                </div>

                <nav
                  className={css({
                    display: 'flex',
                    gap: 'gap.component.md',
                    order: { base: 2, md: 3 },
                    zIndex: 2, // Add z-index
                  })}
                >
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
                    GitHub
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          <main className={css({ flex: 1 })}>{children}</main>

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
