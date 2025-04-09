'use client'

import { Container } from '@styled-system/jsx'
import { vstack } from '@styled-system/patterns'
import type React from 'react'

interface ContentContainerProps {
  children: React.ReactNode
  className?: string
}

export function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <Container
      className={`${vstack({
        gap: 'layout.section.sm',
      })} ${className || ''}`}
    >
      {children}
    </Container>
  )
}
