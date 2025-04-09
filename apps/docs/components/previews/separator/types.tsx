'use client'

import { css } from '@styled-system/css'
import { Separator } from '@/components/ui/separator'

export default function Example() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Solid (Default)</h3>
        <Separator type="solid" />
      </div>
      
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Dotted</h3>
        <Separator type="dotted" />
      </div>
      
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Dashed</h3>
        <Separator type="dashed" />
      </div>
    </div>
  )
}