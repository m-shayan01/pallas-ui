'use client'

import { css } from '@styled-system/css'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Select from '@/components/ui/select'

export default function Example() {
  return (
    <form className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
        <Label htmlFor="email">Email</Label>
        <Select.Root defaultValue="m@example.com">
          <Select.Trigger style={{ width: '100%' }}>
            <Select.Value placeholder="Select a verified email to display" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="m@example.com">m@example.com</Select.Item>
            <Select.Item value="m@google.com">m@google.com</Select.Item>
            <Select.Item value="m@support.com">m@support.com</Select.Item>
          </Select.Content>
        </Select.Root>
        <p className={css({ fontSize: 'sm', color: 'gray.500' })}>
          You can manage email addresses in your email settings.
        </p>
      </div>
      <Button type="submit" className={css({ alignSelf: 'flex-start' })}>
        Submit
      </Button>
    </form>
  )
}