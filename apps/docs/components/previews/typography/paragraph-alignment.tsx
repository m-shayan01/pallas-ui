import { Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function ParagraphAlignmentDemo() {
  return (
    <VStack gap="6" width="100%">
      <Paragraph textAlign="left">
        Left-aligned paragraph. Typography is the art and technique of arranging type to make
        written language legible, readable, and appealing when displayed.
      </Paragraph>
      <Paragraph textAlign="center">
        Center-aligned paragraph. Typography is the art and technique of arranging type to make
        written language legible, readable, and appealing when displayed.
      </Paragraph>
      <Paragraph textAlign="right">
        Right-aligned paragraph. Typography is the art and technique of arranging type to make
        written language legible, readable, and appealing when displayed.
      </Paragraph>
      <Paragraph textAlign="justify">
        Justify-aligned paragraph. Typography is the art and technique of arranging type to make
        written language legible, readable, and appealing when displayed. This text is justified,
        which means it is aligned to both the left and right margins.
      </Paragraph>
    </VStack>
  )
}
