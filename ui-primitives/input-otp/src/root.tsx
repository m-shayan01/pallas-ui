import { OTPInput, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export const InputOTPRoot = React.forwardRef<HTMLInputElement, OTPInputProps>(
  ({ maxLength = 6, pattern = REGEXP_ONLY_DIGITS_AND_CHARS, className, children }, ref) => {
    return (
      <OTPInput
        pattern={pattern}
        maxLength={maxLength}
        ref={ref}
        aria-label="Enter OTP code"
        containerClassName={className}
      >
        {children}
      </OTPInput>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'
