import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { Flex } from '@styled-system/jsx'

export default function FlexPreview() {
  return (
    <Flex direction="row" justify="flex-start" align="flex-start" gap="4" w="100%">
      <DecorativeBox>Item 1</DecorativeBox>
      <DecorativeBox>Item 2</DecorativeBox>
      <DecorativeBox>Item 3</DecorativeBox>
    </Flex>
  )
}
