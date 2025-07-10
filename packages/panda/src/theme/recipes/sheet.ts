import { defineSlotRecipe } from '@pandacss/dev'

export const sheet = defineSlotRecipe({
  className: 'sheet',
  description: 'Styles for the Sheet component',
  slots: [
    'root',
    'nestedRoot',
    'overlay',
    'trigger',
    'content',
    'handle',
    'title',
    'description',
    'close',
    'header',
    'footer',
  ],
  base: {
    overlay: {
      position: 'fixed',
      inset: '0',
      zIndex: '50',
      backgroundColor: '{colors.fill}',
    },
    content: {
      position: 'fixed',
      insetX: '0',
      bottom: '0',
      zIndex: '500',
      marginTop: '6rem',
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      borderRadius: '10px 10px 0 0',
      borderWidth: '1px',
      borderColor: '{colors.border}',
      backgroundColor: '{colors.surface.elevated}',
      scrollbarColor: '{colors.border} {colors.surface.container}',
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: '{colors.surface.container}',
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '{colors.border}',
        borderRadius: '4px',
        '&:hover': {
          background: '{colors.border.secondary}',
        },
      },
      '&::-webkit-scrollbar-corner': {
        background: '{colors.surface.container}',
      },
    },
    handle: {
      marginX: 'auto',
      marginY: '{spacing.padding.block.md}',
      width: 'max(5%, 32px)!',
      backgroundColor: '{colors.border}!',
      cursor: 'pointer',
    },
    close: {},
    title: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      lineHeight: 'none',
      letterSpacing: 'tight',
    },
    description: {
      fontSize: 'sm',
      color: '{colors.text.secondary}',
    },
    header: {
      display: 'grid',
      gap: '1.5',
      padding: '{spacing.padding.block.md} {spacing.padding.inline.md}',
      textAlign: { base: 'center', sm: 'left' },
    },
    footer: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: { base: 'center', sm: 'flex-end' },
      gap: '{spacing.gap.inline.xs}',
      padding: '{spacing.padding.block.lg} {spacing.padding.inline.md}',
    },
  },
  variants: {
    variant: {
      snap: {
        content: {
          left: 0,
          right: 0,
          h: 'full',
        },
      },
      scrollable: {
        content: {
          h: 'full',
        },
      },
    },
  },
})
