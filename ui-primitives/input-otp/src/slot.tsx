import { OTPInputContext } from 'input-otp'
import React from 'react'

const useOTPContext = () => {
  const context = React.useContext(OTPInputContext)
  if (!context) {
    throw new Error('InputOTP subcomponents must be used within an InputOTP component')
  }
  return context
}

export const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const OTPcontext = useOTPContext()
  const currentSlot = OTPcontext.slots[index]
  if (!currentSlot) return null
  const { char, hasFakeCaret, isActive } = currentSlot
  
  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      data-active={isActive || undefined}
      className={className}
      {...props}
    >
      {/* <p>Slot</p> */}
      <div style={{ opacity: char ? 1 : 0.2 }}>{char ?? currentSlot.placeholderChar}</div>
      {hasFakeCaret && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 1,
              height: 32,
              background: 'white',
              animation: 'caret-blink 1.2s ease-out infinite',
            }}
          />
        </div>
      )}
    </div>
  )
})

InputOTPSlot.displayName = 'InputOTPSlot'
