import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { Flex } from '@styled-system/jsx'

export default function ResponsiveFlexPreview() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: '2', md: '4' }}
      align={{ base: 'stretch', md: 'center' }}
      w="100%"
    >
      <DecorativeBox w="100%">
        This box will be stacked vertically on small screens and horizontally on medium screens and
        up.
      </DecorativeBox>
      <DecorativeBox w="100%">
        Responsive layout with different gap sizes based on screen width.
      </DecorativeBox>
    </Flex>
  )
}
