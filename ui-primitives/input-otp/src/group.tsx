import React from 'react'

export const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({...props }, ref) => <div data-group="input-otp-group" ref={ref} {...props} />,
)

InputOTPGroup.displayName = 'InputOTPGroup'
