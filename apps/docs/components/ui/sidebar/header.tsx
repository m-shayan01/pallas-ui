import React from 'react'
import { withContext } from './provider'

const SidebarHeaderComp = withContext('div', 'header')
export const Header = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarHeaderComp ref={ref} data-sidebar="header" {...props} />
  },
)
Header.displayName = 'SidebarHeader'
