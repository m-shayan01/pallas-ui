'use client'

import { Button } from '@/components/ui/button'
import { Content, Root, Trigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { HStack } from '@styled-system/jsx'

export default function TooltipPositionsDemo() {
  return (
    <TooltipProvider>
      <HStack gap="4">
        <Root>
          <Trigger asChild>
            <Button variant="outlined">Top</Button>
          </Trigger>
          <Content side="top">Tooltip on top</Content>
        </Root>

        <Root>
          <Trigger asChild>
            <Button variant="outlined">Right</Button>
          </Trigger>
          <Content side="right">Tooltip on right</Content>
        </Root>

        <Root>
          <Trigger asChild>
            <Button variant="outlined">Bottom</Button>
          </Trigger>
          <Content side="bottom">Tooltip on bottom</Content>
        </Root>

        <Root>
          <Trigger asChild>
            <Button variant="outlined">Left</Button>
          </Trigger>
          <Content side="left">Tooltip on left</Content>
        </Root>
      </HStack>
    </TooltipProvider>
  )
}
