'use client'

import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { chat } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import * as React from 'react'
import PallasAvatar from '../avatar'
import { Button } from '../button'

const { withProvider, withContext } = createStyleContext(chat)

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

// Custom TextArea component with enhanced functionality and auto-resize
const CustomTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    onSend?: (value: string) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    minHeight?: number
    maxHeight?: number
  }
>(({ onSend, onKeyDown, minHeight, maxHeight, ...props }, ref) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  // Merge refs
  React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement)

  // Get min/max heights from CSS custom properties or fallback to props/defaults
  const getHeightValues = React.useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) {
      return {
        min: minHeight ?? 30,
        max: maxHeight ?? 120,
      }
    }

    const computedStyle = getComputedStyle(textarea)
    const minFromCSS = computedStyle.getPropertyValue('--textarea-min-height').trim()
    const maxFromCSS = computedStyle.getPropertyValue('--textarea-max-height').trim()

    return {
      min: minFromCSS ? Number.parseInt(minFromCSS, 10) : (minHeight ?? 30),
      max: maxFromCSS ? Number.parseInt(maxFromCSS, 10) : (maxHeight ?? 120),
    }
  }, [minHeight, maxHeight])

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const { min, max } = getHeightValues()

    // Check if textarea is empty
    const isEmpty = !textarea.value.trim()

    if (isEmpty) {
      textarea.style.height = `${min}px`
      textarea.style.overflowY = 'hidden'
      return
    }

    // Calculate if content needs more than one line
    // First, set height to minimum to get baseline measurement
    textarea.style.height = `${min}px`

    // Check if content overflows at minimum height
    const isOverflowing = textarea.scrollHeight > min

    if (!isOverflowing) {
      // Content fits in one line, keep minimum height
      textarea.style.height = `${min}px`
      textarea.style.overflowY = 'hidden'
    } else {
      // Content needs more space, calculate actual height needed
      textarea.style.height = 'auto'
      const scrollHeight = textarea.scrollHeight
      const newHeight = Math.min(Math.max(scrollHeight, min), max)

      textarea.style.height = `${newHeight}px`

      // Handle overflow for max height
      if (scrollHeight > max) {
        textarea.style.overflowY = 'auto'
      } else {
        textarea.style.overflowY = 'hidden'
      }
    }
  }, [getHeightValues])

  // Adjust height on mount and when value changes
  React.useEffect(() => {
    adjustHeight()
  }, [adjustHeight])

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    adjustHeight()
    props.onInput?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const value = e.currentTarget.value.trim()
      if (value && onSend) {
        onSend(value)
        e.currentTarget.value = ''
        // Reset height after clearing
        setTimeout(() => adjustHeight(), 0)
      }
    }

    // Call any additional onKeyDown handler passed as prop
    onKeyDown?.(e)
  }

  const { min } = getHeightValues()

  return (
    <textarea
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
      style={{
        minHeight: `${min}px`,
        height: `${min}px`,
        ...props.style,
      }}
      {...props}
    />
  )
})
CustomTextArea.displayName = 'TextArea'

// // Context for passing variant and shape from Suggestions to Suggestion
// const SuggestionButtonStyleContext = React.createContext<{
//   variant?: 'default' | 'outlined'
//   shape?: 'default' | 'rounded'
// }>({})

// // Custom Suggestions component that provides context to children
// const CustomSuggestions = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> & {
//     variant?: 'outlined' | 'solid'
//     shape?: 'pill' | 'card'
//   }
// >(({ variant, shape, children, ...props }, ref) => {
//   console.log('CustomSuggestions rendered with variant:', variant, 'and shape:', shape)
//   const buttonVariant = variant === 'outlined' ? 'outlined' : 'default'
//   const buttonShape = shape === 'pill' ? 'rounded' : 'default'

//   return (
//     <SuggestionButtonStyleContext.Provider value={{ variant: buttonVariant, shape: buttonShape }}>
//       <div ref={ref} {...props}>
//         {children}
//       </div>
//     </SuggestionButtonStyleContext.Provider>
//   )
// })
// CustomSuggestions.displayName = 'CustomSuggestions'

// // Custom Suggestion component
// const CustomSuggestion = React.forwardRef<
//   HTMLButtonElement,
//   React.ButtonHTMLAttributes<HTMLButtonElement>
// >(({ className, children, onClick, ...props }, ref) => {
//   const { variant, shape } = React.useContext(SuggestionButtonStyleContext)

//   return (
//     <Button
//       ref={ref}
//       variant={variant}
//       shape={shape}
//       className={className}
//       onClick={onClick}
//       {...props}
//     >
//       {children}
//     </Button>
//   )
// })
// CustomSuggestion.displayName = 'Suggestion'

export type RootProps = WithFixedClassName<React.HTMLAttributes<HTMLDivElement>>

export const Root = withProvider<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'root')

export const Message = withProvider<
  HTMLDivElement,
  Assign<
    React.HTMLAttributes<HTMLDivElement> & {
      variant?: 'user' | 'assistant'
      streaming?: boolean
    },
    JsxStyleProps
  >
>('div', 'message')

export const Avatar = withContext<
  React.ComponentRef<typeof CustomAvatar>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomAvatar>, JsxStyleProps>
>(CustomAvatar, 'avatar')

export const Bubble = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'bubble')

export const Metadata = withContext<
  HTMLSpanElement,
  Assign<React.HTMLAttributes<HTMLSpanElement>, JsxStyleProps>
>('span', 'metadata')

export const Input = withProvider<
  HTMLDivElement,
  Assign<
    React.HTMLAttributes<HTMLDivElement> & { layout?: 'vertical' | 'horizontal' },
    JsxStyleProps
  >
>('div', 'input')

export const TextArea = withContext<
  React.ComponentRef<typeof CustomTextArea>,
  Assign<React.ComponentPropsWithoutRef<typeof CustomTextArea>, JsxStyleProps>
>(CustomTextArea, 'textarea')

export const InputActions = withContext<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, JsxStyleProps>
>('div', 'inputActions')

export const Suggestions = withProvider<
  HTMLDivElement,
  Assign<
    React.HTMLAttributes<HTMLDivElement> & {
      suggestionVariant?: 'outlined' | 'filled' | 'primary'
      suggestionShape?: 'pill' | 'card'
    },
    JsxStyleProps
  >
>('div', 'suggestions')

export const Suggestion = withContext<
  HTMLButtonElement,
  Assign<React.ButtonHTMLAttributes<HTMLButtonElement>, JsxStyleProps>
>('button', 'suggestion')

// export const Suggestions = withProvider<
//   React.ComponentRef<typeof CustomSuggestions>,
//   Assign<React.ComponentPropsWithoutRef<typeof CustomSuggestions>, JsxStyleProps>
// >(CustomSuggestions, 'suggestions')

// export const Suggestion = withContext<
//   React.ComponentRef<typeof CustomSuggestion>,
//   Assign<React.ComponentPropsWithoutRef<typeof CustomSuggestion>, JsxStyleProps>
// >(CustomSuggestion, 'suggestion')

const Chat = {
  Root,
  Message,
  Avatar,
  Bubble,
  Metadata,
  Input,
  TextArea,
  InputActions,
  Suggestions,
  Suggestion,
}

export default Chat
