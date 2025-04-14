import { Slot } from '@radix-ui/react-slot'
import type { HTMLStyledProps } from '@styled-system/types'
import React from 'react'
import { Button, type ButtonProps } from '../button'
import { withContext } from './provider'

const SidebarGroupComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'group',
)
export const Group = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarGroupComp ref={ref} data-sidebar="group" {...props} />
  },
)
Group.displayName = 'SidebarGroup'

const SidebarGroupLabelComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'groupLabel',
)
export const GroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : SidebarGroupLabelComp

  return <Comp ref={ref} data-sidebar="group-label" {...props} />
})
GroupLabel.displayName = 'SidebarGroupLabel'

const SidebarGroupActionComp = withContext<HTMLButtonElement, ButtonProps>(Button, 'groupAction')
export const GroupAction = React.forwardRef<HTMLButtonElement, ButtonProps & { asChild?: boolean }>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : SidebarGroupActionComp

    return <Comp ref={ref} data-sidebar="group-action" {...props} />
  },
)
GroupAction.displayName = 'SidebarGroupAction'

const SidebarGroupContentComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'groupContent',
)
export const GroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => (
    <SidebarGroupContentComp ref={ref} data-sidebar="group-content" {...props} />
  ),
)
GroupContent.displayName = 'SidebarGroupContent'
