import { defineSlotRecipe } from '@pandacss/dev'

export const inputOTP = defineSlotRecipe({
  className: 'inputOTP',
  description: 'Styles for the Input OTP component',
  slots: ['root', 'group', 'slot', 'separator'],
  base: {
    root: {
      '[data-disabled="true"] &': {
        '& input[data-input-otp="true"]': {
          cursor: 'not-allowed',
        },
      },
    },
    group: {
      display: 'flex',
      gap: '2',
      '& [data-slot="input-otp-separator"]': {
        px: '{spacing.padding.block.sm}',
        py: '{spacing.padding.block.sm}',
      },
    },
    slot: {
      px: '{spacing.padding.block.md}',
      py: '{spacing.padding.block.md}',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',

      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',

      border: '.8px solid {colors.border}',

      _active: {
        borderColor: '{colors.primary.hover}',
        shadow: '0 0 0 2px {colors.primary.bgHover}',
      },

      '& [data-slot="input-otp-placeholder"]': {
        opacity: 0.2,
      },

      '& [data-slot="input-otp-caret"]': {
        animationStyle: 'caretBlink',
        fontSize: 'xl',
      },

      '[data-disabled="true"] &': {
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled} !important',
        borderColor: '{colors.border.secondary}',
      },
    },
  },
  variants: {
    styling: {
      box: {
        slot: {
          '[data-status="error"] &': {
            borderColor: '{colors.error.border}',
            _active: {
              borderColor: '{colors.error.borderHover}',
              shadow: '0 0 0 2px {colors.error.bgHover}',
            },
          },
          '[data-status="warning"] &': {
            borderColor: '{colors.warning.border}',
            _active: {
              borderColor: '{colors.warning.borderHover}',
              shadow: '0 0 0 2px {colors.warning.bgHover}',
            },
          },
          '[data-status="success"] &': {
            borderColor: '{colors.success.border}',
            _active: {
              borderColor: '{colors.success.borderHover}',
              shadow: '0 0 0 2px {colors.success.bgHover}',
            },
          },
        },
      },
      underlined: {
        group: {
          gap: '0',
        },
        slot: {
          border: 'none',
          borderRadius: 'unset !important',
          borderBottom: '1px solid',
          borderColor: '{colors.border}',

          _active: {
            shadow: 'none',
            borderBottom: '2px solid {colors.primary.hover}',
          },

          '[data-status="error"] &': {
            borderColor: '{colors.error.border}',
            _active: {
              borderColor: '{colors.error.borderHover}',
            },
          },
          '[data-status="warning"] &': {
            borderColor: '{colors.warning.border}',
            _active: {
              borderColor: '{colors.warning.borderHover}',
            },
          },
          '[data-status="success"] &': {
            borderColor: '{colors.success.border}',
            _active: {
              borderColor: '{colors.success.borderHover}',
            },
          },
        },
      },
      filled: {
        slot: {
          rounded: 'md',
          bg: '{colors.fill.secondary}',
          border: 'none',

          _active: {
            bg: '{colors.surface.elevated}',
            border: '.8px solid {colors.primary.hover}',
            shadow: 'none',
          },

          '[data-status="error"] &': {
            bg: '{colors.error.bg}',
            _active: {
              borderColor: '{colors.error.borderHover}',
            },
          },
          '[data-status="warning"] &': {
            bg: '{colors.warning.bg}',
            _active: {
              borderColor: '{colors.warning.borderHover}',
            },
          },
          '[data-status="success"] &': {
            bg: '{colors.success.bg}',
            _active: {
              borderColor: '{colors.success.borderHover}',
            },
          },
        },
      },
      borderless: {
        slot: {
          border: 'none',

          _active: {
            border: 'none',
            shadow: 'unset',
          },
        },
      },
    },
    size: {
      sm: {
        slot: {
          w: '{sizes.controlHeight.sm}',
          h: '{sizes.controlHeight.sm}',
          textStyle: 'sm',
        },
      },
      md: {
        slot: {
          w: '{sizes.controlHeight.md}',
          h: '{sizes.controlHeight.md}',
          textStyle: 'md',
        },
      },
      lg: {
        slot: {
          w: '{sizes.controlHeight.lg}',
          h: '{sizes.controlHeight.lg}',
          textStyle: 'lg',
        },
      },
    },
    shape: {
      default: {
        slot: {
          borderRadius: '{radii.md}',
        },
      },
      rounded: {
        slot: {
          borderRadius: '{radii.full}',
        },
      },
    },
  },
  defaultVariants: {
    styling: 'box',
    size: 'md',
    shape: 'default',
  },
})
