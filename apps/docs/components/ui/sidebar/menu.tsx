import { Slot } from '@radix-ui/react-slot'
import { cva, cx } from '@styled-system/css'
import type { HTMLStyledProps } from '@styled-system/types'
import React from 'react'
import { Button, type ButtonProps } from '../button'
import Tooltip from '../tooltip/tooltip'
import { useSidebar, withContext } from './provider'

const SidebarMenuComp = withContext<React.ElementRef<'ul'>, HTMLStyledProps<'ul'>>('ul', 'menu')
export const Menu = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ ...props }, ref) => <SidebarMenuComp ref={ref} data-sidebar="menu" {...props} />,
)
Menu.displayName = 'SidebarMenu'

const SidebarMenuItemComp = withContext<React.ElementRef<'li'>, HTMLStyledProps<'li'>>(
  'li',
  'menuItem',
)
export const MenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuItemComp
      ref={ref}
      data-sidebar="menu-item"
      className={cx('group/menu-item', className)}
      {...props}
    />
  ),
)
MenuItem.displayName = 'SidebarMenuItem'

const sidebarMenuButtonVariants = cva({
  variants: {
    // variant: {
    //   default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
    //   outline:
    //     'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
    // },
    // size: {
    //   default: "h-8 text-sm",
    //   sm: "h-7 text-xs",
    //   lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
    // },
    variant: {
      default: {
        _hover: {
          bg: 'sidebar-accent',
          color: 'sidebar-accent-foreground',
        },
      },
      outline: {
        bg: 'background',
        boxShadow: '0 0 0 1px hsl(var(--sidebar-border))',
        _hover: {
          bg: 'sidebar-accent',
          color: 'sidebar-accent-foreground',
          boxShadow: '0 0 0 1px hsl(var(--sidebar-accent))',
        },
      },
    },
    size: {
      default: {
        height: '{sizes.lg}',
        fontSize: '{fontSizes.sm}',
      },
      sm: {
        height: '{sizes.sm}',
        fontSize: '{fontSizes.xs}',
      },
      lg: {
        height: '{sizes.md}',
        fontSize: '{fontSizes.md}',
        'group-data-[collapsible=icon]': {
          padding: '0!',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const SidebarMenuButtonComp = withContext<HTMLButtonElement, ButtonProps>(Button, 'menuButton')
export const MenuButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof Tooltip.Content>
  }
>(
  (
    { asChild = false, isActive = false, variant = 'text', size = 'md', tooltip, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : SidebarMenuButtonComp
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-active={isActive}
        variant={variant}
        size={size}
        // className={cx(sidebarMenuButtonVariants({ variant, size }), className, defaultStyle)}
        className={cx('menu-button', props.className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === 'string') {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
        <Tooltip.Content
          side="right"
          align="center"
          hidden={state !== 'collapsed' || isMobile}
          {...tooltip}
        />
      </Tooltip.Root>
    )
  },
)
MenuButton.displayName = 'SidebarMenuButton'

const SidebarMenuActionComp = withContext<HTMLButtonElement, ButtonProps>(Button, 'menuAction')
export const MenuAction = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : SidebarMenuActionComp

  return <Comp ref={ref} data-sidebar="menu-action" data-showOnHover={showOnHover} {...props} />
})
MenuAction.displayName = 'SidebarMenuAction'

const SidebarMenuBadgeComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'menuBadge',
)
export const MenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => <SidebarMenuBadgeComp ref={ref} data-sidebar="menu-badge" {...props} />,
)
MenuBadge.displayName = 'SidebarMenuBadge'
