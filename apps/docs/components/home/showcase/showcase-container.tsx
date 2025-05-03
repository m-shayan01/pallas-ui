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
        background: 'none',
        position: 'relative',
        zIndex: 0,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundSize: '15px 15px',
          backgroundPosition: '0px 0px',
          backgroundImage: 'radial-gradient(#c0c0c0 1px, #0000 0)',
          backgroundClip: 'content-box',
          WebkitTextFillColor: 'transparent',
          maskImage: 'linear-gradient(to bottom, transparent, black 10rem);',
          zIndex: -1,
        },
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
