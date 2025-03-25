import { Sidebar } from '../../components/docs/sidebar'
import { css } from '@styled-system/css'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={css({ 
      display: 'flex', 
      flexDir: { base: 'column', md: 'row' },
      minH: 'screen',
    })}>
      <div className={css({ 
        w: { base: 'full', md: '64' }, 
        borderRight: '1px solid',
        borderColor: 'gray.200',
        _dark: { borderColor: 'gray.800' }
      })}>
        <Sidebar />
      </div>
      <div className={css({
        flex: 1,
        overflow: 'auto',
        p: { base: '4', md: '8' },
        maxW: '100%'
      })}>
        {children}
      </div>
    </div>
  )
}