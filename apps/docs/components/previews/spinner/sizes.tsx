import { Spinner } from '@/components/ui/spinner'
import { HStack } from '@styled-system/jsx'

export default function SpinnerSizesDemo() {
  return (
    <HStack gap="8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </HStack>
  )
}
