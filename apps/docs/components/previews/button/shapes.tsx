'use client'

import { Button } from '@/components/ui/button'
import { css } from '@styled-system/css'
import { Mail } from 'lucide-react'

export default function ButtonShapesPreview() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap', alignItems: 'center' })}>
      <Button shape="default">Default Shape</Button>
      <Button shape="rounded">Rounded Shape</Button>
      <Button shape="circle" size="icon" icon={<Mail />} />
    </div>
  )
}
