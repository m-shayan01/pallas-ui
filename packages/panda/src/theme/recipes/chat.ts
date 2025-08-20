import { defineSlotRecipe } from '@pandacss/dev'

export const chat = defineSlotRecipe({
  className: 'chat',
  description: 'Accessible chat component',
  slots: ['root', 'message', 'avatar', 'bubble', 'time', 'input', 'textarea', 'inputActions'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'gap.component.md',
      p: 'padding.block.lg',
    },
    message: {
      display: 'flex',
      gap: 'gap.inline.sm',
      maxW: 'lg',
    },
    avatar: {
      flexShrink: 0,
      overflow: 'hidden',
    },
    bubble: {
      p: 'padding.block.lg',
      py: 'padding.block.md',
      rounded: 'md',
      color: 'text',
      cursor: 'text',
    },
    time: {
      textStyle: 'xs',
      color: 'text.tertiary',
      ml: 'padding.inline.sm',
    },
    input: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'gap.inline.xs',
      px: 'padding.block.md',
      py: 'padding.block.lg',
      border: '1px solid {colors.border}',
      rounded: 'md',

      _focusWithin: {
        borderColor: 'primary.border',
        shadow: 'sm',
      },
    },
    textarea: {
      w: 'full',
      minH: '40px',
      maxH: '120px',
      resize: 'none',
      border: 'none',
      pl: 'padding.inline.md',
      rounded: 'md',
      textStyle: 'sm',

      _placeholder: {
        color: 'text.tertiary',
      },
      _focus: {
        outline: 'none',
      },
    },
    inputActions: {
      display: 'flex',
      w: 'full',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'gap.inline.xs',
      flexShrink: 0,
    },
  },
  variants: {
    variant: {
      user: {
        message: { flexDirection: 'row-reverse' },
        bubble: { bg: 'primary.bg', color: 'text' },
      },
      assistant: {
        bubble: { bg: 'fill.tertiary', color: 'text' },
      },
    },
    streaming: {
      true: {
        bubble: { ariaBusy: 'true' },
      },
    },
  },
  defaultVariants: {
    variant: 'assistant',
    streaming: false,
  },
})
