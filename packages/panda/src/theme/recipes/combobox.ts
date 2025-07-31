import { defineSlotRecipe } from '@pandacss/dev'

export const combobox = defineSlotRecipe({
  className: 'combobox',
  description: 'Styles for the Combobox component',
  slots: ['root', 'trigger', 'content', 'input', 'group', 'item', 'separator', 'itemIndicator'],
  base: {
    root: {},
    trigger: {
      shadow: 'none',
      '[disabled]&': {
        cursor: 'not-allowed',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}!',
        borderColor: '{colors.border}',
        _hover: {
          borderColor: '{colors.border}!',
        },
      },
      _focus: {
        outline: 'none',
      },
      justifyContent: 'start',
      '& span': {
        mr: 'auto',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        _placeholder: {
          color: '{colors.text.secondary}',
        },
      },
      '& svg': {
        color: '{colors.text.tertiary}',
      },
      px: '{spacing.padding.inline.md}!',
      py: '{spacing.padding.block.md}!',
      transition: 'common',
    },
    content: {
      animationStyle: 'slideFadeIn',
    },
    input: {},
    group: {},
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

      ['&[data-disabled="true"]']: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: '{colors.border.secondary}',
    },
    itemIndicator: {
      position: 'absolute',
      left: '{spacing.padding.inline.xs}',
      display: 'flex',
      h: '{sizes.icon.sm}',
      w: '{sizes.icon.sm}',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    styling: {
      outline: {
        trigger: {
          border: '{borders.input.defaultSm}',
          _hover: {
            border: '{borders.input.hover}',
          },
          _focus: {
            border: '{borders.input.hover}!',
            shadow: '{shadows.input.default}',
          },

          '&[data-status=error]': {
            borderColor: '{colors.error.border}!',
            _hover: {
              borderColor: '{colors.error.borderHover}!',
            },
            _focus: {
              borderColor: '{colors.error.borderHover}!',
              shadow: '{shadows.input.error}',
            },
          },

          '&[data-status=success]': {
            borderColor: '{colors.success.border}!',
            _hover: {
              borderColor: '{colors.success.borderHover}!',
            },
            _focus: {
              borderColor: '{colors.success.borderHover}!',
              shadow: '{shadows.input.success}',
            },
          },

          '&[data-status=warning]': {
            borderColor: '{colors.warning.border}!',
            _hover: {
              borderColor: '{colors.warning.borderHover}!',
            },
            _focus: {
              borderColor: '{colors.warning.borderHover}!',
              shadow: '{shadows.input.warning}',
            },
          },
        },
      },
      underlined: {
        trigger: {
          borderColor: 'transparent!',
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
          bg: '{colors.fill.secondary}!',
          borderColor: 'transparent!',

          _hover: {
            bg: '{colors.fill}!',
            '& span': {
              color: {
                '[data-status="error"]&': '{colors.error.text}',
                ' [data-status="warning"]&': '{colors.warning.text}',
                ' [data-status="success"]&': '{colors.success.text}',
              },
            },
          },
          _focus: {
            bg: '{colors.surface.elevated}!',
            border: '{borders.input.hover}!',
          },

          '&[data-status="success"]': {
            bg: '{colors.success.bg}!',
            _hover: { bg: '{colors.success.bgHover}!' },
            _focus: { border: '{borders.input.success}!' },
          },

          '&[data-status="error"]': {
            bg: '{colors.error.bg} !',
            _hover: { bg: '{colors.error.bgHover}!' },
            _focus: { border: '{borders.input.error}!' },
          },

          '&[data-status="warning"]': {
            bg: '{colors.warning.bg}!',
            _hover: { bg: '{colors.warning.bgHover}!' },
            _focus: { border: '{borders.input.warning}!' },
          },
        },
      },
      borderless: {
        trigger: {
          borderColor: 'transparent!',
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
          minH: '{sizes.controlHeight.sm}',
          maxH: '{sizes.controlHeight.sm}',
          '& *': {
            textStyle: 'sm',
          },
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
          minH: '{sizes.controlHeight.md}',
          maxH: '{sizes.controlHeight.md}',
          '& *': {
            textStyle: 'md',
          },
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
          minH: '{sizes.controlHeight.lg}',
          maxH: '{sizes.controlHeight.lg}',
          '& *': {
            textStyle: 'lg',
          },
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
  staticCss: [{ size: ['*'] }],
})
