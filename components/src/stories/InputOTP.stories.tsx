import type { Meta } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import InputOTP from '../ui/input-otp'

const meta: Meta<typeof InputOTP> = {
  //@ts-ignore
  component: InputOTP.Root,
  title: 'Forms/InputOTP',
  tags: ['autodocs'],
}

export default meta

const maxLength = 6

export const Default = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Box Input </Label>
      <InputOTP.Root maxLength={maxLength} styling="box">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
  </Stack>
)

const inputOTPVariants = [
  {
    label: 'Box',
    styling: 'box',
  },
  {
    label: 'Filled',
    styling: 'filled',
  },
  {
    label: 'Underlined',
    styling: 'underlined',
  },
  {
    label: 'Unstyled',
    styling: 'unstyled',
  },
]

type Styling = 'box' | 'filled' | 'underlined' | 'unstyled'

export const InputOTPVariants = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root maxLength={maxLength} styling={variant.styling as Styling}>
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    ))}
  </Stack>
)
