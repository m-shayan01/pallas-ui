'use client'

import { Button } from '@/components/ui/button'
import { css } from '../../../styled-system/css'

export default function ButtonDashedPreview() {
  return (
    <div
      className={css({
        display: 'flex',
        gap: '4',
        flexWrap: 'wrap',
        alignItems: 'center',
      })}
    >
      <Button variant="dashed" size="sm">
        Small dashed
      </Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="dashed" size="lg">
        Large dashed
      </Button>
    </div>
  )
}
