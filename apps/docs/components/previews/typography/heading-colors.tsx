import { Heading } from '@/components/ui/typography'
import { VStack } from '@styled-system/jsx'

export default function HeadingColorsDemo() {
  return (
    <VStack gap="4">
      <Heading level={3} color="default">
        Default Color
      </Heading>
      <Heading level={3} color="secondary">
        Secondary Color
      </Heading>
      <Heading level={3} color="disabled">
        Disabled Color
      </Heading>
    </VStack>
  )
}
