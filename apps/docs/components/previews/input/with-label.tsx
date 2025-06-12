import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <Stack w="full" maxW="sm" align="flex-start" gap="1">
      <Label htmlFor="email-input">Email</Label>
      <Input size="md">
        <Input.Text id="email-input" placeholder="Email" />
      </Input>
    </Stack>
  )
}
