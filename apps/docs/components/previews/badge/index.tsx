'use client'

import { Badge } from '@/components/ui//badge'
import { css } from '../../../styled-system/css'

export default function BadgePreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Badge>Default Badge</Badge>
      <Badge variant="default">Default</Badge>
    </div>
  )
}