import { Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function ParagraphSizesDemo() {
  return (
    <VStack gap="6">
      <Paragraph size="base">
        Base size paragraph. Typography is the art and technique of arranging type to make written
        language legible, readable, and appealing when displayed.
      </Paragraph>
      <Paragraph size="large">
        Large size paragraph. Typography is the art and technique of arranging type to make written
        language legible, readable, and appealing when displayed.
      </Paragraph>
      <Paragraph size="compact">
        Compact size paragraph. Typography is the art and technique of arranging type to make
        written language legible, readable, and appealing when displayed.
      </Paragraph>
      <Paragraph size="subscript">
        Subscript size paragraph. Typography is the art and technique of arranging type to make
        written language legible, readable, and appealing when displayed.
      </Paragraph>
    </VStack>
  )
}
