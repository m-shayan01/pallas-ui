'use client'

import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip/tooltip'

export default function TooltipDisabledDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outlined" disabled>
            Disabled Button
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>This tooltip won't show because the trigger is disabled</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
