import { css } from '@styled-system/css'
import { PanelLeft } from 'lucide-react'
import React from 'react'
import { Button, type ButtonProps } from '../button'
import { useSidebar, withContext } from './provider'

const SidebarTriggerButton = withContext<HTMLButtonElement, ButtonProps>(Button, 'trigger')
export const Trigger = React.forwardRef<
  React.ComponentRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <SidebarTriggerButton
      ref={ref}
      data-sidebar="trigger"
      variant="text"
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft size={16} />
      <span className={css({ srOnly: true })}>Toggle Sidebar</span>
    </SidebarTriggerButton>
  )
})
Trigger.displayName = 'SidebarTrigger'
