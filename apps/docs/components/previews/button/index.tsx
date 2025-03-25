'use client'

import { Button } from '@/components/ui/button'
import { css } from '../../../styled-system/css'

export default function ButtonPreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Button>Default Button</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}