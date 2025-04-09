import { Heading, Paragraph } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function TypographyDemo() {
  return (
    <VStack gap="6">
      <Heading level={1}>Heading Level 1</Heading>
      <Paragraph>
        This is a standard paragraph with default styling. Typography is the art and technique of
        arranging type to make written language legible, readable, and appealing when displayed.
      </Paragraph>
    </VStack>
  )
}
