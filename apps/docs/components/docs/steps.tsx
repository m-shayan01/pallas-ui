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
        pl: '4',
        py: '1',
        counterReset: 'step',
        '& h3': {
          counterIncrement: 'step',
          textStyle: 'xl',
        },
      })}
    >
      {children}
    </div>
  )
}
