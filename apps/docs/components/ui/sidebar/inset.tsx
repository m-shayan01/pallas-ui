import type { HTMLStyledProps } from '@styled-system/types'
import React from 'react'
import { withContext } from './provider'

const SidebarInsetComp = withContext<React.ElementRef<'main'>, HTMLStyledProps<'main'>>(
  'main',
  'inset',
)
export const Inset = React.forwardRef<HTMLDivElement, React.ComponentProps<'main'>>(
  ({ ...props }, ref) => {
    return <SidebarInsetComp ref={ref} {...props} />
  },
)
Inset.displayName = 'SidebarInset'
