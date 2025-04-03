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
              mt: 'layout.section.sm',
              mb: 'layout.section.sm',
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
                  })}
                >
                  <span>Pallas UI</span>
                </Link>

                <div
                  className={css({
                    order: { base: 3, md: 2 },
                    width: { base: '100%', md: 'auto' },
                    mx: { md: 'gap.inline.md' },
                    flex: { md: '1' },
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
