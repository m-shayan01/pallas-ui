import { defineAnimationStyles } from '@pandacss/dev'
import type { Theme } from '@pandacss/types'

export const animationStyles: Theme['animationStyles'] = defineAnimationStyles({
  slideInRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-right, fade-in',
    },
  },
  slideInLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-left, fade-in',
    },
  },
  slideOutRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-right, fade-out',
    },
  },
  slideOutLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-left, fade-out',
    },
  },
  carousel: {
    slideInLeft: {
      value: {
        transformOrigin: 'center',
        animationDuration: '{durations.slowest}',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationName: 'slide-in-left',
      },
    },
    slideInRight: {
      value: {
        transformOrigin: 'center',
        animationDuration: '{durations.slowest}',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationName: 'slide-in-right',
      },
    },
  },
})
