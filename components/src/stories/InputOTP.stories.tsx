import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import InputOTP from '../ui/input-otp'

const meta: Meta<typeof InputOTP.Root> = {
  component: InputOTP.Root,
  title: 'Forms/InputOTP',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InputOTP.Root>

export const Default: Story = {
  argTypes: {
    styling: {
      description: 'Styling variants of InputOTP',
      control: 'inline-radio',
      options: ['box', 'filled', 'underlined', 'unstyled'],
      table: {
        defaultValue: {
          summary: 'No styles',
        },
      },
    },
    maxLength: {
      description: 'Number of input slots',
      control: { type: 'number' },
      table: {
        defaultValue: {
          summary: '6',
        },
      },
    },
    pattern: {
      description: 'Valid input specified as a regex pattern',
      control: { type: 'select' },
      options: ['Numeric', 'Alphabetical', 'Alphanumeric'],
      mapping: {
        Numeric: '^[0-9]*$',
        Alphabetical: '^[a-zA-Z]*$',
        Alphanumeric: '^[a-zA-Z0-9]*$',
      },
      table: {
        defaultValue: {
          summary: '^[a-zA-Z0-9]*$',
        },
      },
    },
    dataStatus: {
      control: { type: 'inline-radio' },
      options: ['none', 'error', 'success'],
      description: 'Status of data validation',
      table: {
        defaultValue: {
          summary: 'none',
        },
      },
    },
  },
  args: {
    maxLength: 6,
    pattern: '^[a-zA-Z0-9]*$',
    dataStatus: 'none',
  },
  render: (props) => {
    return (
      <Stack align="flex-start" gap="6">
        <Stack align="flex-start" gap="1">
          <InputOTP.Root
            maxLength={props['maxLength']}
            pattern={props['pattern']}
            styling={props['styling']}
            dataStatus={props['dataStatus']}
          >
            <InputOTP.Group>
              {Array.from({ length: props['maxLength'] }).map((_, i) => (
                <InputOTP.Slot key={i} index={i} />
              ))}
            </InputOTP.Group>
          </InputOTP.Root>
        </Stack>
      </Stack>
    )
  },
}

const maxLength = 6

type Styling = 'box' | 'filled' | 'underlined'

export const InputOTPBox = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
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

export const InputOTPUnderlined = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <InputOTP.Root maxLength={maxLength} styling="underlined">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
  </Stack>
)

export const InputOTPFilled = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <InputOTP.Root maxLength={maxLength} styling="filled">
        <InputOTP.Group>
          {Array.from({ length: maxLength }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} />
          ))}
        </InputOTP.Group>
      </InputOTP.Root>
    </Stack>
  </Stack>
)

export const InputOTPUnstyled = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <InputOTP.Root maxLength={maxLength}>
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

export const WithSeparators = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root maxLength={maxLength} styling={variant.styling as Styling}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
            <InputOTP.Separator />
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    ))}
  </Stack>
)

export const ErrorState = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root
          maxLength={maxLength}
          styling={variant.styling as Styling}
          dataStatus={'error'}
        >
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

export const SuccessState = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Root
          maxLength={maxLength}
          styling={variant.styling as Styling}
          dataStatus={'success'}
        >
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
