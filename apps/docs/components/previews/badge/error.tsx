'use client'

import { Badge } from '@/components/ui//badge'
import { css } from '../../../styled-system/css'

export default function BadgeErrorPreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Badge variant="error">Error Badge</Badge>
    </div>
  )
}