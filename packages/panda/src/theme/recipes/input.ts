import { defineSlotRecipe } from '@pandacss/dev'

export const input = defineSlotRecipe({
  className: 'input',
  description: 'Styles for the Input component',
  slots: ['root', 'prefix', 'postfix', 'field', 'control', 'charCount'],
  base: {
    root: {
      display: 'flex',
      w: 'full',
      px: '{spacing.padding.inline.md}',
      py: '0',
      alignItems: 'center',
      '&:has(input[type=number])': {
        appearance: 'textfield',
      },

      // Base styles
      focusRingOffsetColor: '{colors.fill.secondary}',
      rounded: '{radii.md}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',
      textStyle: 'sm',

      border: '{borders.input.default}',
      _inputHover: {
        border: '{borders.input.hover}',
      },
      _inputFocus: {
        border: '{borders.input.hover}',
        shadow: '{shadows.input.default}',
      },

      // Success state
      _inputSuccess: {
        border: '{borders.input.success}',
      },
      _inputSuccessHover: {
        border: '{borders.input.successHover}',
      },
      _inputSuccessFocus: {
        border: '{borders.input.successHover}',
        shadow: '{shadows.input.success}',
      },

      // Error state
      _inputError: {
        border: '{borders.input.error}',
      },
      _inputErrorHover: {
        border: '{borders.input.errorHover}',
      },
      _inputErrorFocus: {
        border: '{borders.input.errorHover}',
        shadow: '{shadows.input.error}',
      },

      // Warning state
      _inputWarning: {
        border: '{borders.input.warning}',
      },
      _inputWarningHover: {
        border: '{borders.input.warningHover}',
      },
      _inputWarningFocus: {
        border: '{borders.input.warningHover}',
        shadow: '{shadows.input.warning}',
      },

      // Disabled state
      _inputDisabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}',
        border: '{borders.input.disabled}',
      },
    },
    prefix: {
      display: 'flex',
      width: 'max-content',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.text.secondary}',
      textStyle: 'sm',
    },
    postfix: {
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.text.secondary}',
      textStyle: 'sm',
    },
    field: {
      w: 'full',
      h: '98%',
      py: '{spacing.padding.block.md}',
      bg: 'transparent',
      textStyle: 'sm',

      '&[data-char-count]': {
        paddingInlineEnd: '48px',
      },

      _focus: {
        outline: 'none',
        border: 'none',
      },
      _file: {
        border: 'none',
        bg: 'transparent',
        color: '{colors.text.secondary}',
        textStyle: 'sm',
        lineHeight: '1',
        fontWeight: 'semibold',
        marginRight: '{spacing.layout.internal.xs}',
        transform: 'translateY(-2px)',
      },

      _placeholder: {
        color: '{colors.text.tertiary}',
      },
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
      },
      '&::-webkit-autofill, &::-webkit-autofill:focus, &::-webkit-autofill:hover, &::-webkit-autofill:active':
        {
          WebkitBoxShadow: '0 0 0 1000px {colors.fill.secondary} inset !important',
          WebkitTextFillColor: '{colors.text.secondary} !important',
        },

      _disabled: {
        cursor: 'not-allowed',
      },
    },
    charCount: {
      position: 'absolute',
      right: '2',
      top: '50%',
      transform: 'translateY(-50%)',
      textStyle: 'xs',
      color: '{colors.text.tertiary}',
      pointerEvents: 'none',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '6',
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '6',
      height: '3',
      rounded: '{radii.sm}',
      border: '{borders.control}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',
      cursor: 'pointer',
      _hover: {
        bg: '{colors.fill.secondary}',
      },
      _active: {
        bg: '{colors.fill}',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          h: '{sizes.controlHeight.sm}',
          pl: '{spacing.padding.inline.sm}',
          pr: '{spacing.padding.inline.sm}',
          py: '0',
        },
        field: {
          textStyle: 'sm',
          py: '{spacing.padding.block.sm}',
        },
        control: {
          width: '4',
          height: '2',
        },
        prefix: {
          pr: '{spacing.padding.inline.xs}',
        },
        postfix: {
          pl: '{spacing.padding.inline.xs}',
        },
      },
      md: {
        root: {
          h: '{sizes.controlHeight.md}',
          pl: '{spacing.padding.inline.md}',
          pr: '{spacing.padding.inline.md}',
          py: '0',
        },
        field: {
          textStyle: 'sm',
          py: '{spacing.padding.block.md}',
        },
        control: {
          width: '5',
          height: '3',
        },
        prefix: {
          pr: '{spacing.padding.inline.sm}',
        },
        postfix: {
          pl: '{spacing.padding.inline.sm}',
        },
      },
      lg: {
        root: {
          h: '{sizes.controlHeight.lg}',
          pl: '{spacing.padding.inline.lg}',
          pr: '{spacing.padding.inline.lg}',
          py: '0',
        },
        field: {
          textStyle: 'md',
          py: '{spacing.padding.block.lg}',
        },
        control: {
          width: '6',
          height: '4',
        },
        prefix: {
          pr: '{spacing.padding.inline.md}',
        },
        postfix: {
          pl: '{spacing.padding.inline.md}',
        },
      },
    },
    shape: {
      default: {
        root: {
          rounded: '{radii.md}',
        },
      },
      rounded: {
        root: {
          rounded: '{radii.4xl}',
        },
      },
      circle: {
        root: {
          rounded: '{radii.full}',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'default',
  },
})
