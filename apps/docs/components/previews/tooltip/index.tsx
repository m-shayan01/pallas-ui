'use client'

import { Button } from '@/components/ui/button'
import { Content, Root, Trigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@radix-ui/react-tooltip'

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Root>
        <Trigger asChild>
          <Button variant="outlined">Hover</Button>
        </Trigger>
        <Content>Add to library</Content>
      </Root>
    </TooltipProvider>
  )
}
