import { Spinner } from '@/components/ui/spinner'
import { HStack } from '@styled-system/jsx'

export default function SpinnerColorsDemo() {
  return (
    <HStack gap="8">
      <Spinner color="default" />
      <Spinner color="primary" />
    </HStack>
  )
}
