import { Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function ParagraphTextStylesDemo() {
  return (
    <VStack gap="4">
      <Paragraph textStyle="italic">Italic text style.</Paragraph>
      <Paragraph textStyle="bold">Bold text style.</Paragraph>
      <Paragraph textStyle="underline">Underlined text style.</Paragraph>
    </VStack>
  )
}
