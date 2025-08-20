'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { css, cx } from '@styled-system/css'
import { chat } from '@styled-system/recipes'
import type { HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import * as React from 'react'

const { withProvider, withContext } = createStyleContext(chat)

// Custom Message component with variant support
const CustomMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'user' | 'assistant'
    streaming?: boolean
  }
>(({ className, variant, streaming, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    data-variant={variant}
    data-streaming={streaming}
    {...props}
  />
))
CustomMessage.displayName = 'Message'

// Custom Avatar component
const CustomAvatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src?: string
    alt?: string
    fallback?: string
  }
>(({ className, src, alt, fallback, children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {src ? (
      <img src={src} alt={alt} className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
    ) : (
      <div className={css({ w: 'full', h: 'full', display: 'flex', alignItems: 'center', justifyContent: 'center', bg: 'gray.300', color: 'gray.600', fontSize: 'sm', fontWeight: 'medium' })}>
        {fallback || children}
      </div>
    )}
  </div>
))
CustomAvatar.displayName = 'Avatar'

// Custom Bubble component with variant support
const CustomBubble = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
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

export type RootProps = WithFixedClassName<React.HTMLAttributes<HTMLDivElement>>

export const Root = withProvider<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'root')

export const Message = withContext<
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

const Chat = {
  Root,
  Message,
  Avatar,
  Bubble,
  Time,
}

export default Chat
