'use client'

import Avatar from '@/components/ui/avatar'
import { HStack } from '@styled-system/jsx'
import { User, User2, Users } from 'lucide-react'

export default function Example() {
  return (
    <HStack gap="4">
      {/* Text Fallbacks */}
      <Avatar.Root size="md">
        <Avatar.Fallback>AK</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="md">
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>

      {/* Icon Fallbacks */}
      <Avatar.Root size="md">
        <Avatar.Fallback>
          <User />
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="md">
        <Avatar.Fallback>
          <User2 />
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root size="md">
        <Avatar.Fallback>
          <Users />
        </Avatar.Fallback>
      </Avatar.Root>
    </HStack>
  )
}
