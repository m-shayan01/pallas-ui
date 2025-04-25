'use client'

import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip/tooltip'

export default function TooltipDelayDemo() {
  return (
    <Tooltip.Provider delayDuration={1000}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outlined">Hover with Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>This tooltip has a 1 second delay</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
