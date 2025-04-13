'use client'

import { css } from '@styled-system/css'
import { vstack } from '@styled-system/patterns'
import type React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <div
      id={id}
      className={`${vstack({
        gap: 'gap.component.sm',
        alignItems: 'stretch',
        width: '100%',
      })} ${className || ''}`}
    >
      {children}
    </div>
  )
}
