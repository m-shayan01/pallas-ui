'use client'

import * as React from 'react'
import { Drawer as Sheet } from 'vaul'

const SheetRoot = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof Sheet.Root>) => (
  <Sheet.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)

export type SheetTriggerType = typeof Sheet.Trigger

const SheetTrigger: SheetTriggerType = Sheet.Trigger

const SheetPortal = Sheet.Portal

export type SheetCloseType = typeof Sheet.Close

const SheetClose: SheetCloseType = Sheet.Close

export type SheetHandleType = typeof Sheet.Handle

const SheetHandle: SheetHandleType = Sheet.Handle

export type SheetOverlayType = typeof Sheet.Overlay

const SheetOverlay: SheetOverlayType = React.forwardRef<
  React.ComponentRef<typeof Sheet.Overlay>,
  React.ComponentPropsWithoutRef<typeof Sheet.Overlay>
>(({ className, ...props }, ref) => <Sheet.Overlay ref={ref} {...props} />)
SheetOverlay.displayName = 'SheetOverlay'

export type SheetContentType = typeof Sheet.Content

const SheetContent: SheetContentType = React.forwardRef<
  React.ComponentRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Sheet.Content ref={ref} {...props}>
      {children}
    </Sheet.Content>
  </SheetPortal>
))
SheetContent.displayName = 'SheetContent'

export type SheetTitleType = typeof Sheet.Title

const SheetTitle: SheetTitleType = React.forwardRef<
  React.ComponentRef<typeof Sheet.Title>,
  React.ComponentPropsWithoutRef<typeof Sheet.Title>
>(({ ...props }, ref) => <Sheet.Title ref={ref} {...props} />)
SheetTitle.displayName = 'SheetTitle'

export type SheetDescriptionType = typeof Sheet.Description

const SheetDescription: SheetDescriptionType = React.forwardRef<
  React.ComponentRef<typeof Sheet.Description>,
  React.ComponentPropsWithoutRef<typeof Sheet.Description>
>(({ ...props }, ref) => <Sheet.Description ref={ref} {...props} />)
SheetDescription.displayName = 'SheetDescription'

const SheetHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
SheetFooter.displayName = 'SheetFooter'

const Root = SheetRoot
const Portal = SheetPortal
const Overlay: SheetOverlayType = SheetOverlay
const Trigger: SheetTriggerType = SheetTrigger
const Close: SheetCloseType = SheetClose
const Handle: SheetHandleType = SheetHandle
const Content: SheetContentType = SheetContent
const Header = SheetHeader
const Footer = SheetFooter
const Title: SheetTitleType = SheetTitle
const Description: SheetDescriptionType = SheetDescription

export {
  Root,
  Portal,
  Overlay,
  Trigger,
  Close,
  Handle,
  Content,
  Header,
  Footer,
  Title,
  Description,
  SheetRoot,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetHandle,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
