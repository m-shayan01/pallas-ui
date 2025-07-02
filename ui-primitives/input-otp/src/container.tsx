import React from 'react'

export const InputOTPContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & { dataStatus?: 'error' | 'success' | 'none' }
>(({ dataStatus = 'none', ...props }, ref) => <div ref={ref} data-status={dataStatus} {...props} />)

InputOTPContainer.displayName = 'InputOTPContainer'
