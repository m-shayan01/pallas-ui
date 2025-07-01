import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = OTPInputProps & {
  dataStatus?: 'error' | 'success' | 'warning'
  children: React.ReactNode
}

export const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ maxLength = 6, pattern = REGEXP_ONLY_DIGITS_AND_CHARS, className, children }, ref) => {
    // console.log(className)
    return (
      <OTPInput
        pattern={pattern}
        maxLength={maxLength}
        ref={ref}
        containerClassName={className}
        aria-required="true"
        aria-label="OTP Input field"
      >
        {children}
      </OTPInput>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'
