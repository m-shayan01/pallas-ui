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
        mt: 'layout.default.md',
        pt: '6',
        pb: '12',
        px: { base: '4', md: '6' },
        mx: 'auto',
        backgroundSize: '15px 15px',
        backgroundPosition: '0px 0px',
        backgroundImage: 'radial-gradient(#dedede 1px, #0000 0)',
      })}
    >
      {title && (
        <Heading level={2} css={{ textAlign: 'center', mb: '12' }}>
          {title}
        </Heading>
      )}
      {children}
    </section>
  )
}
