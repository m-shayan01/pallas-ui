import { defineSlotRecipe } from '@pandacss/dev'

export const segmented = defineSlotRecipe({
  className: 'segmented',
  description: 'Styles for the Segmented component',
  slots: ['root', 'option', 'text'],
  base: {
    root: {
      width: 'fit-content',
      backgroundColor: '{colors.border.secondary}',
      display: 'flex',
    },
    option: {
      color: '{colors.text.secondary}',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      _hover: {
        cursor: 'pointer',
        '&:not([data-disabled], [data-selected])': {
          backgroundColor: '{colors.border}',
        },
      },
      _selected: {
        color: '{colors.text}',
        backgroundColor: '{colors.surface.elevated}',
      },
      _disabled: {
        color: '{colors.text.disabled}',
        _hover: {
          cursor: 'not-allowed',
        },
      },
    },
    text: {
      overflow: 'hidden',
      textAlign: 'center',
      textWrap: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  variants: {
    orientation: {
      horizontal: {
        root: {
          flexDirection: 'row',
        },
      },
      vertical: {
        root: {
          flexDirection: 'column',
        },
      },
    },
    size: {
      sm: {
        root: {
          borderRadius: '{radii.sm}',
          padding: '{spacing.0.5}',
        },
        option: {
          gap: '{spacing.1}',
          textStyle: '{xs}',
          borderRadius: 'calc({radii.sm} - {spacing.0.5})',
          paddingInline: '{spacing.padding.inline.sm}',
          paddingBlock: '{spacing.padding.block.sm}',
        },
      },
      md: {
        root: {
          borderRadius: '{radii.md}',
          padding: 'calc({spacing.1} * 0.75)',
        },
        option: {
          gap: '{spacing.2}',
          textStyle: '{sm}',
          borderRadius: 'calc({radii.md} - {spacing.1} * 0.75)',
          paddingInline: '{spacing.padding.inline.md}',
          paddingBlock: '{spacing.padding.block.sm}',
        },
      },
      lg: {
        root: {
          borderRadius: '{radii.lg}',
          padding: '{spacing.1}',
        },
        option: {
          gap: '{spacing.3}',
          textStyle: '{md}',
          borderRadius: 'calc({radii.lg} - {spacing.1})',
          paddingInline: '{spacing.padding.inline.lg}',
          paddingBlock: '{spacing.padding.block.md}',
        },
      },
    },
    block: {
      true: {
        root: {
          width: '100%',
        },
        option: {
          flex: 1,
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
  },
})
