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
          p: 'layout.internal.md',
          minH: '200px',
          bg: 'surface.elevated',
          color: 'text',
        }),
        className,
      )}
    >
      {children}
    </div>
  )
}
