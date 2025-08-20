'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { chat } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import PallasAvatar from '../avatar'

const { withProvider, withContext } = createStyleContext(chat)

// Custom Message component with variant support
const CustomMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'user' | 'assistant'
    streaming?: boolean
  }
>(({ className, variant, streaming, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
CustomMessage.displayName = 'Message'

// Custom Avatar component
const CustomAvatar = React.forwardRef<
  React.ComponentRef<typeof PallasAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof PallasAvatar.Root> & {
    src?: string
    alt?: string
    fallback?: string | React.ReactNode
  }
>(({ src, alt, fallback, children, ...props }, ref) => (
  <PallasAvatar.Root ref={ref} {...props}>
    {src && <PallasAvatar.Image src={src} alt={alt} />}
    <PallasAvatar.Fallback>{fallback || children}</PallasAvatar.Fallback>
  </PallasAvatar.Root>
))
CustomAvatar.displayName = 'Avatar'

// Custom Bubble component with variant support
const CustomBubble = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />,
)
CustomBubble.displayName = 'Bubble'

// Custom Time component
const CustomTime = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    timestamp?: Date | string
  }
>(({ className, timestamp, children, ...props }, ref) => {
  const displayTime = timestamp ? new Date(timestamp).toLocaleTimeString() : children

  return (
    <span ref={ref} className={className} {...props}>
      {displayTime}
    </span>
  )
})
CustomTime.displayName = 'Time'

// Custom Input Container component (now just called Input)
const CustomInput = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />,
)
CustomInput.displayName = 'Input'

// Custom TextArea component with enhanced functionality
const CustomTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    onSend?: (value: string) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  }
>(({ onSend, onKeyDown, ...props }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const value = e.currentTarget.value.trim()
      if (value && onSend) {
        onSend(value)
        e.currentTarget.value = ''
      }
    }

    // Call any additional onKeyDown handler passed as prop
    onKeyDown?.(e)
  }

  return <textarea ref={ref} onKeyDown={handleKeyDown} {...props} />
})
CustomTextArea.displayName = 'TextArea'

// Custom Input Actions component
const CustomInputActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />,
)
CustomInputActions.displayName = 'InputActions'

export type RootProps = WithFixedClassName<React.HTMLAttributes<HTMLDivElement>>

export const Root = withProvider<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'root')

export const Message = withProvider<
  React.ComponentRef<typeof CustomMessage>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomMessage>, JsxStyleProps>
>(CustomMessage, 'message')

export const Avatar = withContext<
  React.ComponentRef<typeof CustomAvatar>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomAvatar>, JsxStyleProps>
>(CustomAvatar, 'avatar')

export const Bubble = withContext<
  React.ComponentRef<typeof CustomBubble>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomBubble>, JsxStyleProps>
>(CustomBubble, 'bubble')

export const Time = withContext<
  React.ComponentRef<typeof CustomTime>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomTime>, JsxStyleProps>
>(CustomTime, 'time')

export const Input = withContext<
  React.ComponentRef<typeof CustomInput>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomInput>, JsxStyleProps>
>(CustomInput, 'input')

export const TextArea = withContext<
  React.ComponentRef<typeof CustomTextArea>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomTextArea>, JsxStyleProps>
>(CustomTextArea, 'textarea')

export const InputActions = withContext<
  React.ComponentRef<typeof CustomInputActions>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomInputActions>, JsxStyleProps>
>(CustomInputActions, 'inputActions')

const Chat = {
  Root,
  Message,
  Avatar,
  Bubble,
  Time,
  Input,
  TextArea,
  InputActions,
}

export default Chat
