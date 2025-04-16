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
              bg: 'rgba(245, 245, 245, 0.65)', //equivalent to surface.layout
              backdropFilter: 'blur(2.5px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
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
                    zIndex: 2,
                    paddingLeft: '3', // Add padding to match sidebar header padding
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
                    zIndex: 2,
                    alignItems: 'center', // Add this to vertically align items
                  })}
                >
                  <Link
                    href="/docs/introduction/introduction"
                    className={css({
                      color: 'text.secondary',
                      fontWeight: 'medium',
                      _hover: { color: 'primary.hover' },
                    })}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/docs/components/accordian"
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
                      display: 'flex',
                      alignItems: 'center',
                      _hover: { color: 'primary.hover' },
                    })}
                    aria-label="GitHub"
                  >
                    {/* GitHub icon with circular background */}
                    {/*not using lucide react as it has deprecated icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-label="GitHub Icon"
                      role="img"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>
          </header>

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
