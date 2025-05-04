'use client'
import { css } from '@styled-system/css'
import { Box, Flex } from '@styled-system/jsx'
import { usePathname } from 'next/navigation'
import { Header } from './header'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  return (
    <>
      {isHomepage ? (
        <Flex direction="column" minH="100vh">
          <Header />
          <main className={css({ flex: 1, pt: '{sizes.header.height}' })}>{children}</main>
          <footer
            className={css({
              bg: 'surface.elevated',
              py: 'layout.section.sm',
              textAlign: 'center',
              color: 'text.secondary',
            })}
          >
            © {new Date().getFullYear()} Pallas UI. All rights reserved.
          </footer>
        </Flex>
      ) : (
        <>{children}</>
      )}
    </>
  )
}
