import React from 'react'
import { withContext } from './provider'

const SidebarFooterComp = withContext('div', 'footer')
export const Footer = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarFooterComp ref={ref} data-sidebar="footer" {...props} />
  },
)
Footer.displayName = 'SidebarFooter'
