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
        borderColor: 'gray.300',
        pl: '6',
        py: '2',
        my: '6',
        _dark: { borderColor: 'gray.700' },
      })}
    >
      {children}
    </div>
  )
}
