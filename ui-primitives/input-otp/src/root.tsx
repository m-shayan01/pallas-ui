import { OTPInput, OTPInputContext } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = OTPInputProps & {
  maxLength?: number
  dataStatus?: 'error' | 'success' | 'warning'
  children: React.ReactNode
}

export const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ maxLength = 6, children }, ref) => {
    return (
        <OTPInput maxLength={maxLength} ref={ref}>
          {children}
          {/* <p>Root</p> */}
        </OTPInput>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'

