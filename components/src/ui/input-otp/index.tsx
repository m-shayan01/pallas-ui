import {
  InputOTPContainer as ContainerPrimitive,
  InputOTPGroup as GroupPrimitive,
  type InputOTPProps,
  InputOTPRoot as RootPrimitive,
  InputOTPSlot as SlotPrimitive,
} from '@pallas-ui/input-otp'
import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { type Input_otpVariantProps, input_otp } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type { ComponentProps } from 'react'
import type React from 'react'

const { withProvider, withContext } = createStyleContext(input_otp)

// root container component
type ContainerProps = Assign<JsxStyleProps, ComponentProps<typeof ContainerPrimitive>>
const InputOTP = withProvider<
  React.ComponentRef<typeof ContainerPrimitive>,
  ContainerProps & Input_otpVariantProps
>(ContainerPrimitive, 'container')

// root component
type RootProps = Assign<InputOTPProps, JsxStyleProps>
const InputOTPRoot = withContext<React.ComponentRef<typeof RootPrimitive>, RootProps>(
  RootPrimitive,
  'root',
)

// type RootProps = Assign<InputOTPProps, Input_otpVariantProps & JsxStyleProps>
// const InputOTPRoot = withProvider<React.ComponentRef<typeof RootPrimitive>, RootProps>(
//   RootPrimitive,
//   'root',
// )

// group component
type GroupProps = Assign<JsxStyleProps, ComponentProps<typeof GroupPrimitive>>
const InputOTPGroup = withContext<React.ComponentRef<typeof GroupPrimitive>, GroupProps>(
  GroupPrimitive,
  'group',
)

// slot component
const InputOTPSlot = withContext<
  React.ComponentRef<typeof SlotPrimitive>,
  React.HTMLAttributes<HTMLDivElement> & Input_otpVariantProps & { index: number }
>(SlotPrimitive, 'slot')

// compose the InputOTP object
export default {
  Container: InputOTP,
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
}
