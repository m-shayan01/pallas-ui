import type { HTMLStyledProps } from '@styled-system/types'
import React from 'react'
import { useSidebar, withContext } from './provider'

const SidebarRailButton = withContext<React.ComponentRef<'button'>, HTMLStyledProps<'button'>>(
  'button',
  'rail',
)
export const Rail = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ ...props }, ref) => {
    const { toggleSidebar } = useSidebar()

    return (
      <SidebarRailButton
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        {...props}
      />
    )
  },
)
Rail.displayName = 'SidebarRail'
