'use client'

import { css } from '@styled-system/css'
import { VStack } from '@styled-system/jsx'
import { vstack } from '@styled-system/patterns'
import type React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  gap?: string
}

export function Section({
  children,
  className,
  id,
  gap = '{spacing.gap.component.sm}',
}: SectionProps) {
  return (
    <VStack
      id={id}
      gap={gap}
      css={{
        alignItems: 'stretch',
        width: '100%',
      }}
      className={className}
    >
      {children}
    </VStack>
  )
}
