import { css } from '@styled-system/css'
import type React from 'react'

interface StepsProps {
  children: React.ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <div
      className={css({
        //inner children spacing via padding
        borderLeft: '2px solid',
        borderColor: 'border',
        pl: 'padding.inline.lg',
        py: 'padding.block.sm',
      })}
    >
      {children}
    </div>
  )
}
