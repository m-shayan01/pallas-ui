import { Input } from '@/components/ui/input'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

export default function Example() {
  return (
    <Stack width="full" maxWidth="md" align="flex-start" gap="4">
      <Stack width="full" align="flex-start" gap="2">
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium' })}>Size Variants</h3>
        <Stack width="full" align="flex-start" gap="2">
          <Input size="sm">
            <Input.Text placeholder="Small input" />
          </Input>
          <Input size="md">
            <Input.Text placeholder="Medium input" />
          </Input>
          <Input size="lg">
            <Input.Text placeholder="Large input" />
          </Input>
        </Stack>
      </Stack>

      <Stack width="full" align="flex-start" gap="2">
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium' })}>Shape Variants</h3>
        <Stack width="full" align="flex-start" gap="2">
          <Input shape="default">
            <Input.Text placeholder="Default shape" />
          </Input>
          <Input shape="rounded">
            <Input.Text placeholder="Rounded shape" />
          </Input>
          <Input shape="circle">
            <Input.Text placeholder="Circle shape" />
          </Input>
        </Stack>
      </Stack>

      <Stack width="full" align="flex-start" gap="2">
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium' })}>Status Variants</h3>
        <Stack width="full" align="flex-start" gap="2">
          <Input size="md">
            <Input.Text status="success" placeholder="Success state" />
          </Input>
          <Input size="md">
            <Input.Text status="error" placeholder="Error state" />
          </Input>
          <Input size="md">
            <Input.Text status="warning" placeholder="Warning state" />
          </Input>
        </Stack>
      </Stack>
    </Stack>
  )
}
