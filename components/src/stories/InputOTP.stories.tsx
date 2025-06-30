import type { Meta } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import InputOTP from '../ui/input-otp'

const meta: Meta<typeof InputOTP> = {
  component: InputOTP.Root,
  title: 'Forms/InputOTP',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Basic Input OTP</Label>
      <InputOTP.Root maxLength={6} styling="filled">
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP.Root>

    </Stack>
  </Stack>
)

