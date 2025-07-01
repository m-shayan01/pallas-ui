import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = OTPInputProps & {
  regexPattern?: string
  maxLength?: number
  dataStatus?: 'error' | 'success' | 'warning'
  children: React.ReactNode
}

export const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ maxLength = 6, regexPattern = REGEXP_ONLY_DIGITS, className, children }, ref) => {
    // console.log(className)
    return (
      <OTPInput
        pattern={regexPattern}
        maxLength={maxLength}
        ref={ref}
        containerClassName={className}
      >
        {children}
      </OTPInput>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'
