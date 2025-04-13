import React from 'react'
import { withContext } from './provider'

const SidebarContentComp = withContext('div', 'content')
export const Content = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarContentComp ref={ref} data-sidebar="content" {...props} />
  },
)
Content.displayName = 'SidebarContent'
