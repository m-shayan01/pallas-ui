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
        ...(isHomepage
          ? {
              backdropFilter: 'blur(2px)',
              bg: '#e6f4ff4a',
              backgroundImage:
                'radial-gradient(circle at 10% 20%, rgba(120, 190, 255, 0.2) 0%, rgba(0, 120, 212, 0.05) 50%), ' +
                'linear-gradient(to bottom right, rgba(255, 180, 220, 0.1) 0%, rgba(180, 120, 250, 0.1) 100%)',
              _before: {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/noise.svg)',
                backgroundSize: 'cover',
                opacity: 0.3,
                zIndex: 0,
                mixBlendMode: 'overlay',
                pointerEvents: 'none',
              },
            }
          : {
              bg: 'surface.container',
            }),
      }}
    >
      <Header />
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
    </Box>
  )
}
