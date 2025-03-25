'use client'

import React from 'react'
import { css } from '@styled-system/css'

interface ScrollAreaProps {
  className?: string
  children: React.ReactNode
}

export function ScrollArea({ className, children }: ScrollAreaProps) {
  return (
    <div
      className={`${css({
        overflow: 'auto',
        maxHeight: 'calc(100vh - 200px)',
        pr: '4',
        '&::-webkit-scrollbar': {
          width: '2',
        },
        '&::-webkit-scrollbar-track': {
          bg: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'gray.300',
          rounded: 'full',
          _dark: {
            bg: 'gray.700',
          },
        },
      })} ${className || ''}`}
    >
      {children}
    </div>
  )
}