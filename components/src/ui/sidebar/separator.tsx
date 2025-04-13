import { cx } from '@styled-system/css'
import { sidebar } from '@styled-system/recipes'
import React from 'react'
import { Separator as Comp } from '../separator'

export const Separator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Comp
      ref={ref}
      data-sidebar="separator"
      className={cx(sidebar().separator, className)}
      {...props}
    />
  )
})
Separator.displayName = 'SidebarSeparator'
