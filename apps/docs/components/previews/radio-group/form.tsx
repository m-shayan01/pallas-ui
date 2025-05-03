'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'
import { css } from '@styled-system/css'
import { HStack, VStack } from '@styled-system/jsx'

export default function Example() {
  return (
    <form className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <VStack gap="2" align="start">
        <Label htmlFor="notification-type">Notification type</Label>
        <RadioGroup.Root defaultValue="all" name="notification-type">
          <HStack gap="2">
            <RadioGroup.Item value="all" id="all" />
            <Label htmlFor="all">All new messages</Label>
          </HStack>
          <HStack gap="2">
            <RadioGroup.Item value="mentions" id="mentions" />
            <Label htmlFor="mentions">Direct messages and mentions</Label>
          </HStack>
          <HStack gap="2">
            <RadioGroup.Item value="none" id="none" />
            <Label htmlFor="none">Nothing</Label>
          </HStack>
        </RadioGroup.Root>
      </VStack>
      <Button type="submit" className={css({ alignSelf: 'flex-start' })}>
        Submit
      </Button>
    </form>
  )
}
