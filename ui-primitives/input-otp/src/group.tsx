import React from 'react'

export const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className={className} ref={ref} {...props} />,
)

InputOTPGroup.displayName = 'InputOTPGroup'

export const Group = InputOTPGroup
