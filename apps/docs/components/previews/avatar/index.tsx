'use client'

import Avatar from '@/components/ui/avatar'
import { HStack } from '@styled-system/jsx'

const URL = 'https://github.com/nanopx.png'

export default function Example() {
  return (
    <HStack gap="4">
      <Avatar.Root>
        <Avatar.Image src={URL} />
        <Avatar.Fallback>AR</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root shape="square">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>AR</Avatar.Fallback>
      </Avatar.Root>
    </HStack>
  )
}
