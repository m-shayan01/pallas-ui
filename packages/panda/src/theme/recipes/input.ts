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
      transition: 'common',
      position: 'relative',

      // Base styles
      focusRingOffsetColor: '{colors.fill.secondary}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text.secondary}',

      // Disabled state
      _inputDisabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}',
        border: '{borders.input.disabled}',
      },

      '&:has(input[type="number"])': {
        pr: '0!',
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
        fontWeight: 'semibold',
        marginRight: '{spacing.layout.internal.xs}',
        transform: 'translateY(-2px)',
      },

      '&[type="file"]': {
        cursor: 'pointer',
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

      '&[disabled]': {
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
      flex: '1',
      color: '{colors.text.secondary}',
      cursor: 'pointer',
      _hover: {
        bg: '{colors.fill.secondary}',
      },
      _active: {
        bg: '{colors.fill}',
      },
      '&[disabled]': {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: {
          bg: 'revert',
        },
      },
      _first: {
        borderTopRightRadius: '{radii.md}',
      },
      _last: {
        borderBottomRightRadius: '{radii.md}',
      },
    },
  },
  variants: {
    styling: {
      outline: {
        root: {
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
        },
      },
      underlined: {
        root: {
          borderBottom: '{borders.input.default}',
          rounded: '0',
          _inputHover: {
            borderBottom: '{borders.input.hover}',
          },
          _inputFocus: {
            borderBottom: '{borders.input.hover}',
          },

          // Success state
          _inputSuccess: {
            borderBottom: '{borders.input.success}',
          },
          _inputSuccessHover: {
            borderBottom: '{borders.input.successHover}',
          },
          _inputSuccessFocus: {
            borderBottom: '{borders.input.successHover}',
          },

          // Error state
          _inputError: {
            borderBottom: '{borders.input.error}',
          },
          _inputErrorHover: {
            borderBottom: '{borders.input.errorHover}',
          },
          _inputErrorFocus: {
            borderBottom: '{borders.input.errorHover}',
          },

          // Warning state
          _inputWarning: {
            borderBottom: '{borders.input.warning}',
          },
          _inputWarningHover: {
            borderBottom: '{borders.input.warningHover}',
          },
          _inputWarningFocus: {
            borderBottom: '{borders.input.warningHover}',
          },
        },
        control: {
          rounded: '0',
        },
      },
      filled: {
        root: {
          bg: '{colors.fill.secondary}',
          border: '{borders.input.default}',
          borderColor: 'transparent',
          _inputHover: {
            bg: '{colors.fill}',
          },
          _inputFocus: {
            bg: '{colors.surface.elevated}!',
            border: '{borders.input.hover}',
          },
          transition: 'common',

          // Success state
          _inputSuccess: {
            bg: '{colors.success.bg}',
          },
          _inputSuccessHover: {
            bg: '{colors.success.bgHover}',
          },
          _inputSuccessFocus: {
            border: '{borders.input.success}',
          },

          // Error state
          _inputError: {
            bg: '{colors.error.bg}',
          },
          _inputErrorHover: {
            bg: '{colors.error.bgHover}',
          },
          _inputErrorFocus: {
            border: '{borders.input.error}',
          },

          // Warning state
          _inputWarning: {
            bg: '{colors.warning.bg}',
          },
          _inputWarningHover: {
            bg: '{colors.warning.bgHover}',
          },
          _inputWarningFocus: {
            border: '{borders.input.warning}',
          },
        },
      },
      borderless: {
        root: {
          color: {
            _inputSuccess: '{colors.success.text}',
            _inputError: '{colors.error.text}',
            _inputWarning: '{colors.warning.text}',
          },
        },
        control: {
          rounded: '0',
        },
      },
    },
    size: {
      sm: {
        root: {
          h: '{sizes.controlHeight.sm}',
          px: '{spacing.padding.inline.sm}',
        },
        field: {
          textStyle: 'sm',
          py: '{spacing.padding.block.sm}',

          _file: {
            textStyle: 'xs',
          },
        },
        control: {
          width: '6',
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
          px: '{spacing.padding.inline.md}',
        },
        field: {
          textStyle: 'md',
          py: '{spacing.padding.block.md}',

          '&[type="file"]': {
            lineHeight: '0',
          },
        },
        control: {
          width: '7',
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
          px: '{spacing.padding.inline.lg}',
        },
        field: {
          textStyle: 'lg',
          py: '{spacing.padding.block.lg}',

          _file: {
            textStyle: 'md',
          },
          '&[type="file"]': {
            lineHeight: '0',
          },
        },
        control: {
          width: '8',
        },
        prefix: {
          pr: '{spacing.padding.inline.md}',
        },
        postfix: {
          pl: '{spacing.padding.inline.md}',
        },
      },
    },
    radii: {
      sm: {
        root: {
          rounded: '{radii.sm}',
        },
        control: {
          _first: {
            borderTopRightRadius: '{radii.sm}',
          },
          _last: {
            borderBottomRightRadius: '{radii.sm}',
          },
        },
      },
      md: {
        root: {
          rounded: '{radii.md}',
        },
      },
      lg: {
        root: {
          rounded: '{radii.lg}',
        },
        _first: {
          borderTopRightRadius: '{radii.lg}',
        },
        _last: {
          borderBottomRightRadius: '{radii.lg}',
        },
      },
      full: {
        root: {
          rounded: '{radii.full}',
        },
        control: {
          _first: {
            borderTopRightRadius: '{radii.full}',
          },
          _last: {
            borderBottomRightRadius: '{radii.full}',
          },
        },
      },
    },
  },
  defaultVariants: {
    styling: 'outline',
    size: 'md',
    radii: 'md',
  },
})
