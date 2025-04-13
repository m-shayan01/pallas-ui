import type { HTMLStyledProps } from '@styled-system/types'
import React from 'react'
import { useSidebar, withContext } from './provider'

const SidebarRoot = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'root')
const SidebarRootNonCollapsible = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'rootNonCollapsible',
)
const SidebarGap = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'gap')
const SidebarFixed = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'fixed')
const SidebarInner = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'inner')

export const Root = React.forwardRef<
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
Root.displayName = 'Sidebar'
