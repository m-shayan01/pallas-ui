import type React from 'react'

export const SeparatorPrimitive = ({ ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="input-otp-separator" {...props} />
}
