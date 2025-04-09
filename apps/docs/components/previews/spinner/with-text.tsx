import { Spinner } from '@/components/ui/spinner'
import { Paragraph } from '@/components/ui/typography'
import { HStack } from '@styled-system/jsx'

export default function SpinnerWithTextDemo() {
  return (
    <HStack gap="2">
      <Spinner size="sm" />
      <Paragraph>Loading...</Paragraph>
    </HStack>
  )
}
