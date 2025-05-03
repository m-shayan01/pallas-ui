import { Input } from '@/components/ui/input'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <Stack w="full" maxW="sm" align="flex-start" gap="1.5">
      <Input size="md">
        <Input.Text placeholder="Email" />
      </Input>
    </Stack>
  )
}
