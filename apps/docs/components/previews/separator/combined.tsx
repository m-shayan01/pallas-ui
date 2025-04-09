'use client'

import { css } from '@styled-system/css'
import { Separator } from '@/components/ui/separator'

export default function Example() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Dotted & Rounded</h3>
        <Separator type="dotted" rounded />
      </div>
      
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Dashed & Rounded</h3>
        <Separator type="dashed" rounded />
      </div>
      
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>Vertical & Dotted</h3>
        <div className={css({ display: 'flex', alignItems: 'center', height: '5' })}>
          <div>Before</div>
          <Separator orientation="vertical" type="dotted" className={css({ mx: '4' })} />
          <div>After</div>
        </div>
      </div>
    </div>
  )
}