import { defineAnimationStyles } from '@pandacss/dev'

export const animationStyles = defineAnimationStyles({
  slideIn: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-right, fade-in',

      '&[data-placement^=top]': {
        animationName: 'slide-in-top, fade-in',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slide-in-bottom, fade-in',
      },
      '&[data-placement^=left]': {
        animationName: 'slide-in-left, fade-in',
      },
      '&[data-placement^=right]': {
        animationName: 'slide-in-right, fade-in',
      },
    },
  },
  slideOut: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-right, fade-out',

      '&[data-placement^=top]': {
        animationName: 'slide-out-top, fade-out',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slide-out-bottom, fade-out',
      },
      '&[data-placement^=left]': {
        animationName: 'slide-out-left, fade-out',
      },
      '&[data-placement^=right]': {
        animationName: 'slide-out-right, fade-out',
      },
    },
  },
})
