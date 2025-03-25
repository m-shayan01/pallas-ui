import type React from 'react'
import { css, cx } from '@styled-system/css'

interface PreviewProps {
  className?: string
  children: React.ReactNode
}

export function Preview({ className, children }: PreviewProps) {
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '8',
          minH: '200px',
          bg: 'white',
          _dark: { bg: 'gray.900' },
        }),
        className,
      )}
    >
      {children}
    </div>
  )
}
