import { css, cx } from '@styled-system/css'
import type React from 'react'

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
          p: '{spacing.padding.inline.lg}', // Changed from padding.inline.lg
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
