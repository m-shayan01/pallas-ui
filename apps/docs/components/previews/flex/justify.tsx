import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { Flex } from '@styled-system/jsx'

export default function FlexJustifyPreview() {
  return (
    <Flex direction="column" gap="6" w="100%">
      <Flex
        justify="flex-start"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ width: '80px' }}>flex-start</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 3</DecorativeBox>
      </Flex>

      <Flex
        justify="center"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ width: '80px' }}>center</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 3</DecorativeBox>
      </Flex>

      <Flex
        justify="flex-end"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ width: '80px' }}>flex-end</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 3</DecorativeBox>
      </Flex>

      <Flex
        justify="space-between"
        gap="4"
        w="100%"
        h="120px"
        p="2"
        className={css({
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        <DecorativeBox style={{ width: '80px' }}>space-between</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 2</DecorativeBox>
        <DecorativeBox style={{ width: '80px' }}>Item 3</DecorativeBox>
      </Flex>
    </Flex>
  )
}
