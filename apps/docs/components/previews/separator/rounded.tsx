'use client'

import { css } from '@styled-system/css'
import { Separator } from '@/components/ui/separator'

export default function Example() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Default</h3>
        <Separator />
      </div>
      
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Rounded</h3>
        <Separator rounded />
      </div>
    </div>
  )
}