'use client'

import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'
import { css } from '@styled-system/css'
import { Box, HStack, VStack } from '@styled-system/jsx'

export default function Example() {
  return (
    <VStack gap="6" align="start">
      <Box>
        <h3 className={css({ fontSize: 'md', fontWeight: 'medium', mb: '3' })}>Small</h3>
        <RadioGroup.Root defaultValue="option-one" size="sm">
          <HStack gap="2">
            <RadioGroup.Item value="option-one" id="s1" />
            <Label htmlFor="s1">Option One</Label>
          </HStack>
          <HStack gap="2">
            <RadioGroup.Item value="option-two" id="s2" />
            <Label htmlFor="s2">Option Two</Label>
          </HStack>
        </RadioGroup.Root>
      </Box>

      <Box>
        <h3 className={css({ fontSize: 'md', fontWeight: 'medium', mb: '3' })}>Medium (Default)</h3>
        <RadioGroup.Root defaultValue="option-one" size="md">
          <HStack gap="2">
            <RadioGroup.Item value="option-one" id="m1" />
            <Label htmlFor="m1">Option One</Label>
          </HStack>
          <HStack gap="2">
            <RadioGroup.Item value="option-two" id="m2" />
            <Label htmlFor="m2">Option Two</Label>
          </HStack>
        </RadioGroup.Root>
      </Box>

      <Box>
        <h3 className={css({ fontSize: 'md', fontWeight: 'medium', mb: '3' })}>Large</h3>
        <RadioGroup.Root defaultValue="option-one" size="lg">
          <HStack gap="2">
            <RadioGroup.Item value="option-one" id="l1" />
            <Label htmlFor="l1">Option One</Label>
          </HStack>
          <HStack gap="2">
            <RadioGroup.Item value="option-two" id="l2" />
            <Label htmlFor="l2">Option Two</Label>
          </HStack>
        </RadioGroup.Root>
      </Box>
    </VStack>
  )
}
