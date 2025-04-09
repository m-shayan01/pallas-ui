import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { HStack } from '@styled-system/jsx'

export default function SpinnerInButtonDemo() {
  return (
    <HStack gap="4">
      <Button disabled>
        <Spinner size="sm" color="default" />
      </Button>

      <Button disabled>
        <Spinner size="sm" color="default" />
        <span style={{ marginLeft: '8px' }}>Loading...</span>
      </Button>
    </HStack>
  )
}
