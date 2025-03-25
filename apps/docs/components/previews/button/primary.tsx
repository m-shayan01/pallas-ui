'use client'

import { Button } from '@/components/ui/button'
import { css } from '../../../styled-system/css'

export default function ButtonPrimaryPreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" size="sm">Small Primary</Button>
      <Button variant="primary" size="lg">Large Primary</Button>
    </div>
  )
}