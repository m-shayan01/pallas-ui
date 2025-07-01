import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import InputOTP from '../ui/input-otp'

const meta: Meta<typeof InputOTP.Container> = {
  component: InputOTP.Container,
  title: 'Forms/InputOTP',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    styling: {
      description: 'Styling variants of InputOTP',
      control: 'inline-radio',
      options: ['box', 'filled', 'underlined', 'unstyled'],
      table: {
        defaultValue: {
          summary: 'box',
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
      options: ['Alphanumeric', 'Numeric', 'Alphabetical'],
      mapping: {
        Alphanumeric: '^[a-zA-Z0-9]*$',
        Numeric: '^[0-9]*$',
        Alphabetical: '^[a-zA-Z]*$',
      },
      table: {
        defaultValue: {
          summary: '^[a-zA-Z0-9]*$',
          detail: 'Alphanumeric characters',
        },
      },
    },
    errorStatus: {
      control: { type: 'inline-radio' },
      options: ['false', 'true'],
      description: 'Is in error state',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    styling: 'box',
    maxLength: 6,
    pattern: '^[0-9]*$',
    errorStatus: 'false',
  },
  render: (props) => {
    return (
      <Stack align="flex-start" gap="6">
        <Stack align="flex-start" gap="1">
          <InputOTP.Container styling={props['styling']} errorStatus={props['errorStatus']}>
            <InputOTP.Root maxLength={props['maxLength']} pattern={props['pattern']}>
              <InputOTP.Group>
                {Array.from({ length: props['maxLength'] }).map((_, i) => (
                  <InputOTP.Slot key={i} index={i} />
                ))}
              </InputOTP.Group>
            </InputOTP.Root>
          </InputOTP.Container>
        </Stack>
      </Stack>
    )
  },
}

// export const Default = () => (
//   <Stack align="flex-start" gap="6">
//     <Stack align="flex-start" gap="1">
//       <Label>Box Input </Label>
//       <InputOTP.Container styling="box">
//         <InputOTP.Root maxLength={maxLength} pattern={regex}>
//           <InputOTP.Group>
//             {Array.from({ length: maxLength }).map((_, i) => (
//               <InputOTP.Slot key={i} index={i} />
//             ))}
//           </InputOTP.Group>
//         </InputOTP.Root>
//       </InputOTP.Container>
//     </Stack>
//   </Stack>
// )

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

const maxLength = 6
const regex = '^[a-zA-Z0-9]*$'

type Styling = 'box' | 'filled' | 'underlined' | 'unstyled'

export const InputOTPVariants = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Container styling={variant.styling as Styling}>
          <InputOTP.Root maxLength={maxLength} pattern={regex}>
            <InputOTP.Group>
              {Array.from({ length: maxLength }).map((_, i) => (
                <InputOTP.Slot key={i} index={i} />
              ))}
            </InputOTP.Group>
          </InputOTP.Root>
        </InputOTP.Container>
      </Stack>
    ))}
  </Stack>
)

export const ErrorStateForEachVariant = () => (
  <Stack align="flex-start" gap="6">
    {inputOTPVariants.map((variant) => (
      <Stack align="flex-start" gap="1" key={variant.styling}>
        <Label>{variant.label}</Label>
        <InputOTP.Container styling={variant.styling as Styling} errorStatus={'true'}>
          <InputOTP.Root maxLength={maxLength} pattern={regex}>
            <InputOTP.Group>
              {Array.from({ length: maxLength }).map((_, i) => (
                <InputOTP.Slot key={i} index={i} />
              ))}
            </InputOTP.Group>
          </InputOTP.Root>
        </InputOTP.Container>
      </Stack>
    ))}
  </Stack>
)
