'use client'

import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip/tooltip'

export default function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outlined">Hover</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Add to library</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
