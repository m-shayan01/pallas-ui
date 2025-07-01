import React from 'react'

export const InputOTPContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => <div ref={ref} {...props} />)

InputOTPContainer.displayName = 'InputOTPContainer'
