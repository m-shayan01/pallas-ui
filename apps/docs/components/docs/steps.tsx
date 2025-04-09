import { css } from '@styled-system/css'
import type React from 'react'

interface StepsProps {
  children: React.ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <div
      className={css({
        borderLeft: '2px solid',
        borderColor: 'border',
        pl: '4', // Changed from padding.inline.lg
        py: '1', // Changed from padding.block.sm
      })}
    >
      {children}
    </div>
  )
}
