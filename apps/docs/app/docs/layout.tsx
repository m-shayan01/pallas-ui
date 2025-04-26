import { css } from '@styled-system/css'
import { Sidebar } from '../../components/layout/sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: { base: 'column', md: 'row' },
        minH: 'screen',
        bg: 'surface.layout', // Using surface.layout for the background
      })}
    >
      <div
        // className={css({
        //   w: { base: 'full', md: '64' },
        //   bg: 'surface.layout', // Sidebar with layout color (gray)
        //   p: 'layout.default.md', // Using layout spacing
        // })} //for removal of sidebar padding
        className={css({
          bg: 'surface.container',
        })}
      >
        <Sidebar />
      </div>
      <div
        className={css({
          flex: 1,
          overflow: 'visible',
          p: { base: 'layout.internal.sm', md: 'layout.internal.md' }, // Using internal layout spacing
          maxW: '100%',
          bg: 'surface.container', // Main content area with container color (white)
        })}
      >
        {children}
      </div>
    </div>
  )
}
