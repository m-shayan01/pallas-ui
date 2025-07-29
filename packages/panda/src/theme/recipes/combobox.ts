import { defineSlotRecipe } from '@pandacss/dev'

export const combobox = defineSlotRecipe({
  className: 'combobox',
  description: 'Styles for the Combobox component',
  slots: ['root', 'trigger', 'content', 'input', 'group', 'item', 'separator', 'itemIndicator'],
  base: {
    root: {},
    trigger: {
      shadow: 'none',
      _disabled: {
        cursor: 'not-allowed',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}',
        borderColor: '{colors.border}',
        _hover: {
          borderColor: '{colors.border} !important',
        },
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
    },
    content: {},
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
      textStyle: 'sm',
      outline: '2px solid transparent',

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
            color: '{colors.text} !important',
          },
          _focus: {
            border: '{borders.input.hover} !important',
            shadow: '{shadows.input.default}',
            outline: '0.8px solid {colors.primary.bgHover}',
            outlineOffset: '2px',
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
              outline: '0.8px solid {colors.error.bgHover}',
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
              outline: '0.8px solid {colors.success.bgHover}',
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
              outline: '0.8px solid {colors.warning.bgHover}',
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
            outline: '0.8px solid transparent',
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
            outline: '0.8px solid transparent',
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
          minH: '{sizes.controlHeight.sm}',
          maxH: '{sizes.controlHeight.sm}',
          '& *': {
            textStyle: 'sm',
          },
          px: '{spacing.padding.inline.sm} !important',
          py: '{spacing.padding.block.sm} !important',
        },
        item: {
          py: '{spacing.padding.block.sm}',
        },
      },
      md: {
        trigger: {
          minH: '{sizes.controlHeight.md}',
          maxH: '{sizes.controlHeight.md}',
          '& *': {
            textStyle: 'sm',
          },
          px: '{spacing.padding.inline.md} !important',
          py: '{spacing.padding.block.md} !important',
        },
      },
      lg: {
        trigger: {
          minH: '{sizes.controlHeight.lg}',
          maxH: '{sizes.controlHeight.lg}',
          '& *': {
            textStyle: 'md',
          },
          px: '{spacing.padding.inline.md} !important',
          py: '{spacing.padding.block.md} !important',
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
