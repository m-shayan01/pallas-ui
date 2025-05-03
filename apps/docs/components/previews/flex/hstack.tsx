import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { HStack } from '@styled-system/jsx'

export default function HStackPreview() {
  return (
    <HStack gap="4" justify="flex-start" w="100%">
      <DecorativeBox>Item 1</DecorativeBox>
      <DecorativeBox>Item 2</DecorativeBox>
      <DecorativeBox>Item 3</DecorativeBox>
    </HStack>
  )
}
