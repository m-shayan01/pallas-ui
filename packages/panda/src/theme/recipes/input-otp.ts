import { defineSlotRecipe } from '@pandacss/dev'

export const input_otp = defineSlotRecipe({
  className: 'input-otp',
  description: 'Styles for the Input OTP component',
  slots: ['container', 'root', 'group', 'slot'],
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
        },
      },
      unstyled: {
        slot: {
          border: '1px solid',
          borderColor: 'border',
          position: 'relative',
        },
      },
    },
  },
  defaultVariants: {
    styling: 'box',
  },
  // staticCss: [{ styling: ['*'] }],
})
