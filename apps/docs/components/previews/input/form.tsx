import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <form className={css({ width: 'full', maxWidth: 'md' })}>
      <Stack width="full" align="flex-start" gap="4">
        <Stack width="full" align="flex-start" gap="1">
          <Label htmlFor="email">Email</Label>
          <Input size="md">
            <Input.Text id="email" placeholder="Email" />
          </Input>
        </Stack>
        <Stack width="full" align="flex-start" gap="1">
          <Label htmlFor="password">Password</Label>
          <Input size="md">
            <Input.Text id="password" type="password" placeholder="Password" />
          </Input>
        </Stack>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}
