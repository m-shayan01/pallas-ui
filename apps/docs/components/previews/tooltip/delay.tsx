'use client'

import { Button } from '@/components/ui/button'
import { Content, Root, Trigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@radix-ui/react-tooltip'

export default function TooltipDelayDemo() {
  return (
    <TooltipProvider delayDuration={1000}>
      <Root>
        <Trigger asChild>
          <Button variant="outlined">Hover with Delay</Button>
        </Trigger>
        <Content>This tooltip has a 1 second delay</Content>
      </Root>
    </TooltipProvider>
  )
}
