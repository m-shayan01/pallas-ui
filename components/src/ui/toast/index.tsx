'use client'
import * as RadixToast from '@radix-ui/react-toast'
import { HStack } from '@styled-system/jsx'
import { toast } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import { X } from 'lucide-react'
import type * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'
import { Button, type ButtonProps } from '../button'
import ToastIcon from './Icon'

const { withProvider, withContext } = createStyleContext(toast)

export type RootProps = WithFixedClassName<ComponentProps<typeof RadixToast.Root>>
export type ActionProps = ComponentProps<typeof RadixToast.Action>

export const Root = withProvider<
  React.ElementRef<typeof RadixToast.Root>,
  Assign<RootProps, JsxStyleProps>
>(RadixToast.Root, 'root')

export const Viewport = withProvider<
  React.ElementRef<typeof RadixToast.Viewport>,
  Assign<ComponentProps<typeof RadixToast.Viewport>, JsxStyleProps>
>(RadixToast.Viewport, 'viewport')

export const Title = withContext<
  React.ElementRef<typeof RadixToast.Title>,
  Assign<ComponentProps<typeof RadixToast.Title>, JsxStyleProps>
>(RadixToast.Title, 'title')

export const Description = withContext<
  React.ElementRef<typeof RadixToast.Description>,
  Assign<ComponentProps<typeof RadixToast.Description>, JsxStyleProps>
>(RadixToast.Description, 'description')

export const Close = withContext<
  React.ElementRef<typeof RadixToast.Close>,
  Assign<ComponentProps<typeof RadixToast.Close>, JsxStyleProps>
>(RadixToast.Close, 'close')

export const Actions = withContext<
  React.ElementRef<typeof HStack>,
  Assign<ComponentProps<typeof HStack>, JsxStyleProps>
>(HStack, 'actions')

export const Action = withContext<
  React.ElementRef<typeof RadixToast.Action>,
  Assign<ActionProps, JsxStyleProps>
>(RadixToast.Action, 'action')

export const Icon = withContext<
  React.ElementRef<typeof ToastIcon>,
  Assign<ComponentProps<typeof ToastIcon>, JsxStyleProps>
>(ToastIcon, 'icon')

export const Provider = RadixToast.Provider

export type ToastPropTypes = RootProps & {
  description?: string
  closeButtonProps?: ButtonProps
  actions?: ToastAction[]
  iconType?: IconTypes
}

export type IconTypes = 'success' | 'error' | 'info' | 'warning'

export type ToastAction = {
  key: string
  label: string
  onClick: (key: string) => void
  buttonProps?: Partial<ButtonProps>
}

const Toast = ({ description, closeButtonProps, actions, ...props }: ToastPropTypes) => (
  <Root {...props}>
    <Icon type={props.iconType} />
    <Title>{props.title}</Title>
    <Description>{description}</Description>
    <Close asChild>
      <Button variant="text" aria-label="Close" {...closeButtonProps}>
        <X aria-hidden size={20} />
      </Button>
    </Close>
    {actions && (
      <Actions>
        {actions.map(({ key, label, onClick, buttonProps }) => (
          <Action key={key} asChild altText={label}>
            <Button size="sm" {...buttonProps} onPress={() => onClick(key)}>
              {label}
            </Button>
          </Action>
        ))}
      </Actions>
    )}
  </Root>
)

export default Toast
