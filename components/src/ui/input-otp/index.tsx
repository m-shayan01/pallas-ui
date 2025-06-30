import {
  InputOTPGroup as GroupPrimitive,
  type InputOTPProps,
  InputOTPRoot as RootPrimitive,
  InputOTPSlot as SlotPrimitive,
} from '@pallas-ui/input-otp'
import { createStyleContext, type Assign } from '@pallas-ui/style-context'
import { type Input_otpVariantProps, input_otp } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type { ComponentProps } from 'react'
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

type RootProps = Assign<InputOTPProps, Input_otpVariantProps & JsxStyleProps>

// root component
const InputOTPRoot = withProvider<React.ComponentRef<typeof RootPrimitive>, RootProps>(RootPrimitive, 'root')

type GroupProps = Assign<JsxStyleProps, ComponentProps<typeof GroupPrimitive>>
// group component
const InputOTPGroup = withContext<React.ComponentRef<typeof GroupPrimitive>, GroupProps>(GroupPrimitive, 'group')

// slot component
const InputOTPSlot = withContext<
  React.ComponentRef<typeof SlotPrimitive>,
  React.HTMLAttributes<HTMLDivElement> & Input_otpVariantProps & { index: number }
>(SlotPrimitive, 'slot')

// compose the InputOTP object
export default {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
}
