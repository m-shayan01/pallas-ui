import React from 'react'
import { useSidebar } from './provider'

export type SidebarRootProps = React.ComponentPropsWithoutRef<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

export const Root = React.forwardRef<HTMLDivElement, SidebarRootProps>(
  ({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', children, ...props }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === 'none') {
      return (
        <div ref={ref} {...props}>
          {children}
        </div>
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
      <div
        ref={ref}
        className="group peer"
        data-state={state}
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div />
        <div {...props}>
          <div data-sidebar="sidebar">{children}</div>
        </div>
      </div>
    )
  },
)
Root.displayName = 'Sidebar'
