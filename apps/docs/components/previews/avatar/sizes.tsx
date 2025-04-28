'use client'

import Avatar from '@/components/ui/avatar'
import { HStack } from '@styled-system/jsx'

const URL = 'https://github.com/nanopx.png'

export default function Example() {
  return (
    <HStack gap="4">
      <Avatar.Root size="sm">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>SM</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="md">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="lg">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>LG</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="xl">
        <Avatar.Image src={URL} />
        <Avatar.Fallback>XL</Avatar.Fallback>
      </Avatar.Root>
    </HStack>
  )
}
