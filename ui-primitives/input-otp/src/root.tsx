import { OTPInput, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import type { OTPInputProps } from 'input-otp'
import React from 'react'

export type InputOTPProps = Omit<OTPInputProps, 'size'> &
  React.ComponentPropsWithoutRef<'div'> & {
    dataStatus?: 'error' | 'success' | 'none' | 'warning'
    children: React.ReactNode
  }
export const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPProps>(
  (
    {
      maxLength = 6,
      dataStatus = 'none',
      pattern = REGEXP_ONLY_DIGITS_AND_CHARS,
      className,
      disabled,
      children,
    },
    ref,
  ) => {
    return (
      <div
        data-slot="input-otp-root"
        data-status={dataStatus}
        data-disabled={disabled ? 'true' : undefined}
      >
        <OTPInput
          pattern={pattern}
          maxLength={maxLength}
          ref={ref}
          aria-label="Enter OTP code"
          containerClassName={className}
          disabled={disabled}
        >
          {children}
        </OTPInput>
      </div>
    )
  },
)

InputOTPRoot.displayName = 'InputOTPRoot'
