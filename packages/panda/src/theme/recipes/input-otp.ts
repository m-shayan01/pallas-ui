import { defineSlotRecipe } from '@pandacss/dev'

export const inputOTP = defineSlotRecipe({
  className: 'inputOTP',
  description: 'Styles for the Input OTP component',
  slots: ['container', 'root', 'group', 'slot', 'separator'],
  base: {
    group: {
      display: 'flex',
    },
    slot: {
      width: '10',
      height: '10',
      fontSize: 'lg',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& [data-slot="input-otp-char"]': {
        opacity: 1,
      },
      '& [data-slot="input-otp-placeholder"]': {
        opacity: 0.2,
      },
      '& [data-slot="input-otp-caret"]': {
        animationStyle: 'caretBlink',
        fontSize: 'xl',
      },
    },
    separator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3',
      height: '1',
      marginTop: '4.5',
      marginX: '2',
      rounded: 'full',
      bg: 'border',
    },
  },
  variants: {
    styling: {
      box: {
        group: {
          gap: '1',
        },
        slot: {
          border: '1px solid',
          borderColor: 'border',
          position: 'relative',
          '&[data-active]': {
            outline: '2px solid',
            outlineColor: 'accent',
            zIndex: 1,
          },
          '[data-status="error"] &': {
            borderColor: 'error',
            outlineColor: 'error',
            color: 'error.text',
          },
          '[data-status="success"] &': {
            borderColor: 'success',
            outlineColor: 'success',
            color: 'success.text',
          },
        },
      },
      underlined: {
        group: {},
        slot: {
          borderBottom: '1px solid',
          borderColor: 'border',
          position: 'relative',
          '&[data-active]': {
            borderBottom: '2px solid',
            outlineColor: 'accent',
            zIndex: 1,
          },
          '[data-status="error"] &': {
            borderColor: 'error',
            outlineColor: 'error',
            color: 'error.text',
          },
          '[data-status="success"] &': {
            borderColor: 'success',
            outlineColor: 'success',
            color: 'success.text',
          },
        },
      },
      filled: {
        group: {
          gap: '2',
        },
        slot: {
          rounded: 'md',
          bg: 'primary.bg',
          '&[data-active]': {
            bg: 'primary.border',
            outline: '5px solid',
            outlineColor: 'primary.bg',
            outlineOffset: '0',
            zIndex: 1,
          },
          '[data-status="error"] &': {
            bg: 'error.bg',
            outlineColor: 'error.border',
            color: 'error.text',
          },
          '[data-status="success"] &': {
            bg: 'success.bg',
            outlineColor: 'success.border',
            color: 'success.text',
          },
        },
        separator: {
          marginX: '1',
        },
      },
      unstyled: {
        slot: {
          position: 'relative',
          '[data-status="error"] &': {
            color: 'error.text',
          },
          '[data-status="success"] &': {
            color: 'success.text',
          },
        },
      },
    },
  },
  defaultVariants: {
    styling: 'box',
  },
})
