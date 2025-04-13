import { Heading } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function HeadingVariantsDemo() {
  return (
    <VStack gap="4">
      <Heading level={2} variant="normal">
        Normal Heading
      </Heading>
      <Heading level={2} variant="accent">
        Accent Heading
      </Heading>
    </VStack>
  )
}
