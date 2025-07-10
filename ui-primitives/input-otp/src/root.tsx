import { OTPInput, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = Omit<OTPInputProps, 'size'> & {
  dataStatus?: 'error' | 'success' | 'none' | 'warning'
  children: React.ReactNode
}
export const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPProps>(
  (
    {
      maxLength = 6,
      dataStatus = 'none',
      pattern = REGEXP_ONLY_DIGITS_AND_CHARS,
      placeholder = '-',
      disabled,
      className,
      children,
    },
    ref,
  ) => {
    return (
      <div
        data-slot="input-otp-root"
        data-status={dataStatus}
        data-disabled={disabled}
        className={className}
      >
        <OTPInput
          pattern={pattern}
          maxLength={maxLength}
          ref={ref}
          aria-label="Enter OTP code"
          disabled={disabled}
          placeholder={placeholder}
        >
          {children}
        </OTPInput>
      </div>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'
