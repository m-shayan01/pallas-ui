'use client'

import { Button } from '@/components/ui/button'
import { css } from '../../../styled-system/css'

export default function ButtonOutlinePreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" size="sm">Small Outlined</Button>
      <Button variant="outlined" size="lg">Large Outlined</Button>
    </div>
  )
}