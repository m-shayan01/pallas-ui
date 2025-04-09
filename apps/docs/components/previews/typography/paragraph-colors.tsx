import { Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function ParagraphColorsDemo() {
  return (
    <VStack gap="4">
      <Paragraph color="default">Default color paragraph text.</Paragraph>
      <Paragraph color="secondary">Secondary color paragraph text.</Paragraph>
      <Paragraph color="success">Success color paragraph text.</Paragraph>
      <Paragraph color="warning">Warning color paragraph text.</Paragraph>
      <Paragraph color="error">Error color paragraph text.</Paragraph>
      <Paragraph color="disabled">Disabled color paragraph text.</Paragraph>
    </VStack>
  )
}
