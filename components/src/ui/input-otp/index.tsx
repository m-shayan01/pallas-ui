import {
  InputOTPGroup as Group,
  type InputOTPProps,
  InputOTPRoot as Root,
  InputOTPSlot as Slot,
} from '@pallas-ui/input-otp'
import { createStyleContext } from '@pallas-ui/style-context'
import { type Input_otpVariantProps, input_otp } from '@styled-system/recipes'
import type { OTPInput } from 'input-otp'
import type React from 'react'

//------IMPLEMENT withProvider and withContext
// see popover.tsx for example

// error states and variants ??? separate context required?
// const OTPStateVariantContext = React.createContext<
//   | ({
//       dataStatus?: 'error' | 'success' | 'warning'
//     } & InputVariantProps)
//   | null
// >(null)

const { withProvider, withContext } = createStyleContext(input_otp)

// root component
const InputOTPRoot = withProvider<React.ComponentRef<typeof OTPInput>, InputOTPProps>(Root, 'root')

// group and slot components
const InputOTPGroup = withContext<React.ComponentRef<'div'>, InputOTPProps>(Group, 'group')

const InputOTPSlot = withContext<
  React.ComponentRef<'div'>,
  React.HTMLAttributes<HTMLDivElement> & Input_otpVariantProps & { index: number }
>(Slot, 'slot')

// Compose the InputOTP object
export const InputOTP = Object.assign(InputOTPRoot, {
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
})
