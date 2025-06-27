import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { css, cx } from '@styled-system/css'
import { type Input_otpVariantProps, input_otp } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import { OTPInput, OTPInputContext, type OTPInputProps } from 'input-otp'
import React, { type ComponentProps } from 'react'

//------IMPLEMENT withProvider and withContext
// see popover.tsx for example

// error states and variants ??? separate context required?
// const OTPStateVariantContext = React.createContext<
//   | ({
//       dataStatus?: 'error' | 'success' | 'warning'
//     } & InputVariantProps)
//   | null
// >(null)

// hook to ensure components are used within InputOTPRoot and return OTPInputContext
const useOTPContext = () => {
  const context = React.useContext(OTPInputContext)
  if (!context) {
    throw new Error('InputOTP subcomponents must be used within an InputOTP component')
  }
  return context
}

type InputOTPProps = React.HTMLAttributes<HTMLDivElement> &
  Input_otpVariantProps & {
    length?: number
    dataStatus?: 'error' | 'success' | 'warning'
    children: React.ReactNode
  }

const InputOTPRoot = React.forwardRef<React.ComponentRef<typeof OTPInput>, InputOTPProps>(
  ({ className, dataStatus, length = 6, children, ...props }, ref) => {
    return (
      // <OTPStateVariantContext.Provider value={{ dataStatus, size, shape }}>
      <OTPInput maxLength={length} data-slot="input-otp" ref={ref}>
        {children}
      </OTPInput>
      // </OTPStateVariantContext.Provider>
    )
  },
)
InputOTPRoot.displayName = 'InputOTPRoot'

export const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    // const { dataStatus } = useContext(OTPStateVariantContext) || {}
    const { group } = input_otp({ styling: 'filled' })
    console.log('ref: ', ref)
    return (
      <div
        data-slot="input-otp-group"
        ref={ref}
        className={cx(group, className)}
        // data-status={dataStatus}
        {...props}
      />
    )
  },
)
InputOTPGroup.displayName = 'InputOTP.Group'

export const InputOTPSlot = ({ index }: { index: number }) => {
  const OTPcontext = useOTPContext()
  const currentSlot = OTPcontext.slots[index] // get specific slot by index

  if (!currentSlot) return null

  const { slot } = input_otp({ styling: 'box' })
  const { char, hasFakeCaret, isActive } = currentSlot

  return (
    <div data-slot="input-otp-slot" data-active={isActive || undefined} className={slot}>
      <div className={css({ opacity: char ? 1 : 0.2 })}>{char ?? currentSlot.placeholderChar}</div>

      {hasFakeCaret && (
        <div
          className={css({
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <div
            className={css({
              width: '1px',
              height: '8',
              bg: 'white',
              animation: 'caret-blink 1.2s ease-out infinite',
            })}
          />
        </div>
      )}
    </div>
  )
}
InputOTPSlot.displayName = 'InputOTP.Slot'

//--------------------------------------------------------

// const { withProvider, withContext } = createStyleContext(input_otp)

// root component
// export const InputOTPRoot = withProvider<React.ComponentRef<typeof OTPInput>, InputOTPProps>(
//   React.forwardRef<
//     React.ComponentRef<typeof OTPInput>,
//     Input_otpVariantProps & {
//       length?: number
//       dataStatus?: 'error' | 'success' | 'warning'
//       children: React.ReactNode
//     }
//   >(({ length = 6, children, ...props }, ref) => {
//     console.log('ref: ', children)
//     return (
//       <OTPInput maxLength={length} ref={ref} {...props}>
//         {children}
//         <p>Root</p>
//       </OTPInput>
//     )
//   }),
//   'root',
// )

// export const InputOTPRoot = withProvider<React.ComponentRef<typeof OTPInput>, InputOTPProps>(
//   React.forwardRef<React.ComponentRef<typeof OTPInput>, InputOTPProps>(
//     ({ className, dataStatus, length = 6, children, }, ref) => {
//       return (
//         // <OTPStateVariantContext.Provider value={{ dataStatus, size, shape }}>
//         <OTPInput maxLength={length} data-slot="input-otp" ref={ref} classn>
//           {children}
//         </OTPInput>
//         // </OTPStateVariantContext.Provider>
//       )
//     },
//   ),
//   'root',
// )

// group and slot components
// export const InputOTPGroup = withContext<React.ComponentRef<'div'>, InputOTPProps>(
//   React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//     ({ className, ...props }, ref) => <div className={className} ref={ref} {...props} />,
//   ),
//   'group',
// )

// export const InputOTPSlot = withContext<
//   React.ComponentRef<'div'>,
//   React.HTMLAttributes<HTMLDivElement> & Input_otpVariantProps & { index: number }
// >(
//   React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { index: number }>(
//     ({ index, className, ...props }, ref) => {
//       const OTPcontext = useOTPContext()
//       const currentSlot = OTPcontext.slots[index]
//       if (!currentSlot) return null
//       const { char, hasFakeCaret, isActive } = currentSlot

//       // console.log('ref: ', ref)

//       return (
//         <div
//           ref={ref}
//           data-slot="input-otp-slot"
//           data-active={isActive || undefined}
//           className={className}
//           {...props}
//         >
//           {/* <p>Slot</p> */}
//           <div style={{ opacity: char ? 1 : 0.2 }}>{char ?? currentSlot.placeholderChar}</div>
//           {hasFakeCaret && (
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <div
//                 style={{
//                   width: 1,
//                   height: 32,
//                   background: 'white',
//                   animation: 'caret-blink 1.2s ease-out infinite',
//                 }}
//               />
//             </div>
//           )}
//         </div>
//       )
//     },
//   ),
//   'slot',
// )

// Compose the InputOTP object
export const InputOTP = Object.assign(InputOTPRoot, {
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
})
