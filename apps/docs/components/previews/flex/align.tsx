import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { Box, Flex } from '@styled-system/jsx'

export default function FlexAlignPreview() {
  return (
    <Flex direction="column" gap="6" className={css({ width: '100%' })}>
      <Flex
        align="flex-start"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ height: '60px' }}>flex-start</DecorativeBox>
        <DecorativeBox style={{ height: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ height: '40px' }}>Item 3</DecorativeBox>
      </Flex>

      <Flex
        align="center"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ height: '60px' }}>center</DecorativeBox>
        <DecorativeBox style={{ height: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ height: '40px' }}>Item 3</DecorativeBox>
      </Flex>

      <Flex
        align="flex-end"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ height: '60px' }}>flex-end</DecorativeBox>
        <DecorativeBox style={{ height: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ height: '40px' }}>Item 3</DecorativeBox>
      </Flex>
    </Flex>
  )
}
