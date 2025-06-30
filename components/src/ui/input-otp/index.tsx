import {
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

// root component
type RootProps = Assign<InputOTPProps, Input_otpVariantProps & JsxStyleProps>
const InputOTPRoot = withProvider<React.ComponentRef<typeof RootPrimitive>, RootProps>(
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
  React.HTMLAttributes<HTMLDivElement> & Input_otpVariantProps & { index: number }
>(SlotPrimitive, 'slot')

//----------------------------------------------------------------
//----------------------OLD CODE--------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
// import type { Assign } from '@pallas-ui/style-context'
// import { css } from '@styled-system/css'
// import { type Input_otpVariantProps, input_otp } from '@styled-system/recipes'
// import type { JsxStyleProps } from '@styled-system/types'
// import { OTPInput, OTPInputContext } from 'input-otp'
// import React from 'react'
// import { InputOTPStyleContext, useOTPContext, useOTPStyleContext } from './context'

// type InputOTPProps = React.HTMLAttributes<HTMLDivElement> &
//   Input_otpVariantProps & {
//     maxLength?: number
//     dataStatus?: 'error' | 'success' | 'warning'
//     children: React.ReactNode
//   }

// type RootProps = Assign<InputOTPProps, Input_otpVariantProps & JsxStyleProps>
// type GroupProps = Assign<JsxStyleProps, React.HTMLAttributes<HTMLDivElement>>

// const InputOTPRoot = React.forwardRef<HTMLInputElement, RootProps>(
//   ({ maxLength: length = 6, children, styling, dataStatus, ...rest }, ref) => {
//     const styleContextValue = React.useMemo(
//       () => ({
//         id: rest.id ?? '',
//         dataStatus,
//         styling,
//       }),
//       [rest.id, dataStatus, styling],
//     )

//     return (
//       <InputOTPStyleContext.Provider value={styleContextValue}>
//         <OTPInput maxLength={length} data-slot="input-otp" ref={ref}>
//           {children}
//         </OTPInput>
//       </InputOTPStyleContext.Provider>
//     )
//   },
// )
// InputOTPRoot.displayName = 'InputOTPRoot'

// const InputOTPGroup = React.forwardRef<HTMLDivElement, GroupProps>(
//   ({ className, ...props }, ref) => {
//     const { styling } = useOTPStyleContext()
//     const { group } = input_otp({ styling }) //-------------------change styles
//     console.log('ref: ', ref)
//     return <div data-slot="input-otp-group" ref={ref} className={group} {...props} />
//   },
// )
// InputOTPGroup.displayName = 'InputOTP.Group'

// const InputOTPSlot = ({ index }: { index: number }) => {
//   const OTPcontext = useOTPContext()
//   const currentSlot = OTPcontext.slots[index]

//   if (!currentSlot) return null

//   const { styling } = useOTPStyleContext()
//   const { slot } = input_otp({ styling }) //-------------------change styles
//   const { char, hasFakeCaret, isActive } = currentSlot

//   return (
//     <div data-slot="input-otp-slot" data-active={isActive || undefined} className={slot}>
//       <div className={css({ opacity: char ? 1 : 0.2 })}>{char ?? currentSlot.placeholderChar}</div>

//       {hasFakeCaret && (
//         <div
//           className={css({
//             position: 'absolute',
//             inset: 0,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           })}
//         >
//           <div
//             className={css({
//               width: '1px',
//               height: '8',
//               bg: 'white',
//               animation: 'caret-blink 1.2s ease-out infinite',
//             })}
//           />
//         </div>
//       )}
//     </div>
//   )
// }
// InputOTPSlot.displayName = 'InputOTP.Slot'

// compose the InputOTP object
export default {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
}
