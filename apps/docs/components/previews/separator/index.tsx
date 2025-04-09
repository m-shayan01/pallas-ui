'use client'

import { css } from '@styled-system/css'
import { Separator } from '@/components/ui/separator'

export default function Example() {
  return (
    <div>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}>
        <h4 className={css({ fontSize: 'sm', fontWeight: 'medium', lineHeight: 'none' })}>
          Radix Primitives
        </h4>
        <p className={css({ fontSize: 'sm', color: 'gray.500' })}>
          An open-source UI component library.
        </p>
      </div>
      <Separator className={css({ my: '4' })} />
      <div className={css({ display: 'flex', height: '5', alignItems: 'center', gap: '4', fontSize: 'sm' })}>
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}