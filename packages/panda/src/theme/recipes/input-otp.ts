import { defineSlotRecipe } from '@pandacss/dev'

export const inputOTP = defineSlotRecipe({
  className: 'inputOTP',
  description: 'Styles for the Input OTP component',
  slots: ['root', 'group', 'slot', 'separator'],
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
      position: 'relative',

      '&[data-active]': {
        zIndex: 1,
      },

      '[data-status="error"] &': {
        color: 'error.text',
      },

      '[data-status="success"] &': {
        color: 'success.text',
      },

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

          '&[data-active]': {
            outline: '2px solid',
          },

          '[data-status="error"] &': {
            borderColor: 'error',
            outlineColor: 'error',
          },

          '[data-status="success"] &': {
            borderColor: 'success',
            outlineColor: 'success',
          },
        },
      },
      underlined: {
        group: {},
        slot: {
          borderBottom: '2px solid',
          borderColor: 'border',

          '&[data-active]': {
            borderBottom: '3px solid',
          },

          '[data-status="error"] &': {
            borderColor: 'error',
            outlineColor: 'error',
          },

          '[data-status="success"] &': {
            borderColor: 'success',
            outlineColor: 'success',
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
          },

          '[data-status="error"] &': {
            bg: 'error.bg',
            outlineColor: 'error.border',
          },

          '[data-status="success"] &': {
            bg: 'success.bg',
            outlineColor: 'success',
          },
        },
        separator: {
          marginX: '1',
        },
      },
    },
  },
})
