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

// type Story = StoryObj<typeof meta>

// export const Default: Story = {
//   argTypes: {
//     styling: {
//       options: ['box', 'filled', 'underlined', 'unstyled'],
//       control: 'inline-radio',
//     },
//     maxLength: {
//       control: { type: 'number' },
//     },
//   },
//   args: {
//     styling: 'box',
//     maxLength: 6,
//   },
//   render: (props) => {
//     return (
//       <Stack align="flex-start" gap="6">
//         <Stack align="flex-start" gap="1">
//           <InputOTP.Root maxLength={props['maxLength']} styling="box">
//             <InputOTP.Group>
//               {Array.from({ length: maxLength }).map((_, i) => (
//                 <InputOTP.Slot key={i} index={i} />
//               ))}
//             </InputOTP.Group>
//           </InputOTP.Root>
//         </Stack>
//       </Stack>
//     )
//   },
// }

const maxLength = 6
const regex = '^[0-9]Z*$'

export const Default = () => (
  <Stack align="flex-start" gap="6">
    <Stack align="flex-start" gap="1">
      <Label>Box Input </Label>
      <InputOTP.Container styling="box">
        <InputOTP.Root maxLength={maxLength}>
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </InputOTP.Container>
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
        <InputOTP.Container styling={variant.styling as Styling}>
          <InputOTP.Root maxLength={maxLength}>
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
