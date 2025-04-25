import { Heading } from '@/components/ui/typography'
import { css } from '@styled-system/css'
import Head from 'next/head'
import type React from 'react'

export interface ShowcaseContainerProps {
  title?: string
  children: React.ReactNode
}

export const ShowcaseContainer = ({ title, children }: ShowcaseContainerProps) => {
  return (
    <section
      className={css({
        mt: 'layout.default.lg',
        py: '16',
        px: { base: '4', md: '6' },
        mx: 'auto',
        bg: 'surface.layout',
      })}
    >
      {title && (
        <Heading level={2} css={{ textAlign: 'center', mb: '8' }}>
          {title}
        </Heading>
      )}
      {children}
    </section>
  )
}
