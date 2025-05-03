import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { HStack, VStack } from '@styled-system/jsx'

export default function Example() {
  return (
    <VStack gap={4} align="start">
      <HStack gap={2} align="center">
        <Checkbox size="sm" id={'checkbox-sm'} />
        <Label htmlFor={'checkbox-sm'}>SM</Label>
      </HStack>

      <HStack gap={2} align="center">
        <Checkbox size="md" id={'checkbox-md'} />
        <Label htmlFor={'checkbox-md'}>MD</Label>
      </HStack>

      <HStack gap={2} align="center">
        <Checkbox size="lg" id={'checkbox-lg'} />
        <Label htmlFor={'checkbox-lg'}>LG</Label>
      </HStack>
    </VStack>
  )
}
