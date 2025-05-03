import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { Flex } from '@styled-system/jsx'

export default function FlexColumnPreview() {
  return (
    <Flex direction="column" gap="4" w="100%">
      <DecorativeBox>Item 1</DecorativeBox>
      <DecorativeBox>Item 2</DecorativeBox>
      <DecorativeBox>Item 3</DecorativeBox>
    </Flex>
  )
}
