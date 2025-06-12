import { defineSlotRecipe } from '@pandacss/dev'

export const command = defineSlotRecipe({
  className: 'command',
  description: 'Styles for the Command component',
  slots: [
    'root',
    'dialog',
    'input',
    'list',
    'empty',
    'group',
    'item',
    'itemIndicator',
    'separator',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      bg: '{colors.surface.elevated}',
      rounded: '{radii.lg}',
      border: 'solid',
      borderWidth: '1px',
      borderColor: '{colors.border}',
      shadow: 'md',
      animationStyle: 'slideFadeIn',
      animationDuration: '{durations.normal}',
      "& [data-slot='command-input-wrapper']": {
        px: '{spacing.padding.inline.sm}',
        py: '{spacing.padding.inline.xs}',
        gap: '{spacing.gap.inline.xs}',
        borderBottom: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '{colors.fill}',
        alignItems: 'center',
      },
    },
    dialog: {},
    input: {
      w: 'full',
      outline: 'none',
      bg: 'transparent',
      rounded: '{radii.md}',
      p: '{spacing.padding.block.xs}',
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      color: '{colors.text}',
      fontSize: '{fontSizes.sm}',
    },
    list: {
      '& [data-selected=true]': {
        bg: '{colors.primary.bg}',
      },
      '& [data-disabled=true]': {
        pointerEvents: 'none',
        opacity: 0.5,
      },
      overflowX: 'hidden',
      overflowY: 'auto',
      maxH: '[300px]',
      color: '{colors.text}',
      outline: 'none',
    },
    empty: {
      p: 4,
      fontSize: '{fontSizes.md}',
    },
    group: {
      '& [cmdk-group-heading]': {
        color: '{colors.text.tertiary}',
        fontSize: 'sm',
        px: 1,
        py: 0.5,
        fontWeight: 'medium',
      },
      p: '{spacing.padding.block.sm}',
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      alignItems: 'center',
      gap: 2,
      rounded: '{radii.md}',
      py: '{spacing.padding.block.md}',
      pl: '{spacing.gap.component.lg}',
      pr: '{spacing.padding.inline.sm}',
      fontSize: '{fontSizes.sm}',
      outline: 'hidden',
      userSelect: 'none',
    },
    separator: {
      h: '1px',
      bg: '{colors.fill}',
      my: '{spacing.1}',
    },
    itemIndicator: {
      position: 'absolute',
      left: '{spacing.padding.inline.xs}',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    type: {
      flat: {
        root: {
          h: 'full',
          w: 'full',
        },
        itemIndicator: {
          h: '{sizes.icon.sm}',
          w: '{sizes.icon.sm}',
        },
      },
      floating: {
        root: {
          "& [data-slot='command-input-icon']": {
            ml: '{spacing.padding.inline.xs}',
          },
          '& [cmdk-input]': {
            height: '{sizes.12}',
          },
          "& [data-slot='command-input-wrapper']": {
            height: '{sizes.12}',
          },
          "& [data-slot='command-dialog-close']:is(:hover, [data-hover])": {
            borderColor: '{colors.primary.hover}',
            opacity: 1,
            cursor: 'pointer',
          },
          "& [data-slot='command-dialog-close']": {
            base: {
              top: '{spacing.padding.inline.md}',
              right: '{spacing.padding.block.lg}',
              fontSize: '{fontSizes.xs}',
              color: '{colors.text}',
              position: 'absolute',
              rounded: '{radii.xs}',
              flexShrink: 0,
              opacity: 0.5,
              border: '1px solid transparent !important',
              px: '{spacing.padding.inline.xs} !important',
              py: '0 !important',
              h: '{sizes.selectionControl.lg} !important',
            },
            _focus: {
              borderColor: '{colors.primary.hover} !important',
              outline: '1px solid {colors.primary.bgHover}',
            },
            _disabled: {
              pointerEvents: 'none',
            },
            _open: {
              bg: '{colors.bgSolid}',
            },
          },
        },
        group: {
          '& [cmdk-group-heading]': {
            color: '{colors.text.tertiary}',
            px: '{spacing.padding.inline.sm}',
            fontWeight: 'medium',
            p: '{spacing.padding.inline.sm}',
          },
        },
        list: {
          '& [cmdk-group]:not([hidden]) ~ [cmdk-group]': {
            pt: 0,
          },
        },
        item: {
          py: '{spacing.padding.inline.md}',
          pl: '{spacing.layout.section.lg}',
          pr: '{spacing.padding.block.md}',
        },
        itemIndicator: {
          left: '{spacing.padding.inline.sm}',
        },
      },
    },
  },
  defaultVariants: {
    type: 'flat',
  },
  staticCss: [{ type: ['*'] }],
})
