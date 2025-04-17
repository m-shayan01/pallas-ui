'use client'

import { Button } from '@/components/ui/button'
import { css } from '../../../styled-system/css'

export default function ButtonTextPreview() {
  return (
    <div
      className={css({
        display: 'flex',
        gap: '4',
        flexWrap: 'wrap',
        alignItems: 'center',
      })}
    >
      <Button variant="text" size="sm">
        Small Text
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="text" size="lg">
        Large Text
      </Button>
    </div>
  )
}
