'use client'

import { css } from '@styled-system/css'
import { Button } from '@/components/ui/button'
import Popover from '@/components/ui/popover'

export default function Example() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outlined">Open popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className={css({ p: '2' })}>
          <p>This is a simple popover content.</p>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}