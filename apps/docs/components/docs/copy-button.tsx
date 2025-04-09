'use client'

import { css } from '@styled-system/css'
import { Check, Copy } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button' // Import the Pallas UI Button component

interface CopyButtonProps {
  value: string
  className?: string
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  // Clean up any existing timeout when component unmounts
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = React.useCallback(() => {
    // Use a more reliable copy method
    if (navigator.clipboard && window.isSecureContext) {
      // Modern API for secure contexts
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setCopied(true)

          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          // Reset after 2 seconds
          timeoutRef.current = setTimeout(() => {
            setCopied(false)
            timeoutRef.current = null
          }, 2000)
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err)
        })
    } else {
      // Fallback for older browsers or non-secure contexts
      try {
        // Create a temporary textarea element
        const textArea = document.createElement('textarea')
        textArea.value = value
        textArea.style.position = 'absolute'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()

        // Execute copy command
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)

        if (successful) {
          setCopied(true)

          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          // Reset after 2 seconds
          timeoutRef.current = setTimeout(() => {
            setCopied(false)
            timeoutRef.current = null
          }, 2000)
        } else {
          console.error('Fallback copy method failed')
        }
      } catch (err) {
        console.error('Fallback copy method failed:', err)
      }
    }
  }, [value])

  return (
    <Button
      size="icon"
      variant="outlined"
      onClick={copyToClipboard}
      className={`${css({
        position: 'absolute',
        top: '4', // Changed from padding.inline.lg
        right: '3', // Changed from padding.inline.md
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        p: '2', // Changed from padding.inline.sm
        color: copied ? 'success.text' : 'text.tertiary',
        bg: 'fill.tertiary',
        border: 'none',
        opacity: 0.8,
        _hover: {
          bg: 'fill',
          color: copied ? 'success.text' : 'text',
          opacity: 1,
        },
        _focus: {
          outline: 'none',
          ring: 'none',
          shadow: 'none',
        },
        transition: 'all 0.2s ease',
        maxWidth: 'icon.md',
        maxHeight: 'icon.md',
      })} ${className || ''}`}
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <Check className={css({ h: 'icon.sm', w: 'icon.sm', color: 'success.text' })} />
      ) : (
        <Copy className={css({ h: 'icon.sm', w: 'icon.sm' })} />
      )}
    </Button>
  )
}
