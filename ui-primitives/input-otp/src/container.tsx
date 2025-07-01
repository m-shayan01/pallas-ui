import React from 'react'

export const InputOTPContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & { errorStatus?: 'true' | 'false' }
>(({ errorStatus = 'false', ...props }, ref) => (
  <div ref={ref} error-status={errorStatus} {...props} />
))

InputOTPContainer.displayName = 'InputOTPContainer'
