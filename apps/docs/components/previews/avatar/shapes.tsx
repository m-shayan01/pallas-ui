'use client'

import Avatar from '@/components/ui/avatar'
import { HStack } from '@styled-system/jsx'

const URL = 'https://github.com/nanopx.png'

export default function Example() {
  return (
    <HStack gap="4">
      {/* Circle shape (default) */}
      <Avatar.Root size="lg">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>CR</Avatar.Fallback>
      </Avatar.Root>

      {/* Square shape */}
      <Avatar.Root size="lg" shape="square">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>SQ</Avatar.Fallback>
      </Avatar.Root>
    </HStack>
  )
}
