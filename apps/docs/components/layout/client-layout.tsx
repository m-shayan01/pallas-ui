'use client'

import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import { usePathname } from 'next/navigation'
import { Header } from './header'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  return (
    <Box
      css={{
        position: 'relative',
        bg: 'surface.container',
      }}
    >
      <Header />
      <main className={css({ flex: 1 })}>{children}</main>

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
    </Box>
  )
}
