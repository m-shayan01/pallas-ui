'use client'

import { Slot } from '@radix-ui/react-slot'
import { PanelLeft } from 'lucide-react'
import * as React from 'react'

import { Button, type ButtonProps } from '@components/button'
import { Separator } from '@components/separator'
import TooltipComponents from '@components/tooltip/tooltip'
import { css, cva, cx } from '@styled-system/css'
import { sidebar } from '@styled-system/recipes'
import type { HTMLStyledProps } from '@styled-system/types'
import { createStyleContext } from '~/utils/style-context'

const {
  Root: Tooltip,
  Content: TooltipContent,
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
} = TooltipComponents

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
// const SIDEBAR_WIDTH = '16rem'
// const SIDEBAR_WIDTH_MOBILE = '18rem'
// const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'd'

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

const { withProvider, withContext } = createStyleContext(sidebar)

const Provider = withProvider<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'provider')
const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    // const isMobile = useIsMobile()
    const isMobile = false
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open],
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [toggleSidebar])

    const state = open ? 'expanded' : 'collapsed'

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <Provider className={cx('group/sidebar-wrapper', className)} ref={ref} {...props}>
            {children}
          </Provider>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  },
)
SidebarProvider.displayName = 'SidebarProvider'

const SidebarRoot = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'root')
const SidebarRootNonCollapsible = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'rootNonCollapsible',
)
const SidebarGap = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'gap')
const SidebarFixed = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'fixed')
const SidebarInner = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'inner')

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    side?: 'left' | 'right'
    variant?: 'sidebar' | 'floating' | 'inset'
    collapsible?: 'offcanvas' | 'icon' | 'none'
  }
>(({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <SidebarRootNonCollapsible ref={ref} {...props}>
        {children}
      </SidebarRootNonCollapsible>
    )
  }

  // if (isMobile) {
  //   return (
  //     <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
  //       <SheetContent
  //         data-sidebar="sidebar"
  //         data-mobile="true"
  //         className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
  //         style={
  //           {
  //             '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
  //           } as React.CSSProperties
  //         }
  //         side={side}
  //       >
  //         <SheetHeader className="sr-only">
  //           <SheetTitle>Sidebar</SheetTitle>
  //           <SheetDescription>Displays the mobile sidebar.</SheetDescription>
  //         </SheetHeader>
  //         <div className="flex h-full w-full flex-col">{children}</div>
  //       </SheetContent>
  //     </Sheet>
  //   )
  // }

  return (
    <SidebarRoot
      ref={ref}
      className="group peer"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <SidebarGap />
      <SidebarFixed {...props}>
        <SidebarInner data-sidebar="sidebar">{children}</SidebarInner>
      </SidebarFixed>
    </SidebarRoot>
  )
})
Sidebar.displayName = 'Sidebar'

const SidebarTriggerButton = withContext<HTMLButtonElement, ButtonProps>(Button, 'trigger')
const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
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
SidebarTrigger.displayName = 'SidebarTrigger'

const SidebarRailButton = withContext<React.ElementRef<'button'>, HTMLStyledProps<'button'>>(
  'button',
  'rail',
)
const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
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
SidebarRail.displayName = 'SidebarRail'

const SidebarInsetComp = withContext<React.ElementRef<'main'>, HTMLStyledProps<'main'>>(
  'main',
  'inset',
)
const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<'main'>>(
  ({ ...props }, ref) => {
    return <SidebarInsetComp ref={ref} {...props} />
  },
)
SidebarInset.displayName = 'SidebarInset'

const SidebarHeaderComp = withContext('div', 'header')
const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarHeaderComp ref={ref} data-sidebar="header" {...props} />
  },
)
SidebarHeader.displayName = 'SidebarHeader'

const SidebarFooterComp = withContext('div', 'footer')
const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarFooterComp ref={ref} data-sidebar="footer" {...props} />
  },
)
SidebarFooter.displayName = 'SidebarFooter'

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cx(sidebar().separator, className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = 'SidebarSeparator'

const SidebarContentComp = withContext('div', 'content')
const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarContentComp ref={ref} data-sidebar="content" {...props} />
  },
)
SidebarContent.displayName = 'SidebarContent'

const SidebarGroupComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'group',
)
const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    return <SidebarGroupComp ref={ref} data-sidebar="group" {...props} />
  },
)
SidebarGroup.displayName = 'SidebarGroup'

const SidebarGroupLabelComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'groupLabel',
)
const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : SidebarGroupLabelComp

  return <Comp ref={ref} data-sidebar="group-label" {...props} />
})
SidebarGroupLabel.displayName = 'SidebarGroupLabel'

const SidebarGroupActionComp = withContext<HTMLButtonElement, ButtonProps>(Button, 'groupAction')
const SidebarGroupAction = React.forwardRef<HTMLButtonElement, ButtonProps & { asChild?: boolean }>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : SidebarGroupActionComp

    return <Comp ref={ref} data-sidebar="group-action" {...props} />
  },
)
SidebarGroupAction.displayName = 'SidebarGroupAction'

const SidebarGroupContentComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'groupContent',
)
const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => (
    <SidebarGroupContentComp ref={ref} data-sidebar="group-content" {...props} />
  ),
)
SidebarGroupContent.displayName = 'SidebarGroupContent'

const SidebarMenuComp = withContext<React.ElementRef<'ul'>, HTMLStyledProps<'ul'>>('ul', 'menu')
const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ ...props }, ref) => <SidebarMenuComp ref={ref} data-sidebar="menu" {...props} />,
)
SidebarMenu.displayName = 'SidebarMenu'

const SidebarMenuItemComp = withContext<React.ElementRef<'li'>, HTMLStyledProps<'li'>>(
  'li',
  'menuItem',
)
const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuItemComp
      ref={ref}
      data-sidebar="menu-item"
      className={cx('group/menu-item', className)}
      {...props}
    />
  ),
)
SidebarMenuItem.displayName = 'SidebarMenuItem'

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
const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
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
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== 'collapsed' || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  },
)
SidebarMenuButton.displayName = 'SidebarMenuButton'

const SidebarMenuActionComp = withContext<HTMLButtonElement, ButtonProps>(Button, 'menuAction')
const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : SidebarMenuActionComp

  return <Comp ref={ref} data-sidebar="menu-action" data-showOnHover={showOnHover} {...props} />
})
SidebarMenuAction.displayName = 'SidebarMenuAction'

const SidebarMenuBadgeComp = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'menuBadge',
)
const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => <SidebarMenuBadgeComp ref={ref} data-sidebar="menu-badge" {...props} />,
)
SidebarMenuBadge.displayName = 'SidebarMenuBadge'

const SidebarMenuSubComp = withContext<React.ElementRef<'ul'>, HTMLStyledProps<'ul'>>(
  'ul',
  'menuSub',
)
const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ ...props }, ref) => <SidebarMenuSubComp ref={ref} data-sidebar="menu-sub" {...props} />,
)
SidebarMenuSub.displayName = 'SidebarMenuSub'

const SidebarMenuSubItemComp = withContext<React.ElementRef<'li'>, HTMLStyledProps<'li'>>(
  'li',
  'menuSubItem',
)
const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ ...props }, ref) => <SidebarMenuSubItemComp ref={ref} {...props} />,
)
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem'

const SidebarMenuSubButtonComp = withContext<React.ElementRef<'a'>, HTMLStyledProps<'a'>>(
  'a',
  'menuSubButton',
)
const SidebarMenuSubButton = React.forwardRef<
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
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton'

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
