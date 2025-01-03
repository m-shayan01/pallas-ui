import { defineAnimationStyles } from '@pandacss/dev'

export const animationStyles = defineAnimationStyles({
  slideIn: {
    value: {
      transformOrigin: 'var(--transform-origin)',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      '&[data-placement^=top]': {
        animationName: 'slide-from-top',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slide-from-bottom',
      },
      '&[data-placement^=left]': {
        animationName: 'slide-from-left',
      },
      '&[data-placement^=right]': {
        animationName: 'slide-from-right',
      },
    },
  },
})
