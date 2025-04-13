'use client'

import { Separator } from '@/components/ui/separator'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '2' })}>
          Horizontal (Default)
        </h3>
        <Separator orientation="horizontal" />
      </div>

      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '6' })}>Vertical</h3>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5',
          })}
        >
          <div>Before</div>
          <Separator orientation="vertical" className={css({ height: '4rem' })} />
          <div>After</div>
        </div>
      </div>
    </div>
  )
}
