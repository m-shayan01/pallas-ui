'use client'

import { Badge } from '@/components/ui/badge'
import { css } from '@styled-system/css'
import { Check } from 'lucide-react'

export default function BadgeWithIconPreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap' })}>
      <Badge variant="default">
        <Check className={css({ h: '3', w: '3', mr: '1' })} />
        Default
      </Badge>
      <Badge variant="primary">
        <Check className={css({ h: '3', w: '3', mr: '1' })} />
        Primary
      </Badge>
      <Badge variant="error">
        <Check className={css({ h: '3', w: '3', mr: '1' })} />
        Error
      </Badge>
    </div>
  )
}