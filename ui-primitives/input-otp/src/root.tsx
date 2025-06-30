import { OTPInput, OTPInputContext } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = OTPInputProps & {
  length?: number
  dataStatus?: 'error' | 'success' | 'warning'
  children: React.ReactNode
}

export const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ length = 6, children }, ref) => {
    return (
      <div>
        <OTPInput maxLength={length} ref={ref}>
          {children}
          {/* <p>Root</p> */}
        </OTPInput>
      </div>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'

export const Root = InputOTPRoot
