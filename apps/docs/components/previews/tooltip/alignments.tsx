'use client'

import { Button } from '@/components/ui/button'
import { Content, Root, Trigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { VStack } from '@styled-system/jsx'

export default function TooltipAlignmentsDemo() {
  return (
    <TooltipProvider>
      <VStack gap="4">
        <Root>
          <Trigger asChild>
            <Button variant="outlined">Start Alignment</Button>
          </Trigger>
          <Content align="start">Aligned to the start</Content>
        </Root>

        <Root>
          <Trigger asChild>
            <Button variant="outlined">Center Alignment</Button>
          </Trigger>
          <Content align="center">Aligned to the center</Content>
        </Root>

        <Root>
          <Trigger asChild>
            <Button variant="outlined">End Alignment</Button>
          </Trigger>
          <Content align="end">Aligned to the end</Content>
        </Root>
      </VStack>
    </TooltipProvider>
  )
}
