import {
  InputOTPContainer as ContainerPrimitive,
  InputOTPGroup as GroupPrimitive,
  InputOTPRoot as RootPrimitive,
  InputOTPSeparator as SeparatorPrimitive,
  InputOTPSlot as SlotPrimitive,
} from '@pallas-ui/input-otp'
import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { type InputOTPVariantProps, inputOTP } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type { ComponentProps } from 'react'
import type React from 'react'

const { withProvider, withContext } = createStyleContext(inputOTP)

// root container component
type ContainerProps = Assign<JsxStyleProps, React.ComponentProps<typeof ContainerPrimitive>>
const InputOTP = withProvider<
  React.ComponentRef<typeof ContainerPrimitive>,
  ContainerProps & InputOTPVariantProps
>(ContainerPrimitive, 'container')

// root component
type RootProps = Assign<React.ComponentProps<typeof RootPrimitive>, JsxStyleProps>
const InputOTPRoot = withContext<React.ComponentRef<typeof RootPrimitive>, RootProps>(
  RootPrimitive,
  'root',
)

// group component
type GroupProps = Assign<JsxStyleProps, ComponentProps<typeof GroupPrimitive>>
const InputOTPGroup = withContext<React.ComponentRef<typeof GroupPrimitive>, GroupProps>(
  GroupPrimitive,
  'group',
)

// slot component
const InputOTPSlot = withContext<
  React.ComponentRef<typeof SlotPrimitive>,
  React.ComponentProps<typeof SlotPrimitive>
>(SlotPrimitive, 'slot')

// separator component
const InputOTPSep = withContext<
  React.ComponentRef<typeof SeparatorPrimitive>,
  React.ComponentProps<typeof SeparatorPrimitive>
>(SeparatorPrimitive, 'separator')

// compose the InputOTP object
export default {
  Container: InputOTP,
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSep,
}
