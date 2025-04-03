import type React from 'react'
import { css } from '@styled-system/css'

interface StepsProps {
  children: React.ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <div
      className={css({
        borderLeft: '2px solid',
        borderColor: 'border',
        pl: 'padding.inline.lg',
        py: 'padding.block.sm',
        my: 'margin.block.md',
      })}
    >
      {children}
    </div>
  )
}
