'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cx } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import { type ModalVariant, button, modal } from '@styled-system/recipes'
import type { ComponentProps, HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'

const { withProvider, withContext } = createStyleContext(modal)

const ModalPortal = withContext<
  React.ElementRef<typeof AlertDialogPrimitive.Portal>,
  Assign<WithFixedClassName<AlertDialogPrimitive.AlertDialogPortalProps>, JsxStyleProps>
>(AlertDialogPrimitive.Portal, 'portal')

const ModalOverlay = withContext<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  Assign<AlertDialogPrimitive.AlertDialogOverlayProps, JsxStyleProps>
>(AlertDialogPrimitive.Overlay, 'overlay')

const Content = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <AlertDialogPrimitive.Content ref={ref} className={className} {...props} />
  </ModalPortal>
))
Content.displayName = AlertDialogPrimitive.Content.displayName

const Cancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cx(button({ variant: 'outlined' }), className)}
    {...props}
  />
))
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName

export type RootProps = WithFixedClassName<ComponentProps<typeof AlertDialogPrimitive.Root>>
export const Modal = withProvider<
  React.ElementRef<typeof AlertDialogPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(AlertDialogPrimitive.Root, 'root')

export const ModalTrigger = withContext<
  React.ElementRef<typeof AlertDialogPrimitive.Trigger>,
  Assign<AlertDialogPrimitive.AlertDialogTriggerProps, JsxStyleProps>
>(AlertDialogPrimitive.Trigger, 'trigger')

export const ModalContent = withContext<
  React.ElementRef<typeof Content>,
  Assign<AlertDialogPrimitive.AlertDialogContentProps, JsxStyleProps>
>(Content, 'content')

export const ModalHeader = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'header',
)

export const ModalFooter = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'footer',
)

export const ModalTitle = withContext<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  Assign<AlertDialogPrimitive.AlertDialogTitleProps, JsxStyleProps>
>(AlertDialogPrimitive.Title, 'title')

export const ModalDescription = withContext<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  Assign<AlertDialogPrimitive.AlertDialogDescriptionProps, JsxStyleProps>
>(AlertDialogPrimitive.Description, 'description')

export const ModalAction = withContext<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  Assign<AlertDialogPrimitive.AlertDialogActionProps, JsxStyleProps>
>(AlertDialogPrimitive.Action, 'action')

export const ModalCancel = withContext<
  React.ElementRef<typeof Cancel>,
  Assign<AlertDialogPrimitive.AlertDialogCancelProps, JsxStyleProps>
>(Cancel, 'cancel')
