import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  description: 'Styles for the Select component',
  slots: [
    'root',
    'group',
    'value',
    'trigger',
    'viewport',
    'content',
    'label',
    'item',
    'itemIndicator',
    'separator',
  ],
  base: {
    trigger: {
      display: 'flex',
      h: '{sizes.controlHeight.md}',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'space-between',
      bg: '{colors.surface.elevated}',
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.md}',
      cursor: 'pointer',
      transition: 'common',
      outline: 'none',

      _focus: {
        outline: 'none',
      },

      _placeholder: {
        color: '{colors.text.secondary}',
      },

      _disabled: {
        '> *': {
          cursor: 'not-allowed',
          color: '{colors.text.disabled} ',
          bg: '{colors.fill.disabled}',
          borderColor: '{colors.border} ',
          _hover: {
            borderColor: '{colors.border} !important',
            color: '{colors.text.disabled} !important',
          },
        },
      },
    },
    viewport: {
      p: '{spacing.padding.block.sm}',

      '&[data-position=popper]': {
        h: 'var(--radix-select-trigger-height)',
        w: 'full',
        minW: 'var(--radix-select-trigger-width)',
      },
    },
    content: {
      position: 'relative',
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      rounded: '{radii.md}',
      border: '{borders.input.defaultSm}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text}',
      shadow: 'md',

      animationStyle: 'slideFadeIn',
      animationDuration: '{durations.normal}',
    },
    label: {
      color: '{colors.text.tertiary}',
      fontSize: 'sm',
      py: '{spacing.padding.block.xs}',
      px: '{spacing.padding.block.sm}',

      fontWeight: 'medium',
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: '{radii.sm}',
      py: '{spacing.padding.block.md}',
      pl: '{spacing.gap.component.lg}',
      pr: '{spacing.gap.inline.sm}',
      outline: 'none',
      transition: 'common',

      _focus: {
        bg: '{colors.primary.bg}',
        color: '{colors.text.primary}',
      },

      ['&[data-disabled]']: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    itemIndicator: {
      position: 'absolute',
      left: '{spacing.padding.inline.xs}',
      display: 'flex',
      h: '{sizes.iconSize.sm}',
      w: '{sizes.iconSize.sm}',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: '{colors.border.secondary}',
    },
  },
  variants: {
    styling: {
      outline: {
        trigger: {
          border: '{borders.input.defaultSm}',
          _hover: {
            border: '{borders.input.hover}',
            color: '{colors.text} ',
          },
          _focus: {
            border: '{borders.input.hover} !important',
            shadow: '{shadows.input.default}',
          },

          '&[data-status=error]': {
            borderColor: '{colors.error.border} !important',
            _hover: {
              borderColor: '{colors.error.borderHover} !important',

              color: '{colors.text} !important',
            },
            _focus: {
              borderColor: '{colors.error.borderHover} !important',
              shadow: '{shadows.input.error}',
            },
          },

          '&[data-status=success]': {
            borderColor: '{colors.success.border} !important',
            _hover: {
              borderColor: '{colors.success.borderHover} !important',
            },
            _focus: {
              borderColor: '{colors.success.borderHover} !important',
              shadow: '{shadows.input.success}',
            },
          },

          '&[data-status=warning]': {
            borderColor: '{colors.warning.border} !important',
            _hover: {
              borderColor: '{colors.warning.borderHover} !important',
            },
            _focus: {
              borderColor: '{colors.warning.borderHover} !important',
              shadow: '{shadows.input.warning}',
            },
          },
        },
      },
      underlined: {
        trigger: {
          borderColor: 'transparent !important',
          position: 'relative',
          _after: {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            h: '{sizes.underlineHeight.default}',
            bg: {
              base: '{colors.border}',
              '[data-status="error"]&': '{colors.error.border}',
              '[data-status="success"]&': '{colors.success.border}',
              '[data-status="warning"]&': '{colors.warning.border}',
            },
          },
          _hover: {
            _after: {
              bg: {
                base: '{colors.primary.hover}',
                '[data-status="error"]&': '{colors.error.hover}',
                '[data-status="success"]&': '{colors.success.hover}',
                '[data-status="warning"]&': '{colors.warning.hover}',
              },
            },
          },
          _focus: {
            _after: {
              h: '{sizes.underlineHeight.active}',
              bg: {
                base: '{colors.primary.hover}',
                '[data-status="error"]&': '{colors.error.hover}',
                '[data-status="success"]&': '{colors.success.hover}',
                '[data-status="warning"]&': '{colors.warning.hover}',
              },
            },
          },
        },
      },
      filled: {
        trigger: {
          bg: '{colors.fill.secondary} !important',
          borderColor: 'transparent !important',

          _hover: {
            bg: '{colors.fill} !important',
            '& span': {
              color: {
                '[data-status="error"]&': '{colors.error.text}',
                ' [data-status="warning"]&': '{colors.warning.text}',
                ' [data-status="success"]&': '{colors.success.text}',
              },
            },
          },
          _focus: {
            bg: '{colors.surface.elevated} !important',
            border: '{borders.input.hover} !important',
          },

          '&[data-status="success"]': {
            bg: '{colors.success.bg} !important',
            _hover: { bg: '{colors.success.bgHover} !important' },
            _focus: { border: '{borders.input.success} !important' },
          },

          '&[data-status="error"]': {
            bg: '{colors.error.bg} !important',
            _hover: { bg: '{colors.error.bgHover} !important' },
            _focus: { border: '{borders.input.error} !important' },
          },

          '&[data-status="warning"]': {
            bg: '{colors.warning.bg} !important',
            _hover: { bg: '{colors.warning.bgHover} !important' },
            _focus: { border: '{borders.input.warning} !important' },
          },
        },
      },
      borderless: {
        trigger: {
          borderColor: 'transparent !important',
          '& span': {
            color: {
              '[data-status="error"]&': '{colors.error.text}',
              ' [data-status="warning"]&': '{colors.warning.text}',
              ' [data-status="success"]&': '{colors.success.text}',
            },
          },
        },
      },
    },
    size: {
      sm: {
        trigger: {
          h: '{sizes.controlHeight.sm}',
          textStyle: 'sm',
          px: '{spacing.padding.inline.sm}',
          py: '{spacing.padding.block.sm}',
          rounded: '{radii.sm}',
        },
        content: {
          '& *': {
            textStyle: 'sm',
          },
        },
      },
      md: {
        trigger: {
          h: '{sizes.controlHeight.md}',
          textStyle: 'md',
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.md}',
          rounded: '{radii.md}',
        },
        content: {
          '& *': {
            textStyle: 'md',
          },
        },
      },
      lg: {
        trigger: {
          h: '{sizes.controlHeight.lg}',
          textStyle: 'lg',
          px: '{spacing.padding.inline.md}',
          py: '{spacing.padding.block.md}',
          rounded: '{radii.lg}',
        },
        content: {
          '& *': {
            textStyle: 'lg',
          },
        },
      },
    },
    radii: {
      sm: {
        trigger: {
          rounded: '{radii.sm}',
        },
      },
      md: {
        trigger: {
          rounded: '{radii.md}',
        },
      },
      lg: {
        trigger: {
          rounded: '{radii.lg}',
        },
      },
      full: {
        trigger: {
          rounded: '{radii.full}',
        },
      },
    },
  },
  defaultVariants: {
    styling: 'outline',
    size: 'md',
  },
})
