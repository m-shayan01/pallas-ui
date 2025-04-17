'use client'

import { Button } from '@/components/ui/button'
import { css } from '../../../styled-system/css'

export default function ButtonLinkPreview() {
  return (
    <div
      className={css({
        display: 'flex',
        gap: '4',
        flexWrap: 'wrap',
        alignItems: 'center',
      })}
    >
      <Button variant="link" size="sm">
        Small Link
      </Button>
      <Button variant="link">Link Button</Button>
      <Button variant="link" size="lg">
        Large Link
      </Button>
    </div>
  )
}
