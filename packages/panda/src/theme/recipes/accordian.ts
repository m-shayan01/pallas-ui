import { defineSlotRecipe } from '@pandacss/dev'

export const accordian = defineSlotRecipe({
  className: 'accordian',
  description: 'Styles for the Accordian component',
  slots: ['root', 'item', 'itemTrigger', 'itemHeader', 'itemContent'],
  base: {
    root: {
      width: 'full',
      borderRadius: '{radii.md}',
      borderWidth: '1px',
      borderColor: '{colors.border}',
    },
    item: {
      borderBottomWidth: '1px',
      borderColor: '{colors.border}',
      overflow: 'hidden',
      _open: {
        bg: '{colors.bg.container}',
      },
      _first: {
        marginTop: '0',
        roundedTop: { base: '{radii.md}', lg: '{radii.xl}' },
      },
      _last: {
        roundedBottom: { base: '{radii.md}', lg: '{radii.xl}' },
      },
    },
    itemTrigger: {
      display: 'flex',
      _open: {
        transform: 'rotate(-180deg)',
      },
    },
    itemHeader: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      gap: '{spacing.gap.component.md}',
      justifyContent: 'space-between',
      textStyle: {
        base: 'lg',
        lg: 'xl',
      },
      bg: '{colors.fill.disabled}',
      fontWeight: 'semibold',
      px: '{spacing.padding.inline.lg}',
      py: '{spacing.padding.block.md}',
    },
    itemContent: {
      overflow: 'hidden',
      color: '{colors.text}',
      px: '{spacing.padding.inline.lg}',
      py: '{spacing.padding.block.lg}',
      textStyle: 'md',
    },
  },
})
