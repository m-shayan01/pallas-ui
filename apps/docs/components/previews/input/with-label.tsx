import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <Stack width="full" maxWidth="sm" align="flex-start" gap="1">
      <Label htmlFor="email">Email</Label>
      <Input size="md">
        <Input.Text id="email" placeholder="Email" />
      </Input>
    </Stack>
  )
}
