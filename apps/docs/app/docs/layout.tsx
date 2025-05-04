'use client'

import { Footer } from '@/components/layout/footer'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import { DocsSidebar } from '../../components/docs/layout/docs-sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar.Provider>
      <Box
        className={css({
          maxW: '100%',
          bg: 'surface.container', // Main content area with container color (white)
        })}
      >
        <main className={css({ display: 'flex' })}>{children}</main>
      </Box>
    </Sidebar.Provider>
  )
}
