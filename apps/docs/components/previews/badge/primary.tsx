'use client'

import { Badge } from '@/components/ui/badge'
import { css } from '../../../styled-system/css'

export default function BadgePrimaryPreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Badge variant="primary">Primary Badge</Badge>
    </div>
  )
}