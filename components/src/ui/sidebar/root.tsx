import { useSidebar } from '@pallas-ui/sidebar'
import {
  RootCollapsible,
  RootFixed,
  RootGap,
  RootInner,
  RootNonCollapsible,
} from '@pallas-ui/sidebar'
import React from 'react'
import { withContext } from './provider'

export type SidebarRootProps = React.ComponentPropsWithoutRef<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

const RootCollapsibleStyled = withContext<
  React.ComponentRef<typeof RootCollapsible>,
  React.ComponentProps<typeof RootCollapsible>
>(RootCollapsible, 'root')
const RootNonCollapsibleStyled = withContext<
  React.ComponentRef<typeof RootNonCollapsible>,
  React.ComponentProps<typeof RootNonCollapsible>
>(RootNonCollapsible, 'rootNonCollapsible')
const GapStyled = withContext<
  React.ComponentRef<typeof RootGap>,
  React.ComponentProps<typeof RootGap>
>(RootGap, 'gap')
const FixedStyled = withContext<
  React.ComponentRef<typeof RootFixed>,
  React.ComponentProps<typeof RootFixed>
>(RootFixed, 'fixed')
const InnerStyled = withContext<
  React.ComponentRef<typeof RootInner>,
  React.ComponentProps<typeof RootInner>
>(RootInner, 'inner')

export const Root = React.forwardRef<HTMLDivElement, SidebarRootProps>(
  ({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', children, ...props }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === 'none') {
      return (
        <RootNonCollapsibleStyled ref={ref} {...props}>
          {children}
        </RootNonCollapsibleStyled>
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
      <RootCollapsibleStyled
        ref={ref}
        className="group peer"
        data-state={state}
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <GapStyled />
        <FixedStyled {...props}>
          <InnerStyled>{children}</InnerStyled>
        </FixedStyled>
      </RootCollapsibleStyled>
    )
  },
)
Root.displayName = 'Sidebar'
