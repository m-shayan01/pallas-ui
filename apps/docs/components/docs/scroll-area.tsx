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
        pr: 'padding.inline.md',
        '&::-webkit-scrollbar': {
          width: '2',
        },
        '&::-webkit-scrollbar-track': {
          bg: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'fill.DEFAULT',
          rounded: 'full',
        },
      })} ${className || ''}`}
    >
      {children}
    </div>
  )
}