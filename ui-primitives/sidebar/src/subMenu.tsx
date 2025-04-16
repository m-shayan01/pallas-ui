import { Slot } from '@radix-ui/react-slot'
import type { HTMLStyledProps } from '@styled-system/types'
import React from 'react'
import { withContext } from './provider'

const SidebarMenuSubComp = withContext<React.ComponentRef<'ul'>, HTMLStyledProps<'ul'>>(
  'ul',
  'menuSub',
)
export const MenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ ...props }, ref) => <SidebarMenuSubComp ref={ref} data-sidebar="menu-sub" {...props} />,
)
MenuSub.displayName = 'SidebarMenuSub'

const SidebarMenuSubItemComp = withContext<React.ComponentRef<'li'>, HTMLStyledProps<'li'>>(
  'li',
  'menuSubItem',
)
export const MenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ ...props }, ref) => <SidebarMenuSubItemComp ref={ref} {...props} />,
)
MenuSubItem.displayName = 'SidebarMenuSubItem'

const SidebarMenuSubButtonComp = withContext<React.ComponentRef<'a'>, HTMLStyledProps<'a'>>(
  'a',
  'menuSubButton',
)
export const MenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<'a'> & {
    asChild?: boolean
    size?: 'sm' | 'md' | 'lg'
    isActive?: boolean
  }
>(({ asChild = false, size = 'md', isActive, ...props }, ref) => {
  const Comp = asChild ? Slot : SidebarMenuSubButtonComp
  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      {...props}
    />
  )
})
MenuSubButton.displayName = 'SidebarMenuSubButton'
