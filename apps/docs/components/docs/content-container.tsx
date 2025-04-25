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
        alignItems: 'flex-start',
      })} ${className || ''}`}
      css={{
        paddingLeft: '0', // Remove left padding
        pr: { base: '4', md: '8', lg: '8' }, // kept right padding
        px: '0', //manually adjusted to 0
      }}
    >
      {children}
    </Container>
  )
}
