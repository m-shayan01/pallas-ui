'use client'

import { Button } from '@/components/ui/button'
import { Content, Root, Trigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@radix-ui/react-tooltip'

export default function TooltipDisabledDemo() {
  return (
    <TooltipProvider>
      <Root>
        <Trigger asChild>
          <Button variant="outlined" disabled>
            Disabled Button
          </Button>
        </Trigger>
        <Content>This tooltip won't show because the trigger is disabled</Content>
      </Root>
    </TooltipProvider>
  )
}
